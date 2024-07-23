const http = require('http');

/**
 * HTTP server that respond
 * @module 4-http
 */

/**
 * Callback function that handle incoming http request
 * @param {http.IncomingMessage} req the incoming HTTP request
 * @param {http.ServerResponse} res the server response
 */
const handleRequest = (req, res) => {
  // Set the response header to indicate that the response body will be plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello Holberton School!');
};

// Create a new HTTP server
const app = http.createServer(handleRequest);

// Start the server
app.listen(1245);

// Export the app variable
module.exports = app;
