# Guide to MCP Server Dev

1.  **Adding Features to Existing MCP Servers and Creating New MCP Servers**: This "cookbook" should include various examples, cite specific code locations from the attached `MCP-Repositories-combined_file.md` (which is the combined file) and `dazzaji_filesystem.md`, and cover a range of scenarios including adding features to different servers and completely new servers.
2.  **Creating an MVP MCP Host and Client**: This should be built in both TypeScript/Node.js and Python, capable of using existing MCP servers like `dazzaji_filesystem.md` and others.

Let's dive in!

## How to Add Features to Existing MCP Servers and Create New MCP Servers

This cookbook provides guidelines, examples, and best practices for extending existing Model Context Protocol (MCP) servers and for creating new ones, based on the provided combined files.

### Understanding the MCP Architecture

Before diving in, remember these key architectural concepts:

*   **Hosts:** LLM applications that manage client connections (like Claude Desktop).
*   **Clients:** Components within a host that connect to servers.
*   **Servers:** Independent services providing resources, prompts, and tools.
*   **Transports:** Communication channels for clients and servers (e.g., stdio, SSE).
*   **Capabilities**: Servers and clients declare supported features.

These principles are explained further in `docs/specification/architecture/_index.md` within `MCP-Repositories-combined_file.md`.

### Adding Features to Existing MCP Servers

#### General Steps

1.  **Identify the Server & Feature**: Choose the server you'll be modifying, and clearly define your feature.
2.  **Analyze Existing Code**: Read existing server's code and `README.md` to understand the current implementation. See examples in the `src/` folder of `MCP-Repositories-combined_file.md` like `src/filesystem`, `src/brave-search`, etc.,.
3.  **Modify Handlers**:
    *   Add a new tool, resource, or prompt or update existing handlers using the appropriate decorators (`@server.list_tools`, `@server.call_tool`, `@server.list_resources`, etc.).
    *   Implement the new functionality, ensuring proper input validation and error handling.
4.  **Test**: Run the server and test your new functionality using the MCP Inspector or your client application.
5.  **Add Documentation**: Update the server’s `README.md` file with instructions, examples and new functionality.
6.  **Submit Pull Request**: Once tested, submit a pull request with clear explanation of the changes.

#### Example 1: Adding a Tool to the Brave Search Server

Let's add a new tool to the Brave Search Server, as an example.

1. **Location:** The core code for the Brave Search server exists at `src/brave-search/index.ts` in `MCP-Repositories-combined_file.md`.
2. **Analyze `index.ts`:** It currently exposes two tools: `brave_web_search` and `brave_local_search`.
3.  **Add a `brave_autocomplete` Tool**

* Inside `src/brave-search/index.ts`, add the following new `Tool`:

```typescript
const AUTOCOMPLETE_TOOL: Tool = {
  name: "brave_autocomplete",
  description:
    "Suggests query autocompletions for given text." +
    " Use this tool to help users complete their queries when searching via web or local.",
  inputSchema: {
    type: "object",
    properties: {
        query: {
            type: "string",
            description: "Partial text to base the autocompletions on (max 400 chars)",
        }
    },
    required: ["query"],
  },
};
```

* Find where `ListToolsRequestSchema` is handled in `src/brave-search/index.ts` and modify the handler. You can find the line using a search command (e.g., `Ctrl-F`):

```typescript
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [WEB_SEARCH_TOOL, LOCAL_SEARCH_TOOL, AUTOCOMPLETE_TOOL],
  };
});
```

* Then, implement a `brave_autocomplete` call handler, below where `server.setRequestHandler(CallToolRequestSchema, async (request) => {` begins:

```typescript
if (name === "brave_autocomplete") {
    const {query} = args;
    const url = new URL("https://api.search.brave.com/res/v1/complete");
        url.searchParams.set("q", query);
        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
            "Accept-Encoding": "gzip",
            "X-Subscription-Token": BRAVE_API_KEY,
          },
        });

    if (!response.ok) {
        throw new Error(`Brave API error: ${response.status} ${response.statusText}\n${await response.text()}`);
    }
    const data = await response.json() as { suggestions: Array<string>};
    return {
      content: [
        {
          type: "text",
          text: `Autocompletions for ${query}: \n${data.suggestions.join("\n")}`,
        },
      ],
    };
}
```

* Finally, make sure to import fetch (`import fetch from "node-fetch";`):
 
* Run the build: `npm run build`

