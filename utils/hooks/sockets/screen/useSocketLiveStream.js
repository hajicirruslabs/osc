import { io } from "socket.io-client";
import { useEffect, useRef } from "react";

export default function useSocketInit({ handleNewHeart }) {
  const socket = useRef(null);
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");

    socket.current = io();

    socket.current.on("connect", () => {
      console.log("socket connected");
    });
    console.log(socket.current);

    socket.current.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    socket.current.on("new-handle-heart", (data) => {
      console.log(data);
      handleNewHeart(data);
    });
  };

  return socket;
}
