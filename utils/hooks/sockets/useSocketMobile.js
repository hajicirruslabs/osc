import { io } from "socket.io-client";
import { useEffect, useRef } from "react";

export default function useSocketInit() {
  const socket = useRef(null);
  useEffect(() => {
    socketInitializer();
  }, []);

  async function socketInitializer() {
    const res = await fetch("/api/socket");
    console.log(res);

    socket.current = io("", {
      secure: true,
      reconnection: false,
      rejectUnauthorized: false,
      transports: ["websocket"],
      path: "/api/socket",
    });

    socket.current.on("connect", () => {
      console.log("socket connected");
    });

    socket.current.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
    console.log(socket.current);
  }

  return socket;
}
