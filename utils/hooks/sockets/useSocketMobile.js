import { io } from "socket.io-client";
import { useEffect, useRef } from "react";

export default function useSocketInit() {
  const socket = useRef(null);
  useEffect(() => {
    const socketInitializer = async () => {
      await fetch("/api/socket");

      socket.current = io({
        transports: ["websocket"],
      });

      socket.current.on("connect", () => {
        console.log("socket connected");
      });

      socket.current.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
      });
      console.log(socket.current);
    };
    socketInitializer();
  }, []);

  return socket;
}
