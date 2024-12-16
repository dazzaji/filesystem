> NOTE: This is a feature addition to the original filesystem MCP server.

> NOTE: The MCP Inspector does not (yet) work using the following set up guide, but Claude Desktop as host does work.

# How to Set Up and Run This Project

This is a project to extend the existing Model Context Protocol filesystem server to include **Recursive Directory Listing** (Inspired by git_log):

* Concept: Extend the list_directory tool to optionally list contents recursively.
* Implementation: Add an optional recursive boolean argument. If true, recursively traverse subdirectories.
* Model: Similar to git_log which also takes an optional argument to modify its behaviour.
* Benefits: Allows browsing entire directory trees, not just the top level.

Rationale:

* This approach minimizes risk by building upon existing functionality and avoiding complex external dependencies. It allows for a clear, incremental addition to the server with a well-defined scope and testable outcomes. By focusing on a simple, self-contained feature, we can ensure a successful first step and build confidence before tackling more complex enhancements.

## Project Setup Instructions

### 1. Create Project Directory

If you haven’t already done so, create the project directory and move into it:

```bash
mkdir /Users/dazzagreenwood/filesystem
cd /Users/dazzagreenwood/filesystem
```

### 2. Initialize Node.js Project (if needed)

If you do not already have a `package.json`, you can create one:

```bash
npm init -y
```

### 3. Add Required Files

**`package.json`** (if you already have one, just ensure dependencies are correct):

```json
{
  "name": "mcp-server-filesystem",
  "version": "0.6.2",
  "description": "MCP File System Server",
  "main": "dist/index.js",
  "type": "module",
  "bin": {
    "mcp-server-filesystem": "dist/index.js"
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "test": "node --test test/*.test.js"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^0.6.2",
    "diff": "^5.1.0",
    "minimatch": "^9.1.2",
    "zod": "^3.22.4",
    "zod-to-json-schema": "^3.20.7",
    "fs-promises": "0.1.2"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "typescript": "^5.3.3"
  }
}
```

**`tsconfig.json`**:

```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "./",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

**`index.ts`** (Place this file in `/Users/dazzagreenwood/filesystem/index.ts`):

```typescript
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
```

### 4. Install Dependencies

Make sure you are in the `/Users/dazzagreenwood/filesystem` directory, then run:

```bash
npm install @modelcontextprotocol/sdk zod zod-to-json-schema diff minimatch fs-promises
```

### 5. Build the Project

```bash
npm run build
```

This will create `/Users/dazzagreenwood/filesystem/dist/index.js`.

### 6. Update `claude_desktop_config.json`

Use the absolute path to `node` and your compiled `index.js`. For example:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "/usr/local/bin/node",
      "args": [
        "/Users/dazzagreenwood/filesystem/dist/index.js",
        "/Users/dazzagreenwood/mcp-hello/module1/files"
      ]
    }
  }
}
```

**Note:**  
- Replace `/usr/local/bin/node` with the actual path from `which node` if different.
- Replace `/Users/dazzagreenwood/mcp-hello/module1/files` with a directory you want to allow.

### 7. Test the Setup

- Launch Claude Desktop.
- Use `/list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files"` to test listing.
- Try recursion: `/list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files" recursive: true`.
- Try `/directory_tree path: "/Users/dazzagreenwood/mcp-hello/module1/files"` to see the tree output.

If everything is set up correctly, you should see the desired file and directory listings. If any issue arises, check the terminal output for error messages and confirm that all paths and configurations match your local system.

---

## NOTE: Potential Minor Issues and Omissions:

1. **MCP Inspector Instructions Missing:** The major omission is the lack of guidance on how to test the server using the MCP Inspector.
2. **"search_files" Tool:** The `"search_files"` tool is not implemented and the current message says "Search not implemented. Could be implemented using glob or minimatch logic." - The correct message is simply "Search not implemented." as that is more accurate.
3. **`fs-promises`:** While not an issue, the `fs-promises` package can be removed from dependencies as it's not needed.


# --------------------------------------

# Project Use and Testing Instructions

Here are instructions to incorporate MCP Inspector and Claude Desktop testing.

**Testing with Claude Desktop:**

1.  **Start Claude Desktop:** Ensure Claude Desktop is running.
2.  **Use the `list_directory` tool:** Type the following in the Claude chat:
    ```
    /list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files"
    ```
    This should output the files and directories at the specified path. Note that you must use double quotes around the path.
3.  **Test Recursive Listing:** To test the recursive functionality, use:
    ```
    /list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files" recursive: true
    ```
    This should output the entire directory tree, including subdirectories.