4.  **Test**:
    *   Open MCP inspector with `npx @modelcontextprotocol/inspector src/brave-search/dist/index.js`
    *   Connect to your server.
    *   Navigate to the Tools tab and try the new tool using `"query": "test"`. Verify that you get an appropriate response.
    *   Try to call the original tools (`brave_web_search`, `brave_local_search`) too.
5.  **Document the Changes**: Add this information to `src/brave-search/README.md`, including details about new parameters and how to use the new tool.
6.  **Pull Request**: Submit a pull request and explain what you've done.

#### Example 2: Modifying a Python Server
1. **Location:** The core code for the fetch server exists at `src/fetch/src/mcp_server_fetch/server.py` in `MCP-Repositories-combined_file.md`.
2. **Analyze `server.py`:** It currently has only one core tool, `fetch`.
3.  **Add an `image_to_markdown` Tool**
    * Below the definition for `extract_content_from_html`, add this new function:
    ```python
    async def image_to_markdown(url: str, user_agent: str) -> str:
        """Fetch the URL and convert to a Markdown image format string if valid image, return error otherwise."""
        from httpx import AsyncClient, HTTPError
    
        async with AsyncClient() as client:
            try:
                response = await client.get(
                    url,
                    follow_redirects=True,
                    headers={"User-Agent": user_agent},
                )
                response.raise_for_status()
            except HTTPError as e:
                raise McpError(INTERNAL_ERROR, f"Failed to fetch image from {url}: {e!r}")
            
            content_type = response.headers.get("content-type")
            if not content_type or not content_type.startswith("image/"):
                raise McpError(INTERNAL_ERROR, f"Resource {url} is not an image.")
            
            image_data = response.content
            import base64
            base64_image = base64.b64encode(image_data).decode("utf-8")
    
            return f"![image]({url})\n<img alt='embedded image' src='data:{content_type};base64,{base64_image}' />"
    ```
    * Add an associated tool with required URL argument in the `list_tools` handler:
    ```python
    @app.list_tools()
    async def list_tools() -> list[types.Tool]:
        return [
            types.Tool(
                name="fetch",
                description="Fetches a URL from the internet and optionally extracts its contents as markdown",
                inputSchema=Fetch.model_json_schema(),
            ),
            types.Tool(
                name="image_to_markdown",
                description="Fetches the URL, and return the URL in a Markdown format string if an image file, returns an error otherwise.",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "url": {
                            "type": "string",
                            "description": "URL to fetch (only HTTP URLs are supported)",
                        }
                    },
                    "required": ["url"],
                 },
            )
        ]
    ```
    * Add a case to the tool handler to call `image_to_markdown`, below the existing `fetch` handler:
    ```python
    if name == "fetch":
        if not args or "url" not in args:
            raise McpError(INVALID_PARAMS, "URL is required")
        url = args["url"]
        if not ignore_robots_txt:
            await check_may_autonomously_fetch_url(url, user_agent_autonomous)

        content, prefix = await fetch_url(
            url, user_agent_autonomous, force_raw=args.get("raw", False)
        )
        if len(content) > args.get("max_length", 5000):
            content = content[args.get("start_index", 0): args.get("start_index", 0) + args.get("max_length", 5000)]
            content += f"\n\n<error>Content truncated. Call the fetch tool with a start_index of {args.get('start_index', 0) + args.get('max_length', 5000)} to get more content.</error>"
        return [types.TextContent(type="text", text=f"{prefix}Contents of {url}:\n{content}")]
    elif name == "image_to_markdown":
            if "url" not in args:
                raise McpError(INVALID_PARAMS, "URL is required")
            img_md = await image_to_markdown(args["url"], user_agent_autonomous)
            return [types.TextContent(type="text", text=img_md)]
    ```
* Run the project using `uv run src/mcp_server_fetch/server.py`

4.  **Test**:
    *   Open MCP inspector with `npx @modelcontextprotocol/inspector uv run src/mcp_server_fetch/server.py`
    *   Connect to your server.
    *   Navigate to the Tools tab and try the new `image_to_markdown` tool. Verify that you get an appropriate response.
    *   Try to call the original `fetch` tool too.
5.  **Document the Changes**: Add this information to `src/fetch/README.md`, including details about new parameters and how to use the new tool.
6.  **Pull Request**: Submit a pull request and explain what you've done.

-----

# Guide to MCP Client/Host Dev

