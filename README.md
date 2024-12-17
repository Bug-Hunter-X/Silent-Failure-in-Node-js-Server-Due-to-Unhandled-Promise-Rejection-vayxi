# Silent Failure in Node.js Server Due to Unhandled Promise Rejection

This repository demonstrates a common but subtle bug in Node.js servers: silent failures due to unhandled promise rejections within asynchronous operations.  The server appears to function normally, but errors are swallowed and not properly communicated to the client.

## Bug Description

The `bug.js` file contains a Node.js HTTP server with an asynchronous operation that might fail.  If the operation fails, the error is logged to the console but not handled, resulting in a silent failure.  The client might receive a 500 error or experience unexpected behavior.

## Solution

The `bugSolution.js` file demonstrates how to properly handle promise rejections to prevent silent failures.  A `try...catch` block is used to catch errors, and appropriate responses are returned to the client.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Access the server in your browser (e.g., `http://localhost:3000`).  Observe that the server might fail silently sometimes.
5. Run `node bugSolution.js`. Access the server. Observe that now the errors are handled gracefully.