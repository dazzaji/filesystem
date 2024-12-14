├── .gitignore
├── HackSeshInfo
    └── 2024-12-14_00-53-39_ChatGPT_ChatGPT....md
├── LICENSE
├── README.md
├── claude_desktop_config.json
├── index.ts
├── package-lock.json
├── package.json
├── recursive_directory_feature.md
└── tsconfig.json


/.gitignore:
--------------------------------------------------------------------------------
  1 | # Byte-compiled / optimized / DLL files
  2 | __pycache__/
  3 | *.py[cod]
  4 | *$py.class
  5 | 
  6 | # C extensions
  7 | *.so
  8 | 
  9 | # Distribution / packaging
 10 | .Python
 11 | build/
 12 | develop-eggs/
 13 | dist/
 14 | downloads/
 15 | eggs/
 16 | .eggs/
 17 | lib/
 18 | lib64/
 19 | parts/
 20 | sdist/
 21 | var/
 22 | wheels/
 23 | share/python-wheels/
 24 | *.egg-info/
 25 | .installed.cfg
 26 | *.egg
 27 | MANIFEST
 28 | 
 29 | # PyInstaller
 30 | #  Usually these files are written by a python script from a template
 31 | #  before PyInstaller builds the exe, so as to inject date/other infos into it.
 32 | *.manifest
 33 | *.spec
 34 | 
 35 | # Installer logs
 36 | pip-log.txt
 37 | pip-delete-this-directory.txt
 38 | 
 39 | # Unit test / coverage reports
 40 | htmlcov/
 41 | .tox/
 42 | .nox/
 43 | .coverage
 44 | .coverage.*
 45 | .cache
 46 | nosetests.xml
 47 | coverage.xml
 48 | *.cover
 49 | *.py,cover
 50 | .hypothesis/
 51 | .pytest_cache/
 52 | cover/
 53 | 
 54 | # Translations
 55 | *.mo
 56 | *.pot
 57 | 
 58 | # Django stuff:
 59 | *.log
 60 | local_settings.py
 61 | db.sqlite3
 62 | db.sqlite3-journal
 63 | 
 64 | # Flask stuff:
 65 | instance/
 66 | .webassets-cache
 67 | 
 68 | # Scrapy stuff:
 69 | .scrapy
 70 | 
 71 | # Sphinx documentation
 72 | docs/_build/
 73 | 
 74 | # PyBuilder
 75 | .pybuilder/
 76 | target/
 77 | 
 78 | # Jupyter Notebook
 79 | .ipynb_checkpoints
 80 | 
 81 | # IPython
 82 | profile_default/
 83 | ipython_config.py
 84 | 
 85 | # pyenv
 86 | #   For a library or package, you might want to ignore these files since the code is
 87 | #   intended to run in multiple environments; otherwise, check them in:
 88 | # .python-version
 89 | 
 90 | # pipenv
 91 | #   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
 92 | #   However, in case of collaboration, if having platform-specific dependencies or dependencies
 93 | #   having no cross-platform support, pipenv may install dependencies that don't work, or not
 94 | #   install all needed dependencies.
 95 | #Pipfile.lock
 96 | 
 97 | # poetry
 98 | #   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
 99 | #   This is especially recommended for binary packages to ensure reproducibility, and is more