Okay, let's create MVP implementations of an MCP client and host in both TypeScript/Node.js and Python, demonstrating how they can interact with an MCP server such as the one described in `dazzaji_filesystem.md`, for testing purposes.

## Creating a New MVP MCP Host and Client

### Part 1: TypeScript/Node.js MVP Client and Host

#### Project Setup

1.  **Create a Project Directory:**

    ```bash
    mkdir mcp-client-ts
    cd mcp-client-ts
    ```
2.  **Initialize `npm`:**

    ```bash
    npm init -y
    ```
3.  **Install Dependencies:**

    ```bash
    npm install @modelcontextprotocol/sdk dotenv typescript ts-node @types/node
    ```
4.  **Initialize TypeScript:**

    ```bash
    npx tsc --init
    ```
5.  **Create Files:**

    ```bash
    mkdir src
    touch src/client.ts
    touch .env
    ```

6. **Update `package.json`**: Add `type: module` and other configuration.

    ```json
    {
      "type": "module",
      "scripts": {
        "build": "tsc",
        "start": "node build/client.js"
      }
    }
    ```

7. **Update `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./build",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"]
}
```

#### Implementation in `src/client.ts`

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import dotenv from "dotenv";
import { ListToolsResultSchema, CallToolResultSchema } from "@modelcontextprotocol/sdk/types.js";

dotenv.config();

async function main() {
  if (process.argv.length < 3) {
    console.error("Usage: ts-node client.ts <server-command> [allowed-directory-1] [allowed-directory-2]");
    process.exit(1);
  }

  const serverCommand = process.argv[2];
  const args = process.argv.slice(3);

  const transport = new StdioClientTransport({
    command: "node",
    args: [serverCommand, ...args]
  });

  const client = new Client(
    {
      name: "mcp-client-example",
      version: "0.1.0",
    },
    {
      capabilities: {
        resources: {},
        tools: {},
      },
    },
  );

  await client.connect(transport);
  
  // List available tools
  const toolsResponse = await client.request({ method: "tools/list" }, ListToolsResultSchema);
  console.log("Available Tools:", toolsResponse.tools.map(tool => tool.name));

  
    const createFile = await client.request(
      {
          method: "tools/call",
          params: {
              name: 'write_file',
              arguments: {
                  path: '/Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt',
                  content: 'hello world from client'
              }
          }
      },
       CallToolResultSchema
   )

  console.log('file create result: ', createFile)
    
    console.log("done.");
    await transport.close();
}

main().catch((e) => console.error("Error:", e));
```
#### Usage:

1.  Build the TypeScript code: `npm run build`
2.  Run the client: `node build/client.js <path-to-your-mcp-server-file>`

    For example, using the `dazzaji_filesystem.md` example:

    ```bash
     node build/client.js /Users/dazzagreenwood/filesystem/dist/index.js /Users/dazzagreenwood/mcp-hello/module1/files
    ```
3. Verify output: you should see output from the server and that `testfile.txt` exists in the allowed directory.

### Part 2: Python MVP Client and Host

#### Project Setup

1.  **Create a Project Directory:**

    ```bash
    mkdir mcp-client-py
    cd mcp-client-py
    ```
2.  **Setup Virtual Environment**:
    ```bash
    uv venv
    source .venv/bin/activate
    ```
3.  **Install Dependencies:**
   ```bash
    uv add mcp python-dotenv
    ```
4.  **Create Files:**

    ```bash
    touch client.py
    touch .env
    ```
#### Implementation in `client.py`

```python
import asyncio
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
import os
from dotenv import load_dotenv
load_dotenv()

async def main():
    
    server_path = os.environ.get('SERVER_PATH')
    if not server_path:
        print("Please set SERVER_PATH")
        exit(1)
    
    allowed_directories = os.environ.get('ALLOWED_DIRECTORIES', '').split(':')
    print(f"Connecting to {server_path}")
    
    # Create server parameters for stdio connection
    server_params = StdioServerParameters(
        command="python", # Executable
        args=[server_path, *allowed_directories], # Optional command line arguments
        env=None # Optional environment variables
    )
    
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            # Initialize the connection
            await session.initialize()

            # List available tools
            tools = await session.list_tools()
            print("Available tools:", [tool.name for tool in tools])
            
            #Create a file
            create_file_result = await session.call_tool(
                name = "write_file",
                arguments = {
                    "path": "/Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt",
                    "content": "hello world from python"
                }
            )
            print('file create result: ', create_file_result)

            print("done.")


