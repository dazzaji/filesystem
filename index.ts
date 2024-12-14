#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs/promises";
import path from "path";
import os from "os";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { createTwoFilesPatch } from "diff";
import { minimatch } from "minimatch";

// Enhanced Directory Listing Schema with recursive option
const ListDirectoryArgsSchema = z.object({
  path: z.string(),
  recursive: z.boolean().optional().default(false),
});

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: mcp-server-filesystem <allowed-directory> [additional-directories...]");
  process.exit(1);
}

function normalizePath(p: string): string {
  return path.normalize(p);
}

function expandHome(filepath: string): string {
  if (filepath === "~" || filepath.startsWith("~/")) {
    return path.join(os.homedir(), filepath.slice(1));
  }
  return filepath;
}

const allowedDirectories = args.map((dir) =>
  normalizePath(path.resolve(expandHome(dir)))
);

// Validate allowed directories
await Promise.all(
  allowedDirectories.map(async (dir) => {
    try {
      const stats = await fs.stat(dir);
      if (!stats.isDirectory()) {
        console.error(`Error: ${dir} is not a directory`);
        process.exit(1);
      }
    } catch (error) {
      console.error(`Error accessing directory ${dir}:`, error);
      process.exit(1);
    }
  }),
);

async function validatePath(requestedPath: string): Promise<string> {
  const expandedPath = expandHome(requestedPath);
  const absolute = path.isAbsolute(expandedPath)
    ? path.resolve(expandedPath)
    : path.resolve(process.cwd(), expandedPath);

  const normalizedRequested = normalizePath(absolute);

  const isAllowed = allowedDirectories.some((dir) =>
    normalizedRequested.startsWith(dir)
  );
  if (!isAllowed) {
    throw new Error(`Access denied - path outside allowed directories: ${absolute}`);
  }

  try {
    const realPath = await fs.realpath(absolute);
    const normalizedReal = normalizePath(realPath);
    const isRealPathAllowed = allowedDirectories.some((dir) =>
      normalizedReal.startsWith(dir)
    );
    if (!isRealPathAllowed) {
      throw new Error("Access denied - symlink target outside allowed directories");
    }
    return realPath;
  } catch (error) {
    const parentDir = path.dirname(absolute);
    try {
      const realParentPath = await fs.realpath(parentDir);
      const normalizedParent = normalizePath(realParentPath);
      const isParentAllowed = allowedDirectories.some((dir) =>
        normalizedParent.startsWith(dir)
      );
      if (!isParentAllowed) {
        throw new Error("Access denied - parent directory outside allowed directories");
      }
      return absolute;
    } catch {
      throw new Error(`Parent directory does not exist: ${parentDir}`);
    }
  }
}

const ReadFileArgsSchema = z.object({ path: z.string() });
const ReadMultipleFilesArgsSchema = z.object({ paths: z.array(z.string()) });
const WriteFileArgsSchema = z.object({ path: z.string(), content: z.string() });

const EditOperation = z.object({
  oldText: z.string().describe("Text to search for - must match exactly"),
  newText: z.string().describe("Text to replace with"),
});
const EditFileArgsSchema = z.object({
  path: z.string(),
  edits: z.array(EditOperation),
  dryRun: z.boolean().default(false),
});

const CreateDirectoryArgsSchema = z.object({ path: z.string() });
const DirectoryTreeArgsSchema = z.object({ path: z.string() });
const MoveFileArgsSchema = z.object({ source: z.string(), destination: z.string() });
const SearchFilesArgsSchema = z.object({
  path: z.string(),
  pattern: z.string(),
  excludePatterns: z.array(z.string()).optional().default([]),
});
const GetFileInfoArgsSchema = z.object({ path: z.string() });

interface FileInfo {
  size: number;
  created: Date;
  modified: Date;
  accessed: Date;
  isDirectory: boolean;
  isFile: boolean;
  permissions: string;
}

const server = new Server(
  { name: "secure-filesystem-server", version: "0.6.2" },
  { capabilities: { tools: {}, resources: {} } }
);

