import io from "socket.io-client";
import { useEffect, useRef } from "react";

export default function useSocketInit() {
  const socket = useRef(null);
  useEffect(() => {
    socketInitializer();
  }, []);

  async function socketInitializer() {
    await fetch("/api/socket");

    socket.current = io({
      rejectUnauthorized: false,
      withCredentials: true,
      transports: ["websocket"],
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