if __name__ == "__main__":
    asyncio.run(main())
```

#### Set environment variables in a `.env` file:

```env
SERVER_PATH=path/to/your/server/script.py
ALLOWED_DIRECTORIES="/Users/dazzagreenwood/mcp-hello/module1/files"
```
#### Usage:

1. Run the Python client: `python client.py`
    *   You will need to set `SERVER_PATH` env variable and `ALLOWED_DIRECTORIES` environment variable to a list of paths separated by `:` to match configuration of your server

    For example, using the `dazzaji_filesystem.md` example, make sure your `.env` looks like this:

    ```env
        SERVER_PATH=/Users/dazzagreenwood/filesystem/src/index.ts
        ALLOWED_DIRECTORIES="/Users/dazzagreenwood/mcp-hello/module1/files"
    ```
2. Run the Python client: `python client.py`

### Notes on Implementation
Both the TypeScript/Node.js and Python examples take the approach of directly instantiating the `Client` and `StdioClientTransport`. Both implementations focus on creating a file and displaying basic output.  You could extend these with additional parameters to support testing of different tools in a generic way.

Key components:

-   **`Client`:** Used to establish and maintain the connection with the server.
-   **`StdioClientTransport`**: Connects over standard input/output streams for local servers.
-   **Tool calls**: `await session.call_tool`  executes a single tool.
-   **Response Handling**: Displays server responses or logs errors.

## Additional Considerations

### Testing Strategies

-   **MCP Inspector:** Always test your servers with the MCP Inspector.
-   **Claude Desktop:** Perform integration tests using Claude Desktop to ensure your server works well with its interface.
-   **Unit Tests:** For any code implementing more complex logic, create unit tests.

### Error Handling
- Always use try-catch blocks to handle exceptions from tools or connection requests.
- Display meaningful and clear error messages.
- Log all errors from both client and server for easier debugging.

### Security Considerations
- Avoid storing credentials or secrets directly in your application code. Instead, use the environment and manage secrets in a secure way.
- Validate all inputs to avoid command injection or file system traversal.
- Make sure the allowed directories are restricted to expected folders and paths.

### Future Improvements
* Add ability to pass arbitrary tool or prompt names to the clients, to test various server endpoints
* Add ability to create and list resources in both clients.
* Implement a more robust client with support for complex messages and error handling.
* Make the client generic enough that it can be used to test multiple servers.

By combining the code provided in `MCP-Repositories-combined_file.md`, the new feature implementation example in `dazzaji_filesystem.md` and this comprehensive guide, you should now have a firm foundation for adding new functionality to existing Model Context Protocol servers or even building your own new server and client.


-----------

# Appendix 1: MCP Client and Server Setup for Testing

To test the client and server effectively while managing complexity and avoiding conflicts, you can follow one of two approaches. Each has pros and cons:

---

### **Option 1: Run Client and Server in the Same Project**

**Steps:**
1. Use the same Python project directory (e.g., the one with `dazzaji_filesystem.md`) to implement and test the client and server.
2. Add the client code to a new file, such as `client_test.py`, to keep it separate from server code.
3. Use the same virtual environment, ensuring dependencies are installed and compatible.
4. Start the server in one terminal tab:
   ```bash
   python server.py
   ```
5. Open another terminal tab or pane (in VS Code or a standalone terminal) and run the client to test commands:
   ```bash
   python client_test.py
   ```

**Pros:**
- Simplifies the setup; you manage one environment and dependency set.
- Easier to cross-reference client and server code.

**Cons:**
- Potential for dependency conflicts if the client needs different packages or versions.
- The shared project can get cluttered if you add multiple test scripts.

---

### **Option 2: Run Client and Server in Separate Projects**

**Steps:**
1. Create a separate directory (e.g., `mcp_client`) for the client project and initialize a new virtual environment.
2. Implement the client in this separate directory.
3. Keep the server running in its own project and terminal.
   - Open the server project in VS Code, start the server, and leave the terminal running:
     ```bash
     python server.py
     ```
4. Open the client project in a new VS Code instance or a separate terminal and run the client:
   ```bash
   python client_test.py
   ```

**To avoid the server terminating when you close VS Code:**
- Start the server as a background process:
  ```bash
  nohup python server.py > server.log 2>&1 &
  ```
- Alternatively, use `tmux` or `screen` to manage server sessions:
  - Start a session with `tmux`:
    ```bash
    tmux new -s server_session
    ```
  - Run the server:
    ```bash
    python server.py
    ```
  - Detach from the session with `Ctrl+B, D` and reattach later:
    ```bash
    tmux attach -t server_session
    ```

**Pros:**
- Clear separation of concerns; no risk of dependency conflicts.
- Easier to manage and deploy the client independently in the future.

**Cons:**
- Slightly more complex to set up and manage.
- Requires using tools like `tmux` to keep the server running in the background.

---

### **Recommendation**
If you’re focused on simplicity for a quick "hello-world" test:
- Start with **Option 1 (Same Project)**.
- Use separate files and terminal tabs to isolate client and server functionality.

If you anticipate evolving the client and server into independent projects:
- Transition to **Option 2 (Separate Projects)** after initial testing.

---

### **Testing Tools (e.g., `read_file`, `list_directory`)**
Once the server and client are running:
1. **Modify the Client Command:**
   Update the client script (e.g., `client_test.py`) to test specific tools. Replace or extend the `tools/call` request:
   ```python
   # Test read_file
   read_file_response = await session.call_tool(
       name="read_file",
       arguments={"path": "/path/to/hello_world.txt"}
   )
   print("Read File Result:", read_file_response)

   # Test list_directory
   list_dir_response = await session.call_tool(
       name="list_directory",
       arguments={"path": "/path/to/directory", "recursive": False}
   )
   print("List Directory Result:", list_dir_response)
   ```

2. **Use Command-Line Arguments for Flexibility:**
   Allow the client script to accept command-line arguments to dynamically test tools. For example:
   ```python
   import argparse
   parser = argparse.ArgumentParser()
   parser.add_argument("--tool", required=True, help="Tool to call")
   parser.add_argument("--args", required=True, help="Arguments as JSON")
   args = parser.parse_args()

   import json
   tool_args = json.loads(args.args)

   # Dynamically call the tool
   response = await session.call_tool(name=args.tool, arguments=tool_args)
   print("Tool Response:", response)
   ```

   Run the client with specific commands:
   ```bash
   python client_test.py --tool "read_file" --args '{"path": "/path/to/file.txt"}'
   ```

3. **Iterate and Test:**
   Test each tool in turn by modifying the script or using arguments.

---

### **Final Notes**
- Keep it simple for the initial test to avoid overcomplicating the setup.
- Expand functionality (e.g., dynamic command-line arguments) after you confirm the client and server can communicate.


---

# Appendix 2 Confirm File Creation


### **Steps to Confirm File Creation**

After running the client script:
1. **Final File Name and Content:**
   - **File Name:** `testfile.txt`
   - **File Path:** `/Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt`
   - **Expected Content:** `hello world from client`

2. **Command for Confirmation (if needed):**
   In a terminal, use the `cat` command to confirm:
   ```bash
   cat /Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt
   ```

---

### **Do Additional Commands Need to Be Run After the Client?**
- **No Additional Commands Needed:** 
  - The client script sends the `write_file` command to the server. If the server is running correctly, the file will be created during the client execution.
  - The server should respond with confirmation, which the client logs.

---

### **Final Recommendations**
1. **Run the Server:**
   Launch the server using the provided command:
   ```bash
   node /Users/dazzagreenwood/filesystem/dist/index.js /Users/dazzagreenwood/mcp-hello/module1/files
   ```

2. **Run the Client:**
   Execute the client script with the path to the server:
   ```bash
   node build/client.js /Users/dazzagreenwood/filesystem/dist/index.js /Users/dazzagreenwood/mcp-hello/module1/files
   ```

3. **Verify File Creation:**
   Use the terminal to check the existence and content of the file:
   ```bash
   ls -l /Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt
   cat /Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt
   ```

4. **Optional Tests:**
   - Test other tools (e.g., `read_file`, `list_directory`) using MCP Inspector or the client to ensure the server's functionality.

Your server and client setup are robust and should work seamlessly. 


## Adding Other filesystem Commands

Once the server and client are up and running, and you've confirmed that the "hello-world" file was created, you can test other tools (e.g., `read_file`, `list_directory`) by sending appropriate commands via the client. Here's how you can proceed:

---

### **Testing Other Tools with the Client**
You don't need to add special commands to the terminal itself, but you will need to modify the client script or provide input arguments to test the desired tools.

#### **General Steps**
1. **Update the Client Code to Test Other Tools:**
   - Modify the `client.ts` or `client.py` file to send requests to the server using the tool name and required arguments.
   - Each tool requires specific input parameters, which you can pass using JSON-like structures.

2. **Example: Adding Commands for Other Tools**
   - Below are examples of how to test `read_file` and `list_directory`.

---

#### **TypeScript Client Example**
Modify the `main` function in `client.ts` to call different tools. For example:

**1. Read a File (`read_file`):**
```typescript
const readFileResult = await client.request(
    {
        method: "tools/call",
        params: {
            name: "read_file",
            arguments: {
                path: "/Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt" // Replace with your file path
            }
        }
    },
    CallToolResultSchema
);

