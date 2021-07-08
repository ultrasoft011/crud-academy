// Starting a server
// We import the Express library with require
const express = require("express");
// When invoked on the second line, it returns an instance of an Express application.
const app = express();

// The purpose of a server is to listen for requests, perform whatever action is required to satisfy the request, and then return a response.

// In order for our server to start responding, we have to tell the server where to listen for new requests by providing a port number argument to a method called app.listen(). The server will then listen on the specified port and respond to any requests that come into it.
const PORT = 4001;

// The second argument is a callback function that will be called once the server is running and ready to receive responses.
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});