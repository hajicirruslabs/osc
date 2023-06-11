import { Server } from "socket.io";

export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log("socket already enabled");
  } else {
    console.log("socket enabled");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log(socket);
      socket.on("handle-heart", (data) => {
        console.log(data);
        socket.emit("new-handle-heart", data);
      });
    });
  }

  res.end();
}