console.log("Read file result:", readFileResult);
```

**2. List a Directory (`list_directory`):**
```typescript
const listDirResult = await client.request(
    {
        method: "tools/call",
        params: {
            name: "list_directory",
            arguments: {
                path: "/Users/dazzagreenwood/mcp-hello/module1/files", // Replace with the directory you want to list
                recursive: true // Set to `false` for non-recursive listing
            }
        }
    },
    CallToolResultSchema
);

console.log("List directory result:", listDirResult);
```

---

#### **Python Client Example**
Modify the `main` function in `client.py` to test other tools:

**1. Read a File (`read_file`):**
```python
read_file_result = await session.call_tool(
    name="read_file",
    arguments={
        "path": "/Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt"  # Replace with your file path
    }
)
print("Read file result:", read_file_result)
```

**2. List a Directory (`list_directory`):**
```python
list_dir_result = await session.call_tool(
    name="list_directory",
    arguments={
        "path": "/Users/dazzagreenwood/mcp-hello/module1/files",  # Replace with your directory path
        "recursive": True  # Set to `False` for non-recursive listing
    }
)
print("List directory result:", list_dir_result)
```


---

# Appendix 3: Test More Tools in filesystem Server

#### **Testing Multiple Tools Dynamically**
You can create a command-line argument system in your client to make testing more flexible.

**TypeScript Example:**
Allow users to pass the tool name and arguments via command-line arguments:
```typescript
const toolName = process.argv[3]; // e.g., "read_file"
const toolArgs = JSON.parse(process.argv[4]); // e.g., '{"path": "/path/to/file"}'

