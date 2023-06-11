import { Server } from "socket.io";

export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log("socket already enabled");
  } else {
    const io = new Server(res.socket.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
      },
    });
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("handle-heart", (data) => {
        socket.broadcast.emit("new-handle-heart", data);
      });

      socket.on("handle-livestream-number", (data) => {
        socket.broadcast.emit("new-handle-livestream-number", data);
      });

      socket.on("handle-page-location", (data) => {
        socket.broadcast.emit("new-handle-page-location", data);
      });
    });
  }

  res.end();
}
