import React from 'react';
import { io } from "socket.io-client";

const socket = io(`http://localhost:3030/`);
socket.on("connect", () => {
  console.log(`Client ${socket.id}`);
});

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
