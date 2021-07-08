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

// To tell our server how to deal with any given request, we register a series of routes. Routes define the control flow for requests based on the request’s path and HTTP verb. E.g. The path is the part of a request URL after the hostname and port number, so in a request to localhost:4001/monsters, the path is /monsters (in this example, the hostname is ‘localhost’, the port number is ‘4001’).

// Express uses app.get() to register routes to match GET requests. Express routes (including app.get()) usually take two arguments, a path (usually a string), and a callback function to handle the request and send a response.

const moods = [{ mood: 'excited about express!'}, { mood: 'route-tastic!' }];
app.get('/moods', (req, res, next) => {
  // Here we would send back the moods array in response
});

// GET
app.get('/expressions', (req, res, next) => {
    console.log(req);
  });

  // You may notice that there’s a line with the command app.use(express.static('public'));. This is used to make sure that once the server is started, you can reload the browser and see the Express Yourself machine.