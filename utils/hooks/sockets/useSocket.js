import { io } from "socket.io-client";
import { useEffect, useRef } from "react";

export default function useSocketInit({ handleNewHeart }) {
  const socket = useRef(null);
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");

    socket.current = io({
      transports: ["websocket"],
    });
    console.log(socket.current);

    socket.current.on("connect", () => {
      console.log("socket connected");
    });

    socket.current.on("new-handle-heart", (data) => {
      console.log(data);
      handleNewHeart(data);
    });
  };

  return socket;
}