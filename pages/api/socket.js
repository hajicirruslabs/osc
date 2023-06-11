import { Server } from "socket.io";

export default function handler(req, res) {
  // if (res.socket.server.io) {
  //   console.log("socket already enabled");
  //   res.end();
  // } else {
  console.log("socket enabled");
  const io = new Server(res.socket.server);
  res.socket.server.io = io;
  console.log("attempt");

  io.on("connection", (socket) => {
    console.log("CONNECT");
    socket.on("handle-heart", (data) => {
      console.log(data);
      socket.emit("new-handle-heart", data);
    });
  });
  // }

  res.end();
}
