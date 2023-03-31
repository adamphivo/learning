import { useState } from "react";

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  isWinner: boolean;
}

export default function Square(props: SquareProps) {
  return (
    <button
      onClick={props.onSquareClick}
      className={`square ${props.isWinner ? "winner" : ""}`}
    >
      {props.value}
    </button>
  );
}
