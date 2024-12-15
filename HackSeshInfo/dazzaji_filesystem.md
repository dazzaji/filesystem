├── .gitignore
├── HackSeshInfo
    ├── 2024-12-14_00-53-39_ChatGPT_ChatGPT....md
    └── dazzaji_filesystem.md
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
/HackSeshInfo/dazzaji_filesystem.md:
--------------------------------------------------------------------------------
   1 | ├── .gitignore
   2 | ├── HackSeshInfo
   3 |     └── 2024-12-14_00-53-39_ChatGPT_ChatGPT....md
   4 | ├── LICENSE
   5 | ├── README.md
   6 | ├── claude_desktop_config.json
   7 | ├── index.ts
   8 | ├── package-lock.json
   9 | ├── package.json
  10 | ├── recursive_directory_feature.md
  11 | └── tsconfig.json
  12 | 
  13 | 
  14 | /.gitignore:
  15 | --------------------------------------------------------------------------------
  16 |   1 | # Byte-compiled / optimized / DLL files
  17 |   2 | __pycache__/
  18 |   3 | *.py[cod]
  19 |   4 | *$py.class
  20 |   5 | 
  21 |   6 | # C extensions
  22 |   7 | *.so
  23 |   8 | 
  24 |   9 | # Distribution / packaging
  25 |  10 | .Python
  26 |  11 | build/
  27 |  12 | develop-eggs/
  28 |  13 | dist/
  29 |  14 | downloads/
  30 |  15 | eggs/
  31 |  16 | .eggs/
  32 |  17 | lib/
  33 |  18 | lib64/
  34 |  19 | parts/
  35 |  20 | sdist/
  36 |  21 | var/
  37 |  22 | wheels/
  38 |  23 | share/python-wheels/
  39 |  24 | *.egg-info/
  40 |  25 | .installed.cfg
  41 |  26 | *.egg
  42 |  27 | MANIFEST
  43 |  28 | 
  44 |  29 | # PyInstaller
  45 |  30 | #  Usually these files are written by a python script from a template
  46 |  31 | #  before PyInstaller builds the exe, so as to inject date/other infos into it.
  47 |  32 | *.manifest
  48 |  33 | *.spec
  49 |  34 | 
  50 |  35 | # Installer logs
  51 |  36 | pip-log.txt
  52 |  37 | pip-delete-this-directory.txt
  53 |  38 | 
  54 |  39 | # Unit test / coverage reports
  55 |  40 | htmlcov/
  56 |  41 | .tox/
  57 |  42 | .nox/
  58 |  43 | .coverage
  59 |  44 | .coverage.*
  60 |  45 | .cache
  61 |  46 | nosetests.xml
  62 |  47 | coverage.xml
  63 |  48 | *.cover
  64 |  49 | *.py,cover
  65 |  50 | .hypothesis/
  66 |  51 | .pytest_cache/
  67 |  52 | cover/
  68 |  53 | 
  69 |  54 | # Translations
  70 |  55 | *.mo
  71 |  56 | *.pot
  72 |  57 | 
  73 |  58 | # Django stuff:
  74 |  59 | *.log
  75 |  60 | local_settings.py
  76 |  61 | db.sqlite3
  77 |  62 | db.sqlite3-journal
  78 |  63 | 
  79 |  64 | # Flask stuff:
  80 |  65 | instance/
  81 |  66 | .webassets-cache
  82 |  67 | 
  83 |  68 | # Scrapy stuff:
  84 |  69 | .scrapy
  85 |  70 | 
  86 |  71 | # Sphinx documentation
  87 |  72 | docs/_build/
  88 |  73 | 
  89 |  74 | # PyBuilder
  90 |  75 | .pybuilder/
  91 |  76 | target/
  92 |  77 | 
  93 |  78 | # Jupyter Notebook
  94 |  79 | .ipynb_checkpoints
  95 |  80 | 
  96 |  81 | # IPython
  97 |  82 | profile_default/
  98 |  83 | ipython_config.py
  99 |  84 | 
 100 |  85 | # pyenv
 101 |  86 | #   For a library or package, you might want to ignore these files since the code is
 102 |  87 | #   intended to run in multiple environments; otherwise, check them in:
 103 |  88 | # .python-version
 104 |  89 | 
 105 |  90 | # pipenv
 106 |  91 | #   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
 107 |  92 | #   However, in case of collaboration, if having platform-specific dependencies or dependencies
 108 |  93 | #   having no cross-platform support, pipenv may install dependencies that don't work, or not
 109 |  94 | #   install all needed dependencies.
 110 |  95 | #Pipfile.lock
 111 |  96 | 
 112 |  97 | # poetry
 113 |  98 | #   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
 114 |  99 | #   This is especially recommended for binary packages to ensure reproducibility, and is more
 115 | 100 | #   commonly ignored for libraries.
 116 | 101 | #   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
 117 | 102 | #poetry.lock
 118 | 103 | 
 119 | 104 | # pdm
 120 | 105 | #   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
 121 | 106 | #pdm.lock
 122 | 107 | #   pdm stores project-wide configurations in .pdm.toml, but it is recommended to not include it
 123 | 108 | #   in version control.
 124 | 109 | #   https://pdm.fming.dev/latest/usage/project/#working-with-version-control
 125 | 110 | .pdm.toml
 126 | 111 | .pdm-python
 127 | 112 | .pdm-build/
 128 | 113 | 
 129 | 114 | # PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
 130 | 115 | __pypackages__/
 131 | 116 | 
 132 | 117 | # Celery stuff
 133 | 118 | celerybeat-schedule
 134 | 119 | celerybeat.pid
 135 | 120 | 
 136 | 121 | # SageMath parsed files
 137 | 122 | *.sage.py
 138 | 123 | 
 139 | 124 | # Environments
 140 | 125 | .env
 141 | 126 | .venv
 142 | 127 | env/
 143 | 128 | venv/
 144 | 129 | ENV/
 145 | 130 | env.bak/
 146 | 131 | venv.bak/
 147 | 132 | 
 148 | 133 | # Spyder project settings
 149 | 134 | .spyderproject
 150 | 135 | .spyproject
 151 | 136 | 
 152 | 137 | # Rope project settings
 153 | 138 | .ropeproject
 154 | 139 | 
 155 | 140 | # mkdocs documentation
 156 | 141 | /site
 157 | 142 | 
 158 | 143 | # mypy
 159 | 144 | .mypy_cache/
 160 | 145 | .dmypy.json
 161 | 146 | dmypy.json
 162 | 147 | 
 163 | 148 | # Pyre type checker
 164 | 149 | .pyre/
 165 | 150 | 
 166 | 151 | # pytype static type analyzer
 167 | 152 | .pytype/
 168 | 153 | 
 169 | 154 | # Cython debug symbols
 170 | 155 | cython_debug/
 171 | 156 | 
 172 | 157 | # PyCharm
 173 | 158 | #  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
 174 | 159 | #  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
 175 | 160 | #  and can be added to the global gitignore or merged into this file.  For a more nuclear
 176 | 161 | #  option (not recommended) you can uncomment the following to ignore the entire idea folder.
 177 | 162 | #.idea/
 178 | 163 | 
 179 | 164 | .DS_Store
 180 | 165 | 
 181 | 166 | hack-sesh-files/
 182 | 167 | 
 183 | 168 | # Virtual Environment
 184 | 169 | .env
 185 | 170 | .venv
 186 | 171 | env/
 187 | 172 | venv/
 188 | 173 | ENV/
 189 | 174 | 
 190 | 175 | # VS Code
 191 | 176 | .vscode/*
 192 | 177 | !.vscode/launch.json
 193 | 178 | !.vscode/tasks.json
 194 | 179 | !.vscode/settings.json
 195 | 180 | 
 196 | 181 | # Logs
 197 | 182 | shared_logs/
 198 | 183 | *.log
 199 | 184 | 
 200 | 185 | # Output files
 201 | 186 | output.md
 202 | 187 | 
 203 | 188 | 
 204 | 189 | # Node modules directory
 205 | 190 | node_modules/
 206 | 191 | 
 207 | 192 | # Build output
 208 | 193 | dist/
 209 | 194 | 
 210 | 195 | # Logs and temp files
 211 | 196 | npm-debug.log*
 212 | 197 | yarn-debug.log*
 213 | 198 | yarn-error.log*
 214 | 199 | *.log
 215 | 200 | *.tmp
 216 | 201 | 
 217 | 202 | # OS / editor files
 218 | 203 | .DS_Store
 219 | 204 | Thumbs.db
 220 | 205 | .idea/
 221 | 206 | .vscode/
 222 | 207 | 
 223 | 
 224 | 
 225 | --------------------------------------------------------------------------------
 226 | /LICENSE:
 227 | --------------------------------------------------------------------------------
 228 |  1 | MIT License
 229 |  2 | 
 230 |  3 | Copyright (c) 2024 Dazza Greenwood
 231 |  4 | 
 232 |  5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 233 |  6 | of this software and associated documentation files (the "Software"), to deal
 234 |  7 | in the Software without restriction, including without limitation the rights
 235 |  8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 236 |  9 | copies of the Software, and to permit persons to whom the Software is
 237 | 10 | furnished to do so, subject to the following conditions:
 238 | 11 | 
 239 | 12 | The above copyright notice and this permission notice shall be included in all
 240 | 13 | copies or substantial portions of the Software.
 241 | 14 | 
 242 | 15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 243 | 16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 244 | 17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 245 | 18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 246 | 19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 247 | 20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 248 | 21 | SOFTWARE.
 249 | 22 | 
 250 | 
 251 | 
 252 | --------------------------------------------------------------------------------
 253 | /README.md:
 254 | --------------------------------------------------------------------------------
 255 |   1 | # Filesystem MCP Server
 256 |   2 | 
 257 |   3 | Node.js server implementing Model Context Protocol (MCP) for filesystem operations.  New phase 1 for MCP Hello.
 258 |   4 | 
 259 |   5 | ## Features
 260 |   6 | 
 261 |   7 | - Read/write files
 262 |   8 | - Create/list/delete directories
 263 |   9 | - Move files/directories
 264 |  10 | - Search files
 265 |  11 | - Get file metadata
 266 |  12 | 
 267 |  13 | **Note**: The server will only allow operations within directories specified via `args`.
 268 |  14 | 
 269 |  15 | ## API
 270 |  16 | 
 271 |  17 | ### Resources
 272 |  18 | 
 273 |  19 | - `file://system`: File system operations interface
 274 |  20 | 
 275 |  21 | ### Tools
 276 |  22 | 
 277 |  23 | - **read_file**
 278 |  24 |   - Read complete contents of a file
 279 |  25 |   - Input: `path` (string)
 280 |  26 |   - Reads complete file contents with UTF-8 encoding
 281 |  27 | 
 282 |  28 | - **read_multiple_files**
 283 |  29 |   - Read multiple files simultaneously
 284 |  30 |   - Input: `paths` (string[])
 285 |  31 |   - Failed reads won't stop the entire operation
 286 |  32 | 
 287 |  33 | - **write_file**
 288 |  34 |   - Create new file or overwrite existing (exercise caution with this)
 289 |  35 |   - Inputs:
 290 |  36 |     - `path` (string): File location
 291 |  37 |     - `content` (string): File content
 292 |  38 | 
 293 |  39 | - **edit_file**
 294 |  40 |   - Make selective edits using advanced pattern matching and formatting
 295 |  41 |   - Features:
 296 |  42 |     - Line-based and multi-line content matching
 297 |  43 |     - Whitespace normalization with indentation preservation
 298 |  44 |     - Fuzzy matching with confidence scoring
 299 |  45 |     - Multiple simultaneous edits with correct positioning
 300 |  46 |     - Indentation style detection and preservation
 301 |  47 |     - Git-style diff output with context
 302 |  48 |     - Preview changes with dry run mode
 303 |  49 |     - Failed match debugging with confidence scores
 304 |  50 |   - Inputs:
 305 |  51 |     - `path` (string): File to edit
 306 |  52 |     - `edits` (array): List of edit operations
 307 |  53 |       - `oldText` (string): Text to search for (can be substring)
 308 |  54 |       - `newText` (string): Text to replace with
 309 |  55 |     - `dryRun` (boolean): Preview changes without applying (default: false)
 310 |  56 |     - `options` (object): Optional formatting settings
 311 |  57 |       - `preserveIndentation` (boolean): Keep existing indentation (default: true)
 312 |  58 |       - `normalizeWhitespace` (boolean): Normalize spaces while preserving structure (default: true)
 313 |  59 |       - `partialMatch` (boolean): Enable fuzzy matching (default: true)
 314 |  60 |   - Returns detailed diff and match information for dry runs, otherwise applies changes
 315 |  61 |   - Best Practice: Always use dryRun first to preview changes before applying them
 316 |  62 | 
 317 |  63 | - **create_directory**
 318 |  64 |   - Create new directory or ensure it exists
 319 |  65 |   - Input: `path` (string)
 320 |  66 |   - Creates parent directories if needed
 321 |  67 |   - Succeeds silently if directory exists
 322 |  68 | 
 323 |  69 | - **list_directory**
 324 |  70 |   - List directory contents with [FILE] or [DIR] prefixes
 325 |  71 |   - Input: `path` (string)
 326 |  72 | 
 327 |  73 | - **move_file**
 328 |  74 |   - Move or rename files and directories
 329 |  75 |   - Inputs:
 330 |  76 |     - `source` (string)
 331 |  77 |     - `destination` (string)
 332 |  78 |   - Fails if destination exists
 333 |  79 | 
 334 |  80 | - **search_files**
 335 |  81 |   - Recursively search for files/directories
 336 |  82 |   - Inputs:
 337 |  83 |     - `path` (string): Starting directory
 338 |  84 |     - `pattern` (string): Search pattern
 339 |  85 |     - `excludePatterns` (string[]): Exclude any patterns. Glob formats are supported.
 340 |  86 |   - Case-insensitive matching
 341 |  87 |   - Returns full paths to matches
 342 |  88 | 
 343 |  89 | - **get_file_info**
 344 |  90 |   - Get detailed file/directory metadata
 345 |  91 |   - Input: `path` (string)
 346 |  92 |   - Returns:
 347 |  93 |     - Size
 348 |  94 |     - Creation time
 349 |  95 |     - Modified time
 350 |  96 |     - Access time
 351 |  97 |     - Type (file/directory)
 352 |  98 |     - Permissions
 353 |  99 | 
 354 | 100 | - **list_allowed_directories**
 355 | 101 |   - List all directories the server is allowed to access
 356 | 102 |   - No input required
 357 | 103 |   - Returns:
 358 | 104 |     - Directories that this server can read/write from
 359 | 105 | 
 360 | 106 | ## Usage with Claude Desktop
 361 | 107 | Add this to your `claude_desktop_config.json`:
 362 | 108 | ```json
 363 | 109 | {
 364 | 110 |   "mcpServers": {
 365 | 111 |     "filesystem": {
 366 | 112 |       "command": "npx",
 367 | 113 |       "args": [
 368 | 114 |         "-y",
 369 | 115 |         "@modelcontextprotocol/server-filesystem",
 370 | 116 |         "/Users/username/Desktop",
 371 | 117 |         "/path/to/other/allowed/dir"
 372 | 118 |       ]
 373 | 119 |     }
 374 | 120 |   }
 375 | 121 | }
 376 | 122 | ```
 377 | 123 | 
 378 | 124 | ## License
 379 | 125 | 
 380 | 126 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
 381 | 
 382 | 
 383 | --------------------------------------------------------------------------------
 384 | /claude_desktop_config.json:
 385 | --------------------------------------------------------------------------------
 386 |  1 | {
 387 |  2 |   "mcpServers": {
 388 |  3 |     "filesystem": {
 389 |  4 |       "command": "/usr/local/bin/node",
 390 |  5 |       "args": [
 391 |  6 |         "/Users/dazzagreenwood/filesystem/dist/index.js",
 392 |  7 |         "/Users/dazzagreenwood/mcp-hello/module1/files"
 393 |  8 |       ]
 394 |  9 |     }
 395 | 10 |   }
 396 | 11 | }
 397 | 12 | 
 398 | 
 399 | 
 400 | --------------------------------------------------------------------------------
 401 | /index.ts:
 402 | --------------------------------------------------------------------------------
 403 |   1 | #!/usr/bin/env node
 404 |   2 | 
 405 |   3 | import { Server } from "@modelcontextprotocol/sdk/server/index.js";
 406 |   4 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
 407 |   5 | import {
 408 |   6 |   CallToolRequestSchema,
 409 |   7 |   ListToolsRequestSchema
 410 |   8 | } from "@modelcontextprotocol/sdk/types.js";
 411 |   9 | import fs from "fs/promises";
 412 |  10 | import path from "path";
 413 |  11 | import os from "os";
 414 |  12 | import { z } from "zod";
 415 |  13 | import { zodToJsonSchema } from "zod-to-json-schema";
 416 |  14 | import { createTwoFilesPatch } from "diff";
 417 |  15 | import { minimatch } from "minimatch";
 418 |  16 | 
 419 |  17 | // Enhanced Directory Listing Schema with recursive option
 420 |  18 | const ListDirectoryArgsSchema = z.object({
 421 |  19 |   path: z.string(),
 422 |  20 |   recursive: z.boolean().optional().default(false),
 423 |  21 | });
 424 |  22 | 
 425 |  23 | const args = process.argv.slice(2);
 426 |  24 | if (args.length === 0) {
 427 |  25 |   console.error("Usage: mcp-server-filesystem <allowed-directory> [additional-directories...]");
 428 |  26 |   process.exit(1);
 429 |  27 | }
 430 |  28 | 
 431 |  29 | function normalizePath(p: string): string {
 432 |  30 |   return path.normalize(p);
 433 |  31 | }
 434 |  32 | 
 435 |  33 | function expandHome(filepath: string): string {
 436 |  34 |   if (filepath === "~" || filepath.startsWith("~/")) {
 437 |  35 |     return path.join(os.homedir(), filepath.slice(1));
 438 |  36 |   }
 439 |  37 |   return filepath;
 440 |  38 | }
 441 |  39 | 
 442 |  40 | const allowedDirectories = args.map((dir) =>
 443 |  41 |   normalizePath(path.resolve(expandHome(dir)))
 444 |  42 | );
 445 |  43 | 
 446 |  44 | // Validate allowed directories
 447 |  45 | await Promise.all(
 448 |  46 |   allowedDirectories.map(async (dir) => {
 449 |  47 |     try {
 450 |  48 |       const stats = await fs.stat(dir);
 451 |  49 |       if (!stats.isDirectory()) {
 452 |  50 |         console.error(`Error: ${dir} is not a directory`);
 453 |  51 |         process.exit(1);
 454 |  52 |       }
 455 |  53 |     } catch (error) {
 456 |  54 |       console.error(`Error accessing directory ${dir}:`, error);
 457 |  55 |       process.exit(1);
 458 |  56 |     }
 459 |  57 |   }),
 460 |  58 | );
 461 |  59 | 
 462 |  60 | async function validatePath(requestedPath: string): Promise<string> {
 463 |  61 |   const expandedPath = expandHome(requestedPath);
 464 |  62 |   const absolute = path.isAbsolute(expandedPath)
 465 |  63 |     ? path.resolve(expandedPath)
 466 |  64 |     : path.resolve(process.cwd(), expandedPath);
 467 |  65 | 
 468 |  66 |   const normalizedRequested = normalizePath(absolute);
 469 |  67 | 
 470 |  68 |   const isAllowed = allowedDirectories.some((dir) =>
 471 |  69 |     normalizedRequested.startsWith(dir)
 472 |  70 |   );
 473 |  71 |   if (!isAllowed) {
 474 |  72 |     throw new Error(`Access denied - path outside allowed directories: ${absolute}`);
 475 |  73 |   }
 476 |  74 | 
 477 |  75 |   try {
 478 |  76 |     const realPath = await fs.realpath(absolute);
 479 |  77 |     const normalizedReal = normalizePath(realPath);
 480 |  78 |     const isRealPathAllowed = allowedDirectories.some((dir) =>
 481 |  79 |       normalizedReal.startsWith(dir)
 482 |  80 |     );
 483 |  81 |     if (!isRealPathAllowed) {
 484 |  82 |       throw new Error("Access denied - symlink target outside allowed directories");
 485 |  83 |     }
 486 |  84 |     return realPath;
 487 |  85 |   } catch (error) {
 488 |  86 |     const parentDir = path.dirname(absolute);
 489 |  87 |     try {
 490 |  88 |       const realParentPath = await fs.realpath(parentDir);
 491 |  89 |       const normalizedParent = normalizePath(realParentPath);
 492 |  90 |       const isParentAllowed = allowedDirectories.some((dir) =>
 493 |  91 |         normalizedParent.startsWith(dir)
 494 |  92 |       );
 495 |  93 |       if (!isParentAllowed) {
 496 |  94 |         throw new Error("Access denied - parent directory outside allowed directories");
 497 |  95 |       }
 498 |  96 |       return absolute;
 499 |  97 |     } catch {
 500 |  98 |       throw new Error(`Parent directory does not exist: ${parentDir}`);
 501 |  99 |     }
 502 | 100 |   }
 503 | 101 | }
 504 | 102 | 
 505 | 103 | const ReadFileArgsSchema = z.object({ path: z.string() });
 506 | 104 | const ReadMultipleFilesArgsSchema = z.object({ paths: z.array(z.string()) });
 507 | 105 | const WriteFileArgsSchema = z.object({ path: z.string(), content: z.string() });
 508 | 106 | 
 509 | 107 | const EditOperation = z.object({
 510 | 108 |   oldText: z.string().describe("Text to search for - must match exactly"),
 511 | 109 |   newText: z.string().describe("Text to replace with"),
 512 | 110 | });
 513 | 111 | const EditFileArgsSchema = z.object({
 514 | 112 |   path: z.string(),
 515 | 113 |   edits: z.array(EditOperation),
 516 | 114 |   dryRun: z.boolean().default(false),
 517 | 115 | });
 518 | 116 | 
 519 | 117 | const CreateDirectoryArgsSchema = z.object({ path: z.string() });
 520 | 118 | const DirectoryTreeArgsSchema = z.object({ path: z.string() });
 521 | 119 | const MoveFileArgsSchema = z.object({ source: z.string(), destination: z.string() });
 522 | 120 | const SearchFilesArgsSchema = z.object({
 523 | 121 |   path: z.string(),
 524 | 122 |   pattern: z.string(),
 525 | 123 |   excludePatterns: z.array(z.string()).optional().default([]),
 526 | 124 | });
 527 | 125 | const GetFileInfoArgsSchema = z.object({ path: z.string() });
 528 | 126 | 
 529 | 127 | interface FileInfo {
 530 | 128 |   size: number;
 531 | 129 |   created: Date;
 532 | 130 |   modified: Date;
 533 | 131 |   accessed: Date;
 534 | 132 |   isDirectory: boolean;
 535 | 133 |   isFile: boolean;
 536 | 134 |   permissions: string;
 537 | 135 | }
 538 | 136 | 
 539 | 137 | const server = new Server(
 540 | 138 |   { name: "secure-filesystem-server", version: "0.6.2" },
 541 | 139 |   { capabilities: { tools: {}, resources: {} } }
 542 | 140 | );
 543 | 141 | 
 544 | 142 | async function getFileStats(filePath: string): Promise<FileInfo> {
 545 | 143 |   const stats = await fs.stat(filePath);
 546 | 144 |   return {
 547 | 145 |     size: stats.size,
 548 | 146 |     created: stats.birthtime,
 549 | 147 |     modified: stats.mtime,
 550 | 148 |     accessed: stats.atime,
 551 | 149 |     isDirectory: stats.isDirectory(),
 552 | 150 |     isFile: stats.isFile(),
 553 | 151 |     permissions: stats.mode.toString(8).slice(-3),
 554 | 152 |   };
 555 | 153 | }
 556 | 154 | 
 557 | 155 | function normalizeLineEndings(text: string): string {
 558 | 156 |   return text.replace(/\r\n/g, "\n");
 559 | 157 | }
 560 | 158 | 
 561 | 159 | function createUnifiedDiff(
 562 | 160 |   originalContent: string,
 563 | 161 |   newContent: string,
 564 | 162 |   filepath: string = "file"
 565 | 163 | ): string {
 566 | 164 |   const normalizedOriginal = normalizeLineEndings(originalContent);
 567 | 165 |   const normalizedNew = normalizeLineEndings(newContent);
 568 | 166 |   return createTwoFilesPatch(
 569 | 167 |     filepath,
 570 | 168 |     filepath,
 571 | 169 |     normalizedOriginal,
 572 | 170 |     normalizedNew,
 573 | 171 |     "original",
 574 | 172 |     "modified"
 575 | 173 |   );
 576 | 174 | }
 577 | 175 | 
 578 | 176 | async function applyFileEdits(
 579 | 177 |   filePath: string,
 580 | 178 |   edits: Array<{ oldText: string; newText: string }>,
 581 | 179 |   dryRun = false
 582 | 180 | ): Promise<string> {
 583 | 181 |   const content = normalizeLineEndings(await fs.readFile(filePath, "utf-8"));
 584 | 182 |   let modifiedContent = content;
 585 | 183 | 
 586 | 184 |   for (const edit of edits) {
 587 | 185 |     const oldText = normalizeLineEndings(edit.oldText);
 588 | 186 |     const newText = normalizeLineEndings(edit.newText);
 589 | 187 | 
 590 | 188 |     if (modifiedContent.includes(oldText)) {
 591 | 189 |       modifiedContent = modifiedContent.replace(oldText, newText);
 592 | 190 |     }
 593 | 191 |   }
 594 | 192 | 
 595 | 193 |   const diff = createUnifiedDiff(content, modifiedContent, filePath);
 596 | 194 |   if (!dryRun) {
 597 | 195 |     await fs.writeFile(filePath, modifiedContent, "utf-8");
 598 | 196 |   }
 599 | 197 |   return diff;
 600 | 198 | }
 601 | 199 | 
 602 | 200 | async function* readDirectoryRecursively(dirPath: string): AsyncGenerator<string> {
 603 | 201 |   const entries = await fs.readdir(dirPath, { withFileTypes: true });
 604 | 202 |   for (const entry of entries) {
 605 | 203 |     const fullPath = path.join(dirPath, entry.name);
 606 | 204 |     if (entry.isDirectory()) {
 607 | 205 |       yield `[DIR] ${fullPath}`;
 608 | 206 |       yield* readDirectoryRecursively(fullPath);
 609 | 207 |     } else {
 610 | 208 |       yield `[FILE] ${fullPath}`;
 611 | 209 |     }
 612 | 210 |   }
 613 | 211 | }
 614 | 212 | 
 615 | 213 | async function listDirectoryRecursive(dirPath: string): Promise<string[]> {
 616 | 214 |   const entries: string[] = [];
 617 | 215 |   for await (const entry of readDirectoryRecursively(dirPath)) {
 618 | 216 |     entries.push(entry);
 619 | 217 |   }
 620 | 218 |   return entries;
 621 | 219 | }
 622 | 220 | 
 623 | 221 | async function listDirectory(dirPath: string, recursive: boolean): Promise<string[]> {
 624 | 222 |   if (!recursive) {
 625 | 223 |     const entries = await fs.readdir(dirPath, { withFileTypes: true });
 626 | 224 |     return entries.map((entry) =>
 627 | 225 |       entry.isDirectory() ? `[DIR] ${entry.name}` : `[FILE] ${entry.name}`
 628 | 226 |     );
 629 | 227 |   } else {
 630 | 228 |     return await listDirectoryRecursive(dirPath);
 631 | 229 |   }
 632 | 230 | }
 633 | 231 | 
 634 | 232 | server.setRequestHandler(ListToolsRequestSchema, async () => ({
 635 | 233 |   tools: [
 636 | 234 |     {
 637 | 235 |       name: "read_file",
 638 | 236 |       description:
 639 | 237 |         "Read the complete contents of a file from the filesystem. Only works within allowed directories.",
 640 | 238 |       inputSchema: zodToJsonSchema(ReadFileArgsSchema),
 641 | 239 |     },
 642 | 240 |     {
 643 | 241 |       name: "read_multiple_files",
 644 | 242 |       description:
 645 | 243 |         "Read contents of multiple files simultaneously. Only works within allowed directories.",
 646 | 244 |       inputSchema: zodToJsonSchema(ReadMultipleFilesArgsSchema),
 647 | 245 |     },
 648 | 246 |     {
 649 | 247 |       name: "write_file",
 650 | 248 |       description:
 651 | 249 |         "Write or overwrite file contents. Only works within allowed directories.",
 652 | 250 |       inputSchema: zodToJsonSchema(WriteFileArgsSchema),
 653 | 251 |     },
 654 | 252 |     {
 655 | 253 |       name: "edit_file",
 656 | 254 |       description:
 657 | 255 |         "Perform line-based edits to a file and return a git-style diff of changes. Only works within allowed directories.",
 658 | 256 |       inputSchema: zodToJsonSchema(EditFileArgsSchema),
 659 | 257 |     },
 660 | 258 |     {
 661 | 259 |       name: "create_directory",
 662 | 260 |       description:
 663 | 261 |         "Create a directory (and parents if needed). Only works within allowed directories.",
 664 | 262 |       inputSchema: zodToJsonSchema(CreateDirectoryArgsSchema),
 665 | 263 |     },
 666 | 264 |     {
 667 | 265 |       name: "list_directory",
 668 | 266 |       description:
 669 | 267 |         "List files and directories in a given path. If recursive=true, lists entire subtree. Only works within allowed directories.",
 670 | 268 |       inputSchema: zodToJsonSchema(ListDirectoryArgsSchema),
 671 | 269 |     },
 672 | 270 |     {
 673 | 271 |       name: "directory_tree",
 674 | 272 |       description:
 675 | 273 |         "Get a recursive listing of all files and directories from a given path. Only works within allowed directories.",
 676 | 274 |       inputSchema: zodToJsonSchema(DirectoryTreeArgsSchema),
 677 | 275 |     },
 678 | 276 |     {
 679 | 277 |       name: "move_file",
 680 | 278 |       description:
 681 | 279 |         "Move or rename a file or directory. Only works within allowed directories.",
 682 | 280 |       inputSchema: zodToJsonSchema(MoveFileArgsSchema),
 683 | 281 |     },
 684 | 282 |     {
 685 | 283 |       name: "search_files",
 686 | 284 |       description:
 687 | 285 |         "Recursively search for files and directories matching a pattern. Not fully implemented. Only works within allowed directories.",
 688 | 286 |       inputSchema: zodToJsonSchema(SearchFilesArgsSchema),
 689 | 287 |     },
 690 | 288 |     {
 691 | 289 |       name: "get_file_info",
 692 | 290 |       description:
 693 | 291 |         "Get metadata about a file or directory. Only works within allowed directories.",
 694 | 292 |       inputSchema: zodToJsonSchema(GetFileInfoArgsSchema),
 695 | 293 |     },
 696 | 294 |     {
 697 | 295 |       name: "list_allowed_directories",
 698 | 296 |       description: "List directories that this server can access.",
 699 | 297 |       inputSchema: { type: "object", properties: {}, required: [] },
 700 | 298 |     },
 701 | 299 |   ],
 702 | 300 | }));
 703 | 301 | 
 704 | 302 | server.setRequestHandler(CallToolRequestSchema, async (request) => {
 705 | 303 |   try {
 706 | 304 |     const { name, arguments: args } = request.params;
 707 | 305 |     switch (name) {
 708 | 306 |       case "read_file": {
 709 | 307 |         const parsed = ReadFileArgsSchema.safeParse(args);
 710 | 308 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
 711 | 309 |         const validPath = await validatePath(parsed.data.path);
 712 | 310 |         const content = await fs.readFile(validPath, "utf-8");
 713 | 311 |         return { content: [{ type: "text", text: content }] };
 714 | 312 |       }
 715 | 313 | 
 716 | 314 |       case "read_multiple_files": {
 717 | 315 |         const parsed = ReadMultipleFilesArgsSchema.safeParse(args);
 718 | 316 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
 719 | 317 |         const results = await Promise.all(
 720 | 318 |           parsed.data.paths.map(async (p) => {
 721 | 319 |             try {
 722 | 320 |               const vp = await validatePath(p);
 723 | 321 |               const c = await fs.readFile(vp, "utf-8");
 724 | 322 |               return `${p}:\n${c}`;
 725 | 323 |             } catch (err) {
 726 | 324 |               return `${p}: Error - ${err instanceof Error ? err.message : String(err)}`;
 727 | 325 |             }
 728 | 326 |           })
 729 | 327 |         );
 730 | 328 |         return { content: [{ type: "text", text: results.join("\n---\n") }] };
 731 | 329 |       }
 732 | 330 | 
 733 | 331 |       case "write_file": {
 734 | 332 |         const parsed = WriteFileArgsSchema.safeParse(args);
 735 | 333 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
 736 | 334 |         const vp = await validatePath(parsed.data.path);
 737 | 335 |         await fs.writeFile(vp, parsed.data.content, "utf-8");
 738 | 336 |         return { content: [{ type: "text", text: `Wrote to ${parsed.data.path}` }] };
 739 | 337 |       }
 740 | 338 | 
 741 | 339 |       case "edit_file": {
 742 | 340 |         const parsed = EditFileArgsSchema.safeParse(args);
 743 | 341 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
 744 | 342 |         const vp = await validatePath(parsed.data.path);
 745 | 343 |         const diff = await applyFileEdits(vp, parsed.data.edits, parsed.data.dryRun);
 746 | 344 |         return { content: [{ type: "text", text: diff }] };
 747 | 345 |       }
 748 | 346 | 
 749 | 347 |       case "create_directory": {
 750 | 348 |         const parsed = CreateDirectoryArgsSchema.safeParse(args);
 751 | 349 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
 752 | 350 |         const vp = await validatePath(parsed.data.path);
 753 | 351 |         await fs.mkdir(vp, { recursive: true });
 754 | 352 |         return { content: [{ type: "text", text: `Created directory ${parsed.data.path}` }] };
 755 | 353 |       }
 756 | 354 | 
 757 | 355 |       case "list_directory": {
 758 | 356 |         const parsed = ListDirectoryArgsSchema.safeParse(args);
 759 | 357 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
 760 | 358 |         const vp = await validatePath(parsed.data.path);
 761 | 359 |         const entries = await listDirectory(vp, parsed.data.recursive || false);
 762 | 360 |         return { content: [{ type: "text", text: entries.join("\n") }] };
 763 | 361 |       }
 764 | 362 | 
 765 | 363 |       case "directory_tree": {
 766 | 364 |         const parsed = DirectoryTreeArgsSchema.safeParse(args);
 767 | 365 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
 768 | 366 |         const vp = await validatePath(parsed.data.path);
 769 | 367 |         const entries = await listDirectoryRecursive(vp);
 770 | 368 |         return { content: [{ type: "text", text: entries.join("\n") }] };
 771 | 369 |       }
 772 | 370 | 
 773 | 371 |       case "move_file": {
 774 | 372 |         const parsed = MoveFileArgsSchema.safeParse(args);
 775 | 373 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
 776 | 374 |         const src = await validatePath(parsed.data.source);
 777 | 375 |         const dst = await validatePath(parsed.data.destination);
 778 | 376 |         await fs.rename(src, dst);
 779 | 377 |         return { content: [{ type: "text", text: `Moved ${parsed.data.source} to ${parsed.data.destination}` }] };
 780 | 378 |       }
 781 | 379 | 
 782 | 380 |       case "search_files":
 783 | 381 |         // Not fully implemented. Could be implemented using glob or minimatch logic.
 784 | 382 |         return { content: [{ type: "text", text: "Search not implemented." }] };
 785 | 383 | 
 786 | 384 |       case "get_file_info": {
 787 | 385 |         const parsed = GetFileInfoArgsSchema.safeParse(args);
 788 | 386 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
 789 | 387 |         const vp = await validatePath(parsed.data.path);
 790 | 388 |         const info = await getFileStats(vp);
 791 | 389 |         const infoText = Object.entries(info)
 792 | 390 |           .map(([k, v]) => `${k}: ${v}`)
 793 | 391 |           .join("\n");
 794 | 392 |         return { content: [{ type: "text", text: infoText }] };
 795 | 393 |       }
 796 | 394 | 
 797 | 395 |       case "list_allowed_directories":
 798 | 396 |         return { content: [{ type: "text", text: allowedDirectories.join("\n") }] };
 799 | 397 | 
 800 | 398 |       default:
 801 | 399 |         return { content: [{ type: "text", text: `Unknown tool: ${name}` }], isError: true };
 802 | 400 |     }
 803 | 401 |   } catch (error) {
 804 | 402 |     const msg = error instanceof Error ? error.message : String(error);
 805 | 403 |     return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
 806 | 404 |   }
 807 | 405 | });
 808 | 406 | 
 809 | 407 | async function runServer() {
 810 | 408 |   const transport = new StdioServerTransport();
 811 | 409 |   await server.connect(transport);
 812 | 410 |   console.error("Secure File System MCP Server running on stdio");
 813 | 411 | }
 814 | 412 | 
 815 | 413 | runServer().catch((error) => {
 816 | 414 |   console.error("Fatal error running server:", error);
 817 | 415 |   process.exit(1);
 818 | 416 | });
 819 | 
 820 | 
 821 | --------------------------------------------------------------------------------
 822 | /package-lock.json:
 823 | --------------------------------------------------------------------------------
 824 |   1 | {
 825 |   2 |   "name": "mcp-server-filesystem",
 826 |   3 |   "version": "0.6.2",
 827 |   4 |   "lockfileVersion": 3,
 828 |   5 |   "requires": true,
 829 |   6 |   "packages": {
 830 |   7 |     "": {
 831 |   8 |       "name": "mcp-server-filesystem",
 832 |   9 |       "version": "0.6.2",
 833 |  10 |       "dependencies": {
 834 |  11 |         "@modelcontextprotocol/sdk": "^1.0.3",
 835 |  12 |         "diff": "^5.1.0",
 836 |  13 |         "minimatch": "^10.0.1",
 837 |  14 |         "zod": "^3.22.4",
 838 |  15 |         "zod-to-json-schema": "^3.20.7"
 839 |  16 |       },
 840 |  17 |       "bin": {
 841 |  18 |         "mcp-server-filesystem": "dist/index.js"
 842 |  19 |       },
 843 |  20 |       "devDependencies": {
 844 |  21 |         "@types/diff": "^6.0.0",
 845 |  22 |         "@types/node": "^20.11.0",
 846 |  23 |         "typescript": "^5.3.3"
 847 |  24 |       }
 848 |  25 |     },
 849 |  26 |     "node_modules/@modelcontextprotocol/sdk": {
 850 |  27 |       "version": "1.0.3",
 851 |  28 |       "resolved": "https://registry.npmjs.org/@modelcontextprotocol/sdk/-/sdk-1.0.3.tgz",
 852 |  29 |       "integrity": "sha512-2as3cX/VJ0YBHGmdv3GFyTpoM8q2gqE98zh3Vf1NwnsSY0h3mvoO07MUzfygCKkWsFjcZm4otIiqD6Xh7kiSBQ==",
 853 |  30 |       "license": "MIT",
 854 |  31 |       "dependencies": {
 855 |  32 |         "content-type": "^1.0.5",
 856 |  33 |         "raw-body": "^3.0.0",
 857 |  34 |         "zod": "^3.23.8"
 858 |  35 |       }
 859 |  36 |     },
 860 |  37 |     "node_modules/@types/diff": {
 861 |  38 |       "version": "6.0.0",
 862 |  39 |       "resolved": "https://registry.npmjs.org/@types/diff/-/diff-6.0.0.tgz",
 863 |  40 |       "integrity": "sha512-dhVCYGv3ZSbzmQaBSagrv1WJ6rXCdkyTcDyoNu1MD8JohI7pR7k8wdZEm+mvdxRKXyHVwckFzWU1vJc+Z29MlA==",
 864 |  41 |       "dev": true,
 865 |  42 |       "license": "MIT"
 866 |  43 |     },
 867 |  44 |     "node_modules/@types/node": {
 868 |  45 |       "version": "20.17.10",
 869 |  46 |       "resolved": "https://registry.npmjs.org/@types/node/-/node-20.17.10.tgz",
 870 |  47 |       "integrity": "sha512-/jrvh5h6NXhEauFFexRin69nA0uHJ5gwk4iDivp/DeoEua3uwCUto6PC86IpRITBOs4+6i2I56K5x5b6WYGXHA==",
 871 |  48 |       "dev": true,
 872 |  49 |       "license": "MIT",
 873 |  50 |       "dependencies": {
 874 |  51 |         "undici-types": "~6.19.2"
 875 |  52 |       }
 876 |  53 |     },
 877 |  54 |     "node_modules/balanced-match": {
 878 |  55 |       "version": "1.0.2",
 879 |  56 |       "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
 880 |  57 |       "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
 881 |  58 |       "license": "MIT"
 882 |  59 |     },
 883 |  60 |     "node_modules/brace-expansion": {
 884 |  61 |       "version": "2.0.1",
 885 |  62 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
 886 |  63 |       "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
 887 |  64 |       "license": "MIT",
 888 |  65 |       "dependencies": {
 889 |  66 |         "balanced-match": "^1.0.0"
 890 |  67 |       }
 891 |  68 |     },
 892 |  69 |     "node_modules/bytes": {
 893 |  70 |       "version": "3.1.2",
 894 |  71 |       "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
 895 |  72 |       "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
 896 |  73 |       "license": "MIT",
 897 |  74 |       "engines": {
 898 |  75 |         "node": ">= 0.8"
 899 |  76 |       }
 900 |  77 |     },
 901 |  78 |     "node_modules/content-type": {
 902 |  79 |       "version": "1.0.5",
 903 |  80 |       "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
 904 |  81 |       "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
 905 |  82 |       "license": "MIT",
 906 |  83 |       "engines": {
 907 |  84 |         "node": ">= 0.6"
 908 |  85 |       }
 909 |  86 |     },
 910 |  87 |     "node_modules/depd": {
 911 |  88 |       "version": "2.0.0",
 912 |  89 |       "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
 913 |  90 |       "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
 914 |  91 |       "license": "MIT",
 915 |  92 |       "engines": {
 916 |  93 |         "node": ">= 0.8"
 917 |  94 |       }
 918 |  95 |     },
 919 |  96 |     "node_modules/diff": {
 920 |  97 |       "version": "5.2.0",
 921 |  98 |       "resolved": "https://registry.npmjs.org/diff/-/diff-5.2.0.tgz",
 922 |  99 |       "integrity": "sha512-uIFDxqpRZGZ6ThOk84hEfqWoHx2devRFvpTZcTHur85vImfaxUbTW9Ryh4CpCuDnToOP1CEtXKIgytHBPVff5A==",
 923 | 100 |       "license": "BSD-3-Clause",
 924 | 101 |       "engines": {
 925 | 102 |         "node": ">=0.3.1"
 926 | 103 |       }
 927 | 104 |     },
 928 | 105 |     "node_modules/http-errors": {
 929 | 106 |       "version": "2.0.0",
 930 | 107 |       "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
 931 | 108 |       "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
 932 | 109 |       "license": "MIT",
 933 | 110 |       "dependencies": {
 934 | 111 |         "depd": "2.0.0",
 935 | 112 |         "inherits": "2.0.4",
 936 | 113 |         "setprototypeof": "1.2.0",
 937 | 114 |         "statuses": "2.0.1",
 938 | 115 |         "toidentifier": "1.0.1"
 939 | 116 |       },
 940 | 117 |       "engines": {
 941 | 118 |         "node": ">= 0.8"
 942 | 119 |       }
 943 | 120 |     },
 944 | 121 |     "node_modules/iconv-lite": {
 945 | 122 |       "version": "0.6.3",
 946 | 123 |       "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
 947 | 124 |       "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
 948 | 125 |       "license": "MIT",
 949 | 126 |       "dependencies": {
 950 | 127 |         "safer-buffer": ">= 2.1.2 < 3.0.0"
 951 | 128 |       },
 952 | 129 |       "engines": {
 953 | 130 |         "node": ">=0.10.0"
 954 | 131 |       }
 955 | 132 |     },
 956 | 133 |     "node_modules/inherits": {
 957 | 134 |       "version": "2.0.4",
 958 | 135 |       "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
 959 | 136 |       "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
 960 | 137 |       "license": "ISC"
 961 | 138 |     },
 962 | 139 |     "node_modules/minimatch": {
 963 | 140 |       "version": "10.0.1",
 964 | 141 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.0.1.tgz",
 965 | 142 |       "integrity": "sha512-ethXTt3SGGR+95gudmqJ1eNhRO7eGEGIgYA9vnPatK4/etz2MEVDno5GMCibdMTuBMyElzIlgxMna3K94XDIDQ==",
 966 | 143 |       "license": "ISC",
 967 | 144 |       "dependencies": {
 968 | 145 |         "brace-expansion": "^2.0.1"
 969 | 146 |       },
 970 | 147 |       "engines": {
 971 | 148 |         "node": "20 || >=22"
 972 | 149 |       },
 973 | 150 |       "funding": {
 974 | 151 |         "url": "https://github.com/sponsors/isaacs"
 975 | 152 |       }
 976 | 153 |     },
 977 | 154 |     "node_modules/raw-body": {
 978 | 155 |       "version": "3.0.0",
 979 | 156 |       "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.0.tgz",
 980 | 157 |       "integrity": "sha512-RmkhL8CAyCRPXCE28MMH0z2PNWQBNk2Q09ZdxM9IOOXwxwZbN+qbWaatPkdkWIKL2ZVDImrN/pK5HTRz2PcS4g==",
 981 | 158 |       "license": "MIT",
 982 | 159 |       "dependencies": {
 983 | 160 |         "bytes": "3.1.2",
 984 | 161 |         "http-errors": "2.0.0",
 985 | 162 |         "iconv-lite": "0.6.3",
 986 | 163 |         "unpipe": "1.0.0"
 987 | 164 |       },
 988 | 165 |       "engines": {
 989 | 166 |         "node": ">= 0.8"
 990 | 167 |       }
 991 | 168 |     },
 992 | 169 |     "node_modules/safer-buffer": {
 993 | 170 |       "version": "2.1.2",
 994 | 171 |       "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
 995 | 172 |       "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
 996 | 173 |       "license": "MIT"
 997 | 174 |     },
 998 | 175 |     "node_modules/setprototypeof": {
 999 | 176 |       "version": "1.2.0",
1000 | 177 |       "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
1001 | 178 |       "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
1002 | 179 |       "license": "ISC"
1003 | 180 |     },
1004 | 181 |     "node_modules/statuses": {
1005 | 182 |       "version": "2.0.1",
1006 | 183 |       "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
1007 | 184 |       "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
1008 | 185 |       "license": "MIT",
1009 | 186 |       "engines": {
1010 | 187 |         "node": ">= 0.8"
1011 | 188 |       }
1012 | 189 |     },
1013 | 190 |     "node_modules/toidentifier": {
1014 | 191 |       "version": "1.0.1",
1015 | 192 |       "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
1016 | 193 |       "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
1017 | 194 |       "license": "MIT",
1018 | 195 |       "engines": {
1019 | 196 |         "node": ">=0.6"
1020 | 197 |       }
1021 | 198 |     },
1022 | 199 |     "node_modules/typescript": {
1023 | 200 |       "version": "5.7.2",
1024 | 201 |       "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.7.2.tgz",
1025 | 202 |       "integrity": "sha512-i5t66RHxDvVN40HfDd1PsEThGNnlMCMT3jMUuoh9/0TaqWevNontacunWyN02LA9/fIbEWlcHZcgTKb9QoaLfg==",
1026 | 203 |       "dev": true,
1027 | 204 |       "license": "Apache-2.0",
1028 | 205 |       "bin": {
1029 | 206 |         "tsc": "bin/tsc",
1030 | 207 |         "tsserver": "bin/tsserver"
1031 | 208 |       },
1032 | 209 |       "engines": {
1033 | 210 |         "node": ">=14.17"
1034 | 211 |       }
1035 | 212 |     },
1036 | 213 |     "node_modules/undici-types": {
1037 | 214 |       "version": "6.19.8",
1038 | 215 |       "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.19.8.tgz",
1039 | 216 |       "integrity": "sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw==",
1040 | 217 |       "dev": true,
1041 | 218 |       "license": "MIT"
1042 | 219 |     },
1043 | 220 |     "node_modules/unpipe": {
1044 | 221 |       "version": "1.0.0",
1045 | 222 |       "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
1046 | 223 |       "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
1047 | 224 |       "license": "MIT",
1048 | 225 |       "engines": {
1049 | 226 |         "node": ">= 0.8"
1050 | 227 |       }
1051 | 228 |     },
1052 | 229 |     "node_modules/zod": {
1053 | 230 |       "version": "3.24.1",
1054 | 231 |       "resolved": "https://registry.npmjs.org/zod/-/zod-3.24.1.tgz",
1055 | 232 |       "integrity": "sha512-muH7gBL9sI1nciMZV67X5fTKKBLtwpZ5VBp1vsOQzj1MhrBZ4wlVCm3gedKZWLp0Oyel8sIGfeiz54Su+OVT+A==",
1056 | 233 |       "license": "MIT",
1057 | 234 |       "funding": {
1058 | 235 |         "url": "https://github.com/sponsors/colinhacks"
1059 | 236 |       }
1060 | 237 |     },
1061 | 238 |     "node_modules/zod-to-json-schema": {
1062 | 239 |       "version": "3.24.1",
1063 | 240 |       "resolved": "https://registry.npmjs.org/zod-to-json-schema/-/zod-to-json-schema-3.24.1.tgz",
1064 | 241 |       "integrity": "sha512-3h08nf3Vw3Wl3PK+q3ow/lIil81IT2Oa7YpQyUUDsEWbXveMesdfK1xBd2RhCkynwZndAxixji/7SYJJowr62w==",
1065 | 242 |       "license": "ISC",
1066 | 243 |       "peerDependencies": {
1067 | 244 |         "zod": "^3.24.1"
1068 | 245 |       }
1069 | 246 |     }
1070 | 247 |   }
1071 | 248 | }
1072 | 249 | 
1073 | 
1074 | 
1075 | --------------------------------------------------------------------------------
1076 | /package.json:
1077 | --------------------------------------------------------------------------------
1078 |  1 | {
1079 |  2 |   "name": "mcp-server-filesystem",
1080 |  3 |   "version": "0.6.2",
1081 |  4 |   "description": "MCP File System Server",
1082 |  5 |   "main": "dist/index.js",
1083 |  6 |   "type": "module",
1084 |  7 |   "bin": {
1085 |  8 |     "mcp-server-filesystem": "dist/index.js"
1086 |  9 |   },
1087 | 10 |   "scripts": {
1088 | 11 |     "build": "tsc",
1089 | 12 |     "dev": "tsc --watch",
1090 | 13 |     "test": "node --test test/*.test.js"
1091 | 14 |   },
1092 | 15 |   "dependencies": {
1093 | 16 |     "@modelcontextprotocol/sdk": "^1.0.3",
1094 | 17 |     "diff": "^5.1.0",
1095 | 18 |     "minimatch": "^10.0.1",
1096 | 19 |     "zod": "^3.22.4",
1097 | 20 |     "zod-to-json-schema": "^3.20.7"
1098 | 21 |   },
1099 | 22 |   "devDependencies": {
1100 | 23 |     "@types/diff": "^6.0.0",
1101 | 24 |     "@types/node": "^20.11.0",
1102 | 25 |     "typescript": "^5.3.3"
1103 | 26 |   }
1104 | 27 | }
1105 | 28 | 
1106 | 
1107 | 
1108 | --------------------------------------------------------------------------------
1109 | /recursive_directory_feature.md:
1110 | --------------------------------------------------------------------------------
1111 |   1 | # How to Set Up and Run This Project
1112 |   2 | 
1113 |   3 | This is a project to extend the existing Model Context Protocol filesystem server to include **Recursive Directory Listing** (Inspired by git_log):
1114 |   4 | 
1115 |   5 | * Concept: Extend the list_directory tool to optionally list contents recursively.
1116 |   6 | * Implementation: Add an optional recursive boolean argument. If true, recursively traverse subdirectories.
1117 |   7 | * Model: Similar to git_log which also takes an optional argument to modify its behaviour.
1118 |   8 | * Benefits: Allows browsing entire directory trees, not just the top level.
1119 |   9 | 
1120 |  10 | Rationale:
1121 |  11 | 
1122 |  12 | * This approach minimizes risk by building upon existing functionality and avoiding complex external dependencies. It allows for a clear, incremental addition to the server with a well-defined scope and testable outcomes. By focusing on a simple, self-contained feature, we can ensure a successful first step and build confidence before tackling more complex enhancements.
1123 |  13 | 
1124 |  14 | ## Project Setup Instructions
1125 |  15 | 
1126 |  16 | ### 1. Create Project Directory
1127 |  17 | 
1128 |  18 | If you haven’t already done so, create the project directory and move into it:
1129 |  19 | 
1130 |  20 | ```bash
1131 |  21 | mkdir /Users/dazzagreenwood/filesystem
1132 |  22 | cd /Users/dazzagreenwood/filesystem
1133 |  23 | ```
1134 |  24 | 
1135 |  25 | ### 2. Initialize Node.js Project (if needed)
1136 |  26 | 
1137 |  27 | If you do not already have a `package.json`, you can create one:
1138 |  28 | 
1139 |  29 | ```bash
1140 |  30 | npm init -y
1141 |  31 | ```
1142 |  32 | 
1143 |  33 | ### 3. Add Required Files
1144 |  34 | 
1145 |  35 | **`package.json`** (if you already have one, just ensure dependencies are correct):
1146 |  36 | 
1147 |  37 | ```json
1148 |  38 | {
1149 |  39 |   "name": "mcp-server-filesystem",
1150 |  40 |   "version": "0.6.2",
1151 |  41 |   "description": "MCP File System Server",
1152 |  42 |   "main": "dist/index.js",
1153 |  43 |   "type": "module",
1154 |  44 |   "bin": {
1155 |  45 |     "mcp-server-filesystem": "dist/index.js"
1156 |  46 |   },
1157 |  47 |   "scripts": {
1158 |  48 |     "build": "tsc",
1159 |  49 |     "dev": "tsc --watch",
1160 |  50 |     "test": "node --test test/*.test.js"
1161 |  51 |   },
1162 |  52 |   "dependencies": {
1163 |  53 |     "@modelcontextprotocol/sdk": "^0.6.2",
1164 |  54 |     "diff": "^5.1.0",
1165 |  55 |     "minimatch": "^9.1.2",
1166 |  56 |     "zod": "^3.22.4",
1167 |  57 |     "zod-to-json-schema": "^3.20.7",
1168 |  58 |     "fs-promises": "0.1.2"
1169 |  59 |   },
1170 |  60 |   "devDependencies": {
1171 |  61 |     "@types/node": "^20.11.0",
1172 |  62 |     "typescript": "^5.3.3"
1173 |  63 |   }
1174 |  64 | }
1175 |  65 | ```
1176 |  66 | 
1177 |  67 | **`tsconfig.json`**:
1178 |  68 | 
1179 |  69 | ```json
1180 |  70 | {
1181 |  71 |   "compilerOptions": {
1182 |  72 |     "target": "es2022",
1183 |  73 |     "module": "NodeNext",
1184 |  74 |     "moduleResolution": "NodeNext",
1185 |  75 |     "rootDir": "./",
1186 |  76 |     "outDir": "./dist",
1187 |  77 |     "esModuleInterop": true,
1188 |  78 |     "forceConsistentCasingInFileNames": true,
1189 |  79 |     "strict": true,
1190 |  80 |     "skipLibCheck": true
1191 |  81 |   }
1192 |  82 | }
1193 |  83 | ```
1194 |  84 | 
1195 |  85 | **`index.ts`** (Place this file in `/Users/dazzagreenwood/filesystem/index.ts`):
1196 |  86 | 
1197 |  87 | ```typescript
1198 |  88 | #!/usr/bin/env node
1199 |  89 | 
1200 |  90 | import { Server } from "@modelcontextprotocol/sdk/server/index.js";
1201 |  91 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
1202 |  92 | import {
1203 |  93 |   CallToolRequestSchema,
1204 |  94 |   ListToolsRequestSchema
1205 |  95 | } from "@modelcontextprotocol/sdk/types.js";
1206 |  96 | import fs from "fs/promises";
1207 |  97 | import path from "path";
1208 |  98 | import os from "os";
1209 |  99 | import { z } from "zod";
1210 | 100 | import { zodToJsonSchema } from "zod-to-json-schema";
1211 | 101 | import { createTwoFilesPatch } from "diff";
1212 | 102 | import { minimatch } from "minimatch";
1213 | 103 | 
1214 | 104 | // Enhanced Directory Listing Schema with recursive option
1215 | 105 | const ListDirectoryArgsSchema = z.object({
1216 | 106 |   path: z.string(),
1217 | 107 |   recursive: z.boolean().optional().default(false),
1218 | 108 | });
1219 | 109 | 
1220 | 110 | const args = process.argv.slice(2);
1221 | 111 | if (args.length === 0) {
1222 | 112 |   console.error("Usage: mcp-server-filesystem <allowed-directory> [additional-directories...]");
1223 | 113 |   process.exit(1);
1224 | 114 | }
1225 | 115 | 
1226 | 116 | function normalizePath(p: string): string {
1227 | 117 |   return path.normalize(p);
1228 | 118 | }
1229 | 119 | 
1230 | 120 | function expandHome(filepath: string): string {
1231 | 121 |   if (filepath === "~" || filepath.startsWith("~/")) {
1232 | 122 |     return path.join(os.homedir(), filepath.slice(1));
1233 | 123 |   }
1234 | 124 |   return filepath;
1235 | 125 | }
1236 | 126 | 
1237 | 127 | const allowedDirectories = args.map((dir) =>
1238 | 128 |   normalizePath(path.resolve(expandHome(dir)))
1239 | 129 | );
1240 | 130 | 
1241 | 131 | // Validate allowed directories
1242 | 132 | await Promise.all(
1243 | 133 |   allowedDirectories.map(async (dir) => {
1244 | 134 |     try {
1245 | 135 |       const stats = await fs.stat(dir);
1246 | 136 |       if (!stats.isDirectory()) {
1247 | 137 |         console.error(`Error: ${dir} is not a directory`);
1248 | 138 |         process.exit(1);
1249 | 139 |       }
1250 | 140 |     } catch (error) {
1251 | 141 |       console.error(`Error accessing directory ${dir}:`, error);
1252 | 142 |       process.exit(1);
1253 | 143 |     }
1254 | 144 |   }),
1255 | 145 | );
1256 | 146 | 
1257 | 147 | async function validatePath(requestedPath: string): Promise<string> {
1258 | 148 |   const expandedPath = expandHome(requestedPath);
1259 | 149 |   const absolute = path.isAbsolute(expandedPath)
1260 | 150 |     ? path.resolve(expandedPath)
1261 | 151 |     : path.resolve(process.cwd(), expandedPath);
1262 | 152 | 
1263 | 153 |   const normalizedRequested = normalizePath(absolute);
1264 | 154 | 
1265 | 155 |   const isAllowed = allowedDirectories.some((dir) =>
1266 | 156 |     normalizedRequested.startsWith(dir)
1267 | 157 |   );
1268 | 158 |   if (!isAllowed) {
1269 | 159 |     throw new Error(`Access denied - path outside allowed directories: ${absolute}`);
1270 | 160 |   }
1271 | 161 | 
1272 | 162 |   try {
1273 | 163 |     const realPath = await fs.realpath(absolute);
1274 | 164 |     const normalizedReal = normalizePath(realPath);
1275 | 165 |     const isRealPathAllowed = allowedDirectories.some((dir) =>
1276 | 166 |       normalizedReal.startsWith(dir)
1277 | 167 |     );
1278 | 168 |     if (!isRealPathAllowed) {
1279 | 169 |       throw new Error("Access denied - symlink target outside allowed directories");
1280 | 170 |     }
1281 | 171 |     return realPath;
1282 | 172 |   } catch (error) {
1283 | 173 |     const parentDir = path.dirname(absolute);
1284 | 174 |     try {
1285 | 175 |       const realParentPath = await fs.realpath(parentDir);
1286 | 176 |       const normalizedParent = normalizePath(realParentPath);
1287 | 177 |       const isParentAllowed = allowedDirectories.some((dir) =>
1288 | 178 |         normalizedParent.startsWith(dir)
1289 | 179 |       );
1290 | 180 |       if (!isParentAllowed) {
1291 | 181 |         throw new Error("Access denied - parent directory outside allowed directories");
1292 | 182 |       }
1293 | 183 |       return absolute;
1294 | 184 |     } catch {
1295 | 185 |       throw new Error(`Parent directory does not exist: ${parentDir}`);
1296 | 186 |     }
1297 | 187 |   }
1298 | 188 | }
1299 | 189 | 
1300 | 190 | const ReadFileArgsSchema = z.object({ path: z.string() });
1301 | 191 | const ReadMultipleFilesArgsSchema = z.object({ paths: z.array(z.string()) });
1302 | 192 | const WriteFileArgsSchema = z.object({ path: z.string(), content: z.string() });
1303 | 193 | 
1304 | 194 | const EditOperation = z.object({
1305 | 195 |   oldText: z.string().describe("Text to search for - must match exactly"),
1306 | 196 |   newText: z.string().describe("Text to replace with"),
1307 | 197 | });
1308 | 198 | const EditFileArgsSchema = z.object({
1309 | 199 |   path: z.string(),
1310 | 200 |   edits: z.array(EditOperation),
1311 | 201 |   dryRun: z.boolean().default(false),
1312 | 202 | });
1313 | 203 | 
1314 | 204 | const CreateDirectoryArgsSchema = z.object({ path: z.string() });
1315 | 205 | const DirectoryTreeArgsSchema = z.object({ path: z.string() });
1316 | 206 | const MoveFileArgsSchema = z.object({ source: z.string(), destination: z.string() });
1317 | 207 | const SearchFilesArgsSchema = z.object({
1318 | 208 |   path: z.string(),
1319 | 209 |   pattern: z.string(),
1320 | 210 |   excludePatterns: z.array(z.string()).optional().default([]),
1321 | 211 | });
1322 | 212 | const GetFileInfoArgsSchema = z.object({ path: z.string() });
1323 | 213 | 
1324 | 214 | interface FileInfo {
1325 | 215 |   size: number;
1326 | 216 |   created: Date;
1327 | 217 |   modified: Date;
1328 | 218 |   accessed: Date;
1329 | 219 |   isDirectory: boolean;
1330 | 220 |   isFile: boolean;
1331 | 221 |   permissions: string;
1332 | 222 | }
1333 | 223 | 
1334 | 224 | const server = new Server(
1335 | 225 |   { name: "secure-filesystem-server", version: "0.6.2" },
1336 | 226 |   { capabilities: { tools: {}, resources: {} } }
1337 | 227 | );
1338 | 228 | 
1339 | 229 | async function getFileStats(filePath: string): Promise<FileInfo> {
1340 | 230 |   const stats = await fs.stat(filePath);
1341 | 231 |   return {
1342 | 232 |     size: stats.size,
1343 | 233 |     created: stats.birthtime,
1344 | 234 |     modified: stats.mtime,
1345 | 235 |     accessed: stats.atime,
1346 | 236 |     isDirectory: stats.isDirectory(),
1347 | 237 |     isFile: stats.isFile(),
1348 | 238 |     permissions: stats.mode.toString(8).slice(-3),
1349 | 239 |   };
1350 | 240 | }
1351 | 241 | 
1352 | 242 | function normalizeLineEndings(text: string): string {
1353 | 243 |   return text.replace(/\r\n/g, "\n");
1354 | 244 | }
1355 | 245 | 
1356 | 246 | function createUnifiedDiff(
1357 | 247 |   originalContent: string,
1358 | 248 |   newContent: string,
1359 | 249 |   filepath: string = "file"
1360 | 250 | ): string {
1361 | 251 |   const normalizedOriginal = normalizeLineEndings(originalContent);
1362 | 252 |   const normalizedNew = normalizeLineEndings(newContent);
1363 | 253 |   return createTwoFilesPatch(
1364 | 254 |     filepath,
1365 | 255 |     filepath,
1366 | 256 |     normalizedOriginal,
1367 | 257 |     normalizedNew,
1368 | 258 |     "original",
1369 | 259 |     "modified"
1370 | 260 |   );
1371 | 261 | }
1372 | 262 | 
1373 | 263 | async function applyFileEdits(
1374 | 264 |   filePath: string,
1375 | 265 |   edits: Array<{ oldText: string; newText: string }>,
1376 | 266 |   dryRun = false
1377 | 267 | ): Promise<string> {
1378 | 268 |   const content = normalizeLineEndings(await fs.readFile(filePath, "utf-8"));
1379 | 269 |   let modifiedContent = content;
1380 | 270 | 
1381 | 271 |   for (const edit of edits) {
1382 | 272 |     const oldText = normalizeLineEndings(edit.oldText);
1383 | 273 |     const newText = normalizeLineEndings(edit.newText);
1384 | 274 | 
1385 | 275 |     if (modifiedContent.includes(oldText)) {
1386 | 276 |       modifiedContent = modifiedContent.replace(oldText, newText);
1387 | 277 |     }
1388 | 278 |   }
1389 | 279 | 
1390 | 280 |   const diff = createUnifiedDiff(content, modifiedContent, filePath);
1391 | 281 |   if (!dryRun) {
1392 | 282 |     await fs.writeFile(filePath, modifiedContent, "utf-8");
1393 | 283 |   }
1394 | 284 |   return diff;
1395 | 285 | }
1396 | 286 | 
1397 | 287 | async function* readDirectoryRecursively(dirPath: string): AsyncGenerator<string> {
1398 | 288 |   const entries = await fs.readdir(dirPath, { withFileTypes: true });
1399 | 289 |   for (const entry of entries) {
1400 | 290 |     const fullPath = path.join(dirPath, entry.name);
1401 | 291 |     if (entry.isDirectory()) {
1402 | 292 |       yield `[DIR] ${fullPath}`;
1403 | 293 |       yield* readDirectoryRecursively(fullPath);
1404 | 294 |     } else {
1405 | 295 |       yield `[FILE] ${fullPath}`;
1406 | 296 |     }
1407 | 297 |   }
1408 | 298 | }
1409 | 299 | 
1410 | 300 | async function listDirectoryRecursive(dirPath: string): Promise<string[]> {
1411 | 301 |   const entries: string[] = [];
1412 | 302 |   for await (const entry of readDirectoryRecursively(dirPath)) {
1413 | 303 |     entries.push(entry);
1414 | 304 |   }
1415 | 305 |   return entries;
1416 | 306 | }
1417 | 307 | 
1418 | 308 | async function listDirectory(dirPath: string, recursive: boolean): Promise<string[]> {
1419 | 309 |   if (!recursive) {
1420 | 310 |     const entries = await fs.readdir(dirPath, { withFileTypes: true });
1421 | 311 |     return entries.map((entry) =>
1422 | 312 |       entry.isDirectory() ? `[DIR] ${entry.name}` : `[FILE] ${entry.name}`
1423 | 313 |     );
1424 | 314 |   } else {
1425 | 315 |     return await listDirectoryRecursive(dirPath);
1426 | 316 |   }
1427 | 317 | }
1428 | 318 | 
1429 | 319 | server.setRequestHandler(ListToolsRequestSchema, async () => ({
1430 | 320 |   tools: [
1431 | 321 |     {
1432 | 322 |       name: "read_file",
1433 | 323 |       description:
1434 | 324 |         "Read the complete contents of a file from the filesystem. Only works within allowed directories.",
1435 | 325 |       inputSchema: zodToJsonSchema(ReadFileArgsSchema),
1436 | 326 |     },
1437 | 327 |     {
1438 | 328 |       name: "read_multiple_files",
1439 | 329 |       description:
1440 | 330 |         "Read contents of multiple files simultaneously. Only works within allowed directories.",
1441 | 331 |       inputSchema: zodToJsonSchema(ReadMultipleFilesArgsSchema),
1442 | 332 |     },
1443 | 333 |     {
1444 | 334 |       name: "write_file",
1445 | 335 |       description:
1446 | 336 |         "Write or overwrite file contents. Only works within allowed directories.",
1447 | 337 |       inputSchema: zodToJsonSchema(WriteFileArgsSchema),
1448 | 338 |     },
1449 | 339 |     {
1450 | 340 |       name: "edit_file",
1451 | 341 |       description:
1452 | 342 |         "Perform line-based edits to a file and return a git-style diff of changes. Only works within allowed directories.",
1453 | 343 |       inputSchema: zodToJsonSchema(EditFileArgsSchema),
1454 | 344 |     },
1455 | 345 |     {
1456 | 346 |       name: "create_directory",
1457 | 347 |       description:
1458 | 348 |         "Create a directory (and parents if needed). Only works within allowed directories.",
1459 | 349 |       inputSchema: zodToJsonSchema(CreateDirectoryArgsSchema),
1460 | 350 |     },
1461 | 351 |     {
1462 | 352 |       name: "list_directory",
1463 | 353 |       description:
1464 | 354 |         "List files and directories in a given path. If recursive=true, lists entire subtree. Only works within allowed directories.",
1465 | 355 |       inputSchema: zodToJsonSchema(ListDirectoryArgsSchema),
1466 | 356 |     },
1467 | 357 |     {
1468 | 358 |       name: "directory_tree",
1469 | 359 |       description:
1470 | 360 |         "Get a recursive listing of all files and directories from a given path. Only works within allowed directories.",
1471 | 361 |       inputSchema: zodToJsonSchema(DirectoryTreeArgsSchema),
1472 | 362 |     },
1473 | 363 |     {
1474 | 364 |       name: "move_file",
1475 | 365 |       description:
1476 | 366 |         "Move or rename a file or directory. Only works within allowed directories.",
1477 | 367 |       inputSchema: zodToJsonSchema(MoveFileArgsSchema),
1478 | 368 |     },
1479 | 369 |     {
1480 | 370 |       name: "search_files",
1481 | 371 |       description:
1482 | 372 |         "Recursively search for files and directories matching a pattern. Not fully implemented. Only works within allowed directories.",
1483 | 373 |       inputSchema: zodToJsonSchema(SearchFilesArgsSchema),
1484 | 374 |     },
1485 | 375 |     {
1486 | 376 |       name: "get_file_info",
1487 | 377 |       description:
1488 | 378 |         "Get metadata about a file or directory. Only works within allowed directories.",
1489 | 379 |       inputSchema: zodToJsonSchema(GetFileInfoArgsSchema),
1490 | 380 |     },
1491 | 381 |     {
1492 | 382 |       name: "list_allowed_directories",
1493 | 383 |       description: "List directories that this server can access.",
1494 | 384 |       inputSchema: { type: "object", properties: {}, required: [] },
1495 | 385 |     },
1496 | 386 |   ],
1497 | 387 | }));
1498 | 388 | 
1499 | 389 | server.setRequestHandler(CallToolRequestSchema, async (request) => {
1500 | 390 |   try {
1501 | 391 |     const { name, arguments: args } = request.params;
1502 | 392 |     switch (name) {
1503 | 393 |       case "read_file": {
1504 | 394 |         const parsed = ReadFileArgsSchema.safeParse(args);
1505 | 395 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
1506 | 396 |         const validPath = await validatePath(parsed.data.path);
1507 | 397 |         const content = await fs.readFile(validPath, "utf-8");
1508 | 398 |         return { content: [{ type: "text", text: content }] };
1509 | 399 |       }
1510 | 400 | 
1511 | 401 |       case "read_multiple_files": {
1512 | 402 |         const parsed = ReadMultipleFilesArgsSchema.safeParse(args);
1513 | 403 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
1514 | 404 |         const results = await Promise.all(
1515 | 405 |           parsed.data.paths.map(async (p) => {
1516 | 406 |             try {
1517 | 407 |               const vp = await validatePath(p);
1518 | 408 |               const c = await fs.readFile(vp, "utf-8");
1519 | 409 |               return `${p}:\n${c}`;
1520 | 410 |             } catch (err) {
1521 | 411 |               return `${p}: Error - ${err instanceof Error ? err.message : String(err)}`;
1522 | 412 |             }
1523 | 413 |           })
1524 | 414 |         );
1525 | 415 |         return { content: [{ type: "text", text: results.join("\n---\n") }] };
1526 | 416 |       }
1527 | 417 | 
1528 | 418 |       case "write_file": {
1529 | 419 |         const parsed = WriteFileArgsSchema.safeParse(args);
1530 | 420 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
1531 | 421 |         const vp = await validatePath(parsed.data.path);
1532 | 422 |         await fs.writeFile(vp, parsed.data.content, "utf-8");
1533 | 423 |         return { content: [{ type: "text", text: `Wrote to ${parsed.data.path}` }] };
1534 | 424 |       }
1535 | 425 | 
1536 | 426 |       case "edit_file": {
1537 | 427 |         const parsed = EditFileArgsSchema.safeParse(args);
1538 | 428 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
1539 | 429 |         const vp = await validatePath(parsed.data.path);
1540 | 430 |         const diff = await applyFileEdits(vp, parsed.data.edits, parsed.data.dryRun);
1541 | 431 |         return { content: [{ type: "text", text: diff }] };
1542 | 432 |       }
1543 | 433 | 
1544 | 434 |       case "create_directory": {
1545 | 435 |         const parsed = CreateDirectoryArgsSchema.safeParse(args);
1546 | 436 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
1547 | 437 |         const vp = await validatePath(parsed.data.path);
1548 | 438 |         await fs.mkdir(vp, { recursive: true });
1549 | 439 |         return { content: [{ type: "text", text: `Created directory ${parsed.data.path}` }] };
1550 | 440 |       }
1551 | 441 | 
1552 | 442 |       case "list_directory": {
1553 | 443 |         const parsed = ListDirectoryArgsSchema.safeParse(args);
1554 | 444 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
1555 | 445 |         const vp = await validatePath(parsed.data.path);
1556 | 446 |         const entries = await listDirectory(vp, parsed.data.recursive || false);
1557 | 447 |         return { content: [{ type: "text", text: entries.join("\n") }] };
1558 | 448 |       }
1559 | 449 | 
1560 | 450 |       case "directory_tree": {
1561 | 451 |         const parsed = DirectoryTreeArgsSchema.safeParse(args);
1562 | 452 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
1563 | 453 |         const vp = await validatePath(parsed.data.path);
1564 | 454 |         const entries = await listDirectoryRecursive(vp);
1565 | 455 |         return { content: [{ type: "text", text: entries.join("\n") }] };
1566 | 456 |       }
1567 | 457 | 
1568 | 458 |       case "move_file": {
1569 | 459 |         const parsed = MoveFileArgsSchema.safeParse(args);
1570 | 460 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
1571 | 461 |         const src = await validatePath(parsed.data.source);
1572 | 462 |         const dst = await validatePath(parsed.data.destination);
1573 | 463 |         await fs.rename(src, dst);
1574 | 464 |         return { content: [{ type: "text", text: `Moved ${parsed.data.source} to ${parsed.data.destination}` }] };
1575 | 465 |       }
1576 | 466 | 
1577 | 467 |       case "search_files":
1578 | 468 |         // Not fully implemented. Could be implemented using glob or minimatch logic.
1579 | 469 |         return { content: [{ type: "text", text: "Search not implemented." }] };
1580 | 470 | 
1581 | 471 |       case "get_file_info": {
1582 | 472 |         const parsed = GetFileInfoArgsSchema.safeParse(args);
1583 | 473 |         if (!parsed.success) throw new Error(`Invalid arguments: ${parsed.error}`);
1584 | 474 |         const vp = await validatePath(parsed.data.path);
1585 | 475 |         const info = await getFileStats(vp);
1586 | 476 |         const infoText = Object.entries(info)
1587 | 477 |           .map(([k, v]) => `${k}: ${v}`)
1588 | 478 |           .join("\n");
1589 | 479 |         return { content: [{ type: "text", text: infoText }] };
1590 | 480 |       }
1591 | 481 | 
1592 | 482 |       case "list_allowed_directories":
1593 | 483 |         return { content: [{ type: "text", text: allowedDirectories.join("\n") }] };
1594 | 484 | 
1595 | 485 |       default:
1596 | 486 |         return { content: [{ type: "text", text: `Unknown tool: ${name}` }], isError: true };
1597 | 487 |     }
1598 | 488 |   } catch (error) {
1599 | 489 |     const msg = error instanceof Error ? error.message : String(error);
1600 | 490 |     return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
1601 | 491 |   }
1602 | 492 | });
1603 | 493 | 
1604 | 494 | async function runServer() {
1605 | 495 |   const transport = new StdioServerTransport();
1606 | 496 |   await server.connect(transport);
1607 | 497 |   console.error("Secure File System MCP Server running on stdio");
1608 | 498 | }
1609 | 499 | 
1610 | 500 | runServer().catch((error) => {
1611 | 501 |   console.error("Fatal error running server:", error);
1612 | 502 |   process.exit(1);
1613 | 503 | });
1614 | 504 | ```
1615 | 505 | 
1616 | 506 | ### 4. Install Dependencies
1617 | 507 | 
1618 | 508 | Make sure you are in the `/Users/dazzagreenwood/filesystem` directory, then run:
1619 | 509 | 
1620 | 510 | ```bash
1621 | 511 | npm install @modelcontextprotocol/sdk zod zod-to-json-schema diff minimatch fs-promises
1622 | 512 | ```
1623 | 513 | 
1624 | 514 | ### 5. Build the Project
1625 | 515 | 
1626 | 516 | ```bash
1627 | 517 | npm run build
1628 | 518 | ```
1629 | 519 | 
1630 | 520 | This will create `/Users/dazzagreenwood/filesystem/dist/index.js`.
1631 | 521 | 
1632 | 522 | ### 6. Update `claude_desktop_config.json`
1633 | 523 | 
1634 | 524 | Use the absolute path to `node` and your compiled `index.js`. For example:
1635 | 525 | 
1636 | 526 | ```json
1637 | 527 | {
1638 | 528 |   "mcpServers": {
1639 | 529 |     "filesystem": {
1640 | 530 |       "command": "/usr/local/bin/node",
1641 | 531 |       "args": [
1642 | 532 |         "/Users/dazzagreenwood/filesystem/dist/index.js",
1643 | 533 |         "/Users/dazzagreenwood/mcp-hello/module1/files"
1644 | 534 |       ]
1645 | 535 |     }
1646 | 536 |   }
1647 | 537 | }
1648 | 538 | ```
1649 | 539 | 
1650 | 540 | **Note:**  
1651 | 541 | - Replace `/usr/local/bin/node` with the actual path from `which node` if different.
1652 | 542 | - Replace `/Users/dazzagreenwood/mcp-hello/module1/files` with a directory you want to allow.
1653 | 543 | 
1654 | 544 | ### 7. Test the Setup
1655 | 545 | 
1656 | 546 | - Launch Claude Desktop.
1657 | 547 | - Use `/list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files"` to test listing.
1658 | 548 | - Try recursion: `/list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files" recursive: true`.
1659 | 549 | - Try `/directory_tree path: "/Users/dazzagreenwood/mcp-hello/module1/files"` to see the tree output.
1660 | 550 | 
1661 | 551 | If everything is set up correctly, you should see the desired file and directory listings. If any issue arises, check the terminal output for error messages and confirm that all paths and configurations match your local system.
1662 | 552 | 
1663 | 553 | ---
1664 | 554 | 
1665 | 555 | ## NOTE: Potential Minor Issues and Omissions:
1666 | 556 | 
1667 | 557 | 1. **MCP Inspector Instructions Missing:** The major omission is the lack of guidance on how to test the server using the MCP Inspector.
1668 | 558 | 2. **"search_files" Tool:** The `"search_files"` tool is not implemented and the current message says "Search not implemented. Could be implemented using glob or minimatch logic." - The correct message is simply "Search not implemented." as that is more accurate.
1669 | 559 | 3. **`fs-promises`:** While not an issue, the `fs-promises` package can be removed from dependencies as it's not needed.
1670 | 560 | 
1671 | 561 | 
1672 | 562 | # --------------------------------------
1673 | 563 | 
1674 | 564 | # Project Use and Testing Instructions
1675 | 565 | 
1676 | 566 | Here are instructions to incorporate MCP Inspector and Claude Desktop testing.
1677 | 567 | 
1678 | 568 | **Testing with Claude Desktop:**
1679 | 569 | 
1680 | 570 | 1.  **Start Claude Desktop:** Ensure Claude Desktop is running.
1681 | 571 | 2.  **Use the `list_directory` tool:** Type the following in the Claude chat:
1682 | 572 |     ```
1683 | 573 |     /list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files"
1684 | 574 |     ```
1685 | 575 |     This should output the files and directories at the specified path. Note that you must use double quotes around the path.
1686 | 576 | 3.  **Test Recursive Listing:** To test the recursive functionality, use:
1687 | 577 |     ```
1688 | 578 |     /list_directory path: "/Users/dazzagreenwood/mcp-hello/module1/files" recursive: true
1689 | 579 |     ```
1690 | 580 |     This should output the entire directory tree, including subdirectories.
1691 | 581 | 4.  **Test the `directory_tree` tool**: Use the following to see the directory tree output:
1692 | 582 |     ```
1693 | 583 |     /directory_tree path: "/Users/dazzagreenwood/mcp-hello/module1/files"
1694 | 584 |     ```
1695 | 585 | 
1696 | 586 | 5. **Test other tools**: You can test other tools like `read_file`, `write_file`, etc. using similar patterns, as long as those files exist in the allowed directories.
1697 | 587 | 
1698 | 588 | **Testing with MCP Inspector:**
1699 | 589 | 
1700 | 590 | 1.  **Start the Server:** Open a terminal and run the following command (replace `/Users/dazzagreenwood/mcp-hello/module1/files` with your allowed directory and make sure you use absolute path references to both the allowed directory and the command:
1701 | 591 |    ```bash
1702 | 592 |    npx @modelcontextprotocol/inspector uvx /usr/local/bin/node /Users/dazzagreenwood/filesystem/dist/index.js "/Users/dazzagreenwood/mcp-hello/module1/files"
1703 | 593 |    ```
1704 | 594 |   *If the executable is in your path you can run the server with*
1705 | 595 |   ```bash
1706 | 596 |   npx @modelcontextprotocol/inspector uvx mcp-server-filesystem "/Users/dazzagreenwood/mcp-hello/module1/files"
1707 | 597 |   ```
1708 | 598 | 2.  **Open MCP Inspector:** Open a web browser and go to the URL provided by the MCP Inspector output (usually `http://localhost:9001`).
1709 | 599 | 3.  **Connect:** In the MCP Inspector, click "Connect".
1710 | 600 | 4.  **Go to the "Tools" tab:** You should see the list of tools provided by the server.
1711 | 601 | 5.  **Select the `list_directory` Tool:** Select the `list_directory` tool in the tools list.
1712 | 602 | 6.  **Enter Arguments:** Input JSON for path and optionally recursive. Example JSON inputs:
1713 | 603 |     *   **Non-recursive:**
1714 | 604 |         ```json
1715 | 605 |         {
1716 | 606 |             "path": "/Users/dazzagreenwood/mcp-hello/module1/files"
1717 | 607 |         }
1718 | 608 |         ```
1719 | 609 |     *   **Recursive:**
1720 | 610 |         ```json
1721 | 611 |         {
1722 | 612 |             "path": "/Users/dazzagreenwood/mcp-hello/module1/files",
1723 | 613 |             "recursive": true
1724 | 614 |         }
1725 | 615 |         ```
1726 | 616 | 7.  **Click "Call Tool":** You should see the tool's output in the "Response" section of the MCP Inspector.
1727 | 617 | 8.  **Select the `directory_tree` Tool:** Select the `directory_tree` tool in the tools list.
1728 | 618 | 9.  **Enter Arguments:** Input JSON for path. Example JSON input:
1729 | 619 |         ```json
1730 | 620 |         {
1731 | 621 |             "path": "/Users/dazzagreenwood/mcp-hello/module1/files"
1732 | 622 |         }
1733 | 623 |         ```
1734 | 624 | 10. **Click "Call Tool":** You should see the tool's output in the "Response" section of the MCP Inspector.
1735 | 625 | 11. **Test Other Tools:** You can similarly test other tools using this method.
1736 | 626 | 
1737 | 627 | **Final Recommendations:**
1738 | 628 | 
1739 | 629 | 1.  **Implement the Revised Testing Instructions:** Be sure to include the above testing procedures for both Claude Desktop and MCP Inspector when you conduct testing and also when you generate future instructions.
1740 | 630 | 2.  **Fix `search_files` Message:** Change "Search not implemented. Could be implemented using glob or minimatch logic." to "Search not implemented."
1741 | 631 | 3.  **Optional:** You can remove `"fs-promises": "0.1.2"` from the dependencies in `package.json`.
1742 | 632 | 4.  **Review and Test:** Carefully review all files and instructions again, then test the project thoroughly using both Claude Desktop and MCP Inspector.
1743 | 633 | 
1744 | 
1745 | 
1746 | --------------------------------------------------------------------------------
1747 | /tsconfig.json:
1748 | --------------------------------------------------------------------------------
1749 |  1 | {
1750 |  2 |   "compilerOptions": {
1751 |  3 |     "target": "es2022",
1752 |  4 |     "module": "NodeNext",
1753 |  5 |     "moduleResolution": "NodeNext",
1754 |  6 |     "rootDir": "./",
1755 |  7 |     "outDir": "./dist",
1756 |  8 |     "esModuleInterop": true,
1757 |  9 |     "forceConsistentCasingInFileNames": true,
1758 | 10 |     "strict": true,
1759 | 11 |     "skipLibCheck": true
1760 | 12 |   }
1761 | 13 | }


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