4.  **Test the `directory_tree` tool**: Use the following to see the directory tree output:
    ```
    /directory_tree path: "/Users/dazzagreenwood/mcp-hello/module1/files"
    ```

5. **Test other tools**: You can test other tools like `read_file`, `write_file`, etc. using similar patterns, as long as those files exist in the allowed directories.

**Testing with MCP Inspector:**

1.  **Start the Server:** Open a terminal and run the following command (replace `/Users/dazzagreenwood/mcp-hello/module1/files` with your allowed directory and make sure you use absolute path references to both the allowed directory and the command:

# THE FOLLOWING COMMAND WORKS:

   ```bash
   npx @modelcontextprotocol/inspector uvx node "/Users/dazzagreenwood/filesystem/dist/index.js" "/Users/dazzagreenwood/mcp-hello/module1/files"
   ```

---

NOTE: The next commands are hold-overs and I am not sure about them:
   ```bash
   npx @modelcontextprotocol/inspector uvx /usr/local/bin/node /Users/dazzagreenwood/filesystem/dist/index.js "/Users/dazzagreenwood/mcp-hello/module1/files"
   ```
  *If the executable is in your path you can run the server with*
  ```bash
  npx @modelcontextprotocol/inspector uvx mcp-server-filesystem "/Users/dazzagreenwood/mcp-hello/module1/files"
  ```

----

2.  **Open MCP Inspector:** Open a web browser and go to the URL provided by the MCP Inspector output (usually `http://localhost:9001`).
3.  **Connect:** In the MCP Inspector, click "Connect".
4.  **Go to the "Tools" tab:** You should see the list of tools provided by the server.
5.  **Select the `list_directory` Tool:** Select the `list_directory` tool in the tools list.
6.  **Enter Arguments:** Input JSON for path and optionally recursive. Example JSON inputs:
    *   **Non-recursive:**
        ```json
        {
            "path": "/Users/dazzagreenwood/mcp-hello/module1/files"
        }
        ```
    *   **Recursive:**
        ```json
        {
            "path": "/Users/dazzagreenwood/mcp-hello/module1/files",
            "recursive": true
        }
        ```
7.  **Click "Call Tool":** You should see the tool's output in the "Response" section of the MCP Inspector.
8.  **Select the `directory_tree` Tool:** Select the `directory_tree` tool in the tools list.
9.  **Enter Arguments:** Input JSON for path. Example JSON input:
        ```json
        {
            "path": "/Users/dazzagreenwood/mcp-hello/module1/files"
        }
        ```
10. **Click "Call Tool":** You should see the tool's output in the "Response" section of the MCP Inspector.
11. **Test Other Tools:** You can similarly test other tools using this method.

**Final Recommendations:**

1.  **Implement the Revised Testing Instructions:** Be sure to include the above testing procedures for both Claude Desktop and MCP Inspector when you conduct testing and also when you generate future instructions.
2.  **Fix `search_files` Message:** Change "Search not implemented. Could be implemented using glob or minimatch logic." to "Search not implemented."
3.  **Optional:** You can remove `"fs-promises": "0.1.2"` from the dependencies in `package.json`.
4.  **Review and Test:** Carefully review all files and instructions again, then test the project thoroughly using both Claude Desktop and MCP Inspector.

-----

# DEEPER DIVE INTO THE INSPECTOR - A POWERFUL NEW TOOL

## Testing Your Filesystem Server with the MCP Inspector

Here's a step-by-step guide on how to use the MCP Inspector to validate the functionality of your filesystem server:

### 1. Launch the MCP Inspector

Make sure you've built the server first by running the `npm run build` command in the `filesystem` server folder. Then launch the inspector:

```bash
npx @modelcontextprotocol/inspector uvx node "/Users/dazzagreenwood/filesystem/dist/index.js" "/Users/dazzagreenwood/mcp-hello/module1/files"
```
(Replace the paths with where your files are located)

After a short delay, the inspector will provide a localhost address in your terminal, which usually looks like this: `http://localhost:5173/?proxyPort=3000`.  Open this URL in your browser.

### 2. Connect to the Server

1.  You should see a sidebar with configuration and connection options for the server.
2.  Make sure the settings match the server you want to connect to (especially if you are using custom arguments).
3.  Click the "Connect" button in the left panel.

If the server connects successfully, a green dot appears, and the content area of the Inspector loads, and any server errors show up in the console area in the bottom of the left panel.
If there's a connection error, a red dot appears, along with an error message in the bottom part of the left hand sidebar.

### 3. Explore the Tools Tab

1.  Navigate to the **Tools** tab.
2.  You should see a list of the tools exposed by your filesystem server, namely:
    -   `read_file`
    -   `read_multiple_files`
    -   `write_file`
    -   `edit_file`
    -   `create_directory`
    -   `list_directory`
    -   `directory_tree`
    -   `move_file`
    -   `search_files`
    -   `get_file_info`
    -   `list_allowed_directories`
3.  Select any tool from the list by clicking on it.
4.  You will see a description and input fields below the list.

#### Testing Specific Tools
    -   **read_file:**
        -   In the input field, enter the full path for a file (e.g., `"/Users/dazzagreenwood/mcp-hello/module1/files/test.txt"`) in the path text box, but make sure it's a valid path inside the directory given when starting the server.
        -   Click "Run Tool".
        -   Inspect the output in the "Response" section, where you should see the content of the file.

    -   **write_file:**
        -   In the input field, enter the path where you want to create a file (e.g., `"/Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt"`) and set a content (e.g., `"hello world"`).
        -   Click "Run Tool."
        -   Check your file system to confirm the new file and its content.
    -   **edit_file:**
        -    In the input field, enter the path where you want to edit a file (e.g., `"/Users/dazzagreenwood/mcp-hello/module1/files/test.txt"`).
        -    Add an `edits` JSON list and specify the content to replace
        ```json
            {
              "path": "/Users/dazzagreenwood/mcp-hello/module1/files/test.txt",
              "edits": [
                {
                    "oldText": "test",
                    "newText": "test-edited"
                }
              ],
            "dryRun": false
        }
        ```
        -   Click "Run Tool".
        -   Check your file system to confirm the file and its content has changed.
    -   **list_directory:**
        -   In the input field for `path`, enter an absolute directory path (e.g., `"/Users/dazzagreenwood/mcp-hello/module1/files"`).
        -   Click "Run Tool."
        -   Verify that the "Response" section contains file and directory listings.
        -   Check results when using `"recursive": true`.
    -   **directory_tree:**
        -   In the input field for path, enter an absolute directory path (e.g., `"/Users/dazzagreenwood/mcp-hello/module1/files"`).
        -   Click "Run Tool."
        -   Verify that the "Response" section contains file and directory tree structure as text output.
    - **move_file:**
       - In the input field for source enter an absolute file path (e.g., `"/Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt"`) in "source" field.
       - In the input field for destination enter another absolute file path (e.g., `"/Users/dazzagreenwood/mcp-hello/module1/files/testfile2.txt"`)
        -   Click "Run Tool."
        -   Verify that the file has been moved/renamed and the old file does not exist in its original path.

    -   **get_file_info:**
        - In the input field for path, enter an absolute file path (e.g., `"/Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt"`) or folder path.
        -   Click "Run Tool."
        - Verify that the "Response" section contains the information including size, access time, modified time, type, and permissions of the target file or directory.
     -   **list_allowed_directories:**
        - No input is required.
        - Click "Run Tool."
        - Verify that the "Response" section contains the list of directories specified when the server was started.

### 4. Inspect console output
   * The Console tab is also useful, as it can show any console output from your server.  This can be useful when using `console.log` to log output for debugging.
   * You can also find these console logs in the `~/Library/Logs/Claude/mcp*.log` files.

## Understanding Prompts, Resources, and Sampling

### Prompts

-   **Purpose**: Prompts are a way for servers to provide structured instructions to the LLM through clients.
-   **Inspector**: In the inspector's **Prompts** tab, you can:
    *   List available prompts: Click "List Prompts."
    *   Select a prompt: Choose it from the list.
    *   See a description of the prompt.
    *   Fill in arguments using the UI, and click "Get Prompt" to render the message.

-   **MCP Behavior**: In MCP, prompts are **user-controlled**. They are for the end user to invoke or select within a UI, and to review the content and arguments. They are not for the language model to choose.

### Resources

-   **Purpose**: Resources are a way for servers to expose data to clients and LLMs.
-   **Inspector:** In the inspector's **Resources** tab, you can:
    *   List available resources.
    *   Select a resource to inspect and click "Read Resource" to see content.
    *   List resource templates.

-   **MCP Behavior**: In MCP, resources are **application-controlled**. They are for the host client applications to use in ways it sees fit, and they are not intended to be requested by the LLM directly.

**Why no resources in the Filesystem Server?**

You noted that the `filesystem` server shows no resources in the Inspector, while it does expose tools. This is expected since:

1.  **No Explicit Resources**: The filesystem server only defines operations over files, directories, and metadata. The server itself doesn't define an explicit resource that can be individually browsed. Rather, the list of accessible folders is controlled by the command-line parameters used to start the server.  Also, note that the `list_allowed_directories` tool is present for this purpose, although this is not a resource.
2.  **Dynamic Filesystem Data**: The files and directories are dynamic and do not fit a simple static resource structure, unlike the `memory` server which has a fixed `memo://insights` resource. They are read dynamically using the `read_file` tool, when required.

### Sampling

-   **Purpose**: Sampling allows a server to _request_ the client to perform LLM operations on its behalf. It is important for agents and agentic behaviour.
-   **Inspector**: In the inspector's **Sampling** tab, you can:
    *   Review pending sampling requests made by the server.
    *   Approve or reject each request.
    *   (When a request is approved, the client will make an LLM call)
    *   Review the LLM-provided response.

-   **MCP Behavior**: In MCP, sampling is a **model-controlled** primitive, which allows server processes to request the client to make requests to an LLM. Critically, the user has full control over the execution of the sampling operation, and can choose whether or not to allow the action. This preserves a human-in-the-loop, which is important for security and trust.

**What is Sampling For?**
- To perform an LLM action based on the internal state of a server. For example, if you want the server to auto-create summaries, rewrite content, or take another LLM action without the user being directly involved in issuing a prompt (though they may review it)
- To orchestrate long running processes or make multi-stage decisions.
- To maintain a persistent state within the server over time.


----

# Original Filesystem MCP Server

Node.js server implementing Model Context Protocol (MCP) for filesystem operations.  New phase 1 for MCP Hello.

## Features

- Read/write files
- Create/list/delete directories
- Move files/directories
- Search files
- Get file metadata

**Note**: The server will only allow operations within directories specified via `args`.

## API

### Resources

- `file://system`: File system operations interface

### Tools

- **read_file**
  - Read complete contents of a file
  - Input: `path` (string)
  - Reads complete file contents with UTF-8 encoding

- **read_multiple_files**
  - Read multiple files simultaneously
  - Input: `paths` (string[])
  - Failed reads won't stop the entire operation

- **write_file**
  - Create new file or overwrite existing (exercise caution with this)
  - Inputs:
    - `path` (string): File location
    - `content` (string): File content

- **edit_file**
  - Make selective edits using advanced pattern matching and formatting
  - Features:
    - Line-based and multi-line content matching
    - Whitespace normalization with indentation preservation
    - Fuzzy matching with confidence scoring
    - Multiple simultaneous edits with correct positioning
    - Indentation style detection and preservation
    - Git-style diff output with context
    - Preview changes with dry run mode
    - Failed match debugging with confidence scores
  - Inputs:
    - `path` (string): File to edit
    - `edits` (array): List of edit operations
      - `oldText` (string): Text to search for (can be substring)
      - `newText` (string): Text to replace with
    - `dryRun` (boolean): Preview changes without applying (default: false)
    - `options` (object): Optional formatting settings
      - `preserveIndentation` (boolean): Keep existing indentation (default: true)
      - `normalizeWhitespace` (boolean): Normalize spaces while preserving structure (default: true)
      - `partialMatch` (boolean): Enable fuzzy matching (default: true)
  - Returns detailed diff and match information for dry runs, otherwise applies changes
  - Best Practice: Always use dryRun first to preview changes before applying them

- **create_directory**
  - Create new directory or ensure it exists
  - Input: `path` (string)
  - Creates parent directories if needed
  - Succeeds silently if directory exists

- **list_directory**
  - List directory contents with [FILE] or [DIR] prefixes
  - Input: `path` (string)

- **move_file**
  - Move or rename files and directories
  - Inputs:
    - `source` (string)
    - `destination` (string)
  - Fails if destination exists

- **search_files**
  - Recursively search for files/directories
  - Inputs:
    - `path` (string): Starting directory
    - `pattern` (string): Search pattern
    - `excludePatterns` (string[]): Exclude any patterns. Glob formats are supported.
  - Case-insensitive matching
  - Returns full paths to matches

- **get_file_info**
  - Get detailed file/directory metadata
  - Input: `path` (string)
  - Returns:
    - Size
    - Creation time
    - Modified time
    - Access time
    - Type (file/directory)
    - Permissions

- **list_allowed_directories**
  - List all directories the server is allowed to access
  - No input required
  - Returns:
    - Directories that this server can read/write from

## Usage with Claude Desktop
Add this to your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Desktop",
        "/path/to/other/allowed/dir"
      ]
    }
  }
}
```

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
