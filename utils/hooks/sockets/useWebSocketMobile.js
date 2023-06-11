import { useRef, useEffect } from "react";

export default function useSocket() {
  const socket = useRef(null);

  useEffect(() => {
    socketInitializer();
  }, []);

  async function socketInitializer() {
    await fetch("/api/socket");
    socket.current = new WebSocket(`ws://${window.location.host}/api/websocket`);
    console.log(socket.current);

    socket.current.addEventListener("open", () => {
      // send a message to the server
      socket.current.send(
        JSON.stringify({
          type: "hello from client",
          content: [3, "4"],
        })
      );
    });

    // receive a message from the server
    socket.current.addEventListener("message", ({ data }) => {
      const packet = JSON.parse(data);

      switch (packet.type) {
        case "hello from server":
          // ...
          break;
      }
    });
  }
}

// export default function useSocketInit() {
//   const socket = useRef(null);
//   useEffect(() => {
//     socketInitializer();
//   }, []);

//   async function socketInitializer() {
//     const res = await fetch("/api/socket");
//     console.log(res);

//     socket.current = io({
//       secure: true,
//       reconnection: false,
//       rejectUnauthorized: false,
//       transports: ["websocket"],
//     });

//     socket.current.on("connect", () => {
//       console.log("socket connected");
//     });

//     socket.current.on("connect_error", (err) => {
//       console.log(`connect_error due to ${err.message}`);
//     });
//     console.log(socket.current);
//   }

//   return socket;
// }
