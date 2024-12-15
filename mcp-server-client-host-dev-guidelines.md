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
