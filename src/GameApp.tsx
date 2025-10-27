import { useState } from "react";

import "./App.css";

import GameCanvas from "./gameObjects/GameCanvas";

function GameApp() {
  const [count, setCount] = useState(1);

  return (
    <>
      <h1>Poker3D</h1>
      <GameCanvas boxCount={count} />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default GameApp;
