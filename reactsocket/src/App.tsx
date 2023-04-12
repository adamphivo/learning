import React, { useState, useEffect } from "react";
import { socket } from "./socket";
import { Events } from "./Events";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState<any>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value: any) {
      const newEvents = [...fooEvents, value];
      setFooEvents(newEvents);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("test", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("test", onFooEvent);
    };
  }, [fooEvents]);

  return (
    <div className="App">
      {isConnected && <div>CONNECTED</div>}
      <Events events={fooEvents} />
    </div>
  );
}