const toolResult = await client.request(
    {
        method: "tools/call",
        params: {
            name: toolName,
            arguments: toolArgs
        }
    },
    CallToolResultSchema
);

console.log(`${toolName} result:`, toolResult);
```

**Python Example:**
Use `argparse` to accept the tool name and arguments:
```python
import argparse
import json

parser = argparse.ArgumentParser(description="Test MCP tools")
parser.add_argument("--tool", required=True, help="Tool name (e.g., read_file, list_directory)")
parser.add_argument("--args", required=True, help='Arguments as JSON string (e.g., \'{"path": "/path/to/file"}\')')
args = parser.parse_args()

tool_result = await session.call_tool(
    name=args.tool,
    arguments=json.loads(args.args)
)
print(f"{args.tool} result:", tool_result)
```

Run the client with:
```bash
python client.py --tool read_file --args '{"path": "/Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt"}'
```

---

### **Key Notes for Testing**
1. **Supported Tools**: 
   - Refer to the tools listed in the server implementation (`index.ts`). Examples include:
     - `read_file`
     - `list_directory`
     - `create_directory`
     - `move_file`
     - `get_file_info`

2. **Required Inputs**: 
   - Each tool requires specific inputs. Use the input schemas defined in the server (e.g., `WriteFileArgsSchema`, `ReadFileArgsSchema`).

3. **Tool Validation**:
   - Ensure the input paths are within the allowed directories. Otherwise, the server will reject the request.

4. **Error Handling**:
   - Add error-handling logic in the client to capture and log server errors.

---

### **Testing Workflow**
1. Start the server:
   ```bash
   node dist/index.js "/Users/dazzagreenwood/mcp-hello/module1/files"
   ```
2. Run the client to test specific tools:
   ```bash
   node build/client.js /path/to/server/index.js read_file '{"path": "/Users/dazzagreenwood/mcp-hello/module1/files/testfile.txt"}'
   ```
   or for Python:
   ```bash
   python client.py --tool list_directory --args '{"path": "/Users/dazzagreenwood/mcp-hello/module1/files", "recursive": true}'
   ```
3. Verify results in the terminal output.

By updating the client to dynamically support testing tools and arguments, you can streamline the testing process for all implemented server functionalities.
