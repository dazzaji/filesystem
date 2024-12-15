> NOTE: Add the following guidelines to LLM's when implementing new features for existing MCP servers.

---

# Guide for Implementing MCP Server Features

This guide helps ensure Large Language Models (LLMs) provide accurate, efficient, and secure instructions when adding new features to MCP servers. While many examples assume a Node.js and TypeScript/JavaScript environment, **if you are working in Python or another language, apply analogous steps using the appropriate tools and dependency management practices.** The core principles of verifying dependencies, validating paths, implementing robust error handling, and incremental testing remain universally applicable.

## Key MCP Concepts (If Unfamiliar, Review Before Implementation)

- **MCP Architecture**: JSON-RPC 2.0 messaging, client-server roles, connection lifecycle, server capabilities, and utilities like progress, cancellation, logging, and completion.  
- **Core Primitives**: Prompts, resources, and tools.  
- **Error Handling**: Understand MCP’s error codes and handling strategies.  
- **Transports**: Stdio, HTTP SSE.  
- **Client Features**: Roots and sampling.

**Understanding these MCP fundamentals first** ensures that any added feature integrates smoothly with the existing ecosystem.

## Language and Framework Considerations

- **For Node.js/TypeScript/JavaScript**:  
  - Use `npm info [package]` to verify package versions.  
  - Confirm presence of built-in modules (e.g., `fs/promises`) before installing external packages.  
  - Include `@types/...` packages if using TypeScript.  
  - Ensure correct `tsconfig.json` and run `npm run build` to produce a `dist` directory.
  
- **For Python (or other languages)**:  
  - Use `pip` or the language’s package manager to verify and install dependencies.  
  - Ensure virtual environments or environment managers (like `venv` or `conda`) are correctly set up.  
  - Check if required modules are built-in or need installation.  
  - Employ equivalent schema validation, testing frameworks, and configuration management tools.

The **principle remains the same**: verify dependencies, use absolute paths, implement validation and error handling, and thoroughly test changes.

## Implementation Best Practices (Applicable to Any Tech Stack)

1. **Dependency Verification**:  
   - Confirm that packages exist and use verified versions.  
   - Distinguish between runtime and development dependencies.  
   - Remove unnecessary or duplicate packages.

2. **Configuration Files and Paths**:  
   - Always use absolute paths for executables and directories.  
   - Validate Node.js path (e.g., `which node`) or Python interpreter path if needed.  
   - Update config files like `claude_desktop_config.json` with correct paths.

3. **Incremental Development**:  
   - Add features in small, testable units.  
   - Validate logic and error handling at each step.

4. **Validation, Sanitization, and Security**:  
   - Validate all inputs, particularly user-provided paths.  
   - Restrict operations to allowed directories.  
   - Provide clear, informative error messages.

5. **Testing**:  
   - Use unit and integration tests (MCP Inspector, Claude Desktop, or similar tools) to confirm that features work as intended.  
   - Test normal and error conditions, and verify that error handling is robust.

6. **Documentation**:  
   - Provide instructions for building, running, and testing the new feature.  
   - Document known working versions of dependencies and example configurations.

---

## Very Concise "How-To" Checklist for Future LLMs

When implementing a new MCP server feature, **keep this concise checklist in mind to avoid common mistakes**:

1. **Verify Package Existence and Versions**  
   - Run `npm info <package>` or equivalent in other ecosystems.  
   - Ensure type definitions (if TypeScript) or appropriate equivalents exist.

2. **Use Absolute Paths**  
   - No relative paths for executables or directories.  
   - Validate your runtime (e.g., `which node`) and configuration files.

3. **Check for Built-In Modules First**  
   - Don’t install modules that are already part of the standard library (e.g., `fs/promises` in Node.js).

4. **Keep Feature Additions Small and Testable**  
   - Test after each incremental change to catch errors early.

5. **Validate Inputs and Secure Operations**  
   - Validate paths, disallow traversal outside allowed directories, and handle all errors gracefully.

6. **Test Thoroughly**  
   - Run integration tests with MCP Inspector or equivalent tools.  
   - Confirm that the build output exists and is correct (e.g., `dist` directory).  
   - Ensure all tests pass before finalizing.

7.  **Missing instructions**: Provide specific step-by-step instructions for the user to follow when creating, configuring, using, and testing with MCP inspector, Claude Desktop, or both.  This includes:
    * Precise and complete step-by-step instructions to implement the project, including each command to run in a copy/paste format.
    * Identify clearly in instruction when a new terminal is needed or other actions are needed for the user to do.
    * How to verify a connection using the inspector.
    * A description of what tools to call, what data to provide, and what results to expect.
    * Instructions for setting up a valid test configuration that contains all required paths and settings.


**By adhering to this concise checklist, future LLMs will avoid predictable pitfalls and ensure robust, secure, and efficient feature additions to MCP servers—regardless of the language or framework.**