async function getFileStats(filePath: string): Promise<FileInfo> {
  const stats = await fs.stat(filePath);
  return {
    size: stats.size,
    created: stats.birthtime,
    modified: stats.mtime,
    accessed: stats.atime,
    isDirectory: stats.isDirectory(),
    isFile: stats.isFile(),
    permissions: stats.mode.toString(8).slice(-3),
  };
}

function normalizeLineEndings(text: string): string {
  return text.replace(/\r\n/g, "\n");
}

function createUnifiedDiff(
  originalContent: string,
  newContent: string,
  filepath: string = "file"
): string {
  const normalizedOriginal = normalizeLineEndings(originalContent);
  const normalizedNew = normalizeLineEndings(newContent);
  return createTwoFilesPatch(
    filepath,
    filepath,
    normalizedOriginal,
    normalizedNew,
    "original",
    "modified"
  );
}

async function applyFileEdits(
  filePath: string,
  edits: Array<{ oldText: string; newText: string }>,
  dryRun = false
): Promise<string> {
  const content = normalizeLineEndings(await fs.readFile(filePath, "utf-8"));
  let modifiedContent = content;

  for (const edit of edits) {
    const oldText = normalizeLineEndings(edit.oldText);
    const newText = normalizeLineEndings(edit.newText);

    if (modifiedContent.includes(oldText)) {
      modifiedContent = modifiedContent.replace(oldText, newText);
    }
  }

  const diff = createUnifiedDiff(content, modifiedContent, filePath);
  if (!dryRun) {
    await fs.writeFile(filePath, modifiedContent, "utf-8");
  }
  return diff;
}

async function* readDirectoryRecursively(dirPath: string): AsyncGenerator<string> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      yield `[DIR] ${fullPath}`;
      yield* readDirectoryRecursively(fullPath);
    } else {
      yield `[FILE] ${fullPath}`;
    }
  }
}

async function listDirectoryRecursive(dirPath: string): Promise<string[]> {
  const entries: string[] = [];
  for await (const entry of readDirectoryRecursively(dirPath)) {
    entries.push(entry);
  }
  return entries;
}