100 | #   commonly ignored for libraries.
101 | #   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
102 | #poetry.lock
103 | 
104 | # pdm
105 | #   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
106 | #pdm.lock
107 | #   pdm stores project-wide configurations in .pdm.toml, but it is recommended to not include it
108 | #   in version control.
109 | #   https://pdm.fming.dev/latest/usage/project/#working-with-version-control
110 | .pdm.toml
111 | .pdm-python
112 | .pdm-build/
113 | 
114 | # PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
115 | __pypackages__/
116 | 
117 | # Celery stuff
118 | celerybeat-schedule
119 | celerybeat.pid
120 | 
121 | # SageMath parsed files
122 | *.sage.py
123 | 
124 | # Environments
125 | .env
126 | .venv
127 | env/
128 | venv/
129 | ENV/
130 | env.bak/
131 | venv.bak/
132 | 
133 | # Spyder project settings
134 | .spyderproject
135 | .spyproject
136 | 
137 | # Rope project settings
138 | .ropeproject
139 | 
140 | # mkdocs documentation
141 | /site
142 | 
143 | # mypy
144 | .mypy_cache/
145 | .dmypy.json
146 | dmypy.json
147 | 
148 | # Pyre type checker
149 | .pyre/
150 | 
151 | # pytype static type analyzer
152 | .pytype/
153 | 
154 | # Cython debug symbols
155 | cython_debug/
156 | 
157 | # PyCharm
158 | #  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
159 | #  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
160 | #  and can be added to the global gitignore or merged into this file.  For a more nuclear
161 | #  option (not recommended) you can uncomment the following to ignore the entire idea folder.
162 | #.idea/
163 | 
164 | .DS_Store
165 | 
166 | hack-sesh-files/
167 | 
168 | # Virtual Environment
169 | .env
170 | .venv
171 | env/
172 | venv/
173 | ENV/
174 | 
175 | # VS Code
176 | .vscode/*
177 | !.vscode/launch.json
178 | !.vscode/tasks.json
179 | !.vscode/settings.json
180 | 
181 | # Logs
182 | shared_logs/
183 | *.log
184 | 
185 | # Output files
186 | output.md
187 | 
188 | 
189 | # Node modules directory
190 | node_modules/
191 | 
192 | # Build output
193 | dist/
194 | 
195 | # Logs and temp files
196 | npm-debug.log*
197 | yarn-debug.log*
198 | yarn-error.log*
199 | *.log
200 | *.tmp
201 | 
202 | # OS / editor files
203 | .DS_Store
204 | Thumbs.db
205 | .idea/
206 | .vscode/
207 | 


--------------------------------------------------------------------------------
/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 Dazza Greenwood
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
  1 | # Filesystem MCP Server
  2 | 
  3 | Node.js server implementing Model Context Protocol (MCP) for filesystem operations.  New phase 1 for MCP Hello.
  4 | 
  5 | ## Features
  6 | 
  7 | - Read/write files
  8 | - Create/list/delete directories
  9 | - Move files/directories
 10 | - Search files
 11 | - Get file metadata
 12 | 
 13 | **Note**: The server will only allow operations within directories specified via `args`.
 14 | 
 15 | ## API
 16 | 
 17 | ### Resources
 18 | 
 19 | - `file://system`: File system operations interface
 20 | 
 21 | ### Tools
 22 | 
 23 | - **read_file**
 24 |   - Read complete contents of a file
 25 |   - Input: `path` (string)
 26 |   - Reads complete file contents with UTF-8 encoding
 27 | 
 28 | - **read_multiple_files**
 29 |   - Read multiple files simultaneously
 30 |   - Input: `paths` (string[])
 31 |   - Failed reads won't stop the entire operation
 32 | 
 33 | - **write_file**
 34 |   - Create new file or overwrite existing (exercise caution with this)
 35 |   - Inputs:
 36 |     - `path` (string): File location
 37 |     - `content` (string): File content
 38 | 
 39 | - **edit_file**
 40 |   - Make selective edits using advanced pattern matching and formatting
 41 |   - Features:
 42 |     - Line-based and multi-line content matching
 43 |     - Whitespace normalization with indentation preservation
 44 |     - Fuzzy matching with confidence scoring
 45 |     - Multiple simultaneous edits with correct positioning
 46 |     - Indentation style detection and preservation
 47 |     - Git-style diff output with context
 48 |     - Preview changes with dry run mode
 49 |     - Failed match debugging with confidence scores
 50 |   - Inputs:
 51 |     - `path` (string): File to edit
 52 |     - `edits` (array): List of edit operations
 53 |       - `oldText` (string): Text to search for (can be substring)
 54 |       - `newText` (string): Text to replace with
 55 |     - `dryRun` (boolean): Preview changes without applying (default: false)
 56 |     - `options` (object): Optional formatting settings
 57 |       - `preserveIndentation` (boolean): Keep existing indentation (default: true)
 58 |       - `normalizeWhitespace` (boolean): Normalize spaces while preserving structure (default: true)
 59 |       - `partialMatch` (boolean): Enable fuzzy matching (default: true)
 60 |   - Returns detailed diff and match information for dry runs, otherwise applies changes
 61 |   - Best Practice: Always use dryRun first to preview changes before applying them
 62 | 
 63 | - **create_directory**
 64 |   - Create new directory or ensure it exists
 65 |   - Input: `path` (string)
 66 |   - Creates parent directories if needed
 67 |   - Succeeds silently if directory exists
 68 | 
 69 | - **list_directory**
 70 |   - List directory contents with [FILE] or [DIR] prefixes
 71 |   - Input: `path` (string)
 72 | 
 73 | - **move_file**
 74 |   - Move or rename files and directories
 75 |   - Inputs:
 76 |     - `source` (string)
 77 |     - `destination` (string)
 78 |   - Fails if destination exists
 79 | 
 80 | - **search_files**
 81 |   - Recursively search for files/directories
 82 |   - Inputs:
 83 |     - `path` (string): Starting directory
 84 |     - `pattern` (string): Search pattern
 85 |     - `excludePatterns` (string[]): Exclude any patterns. Glob formats are supported.
 86 |   - Case-insensitive matching
 87 |   - Returns full paths to matches
 88 | 
 89 | - **get_file_info**
 90 |   - Get detailed file/directory metadata
 91 |   - Input: `path` (string)
 92 |   - Returns:
 93 |     - Size
 94 |     - Creation time
 95 |     - Modified time
 96 |     - Access time
 97 |     - Type (file/directory)
 98 |     - Permissions
 99 | 
100 | - **list_allowed_directories**
101 |   - List all directories the server is allowed to access
102 |   - No input required
103 |   - Returns:
104 |     - Directories that this server can read/write from
105 | 
106 | ## Usage with Claude Desktop
107 | Add this to your `claude_desktop_config.json`:
108 | ```json
109 | {
110 |   "mcpServers": {
111 |     "filesystem": {
112 |       "command": "npx",
113 |       "args": [
114 |         "-y",
115 |         "@modelcontextprotocol/server-filesystem",
116 |         "/Users/username/Desktop",
117 |         "/path/to/other/allowed/dir"
118 |       ]
119 |     }
120 |   }
121 | }
122 | ```
123 | 
124 | ## License
125 | 
126 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.


--------------------------------------------------------------------------------
/claude_desktop_config.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "mcpServers": {
 3 |     "filesystem": {
 4 |       "command": "/usr/local/bin/node",
 5 |       "args": [
 6 |         "/Users/dazzagreenwood/filesystem/dist/index.js",
 7 |         "/Users/dazzagreenwood/mcp-hello/module1/files"
 8 |       ]
 9 |     }
10 |   }
11 | }
12 | 


--------------------------------------------------------------------------------
/index.ts:
--------------------------------------------------------------------------------
  1 | #!/usr/bin/env node
  2 | 
  3 | import { Server } from "@modelcontextprotocol/sdk/server/index.js";
  4 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
  5 | import {
  6 |   CallToolRequestSchema,
  7 |   ListToolsRequestSchema
  8 | } from "@modelcontextprotocol/sdk/types.js";
  9 | import fs from "fs/promises";
 10 | import path from "path";
 11 | import os from "os";
 12 | import { z } from "zod";
 13 | import { zodToJsonSchema } from "zod-to-json-schema";
 14 | import { createTwoFilesPatch } from "diff";
 15 | import { minimatch } from "minimatch";
 16 | 
 17 | // Enhanced Directory Listing Schema with recursive option
 18 | const ListDirectoryArgsSchema = z.object({
 19 |   path: z.string(),
 20 |   recursive: z.boolean().optional().default(false),
 21 | });
 22 | 
 23 | const args = process.argv.slice(2);
 24 | if (args.length === 0) {
 25 |   console.error("Usage: mcp-server-filesystem <allowed-directory> [additional-directories...]");
 26 |   process.exit(1);
 27 | }
 28 | 
 29 | function normalizePath(p: string): string {
 30 |   return path.normalize(p);
 31 | }
 32 | 
 33 | function expandHome(filepath: string): string {
 34 |   if (filepath === "~" || filepath.startsWith("~/")) {
 35 |     return path.join(os.homedir(), filepath.slice(1));
 36 |   }
 37 |   return filepath;
 38 | }
 39 | 
 40 | const allowedDirectories = args.map((dir) =>
 41 |   normalizePath(path.resolve(expandHome(dir)))
 42 | );
 43 | 
 44 | // Validate allowed directories
 45 | await Promise.all(
 46 |   allowedDirectories.map(async (dir) => {
 47 |     try {
 48 |       const stats = await fs.stat(dir);
 49 |       if (!stats.isDirectory()) {
 50 |         console.error(`Error: ${dir} is not a directory`);
 51 |         process.exit(1);
 52 |       }
 53 |     } catch (error) {
 54 |       console.error(`Error accessing directory ${dir}:`, error);
 55 |       process.exit(1);
 56 |     }
 57 |   }),
 58 | );
 59 | 
 60 | async function validatePath(requestedPath: string): Promise<string> {
 61 |   const expandedPath = expandHome(requestedPath);
 62 |   const absolute = path.isAbsolute(expandedPath)
 63 |     ? path.resolve(expandedPath)
 64 |     : path.resolve(process.cwd(), expandedPath);
 65 | 
 66 |   const normalizedRequested = normalizePath(absolute);
 67 | 
 68 |   const isAllowed = allowedDirectories.some((dir) =>
 69 |     normalizedRequested.startsWith(dir)
 70 |   );
 71 |   if (!isAllowed) {
 72 |     throw new Error(`Access denied - path outside allowed directories: ${absolute}`);
 73 |   }
 74 | 
 75 |   try {
 76 |     const realPath = await fs.realpath(absolute);
 77 |     const normalizedReal = normalizePath(realPath);
 78 |     const isRealPathAllowed = allowedDirectories.some((dir) =>
 79 |       normalizedReal.startsWith(dir)
 80 |     );
 81 |     if (!isRealPathAllowed) {
 82 |       throw new Error("Access denied - symlink target outside allowed directories");
 83 |     }
 84 |     return realPath;
 85 |   } catch (error) {
 86 |     const parentDir = path.dirname(absolute);
 87 |     try {
 88 |       const realParentPath = await fs.realpath(parentDir);
 89 |       const normalizedParent = normalizePath(realParentPath);
 90 |       const isParentAllowed = allowedDirectories.some((dir) =>
 91 |         normalizedParent.startsWith(dir)
 92 |       );
 93 |       if (!isParentAllowed) {
 94 |         throw new Error("Access denied - parent directory outside allowed directories");
 95 |       }
 96 |       return absolute;
 97 |     } catch {
 98 |       throw new Error(`Parent directory does not exist: ${parentDir}`);
 99 |     }
100 |   }
101 | }
102 | 
103 | const ReadFileArgsSchema = z.object({ path: z.string() });
104 | const ReadMultipleFilesArgsSchema = z.object({ paths: z.array(z.string()) });
105 | const WriteFileArgsSchema = z.object({ path: z.string(), content: z.string() });
106 | 
107 | const EditOperation = z.object({
108 |   oldText: z.string().describe("Text to search for - must match exactly"),
109 |   newText: z.string().describe("Text to replace with"),
110 | });
111 | const EditFileArgsSchema = z.object({
112 |   path: z.string(),
113 |   edits: z.array(EditOperation),
114 |   dryRun: z.boolean().default(false),
115 | });
116 | 
117 | const CreateDirectoryArgsSchema = z.object({ path: z.string() });
118 | const DirectoryTreeArgsSchema = z.object({ path: z.string() });
119 | const MoveFileArgsSchema = z.object({ source: z.string(), destination: z.string() });
120 | const SearchFilesArgsSchema = z.object({
121 |   path: z.string(),
122 |   pattern: z.string(),
123 |   excludePatterns: z.array(z.string()).optional().default([]),
124 | });
125 | const GetFileInfoArgsSchema = z.object({ path: z.string() });
126 | 
127 | interface FileInfo {
128 |   size: number;
129 |   created: Date;
130 |   modified: Date;
131 |   accessed: Date;
132 |   isDirectory: boolean;
133 |   isFile: boolean;
134 |   permissions: string;
135 | }
136 | 
137 | const server = new Server(
138 |   { name: "secure-filesystem-server", version: "0.6.2" },
139 |   { capabilities: { tools: {}, resources: {} } }
140 | );
141 | 
142 | async function getFileStats(filePath: string): Promise<FileInfo> {
143 |   const stats = await fs.stat(filePath);
144 |   return {
145 |     size: stats.size,
146 |     created: stats.birthtime,
147 |     modified: stats.mtime,
148 |     accessed: stats.atime,
149 |     isDirectory: stats.isDirectory(),
150 |     isFile: stats.isFile(),
151 |     permissions: stats.mode.toString(8).slice(-3),
152 |   };
153 | }
154 | 
155 | function normalizeLineEndings(text: string): string {
156 |   return text.replace(/\r\n/g, "\n");
157 | }
158 | 
159 | function createUnifiedDiff(
160 |   originalContent: string,
161 |   newContent: string,
162 |   filepath: string = "file"
163 | ): string {
164 |   const normalizedOriginal = normalizeLineEndings(originalContent);
165 |   const normalizedNew = normalizeLineEndings(newContent);
166 |   return createTwoFilesPatch(
167 |     filepath,
168 |     filepath,
169 |     normalizedOriginal,
170 |     normalizedNew,
171 |     "original",
172 |     "modified"
173 |   );
174 | }
175 | 
176 | async function applyFileEdits(
177 |   filePath: string,
178 |   edits: Array<{ oldText: string; newText: string }>,
179 |   dryRun = false
180 | ): Promise<string> {
181 |   const content = normalizeLineEndings(await fs.readFile(filePath, "utf-8"));
182 |   let modifiedContent = content;
183 | 
184 |   for (const edit of edits) {
185 |     const oldText = normalizeLineEndings(edit.oldText);
186 |     const newText = normalizeLineEndings(edit.newText);
187 | 
188 |     if (modifiedContent.includes(oldText)) {
189 |       modifiedContent = modifiedContent.replace(oldText, newText);
190 |     }
191 |   }
192 | 
193 |   const diff = createUnifiedDiff(content, modifiedContent, filePath);
194 |   if (!dryRun) {
195 |     await fs.writeFile(filePath, modifiedContent, "utf-8");
196 |   }
197 |   return diff;
198 | }
199 | 
200 | async function* readDirectoryRecursively(dirPath: string): AsyncGenerator<string> {
201 |   const entries = await fs.readdir(dirPath, { withFileTypes: true });
202 |   for (const entry of entries) {
203 |     const fullPath = path.join(dirPath, entry.name);
204 |     if (entry.isDirectory()) {
205 |       yield `[DIR] ${fullPath}`;
206 |       yield* readDirectoryRecursively(fullPath);
207 |     } else {
208 |       yield `[FILE] ${fullPath}`;
209 |     }
210 |   }
211 | }
212 | 
213 | async function listDirectoryRecursive(dirPath: string): Promise<string[]> {
214 |   const entries: string[] = [];
215 |   for await (const entry of readDirectoryRecursively(dirPath)) {
216 |     entries.push(entry);
217 |   }
218 |   return entries;
219 | }
220 | 
221 | async function listDirectory(dirPath: string, recursive: boolean): Promise<string[]> {
222 |   if (!recursive) {
223 |     const entries = await fs.readdir(dirPath, { withFileTypes: true });
224 |     return entries.map((entry) =>
225 |       entry.isDirectory() ? `[DIR] ${entry.name}` : `[FILE] ${entry.name}`
226 |     );
227 |   } else {
228 |     return await listDirectoryRecursive(dirPath);
229 |   }
230 | }
231 | 
232 | server.setRequestHandler(ListToolsRequestSchema, async () => ({
233 |   tools: [
234 |     {
235 |       name: "read_file",
236 |       description:
237 |         "Read the complete contents of a file from the filesystem. Only works within allowed directories.",
238 |       inputSchema: zodToJsonSchema(ReadFileArgsSchema),
239 |     },
240 |     {
241 |       name: "read_multiple_files",
242 |       description:
243 |         "Read contents of multiple files simultaneously. Only works within allowed directories.",
244 |       inputSchema: zodToJsonSchema(ReadMultipleFilesArgsSchema),
245 |     },
246 |     {
247 |       name: "write_file",
248 |       description:
249 |         "Write or overwrite file contents. Only works within allowed directories.",
250 |       inputSchema: zodToJsonSchema(WriteFileArgsSchema),
251 |     },
252 |     {
253 |       name: "edit_file",
254 |       description:
255 |         "Perform line-based edits to a file and return a git-style diff of changes. Only works within allowed directories.",
256 |       inputSchema: zodToJsonSchema(EditFileArgsSchema),
257 |     },
258 |     {
259 |       name: "create_directory",
260 |       description:
261 |         "Create a directory (and parents if needed). Only works within allowed directories.",
262 |       inputSchema: zodToJsonSchema(CreateDirectoryArgsSchema),
263 |     },
264 |     {
265 |       name: "list_directory",
266 |       description:
267 |         "List files and directories in a given path. If recursive=true, lists entire subtree. Only works within allowed directories.",
268 |       inputSchema: zodToJsonSchema(ListDirectoryArgsSchema),
269 |     },
270 |     {
271 |       name: "directory_tree",
272 |       description:
273 |         "Get a recursive listing of all files and directories from a given path. Only works within allowed directories.",
274 |       inputSchema: zodToJsonSchema(DirectoryTreeArgsSchema),
275 |     },
276 |     {
277 |       name: "move_file",
278 |       description:
279 |         "Move or rename a file or directory. Only works within allowed directories.",
280 |       inputSchema: zodToJsonSchema(MoveFileArgsSchema),
281 |     },
282 |     {
283 |       name: "search_files",
284 |       description:
285 |         "Recursively search for files and directories matching a pattern. Not fully implemented. Only works within allowed directories.",
286 |       inputSchema: zodToJsonSchema(SearchFilesArgsSchema),
287 |     },
288 |     {
289 |       name: "get_file_info",
290 |       description:
291 |         "Get metadata about a file or directory. Only works within allowed directories.",
292 |       inputSchema: zodToJsonSchema(GetFileInfoArgsSchema),
293 |     },
294 |     {
295 |       name: "list_allowed_directories",
296 |       description: "List directories that this server can access.",
297 |       inputSchema: { type: "object", properties: {}, required: [] },
298 |     },
299 |   ],
300 | }));
301 | 
302 | server.setRequestHandler(CallToolRequestSchema, async (request) => {
303 |   try {
304 |     const { name, arguments: args } = request.params;
305 |     switch (name) {
306 |       case "read_file": {
307 |         const parsed = ReadFileArgsSchema.safeParse(args);
308 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
309 |         const validPath = await validatePath(parsed.data.path);
310 |         const content = await fs.readFile(validPath, "utf-8");
311 |         return { content: [{ type: "text", text: content }] };
312 |       }
313 | 
314 |       case "read_multiple_files": {
315 |         const parsed = ReadMultipleFilesArgsSchema.safeParse(args);
316 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
317 |         const results = await Promise.all(
318 |           parsed.data.paths.map(async (p) => {
319 |             try {
320 |               const vp = await validatePath(p);
321 |               const c = await fs.readFile(vp, "utf-8");
322 |               return `${p}:\n${c}`;
323 |             } catch (err) {
324 |               return `${p}: Error - ${err instanceof Error ? err.message : String(err)}`;
325 |             }
326 |           })
327 |         );
328 |         return { content: [{ type: "text", text: results.join("\n---\n") }] };
329 |       }
330 | 
331 |       case "write_file": {
332 |         const parsed = WriteFileArgsSchema.safeParse(args);
333 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
334 |         const vp = await validatePath(parsed.data.path);
335 |         await fs.writeFile(vp, parsed.data.content, "utf-8");
336 |         return { content: [{ type: "text", text: `Wrote to ${parsed.data.path}` }] };
337 |       }
338 | 
339 |       case "edit_file": {
340 |         const parsed = EditFileArgsSchema.safeParse(args);
341 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
342 |         const vp = await validatePath(parsed.data.path);
343 |         const diff = await applyFileEdits(vp, parsed.data.edits, parsed.data.dryRun);
344 |         return { content: [{ type: "text", text: diff }] };
345 |       }
346 | 
347 |       case "create_directory": {
348 |         const parsed = CreateDirectoryArgsSchema.safeParse(args);
349 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
350 |         const vp = await validatePath(parsed.data.path);
351 |         await fs.mkdir(vp, { recursive: true });
352 |         return { content: [{ type: "text", text: `Created directory ${parsed.data.path}` }] };
353 |       }
354 | 
355 |       case "list_directory": {
356 |         const parsed = ListDirectoryArgsSchema.safeParse(args);
357 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
358 |         const vp = await validatePath(parsed.data.path);
359 |         const entries = await listDirectory(vp, parsed.data.recursive || false);
360 |         return { content: [{ type: "text", text: entries.join("\n") }] };
361 |       }
362 | 
363 |       case "directory_tree": {
364 |         const parsed = DirectoryTreeArgsSchema.safeParse(args);
365 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
366 |         const vp = await validatePath(parsed.data.path);
367 |         const entries = await listDirectoryRecursive(vp);
368 |         return { content: [{ type: "text", text: entries.join("\n") }] };
369 |       }
370 | 
371 |       case "move_file": {
372 |         const parsed = MoveFileArgsSchema.safeParse(args);
373 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
374 |         const src = await validatePath(parsed.data.source);
375 |         const dst = await validatePath(parsed.data.destination);
376 |         await fs.rename(src, dst);
377 |         return { content: [{ type: "text", text: `Moved ${parsed.data.source} to ${parsed.data.destination}` }] };
378 |       }
379 | 
380 |       case "search_files":
381 |         // Not fully implemented. Could be implemented using glob or minimatch logic.
382 |         return { content: [{ type: "text", text: "Search not implemented." }] };
383 | 
384 |       case "get_file_info": {
385 |         const parsed = GetFileInfoArgsSchema.safeParse(args);
386 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
387 |         const vp = await validatePath(parsed.data.path);
388 |         const info = await getFileStats(vp);
389 |         const infoText = Object.entries(info)
390 |           .map(([k, v]) => `${k}: ${v}`)
391 |           .join("\n");
392 |         return { content: [{ type: "text", text: infoText }] };
393 |       }
394 | 
395 |       case "list_allowed_directories":
396 |         return { content: [{ type: "text", text: allowedDirectories.join("\n") }] };
397 | 
398 |       default:
399 |         return { content: [{ type: "text", text: `Unknown tool: ${name}` }], isError: true };
400 |     }
401 |   } catch (error) {
402 |     const msg = error instanceof Error ? error.message : String(error);
403 |     return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
404 |   }
405 | });
406 | 
407 | async function runServer() {
408 |   const transport = new StdioServerTransport();
409 |   await server.connect(transport);
410 |   console.error("Secure File System MCP Server running on stdio");
411 | }
412 | 
413 | runServer().catch((error) => {
414 |   console.error("Fatal error running server:", error);
415 |   process.exit(1);
416 | });


--------------------------------------------------------------------------------
/package-lock.json:
--------------------------------------------------------------------------------
  1 | {
  2 |   "name": "mcp-server-filesystem",
  3 |   "version": "0.6.2",
  4 |   "lockfileVersion": 3,
  5 |   "requires": true,
  6 |   "packages": {
  7 |     "": {
  8 |       "name": "mcp-server-filesystem",
  9 |       "version": "0.6.2",
 10 |       "dependencies": {
 11 |         "@modelcontextprotocol/sdk": "^1.0.3",
 12 |         "diff": "^5.1.0",
 13 |         "minimatch": "^10.0.1",
 14 |         "zod": "^3.22.4",
 15 |         "zod-to-json-schema": "^3.20.7"
 16 |       },
 17 |       "bin": {
 18 |         "mcp-server-filesystem": "dist/index.js"
 19 |       },
 20 |       "devDependencies": {
 21 |         "@types/diff": "^6.0.0",
 22 |         "@types/node": "^20.11.0",
 23 |         "typescript": "^5.3.3"
 24 |       }
 25 |     },
 26 |     "node_modules/@modelcontextprotocol/sdk": {
 27 |       "version": "1.0.3",
 28 |       "resolved": "https://registry.npmjs.org/@modelcontextprotocol/sdk/-/sdk-1.0.3.tgz",
 29 |       "integrity": "sha512-2as3cX/VJ0YBHGmdv3GFyTpoM8q2gqE98zh3Vf1NwnsSY0h3mvoO07MUzfygCKkWsFjcZm4otIiqD6Xh7kiSBQ==",
 30 |       "license": "MIT",
 31 |       "dependencies": {
 32 |         "content-type": "^1.0.5",
 33 |         "raw-body": "^3.0.0",
 34 |         "zod": "^3.23.8"
 35 |       }
 36 |     },
 37 |     "node_modules/@types/diff": {
 38 |       "version": "6.0.0",
 39 |       "resolved": "https://registry.npmjs.org/@types/diff/-/diff-6.0.0.tgz",
 40 |       "integrity": "sha512-dhVCYGv3ZSbzmQaBSagrv1WJ6rXCdkyTcDyoNu1MD8JohI7pR7k8wdZEm+mvdxRKXyHVwckFzWU1vJc+Z29MlA==",
 41 |       "dev": true,
 42 |       "license": "MIT"
 43 |     },
 44 |     "node_modules/@types/node": {
 45 |       "version": "20.17.10",
 46 |       "resolved": "https://registry.npmjs.org/@types/node/-/node-20.17.10.tgz",
 47 |       "integrity": "sha512-/jrvh5h6NXhEauFFexRin69nA0uHJ5gwk4iDivp/DeoEua3uwCUto6PC86IpRITBOs4+6i2I56K5x5b6WYGXHA==",
 48 |       "dev": true,
 49 |       "license": "MIT",
 50 |       "dependencies": {
 51 |         "undici-types": "~6.19.2"
 52 |       }
 53 |     },
 54 |     "node_modules/balanced-match": {
 55 |       "version": "1.0.2",
 56 |       "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
 57 |       "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
 58 |       "license": "MIT"
 59 |     },
 60 |     "node_modules/brace-expansion": {
 61 |       "version": "2.0.1",
 62 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
 63 |       "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
 64 |       "license": "MIT",
 65 |       "dependencies": {
 66 |         "balanced-match": "^1.0.0"
 67 |       }
 68 |     },
 69 |     "node_modules/bytes": {
 70 |       "version": "3.1.2",
 71 |       "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
 72 |       "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
 73 |       "license": "MIT",
 74 |       "engines": {
 75 |         "node": ">= 0.8"
 76 |       }
 77 |     },
 78 |     "node_modules/content-type": {
 79 |       "version": "1.0.5",
 80 |       "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
 81 |       "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
 82 |       "license": "MIT",
 83 |       "engines": {
 84 |         "node": ">= 0.6"
 85 |       }
 86 |     },
 87 |     "node_modules/depd": {
 88 |       "version": "2.0.0",
 89 |       "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
 90 |       "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
 91 |       "license": "MIT",
 92 |       "engines": {
 93 |         "node": ">= 0.8"
 94 |       }
 95 |     },
 96 |     "node_modules/diff": {
 97 |       "version": "5.2.0",
 98 |       "resolved": "https://registry.npmjs.org/diff/-/diff-5.2.0.tgz",
 99 |       "integrity": "sha512-uIFDxqpRZGZ6ThOk84hEfqWoHx2devRFvpTZcTHur85vImfaxUbTW9Ryh4CpCuDnToOP1CEtXKIgytHBPVff5A==",
100 |       "license": "BSD-3-Clause",
101 |       "engines": {
102 |         "node": ">=0.3.1"
103 |       }
104 |     },
105 |     "node_modules/http-errors": {
106 |       "version": "2.0.0",
107 |       "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
108 |       "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
109 |       "license": "MIT",
110 |       "dependencies": {
111 |         "depd": "2.0.0",
112 |         "inherits": "2.0.4",
113 |         "setprototypeof": "1.2.0",
114 |         "statuses": "2.0.1",
115 |         "toidentifier": "1.0.1"
116 |       },
117 |       "engines": {
118 |         "node": ">= 0.8"
119 |       }
120 |     },
121 |     "node_modules/iconv-lite": {
122 |       "version": "0.6.3",
123 |       "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
124 |       "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
125 |       "license": "MIT",
126 |       "dependencies": {
127 |         "safer-buffer": ">= 2.1.2 < 3.0.0"
128 |       },
129 |       "engines": {
130 |         "node": ">=0.10.0"
131 |       }
132 |     },
133 |     "node_modules/inherits": {
134 |       "version": "2.0.4",
135 |       "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
136 |       "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
137 |       "license": "ISC"
138 |     },
139 |     "node_modules/minimatch": {
140 |       "version": "10.0.1",
141 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.0.1.tgz",
142 |       "integrity": "sha512-ethXTt3SGGR+95gudmqJ1eNhRO7eGEGIgYA9vnPatK4/etz2MEVDno5GMCibdMTuBMyElzIlgxMna3K94XDIDQ==",
143 |       "license": "ISC",
144 |       "dependencies": {
145 |         "brace-expansion": "^2.0.1"
146 |       },
147 |       "engines": {
148 |         "node": "20 || >=22"
149 |       },
150 |       "funding": {
151 |         "url": "https://github.com/sponsors/isaacs"
152 |       }
153 |     },
154 |     "node_modules/raw-body": {
155 |       "version": "3.0.0",
156 |       "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.0.tgz",
157 |       "integrity": "sha512-RmkhL8CAyCRPXCE28MMH0z2PNWQBNk2Q09ZdxM9IOOXwxwZbN+qbWaatPkdkWIKL2ZVDImrN/pK5HTRz2PcS4g==",
158 |       "license": "MIT",
159 |       "dependencies": {
160 |         "bytes": "3.1.2",
161 |         "http-errors": "2.0.0",
162 |         "iconv-lite": "0.6.3",
163 |         "unpipe": "1.0.0"
164 |       },
165 |       "engines": {
166 |         "node": ">= 0.8"
167 |       }
168 |     },
169 |     "node_modules/safer-buffer": {
170 |       "version": "2.1.2",
171 |       "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
172 |       "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
173 |       "license": "MIT"
174 |     },
175 |     "node_modules/setprototypeof": {
176 |       "version": "1.2.0",
177 |       "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
178 |       "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
179 |       "license": "ISC"
180 |     },
181 |     "node_modules/statuses": {
182 |       "version": "2.0.1",
183 |       "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
184 |       "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
185 |       "license": "MIT",
186 |       "engines": {
187 |         "node": ">= 0.8"
188 |       }
189 |     },
190 |     "node_modules/toidentifier": {
191 |       "version": "1.0.1",
192 |       "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
193 |       "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
194 |       "license": "MIT",
195 |       "engines": {
196 |         "node": ">=0.6"
197 |       }
198 |     },
199 |     "node_modules/typescript": {
200 |       "version": "5.7.2",
201 |       "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.7.2.tgz",
202 |       "integrity": "sha512-i5t66RHxDvVN40HfDd1PsEThGNnlMCMT3jMUuoh9/0TaqWevNontacunWyN02LA9/fIbEWlcHZcgTKb9QoaLfg==",
203 |       "dev": true,
204 |       "license": "Apache-2.0",
205 |       "bin": {
206 |         "tsc": "bin/tsc",
207 |         "tsserver": "bin/tsserver"
208 |       },
209 |       "engines": {
210 |         "node": ">=14.17"
211 |       }
212 |     },
213 |     "node_modules/undici-types": {
214 |       "version": "6.19.8",
215 |       "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.19.8.tgz",
216 |       "integrity": "sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw==",
217 |       "dev": true,
218 |       "license": "MIT"
219 |     },
220 |     "node_modules/unpipe": {
221 |       "version": "1.0.0",
222 |       "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
223 |       "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
224 |       "license": "MIT",
225 |       "engines": {
226 |         "node": ">= 0.8"
227 |       }
228 |     },
229 |     "node_modules/zod": {
230 |       "version": "3.24.1",
231 |       "resolved": "https://registry.npmjs.org/zod/-/zod-3.24.1.tgz",
232 |       "integrity": "sha512-muH7gBL9sI1nciMZV67X5fTKKBLtwpZ5VBp1vsOQzj1MhrBZ4wlVCm3gedKZWLp0Oyel8sIGfeiz54Su+OVT+A==",
233 |       "license": "MIT",
234 |       "funding": {
235 |         "url": "https://github.com/sponsors/colinhacks"
236 |       }
237 |     },
238 |     "node_modules/zod-to-json-schema": {
239 |       "version": "3.24.1",
240 |       "resolved": "https://registry.npmjs.org/zod-to-json-schema/-/zod-to-json-schema-3.24.1.tgz",
241 |       "integrity": "sha512-3h08nf3Vw3Wl3PK+q3ow/lIil81IT2Oa7YpQyUUDsEWbXveMesdfK1xBd2RhCkynwZndAxixji/7SYJJowr62w==",
242 |       "license": "ISC",
243 |       "peerDependencies": {
244 |         "zod": "^3.24.1"
245 |       }
246 |     }
247 |   }
248 | }
249 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "mcp-server-filesystem",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP File System Server",
 5 |   "main": "dist/index.js",
 6 |   "type": "module",
 7 |   "bin": {
 8 |     "mcp-server-filesystem": "dist/index.js"
 9 |   },
10 |   "scripts": {
11 |     "build": "tsc",
12 |     "dev": "tsc --watch",
13 |     "test": "node --test test/*.test.js"
14 |   },
15 |   "dependencies": {
16 |     "@modelcontextprotocol/sdk": "^1.0.3",
17 |     "diff": "^5.1.0",
18 |     "minimatch": "^10.0.1",
19 |     "zod": "^3.22.4",
20 |     "zod-to-json-schema": "^3.20.7"
21 |   },
22 |   "devDependencies": {
23 |     "@types/diff": "^6.0.0",
24 |     "@types/node": "^20.11.0",
25 |     "typescript": "^5.3.3"
26 |   }
27 | }
28 | 


--------------------------------------------------------------------------------
/recursive_directory_feature.md:
--------------------------------------------------------------------------------
  1 | # How to Set Up and Run This Project
  2 | 
  3 | This is a project to extend the existing Model Context Protocol filesystem server to include **Recursive Directory Listing** (Inspired by git_log):
  4 | 
  5 | * Concept: Extend the list_directory tool to optionally list contents recursively.
  6 | * Implementation: Add an optional recursive boolean argument. If true, recursively traverse subdirectories.
  7 | * Model: Similar to git_log which also takes an optional argument to modify its behaviour.
  8 | * Benefits: Allows browsing entire directory trees, not just the top level.
  9 | 
 10 | Rationale:
 11 | 
 12 | * This approach minimizes risk by building upon existing functionality and avoiding complex external dependencies. It allows for a clear, incremental addition to the server with a well-defined scope and testable outcomes. By focusing on a simple, self-contained feature, we can ensure a successful first step and build confidence before tackling more complex enhancements.
 13 | 
 14 | ## Project Setup Instructions
 15 | 
 16 | ### 1. Create Project Directory
 17 | 
 18 | If you haven’t already done so, create the project directory and move into it:
 19 | 
 20 | ```bash
 21 | mkdir /Users/dazzagreenwood/filesystem
 22 | cd /Users/dazzagreenwood/filesystem
 23 | ```
 24 | 
 25 | ### 2. Initialize Node.js Project (if needed)
 26 | 
 27 | If you do not already have a `package.json`, you can create one:
 28 | 
 29 | ```bash
 30 | npm init -y
 31 | ```
 32 | 
 33 | ### 3. Add Required Files
 34 | 
 35 | **`package.json`** (if you already have one, just ensure dependencies are correct):
 36 | 
 37 | ```json
 38 | {
 39 |   "name": "mcp-server-filesystem",
 40 |   "version": "0.6.2",
 41 |   "description": "MCP File System Server",
 42 |   "main": "dist/index.js",
 43 |   "type": "module",
 44 |   "bin": {
 45 |     "mcp-server-filesystem": "dist/index.js"
 46 |   },
 47 |   "scripts": {
 48 |     "build": "tsc",
 49 |     "dev": "tsc --watch",
 50 |     "test": "node --test test/*.test.js"
 51 |   },
 52 |   "dependencies": {
 53 |     "@modelcontextprotocol/sdk": "^0.6.2",
 54 |     "diff": "^5.1.0",
 55 |     "minimatch": "^9.1.2",
 56 |     "zod": "^3.22.4",
 57 |     "zod-to-json-schema": "^3.20.7",
 58 |     "fs-promises": "0.1.2"
 59 |   },
 60 |   "devDependencies": {
 61 |     "@types/node": "^20.11.0",
 62 |     "typescript": "^5.3.3"
 63 |   }
 64 | }
 65 | ```
 66 | 
 67 | **`tsconfig.json`**:
 68 | 
 69 | ```json
 70 | {
 71 |   "compilerOptions": {
 72 |     "target": "es2022",
 73 |     "module": "NodeNext",
 74 |     "moduleResolution": "NodeNext",
 75 |     "rootDir": "./",
 76 |     "outDir": "./dist",
 77 |     "esModuleInterop": true,
 78 |     "forceConsistentCasingInFileNames": true,
 79 |     "strict": true,
 80 |     "skipLibCheck": true
 81 |   }
 82 | }
 83 | ```
 84 | 
 85 | **`index.ts`** (Place this file in `/Users/dazzagreenwood/filesystem/index.ts`):
 86 | 
 87 | ```typescript
 88 | #!/usr/bin/env node
 89 | 
 90 | import { Server } from "@modelcontextprotocol/sdk/server/index.js";
 91 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
 92 | import {
 93 |   CallToolRequestSchema,
 94 |   ListToolsRequestSchema
 95 | } from "@modelcontextprotocol/sdk/types.js";
 96 | import fs from "fs/promises";
 97 | import path from "path";
 98 | import os from "os";
 99 | import { z } from "zod";
100 | import { zodToJsonSchema } from "zod-to-json-schema";
101 | import { createTwoFilesPatch } from "diff";
102 | import { minimatch } from "minimatch";
103 | 
104 | // Enhanced Directory Listing Schema with recursive option
105 | const ListDirectoryArgsSchema = z.object({
106 |   path: z.string(),
107 |   recursive: z.boolean().optional().default(false),
108 | });
109 | 
110 | const args = process.argv.slice(2);
111 | if (args.length === 0) {
112 |   console.error("Usage: mcp-server-filesystem <allowed-directory> [additional-directories...]");
113 |   process.exit(1);
114 | }
115 | 
116 | function normalizePath(p: string): string {
117 |   return path.normalize(p);
118 | }
119 | 
120 | function expandHome(filepath: string): string {
121 |   if (filepath === "~" || filepath.startsWith("~/")) {
122 |     return path.join(os.homedir(), filepath.slice(1));
123 |   }
124 |   return filepath;
125 | }
126 | 
127 | const allowedDirectories = args.map((dir) =>
128 |   normalizePath(path.resolve(expandHome(dir)))
129 | );
130 | 
131 | // Validate allowed directories
132 | await Promise.all(
133 |   allowedDirectories.map(async (dir) => {
134 |     try {
135 |       const stats = await fs.stat(dir);
136 |       if (!stats.isDirectory()) {
137 |         console.error(`Error: ${dir} is not a directory`);
138 |         process.exit(1);
139 |       }
140 |     } catch (error) {
141 |       console.error(`Error accessing directory ${dir}:`, error);
142 |       process.exit(1);
143 |     }
144 |   }),
145 | );
146 | 
147 | async function validatePath(requestedPath: string): Promise<string> {
148 |   const expandedPath = expandHome(requestedPath);
149 |   const absolute = path.isAbsolute(expandedPath)
150 |     ? path.resolve(expandedPath)
151 |     : path.resolve(process.cwd(), expandedPath);
152 | 
153 |   const normalizedRequested = normalizePath(absolute);
154 | 
155 |   const isAllowed = allowedDirectories.some((dir) =>
156 |     normalizedRequested.startsWith(dir)
157 |   );
158 |   if (!isAllowed) {
159 |     throw new Error(`Access denied - path outside allowed directories: ${absolute}`);
160 |   }
161 | 
162 |   try {
163 |     const realPath = await fs.realpath(absolute);
164 |     const normalizedReal = normalizePath(realPath);
165 |     const isRealPathAllowed = allowedDirectories.some((dir) =>
166 |       normalizedReal.startsWith(dir)
167 |     );
168 |     if (!isRealPathAllowed) {
169 |       throw new Error("Access denied - symlink target outside allowed directories");
170 |     }
171 |     return realPath;
172 |   } catch (error) {
173 |     const parentDir = path.dirname(absolute);
174 |     try {
175 |       const realParentPath = await fs.realpath(parentDir);
176 |       const normalizedParent = normalizePath(realParentPath);
177 |       const isParentAllowed = allowedDirectories.some((dir) =>
178 |         normalizedParent.startsWith(dir)
179 |       );
180 |       if (!isParentAllowed) {
181 |         throw new Error("Access denied - parent directory outside allowed directories");
182 |       }
183 |       return absolute;
184 |     } catch {
185 |       throw new Error(`Parent directory does not exist: ${parentDir}`);
186 |     }
187 |   }
188 | }
189 | 
190 | const ReadFileArgsSchema = z.object({ path: z.string() });
191 | const ReadMultipleFilesArgsSchema = z.object({ paths: z.array(z.string()) });
192 | const WriteFileArgsSchema = z.object({ path: z.string(), content: z.string() });
193 | 
194 | const EditOperation = z.object({
195 |   oldText: z.string().describe("Text to search for - must match exactly"),
196 |   newText: z.string().describe("Text to replace with"),
197 | });
198 | const EditFileArgsSchema = z.object({
199 |   path: z.string(),
200 |   edits: z.array(EditOperation),
201 |   dryRun: z.boolean().default(false),
202 | });
203 | 
204 | const CreateDirectoryArgsSchema = z.object({ path: z.string() });
205 | const DirectoryTreeArgsSchema = z.object({ path: z.string() });
206 | const MoveFileArgsSchema = z.object({ source: z.string(), destination: z.string() });
207 | const SearchFilesArgsSchema = z.object({
208 |   path: z.string(),
209 |   pattern: z.string(),
210 |   excludePatterns: z.array(z.string()).optional().default([]),
211 | });
212 | const GetFileInfoArgsSchema = z.object({ path: z.string() });
213 | 
214 | interface FileInfo {
215 |   size: number;
216 |   created: Date;
217 |   modified: Date;
218 |   accessed: Date;
219 |   isDirectory: boolean;
220 |   isFile: boolean;
221 |   permissions: string;
222 | }
223 | 
224 | const server = new Server(
225 |   { name: "secure-filesystem-server", version: "0.6.2" },
226 |   { capabilities: { tools: {}, resources: {} } }
227 | );
228 | 
229 | async function getFileStats(filePath: string): Promise<FileInfo> {
230 |   const stats = await fs.stat(filePath);
231 |   return {
232 |     size: stats.size,
233 |     created: stats.birthtime,
234 |     modified: stats.mtime,
235 |     accessed: stats.atime,
236 |     isDirectory: stats.isDirectory(),
237 |     isFile: stats.isFile(),
238 |     permissions: stats.mode.toString(8).slice(-3),
239 |   };
240 | }
241 | 
242 | function normalizeLineEndings(text: string): string {
243 |   return text.replace(/\r\n/g, "\n");
244 | }
245 | 
246 | function createUnifiedDiff(
247 |   originalContent: string,
248 |   newContent: string,
249 |   filepath: string = "file"
250 | ): string {
251 |   const normalizedOriginal = normalizeLineEndings(originalContent);
252 |   const normalizedNew = normalizeLineEndings(newContent);
253 |   return createTwoFilesPatch(
254 |     filepath,
255 |     filepath,
256 |     normalizedOriginal,
257 |     normalizedNew,
258 |     "original",
259 |     "modified"
260 |   );
261 | }
262 | 
263 | async function applyFileEdits(
264 |   filePath: string,
265 |   edits: Array<{ oldText: string; newText: string }>,
266 |   dryRun = false
267 | ): Promise<string> {
268 |   const content = normalizeLineEndings(await fs.readFile(filePath, "utf-8"));
269 |   let modifiedContent = content;
270 | 
271 |   for (const edit of edits) {
272 |     const oldText = normalizeLineEndings(edit.oldText);
273 |     const newText = normalizeLineEndings(edit.newText);
274 | 
275 |     if (modifiedContent.includes(oldText)) {
276 |       modifiedContent = modifiedContent.replace(oldText, newText);
277 |     }
278 |   }
279 | 
280 |   const diff = createUnifiedDiff(content, modifiedContent, filePath);
281 |   if (!dryRun) {
282 |     await fs.writeFile(filePath, modifiedContent, "utf-8");
283 |   }
284 |   return diff;
285 | }
286 | 
287 | async function* readDirectoryRecursively(dirPath: string): AsyncGenerator<string> {
288 |   const entries = await fs.readdir(dirPath, { withFileTypes: true });
289 |   for (const entry of entries) {
290 |     const fullPath = path.join(dirPath, entry.name);
291 |     if (entry.isDirectory()) {
292 |       yield `[DIR] ${fullPath}`;
293 |       yield* readDirectoryRecursively(fullPath);
294 |     } else {
295 |       yield `[FILE] ${fullPath}`;
296 |     }
297 |   }
298 | }
299 | 
300 | async function listDirectoryRecursive(dirPath: string): Promise<string[]> {
301 |   const entries: string[] = [];
302 |   for await (const entry of readDirectoryRecursively(dirPath)) {
303 |     entries.push(entry);
304 |   }
305 |   return entries;
306 | }
307 | 
308 | async function listDirectory(dirPath: string, recursive: boolean): Promise<string[]> {
309 |   if (!recursive) {
310 |     const entries = await fs.readdir(dirPath, { withFileTypes: true });
311 |     return entries.map((entry) =>
312 |       entry.isDirectory() ? `[DIR] ${entry.name}` : `[FILE] ${entry.name}`
313 |     );
314 |   } else {
315 |     return await listDirectoryRecursive(dirPath);
316 |   }
317 | }
318 | 
319 | server.setRequestHandler(ListToolsRequestSchema, async () => ({
320 |   tools: [
321 |     {
322 |       name: "read_file",
323 |       description:
324 |         "Read the complete contents of a file from the filesystem. Only works within allowed directories.",
325 |       inputSchema: zodToJsonSchema(ReadFileArgsSchema),
326 |     },
327 |     {
328 |       name: "read_multiple_files",
329 |       description:
330 |         "Read contents of multiple files simultaneously. Only works within allowed directories.",
331 |       inputSchema: zodToJsonSchema(ReadMultipleFilesArgsSchema),
332 |     },
333 |     {
334 |       name: "write_file",
335 |       description:
336 |         "Write or overwrite file contents. Only works within allowed directories.",
337 |       inputSchema: zodToJsonSchema(WriteFileArgsSchema),
338 |     },
339 |     {
340 |       name: "edit_file",
341 |       description:
342 |         "Perform line-based edits to a file and return a git-style diff of changes. Only works within allowed directories.",
343 |       inputSchema: zodToJsonSchema(EditFileArgsSchema),
344 |     },
345 |     {
346 |       name: "create_directory",
347 |       description:
348 |         "Create a directory (and parents if needed). Only works within allowed directories.",
349 |       inputSchema: zodToJsonSchema(CreateDirectoryArgsSchema),
350 |     },
351 |     {
352 |       name: "list_directory",
353 |       description:
354 |         "List files and directories in a given path. If recursive=true, lists entire subtree. Only works within allowed directories.",
355 |       inputSchema: zodToJsonSchema(ListDirectoryArgsSchema),
356 |     },
357 |     {
358 |       name: "directory_tree",
359 |       description:
360 |         "Get a recursive listing of all files and directories from a given path. Only works within allowed directories.",
361 |       inputSchema: zodToJsonSchema(DirectoryTreeArgsSchema),
362 |     },
363 |     {
364 |       name: "move_file",
365 |       description:
366 |         "Move or rename a file or directory. Only works within allowed directories.",
367 |       inputSchema: zodToJsonSchema(MoveFileArgsSchema),
368 |     },
369 |     {
370 |       name: "search_files",
371 |       description:
372 |         "Recursively search for files and directories matching a pattern. Not fully implemented. Only works within allowed directories.",
373 |       inputSchema: zodToJsonSchema(SearchFilesArgsSchema),
374 |     },
375 |     {
376 |       name: "get_file_info",
377 |       description:
378 |         "Get metadata about a file or directory. Only works within allowed directories.",
379 |       inputSchema: zodToJsonSchema(GetFileInfoArgsSchema),
380 |     },
381 |     {
382 |       name: "list_allowed_directories",
383 |       description: "List directories that this server can access.",
384 |       inputSchema: { type: "object", properties: {}, required: [] },
385 |     },
386 |   ],
387 | }));
388 | 
389 | server.setRequestHandler(CallToolRequestSchema, async (request) => {
390 |   try {
391 |     const { name, arguments: args } = request.params;
392 |     switch (name) {
393 |       case "read_file": {
394 |         const parsed = ReadFileArgsSchema.safeParse(args);
395 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
396 |         const validPath = await validatePath(parsed.data.path);
397 |         const content = await fs.readFile(validPath, "utf-8");
398 |         return { content: [{ type: "text", text: content }] };
399 |       }
400 | 
401 |       case "read_multiple_files": {
402 |         const parsed = ReadMultipleFilesArgsSchema.safeParse(args);
403 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
404 |         const results = await Promise.all(
405 |           parsed.data.paths.map(async (p) => {
406 |             try {
407 |               const vp = await validatePath(p);
408 |               const c = await fs.readFile(vp, "utf-8");
409 |               return `${p}:\n${c}`;
410 |             } catch (err) {
411 |               return `${p}: Error - ${err instanceof Error ? err.message : String(err)}`;
412 |             }
413 |           })
414 |         );
415 |         return { content: [{ type: "text", text: results.join("\n---\n") }] };
416 |       }
417 | 
418 |       case "write_file": {
419 |         const parsed = WriteFileArgsSchema.safeParse(args);
420 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
421 |         const vp = await validatePath(parsed.data.path);
422 |         await fs.writeFile(vp, parsed.data.content, "utf-8");
423 |         return { content: [{ type: "text", text: `Wrote to ${parsed.data.path}` }] };
424 |       }
425 | 
426 |       case "edit_file": {
427 |         const parsed = EditFileArgsSchema.safeParse(args);
428 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
429 |         const vp = await validatePath(parsed.data.path);
430 |         const diff = await applyFileEdits(vp, parsed.data.edits, parsed.data.dryRun);
431 |         return { content: [{ type: "text", text: diff }] };
432 |       }
433 | 
434 |       case "create_directory": {
435 |         const parsed = CreateDirectoryArgsSchema.safeParse(args);
436 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
437 |         const vp = await validatePath(parsed.data.path);
438 |         await fs.mkdir(vp, { recursive: true });
439 |         return { content: [{ type: "text", text: `Created directory ${parsed.data.path}` }] };
440 |       }
441 | 
442 |       case "list_directory": {
443 |         const parsed = ListDirectoryArgsSchema.safeParse(args);
444 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
445 |         const vp = await validatePath(parsed.data.path);
446 |         const entries = await listDirectory(vp, parsed.data.recursive || false);
447 |         return { content: [{ type: "text", text: entries.join("\n") }] };
448 |       }
449 | 
450 |       case "directory_tree": {
451 |         const parsed = DirectoryTreeArgsSchema.safeParse(args);
452 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
453 |         const vp = await validatePath(parsed.data.path);
454 |         const entries = await listDirectoryRecursive(vp);
455 |         return { content: [{ type: "text", text: entries.join("\n") }] };
456 |       }
457 | 
458 |       case "move_file": {
459 |         const parsed = MoveFileArgsSchema.safeParse(args);
460 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
461 |         const src = await validatePath(parsed.data.source);
462 |         const dst = await validatePath(parsed.data.destination);
463 |         await fs.rename(src, dst);
464 |         return { content: [{ type: "text", text: `Moved ${parsed.data.source} to ${parsed.data.destination}` }] };
465 |       }
466 | 
467 |       case "search_files":
468 |         // Not fully implemented. Could be implemented using glob or minimatch logic.
469 |         return { content: [{ type: "text", text: "Search not implemented." }] };
470 | 
471 |       case "get_file_info": {
472 |         const parsed = GetFileInfoArgsSchema.safeParse(args);
473 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
474 |         const vp = await validatePath(parsed.data.path);
475 |         const info = await getFileStats(vp);
476 |         const infoText = Object.entries(info)
477 |           .map(([k, v]) => `${k}: ${v}`)
478 |           .join("\n");
479 |         return { content: [{ type: "text", text: infoText }] };
480 |       }
481 | 
482 |       case "list_allowed_directories":
483 |         return { content: [{ type: "text", text: allowedDirectories.join("\n") }] };
484 | 
485 |       default:
486 |         return { content: [{ type: "text", text: `Unknown tool: ${name}` }], isError: true };
487 |     }
488 |   } catch (error) {
489 |     const msg = error instanceof Error ? error.message : String(error);
490 |     return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
491 |   }
492 | });
493 | 
494 | async function runServer() {
495 |   const transport = new StdioServerTransport();
496 |   await server.connect(transport);
497 |   console.error("Secure File System MCP Server running on stdio");
498 | }
499 | 
500 | runServer().catch((error) => {
501 |   console.error("Fatal error running server:", error);
502 |   process.exit(1);
503 | });
504 | ```
505 | 
506 | ### 4. Install Dependencies
507 | 
508 | Make sure you are in the `/Users/dazzagreenwood/filesystem` directory, then run:
509 | 
510 | ```bash
511 | npm install @modelcontextprotocol/sdk zod zod-to-json-schema diff minimatch fs-promises
512 | ```
513 | 
514 | ### 5. Build the Project
515 | 
516 | ```bash
517 | npm run build
518 | ```
519 | 
520 | This will create `/Users/dazzagreenwood/filesystem/dist/index.js`.
521 | 
522 | ### 6. Update `claude_desktop_config.json`
523 | 
524 | Use the absolute path to `node` and your compiled `index.js`. For example:
525 | 
526 | ```json
527 | {
528 |   "mcpServers": {
529 |     "filesystem": {
530 |       "command": "/usr/local/bin/node",
531 |       "args": [
532 |         "/Users/dazzagreenwood/filesystem/dist/index.js",
533 |         "/Users/dazzagreenwood/mcp-hello/module1/files"
534 |       ]
535 |     }
536 |   }
537 | }
538 | ```
539 | 
540 | **Note:**  
541 | - Replace `/usr/local/bin/node` with the actual path from `which node` if different.
542 | - Replace `/Users/dazzagreenwood/mcp-hello/module1/files` with a directory you want to allow.
543 | 
544 | ### 7. Test the Setup
545 | 
546 | - Launch Claude Desktop.
547 | - Use `/list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files"` to test listing.
548 | - Try recursion: `/list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files" recursive: true`.
549 | - Try `/directory_tree path: "/Users/dazzagreenwood/mcp-hello/module1/files"` to see the tree output.
550 | 
551 | If everything is set up correctly, you should see the desired file and directory listings. If any issue arises, check the terminal output for error messages and confirm that all paths and configurations match your local system.
552 | 
553 | ---
554 | 
555 | ## NOTE: Potential Minor Issues and Omissions:
556 | 
557 | 1. **MCP Inspector Instructions Missing:** The major omission is the lack of guidance on how to test the server using the MCP Inspector.
558 | 2. **"search_files" Tool:** The `"search_files"` tool is not implemented and the current message says "Search not implemented. Could be implemented using glob or minimatch logic." - The correct message is simply "Search not implemented." as that is more accurate.
559 | 3. **`fs-promises`:** While not an issue, the `fs-promises` package can be removed from dependencies as it's not needed.
560 | 
561 | 
562 | # --------------------------------------
563 | 
564 | # Project Use and Testing Instructions
565 | 
566 | Here are instructions to incorporate MCP Inspector and Claude Desktop testing.
567 | 
568 | **Testing with Claude Desktop:**
569 | 
570 | 1.  **Start Claude Desktop:** Ensure Claude Desktop is running.
571 | 2.  **Use the `list_directory` tool:** Type the following in the Claude chat:
572 |     ```
573 |     /list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files"
574 |     ```
575 |     This should output the files and directories at the specified path. Note that you must use double quotes around the path.
576 | 3.  **Test Recursive Listing:** To test the recursive functionality, use:
577 |     ```
578 |     /list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files" recursive: true
579 |     ```
580 |     This should output the entire directory tree, including subdirectories.
581 | 4.  **Test the `directory_tree` tool**: Use the following to see the directory tree output:
582 |     ```
583 |     /directory_tree path: "/Users/dazzagreenwood/mcp-hello/module1/files"
584 |     ```
585 | 
586 | 5. **Test other tools**: You can test other tools like `read_file`, `write_file`, etc. using similar patterns, as long as those files exist in the allowed directories.
587 | 
588 | **Testing with MCP Inspector:**
589 | 
590 | 1.  **Start the Server:** Open a terminal and run the following command (replace `/Users/dazzagreenwood/mcp-hello/module1/files` with your allowed directory and make sure you use absolute path references to both the allowed directory and the command:
591 |    ```bash
592 |    npx @modelcontextprotocol/inspector uvx /usr/local/bin/node /Users/dazzagreenwood/filesystem/dist/index.js "/Users/dazzagreenwood/mcp-hello/module1/files"
593 |    ```
594 |   *If the executable is in your path you can run the server with*
595 |   ```bash
596 |   npx @modelcontextprotocol/inspector uvx mcp-server-filesystem "/Users/dazzagreenwood/mcp-hello/module1/files"
597 |   ```
598 | 2.  **Open MCP Inspector:** Open a web browser and go to the URL provided by the MCP Inspector output (usually `http://localhost:9001`).
599 | 3.  **Connect:** In the MCP Inspector, click "Connect".
600 | 4.  **Go to the "Tools" tab:** You should see the list of tools provided by the server.
601 | 5.  **Select the `list_directory` Tool:** Select the `list_directory` tool in the tools list.
602 | 6.  **Enter Arguments:** Input JSON for path and optionally recursive. Example JSON inputs:
603 |     *   **Non-recursive:**
604 |         ```json
605 |         {
606 |             "path": "/Users/dazzagreenwood/mcp-hello/module1/files"
607 |         }
608 |         ```
609 |     *   **Recursive:**
610 |         ```json
611 |         {
612 |             "path": "/Users/dazzagreenwood/mcp-hello/module1/files",
613 |             "recursive": true
614 |         }
615 |         ```
616 | 7.  **Click "Call Tool":** You should see the tool's output in the "Response" section of the MCP Inspector.
617 | 8.  **Select the `directory_tree` Tool:** Select the `directory_tree` tool in the tools list.
618 | 9.  **Enter Arguments:** Input JSON for path. Example JSON input:
619 |         ```json
620 |         {
621 |             "path": "/Users/dazzagreenwood/mcp-hello/module1/files"
622 |         }
623 |         ```
624 | 10. **Click "Call Tool":** You should see the tool's output in the "Response" section of the MCP Inspector.
625 | 11. **Test Other Tools:** You can similarly test other tools using this method.
626 | 
627 | **Final Recommendations:**
628 | 
629 | 1.  **Implement the Revised Testing Instructions:** Be sure to include the above testing procedures for both Claude Desktop and MCP Inspector when you conduct testing and also when you generate future instructions.
630 | 2.  **Fix `search_files` Message:** Change "Search not implemented. Could be implemented using glob or minimatch logic." to "Search not implemented."
631 | 3.  **Optional:** You can remove `"fs-promises": "0.1.2"` from the dependencies in `package.json`.
632 | 4.  **Review and Test:** Carefully review all files and instructions again, then test the project thoroughly using both Claude Desktop and MCP Inspector.
633 | 


--------------------------------------------------------------------------------
/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "es2022",
 4 |     "module": "NodeNext",
 5 |     "moduleResolution": "NodeNext",
 6 |     "rootDir": "./",
 7 |     "outDir": "./dist",
 8 |     "esModuleInterop": true,
 9 |     "forceConsistentCasingInFileNames": true,
10 |     "strict": true,
11 |     "skipLibCheck": true
12 |   }
13 | }