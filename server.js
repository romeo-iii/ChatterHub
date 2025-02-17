// server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files from the "public" folder
app.use(express.static('public'));

// When a client connects
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for 'chat message' events from the client
  socket.on('chat message', (msg) => {
    // Emit the message to all connected clients
    io.emit('chat message', msg);
  });

  // When a client disconnects
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server on port 3000
http.listen(3000, () => {
  console.log('Server is listening on port 3000');
});