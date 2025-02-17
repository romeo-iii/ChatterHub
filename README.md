# ChatterHub

This is a simple real-time chat application built with Node.js, Express, and Socket.IO.

## Features

- Real-time messaging
- Simple and clean user interface
- Automatically scrolls to the latest message

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/romeo-iii/chat-app.git
    cd chat-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    node server.js
    ```

4. Open your browser and navigate to [http://localhost:3000](http://_vscodecontentref_/0)

## Project Structure

- [public](http://_vscodecontentref_/1)
  - [client.js](http://_vscodecontentref_/2): Client-side JavaScript to handle real-time messaging.
  - [index.html](http://_vscodecontentref_/3): HTML file for the chat interface.
  - [style.css](http://_vscodecontentref_/4): CSS file for styling the chat interface.
- [server.js](http://_vscodecontentref_/5): Server-side code to handle connections and messaging.
- [package.json](http://_vscodecontentref_/6): Project metadata and dependencies.

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Socket.IO](https://socket.io/): Enables real-time, bidirectional and event-based communication.