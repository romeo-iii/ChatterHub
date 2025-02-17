// client.js
// Connect to the server
const socket = io();

// When the form is submitted, send the message to the server
const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent page reload
  if (input.value) {
    socket.emit('chat message', input.value); // Send message to server
    input.value = ''; // Clear input field
  }
});

// Listen for 'chat message' events from the server
socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
  window.scrollTo(0, document.body.scrollHeight);
});