async function listDirectory(dirPath: string, recursive: boolean): Promise<string[]> {
  if (!recursive) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries.map((entry) =>
      entry.isDirectory() ? `[DIR] ${entry.name}` : `[FILE] ${entry.name}`
    );
  } else {
    return await listDirectoryRecursive(dirPath);
  }
}

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "read_file",
      description:
        "Read the complete contents of a file from the filesystem. Only works within allowed directories.",
      inputSchema: zodToJsonSchema(ReadFileArgsSchema),
    },
    {
      name: "read_multiple_files",
      description:
        "Read contents of multiple files simultaneously. Only works within allowed directories.",
      inputSchema: zodToJsonSchema(ReadMultipleFilesArgsSchema),
    },
    {
      name: "write_file",
      description:
        "Write or overwrite file contents. Only works within allowed directories.",
      inputSchema: zodToJsonSchema(WriteFileArgsSchema),
    },
    {
      name: "edit_file",
      description:
        "Perform line-based edits to a file and return a git-style diff of changes. Only works within allowed directories.",
      inputSchema: zodToJsonSchema(EditFileArgsSchema),
    },
    {
      name: "create_directory",
      description:
        "Create a directory (and parents if needed). Only works within allowed directories.",
      inputSchema: zodToJsonSchema(CreateDirectoryArgsSchema),
    },
    {
      name: "list_directory",
      description:
        "List files and directories in a given path. If recursive=true, lists entire subtree. Only works within allowed directories.",
      inputSchema: zodToJsonSchema(ListDirectoryArgsSchema),
    },
    {
      name: "directory_tree",
      description:
        "Get a recursive listing of all files and directories from a given path. Only works within allowed directories.",
      inputSchema: zodToJsonSchema(DirectoryTreeArgsSchema),
    },
    {
      name: "move_file",
      description:
        "Move or rename a file or directory. Only works within allowed directories.",
      inputSchema: zodToJsonSchema(MoveFileArgsSchema),
    },
    {
      name: "search_files",
      description:
        "Recursively search for files and directories matching a pattern. Not fully implemented. Only works within allowed directories.",
      inputSchema: zodToJsonSchema(SearchFilesArgsSchema),
    },
    {
      name: "get_file_info",
      description:
        "Get metadata about a file or directory. Only works within allowed directories.",
      inputSchema: zodToJsonSchema(GetFileInfoArgsSchema),
    },
    {
      name: "list_allowed_directories",
      description: "List directories that this server can access.",
      inputSchema: { type: "object", properties: {}, required: [] },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    const { name, arguments: args } = request.params;
    switch (name) {
      case "read_file": {
        const parsed = ReadFileArgsSchema.safeParse(args);
        if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
        const validPath = await validatePath(parsed.data.path);
        const content = await fs.readFile(validPath, "utf-8");
        return { content: [{ type: "text", text: content }] };
      }

      case "read_multiple_files": {
        const parsed = ReadMultipleFilesArgsSchema.safeParse(args);
        if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
        const results = await Promise.all(
          parsed.data.paths.map(async (p) => {
            try {
              const vp = await validatePath(p);
              const c = await fs.readFile(vp, "utf-8");
              return `${p}:\n${c}`;
            } catch (err) {
              return `${p}: Error - ${err instanceof Error ? err.message : String(err)}`;
            }
          })
        );
        return { content: [{ type: "text", text: results.join("\n---\n") }] };
      }

      case "write_file": {
        const parsed = WriteFileArgsSchema.safeParse(args);
        if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
        const vp = await validatePath(parsed.data.path);
        await fs.writeFile(vp, parsed.data.content, "utf-8");
        return { content: [{ type: "text", text: `Wrote to ${parsed.data.path}` }] };
      }

      case "edit_file": {
        const parsed = EditFileArgsSchema.safeParse(args);
        if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
        const vp = await validatePath(parsed.data.path);
        const diff = await applyFileEdits(vp, parsed.data.edits, parsed.data.dryRun);
        return { content: [{ type: "text", text: diff }] };
      }

      case "create_directory": {
        const parsed = CreateDirectoryArgsSchema.safeParse(args);
        if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
        const vp = await validatePath(parsed.data.path);
        await fs.mkdir(vp, { recursive: true });
        return { content: [{ type: "text", text: `Created directory ${parsed.data.path}` }] };
      }

      case "list_directory": {
        const parsed = ListDirectoryArgsSchema.safeParse(args);
        if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
        const vp = await validatePath(parsed.data.path);
        const entries = await listDirectory(vp, parsed.data.recursive || false);
        return { content: [{ type: "text", text: entries.join("\n") }] };
      }

      case "directory_tree": {
        const parsed = DirectoryTreeArgsSchema.safeParse(args);
        if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
        const vp = await validatePath(parsed.data.path);
        const entries = await listDirectoryRecursive(vp);
        return { content: [{ type: "text", text: entries.join("\n") }] };
      }

      case "move_file": {
        const parsed = MoveFileArgsSchema.safeParse(args);
        if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
        const src = await validatePath(parsed.data.source);
        const dst = await validatePath(parsed.data.destination);
        await fs.rename(src, dst);
        return { content: [{ type: "text", text: `Moved ${parsed.data.source} to ${parsed.data.destination}` }] };
      }

      case "search_files":
        // Not fully implemented. Could be implemented using glob or minimatch logic.
        return { content: [{ type: "text", text: "Search not implemented." }] };

      case "get_file_info": {
        const parsed = GetFileInfoArgsSchema.safeParse(args);
        if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
        const vp = await validatePath(parsed.data.path);
        const info = await getFileStats(vp);
        const infoText = Object.entries(info)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
        return { content: [{ type: "text", text: infoText }] };
      }

      case "list_allowed_directories":
        return { content: [{ type: "text", text: allowedDirectories.join("\n") }] };

      default:
        return { content: [{ type: "text", text: `Unknown tool: ${name}` }], isError: true };
    }
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
  }
});

async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Secure File System MCP Server running on stdio");
}

runServer().catch((error) => {
  console.error("Fatal error running server:", error);
  process.exit(1);
});