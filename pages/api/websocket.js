import { WebSocketServer } from "ws";

export default function handler(req, res) {
  const server = new WebSocketServer(res.socket.server);
  res.socket.server.server = server;

  server.on("connection", (socket) => {
    // send a message to the client
    socket.send(
      JSON.stringify({
        type: "hello from server",
        content: [1, "2"],
      })
    );

    // receive a message from the client
    socket.on("message", (data) => {
      const packet = JSON.parse(data);

      switch (packet.type) {
        case "hello from client":
          // ...
          break;
      }
    });
  });

  res.end();
}
