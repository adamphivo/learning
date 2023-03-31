import { useState } from "react";
import Square from "./Square";
import calculateWinner from "./utils";
import type { SquareState, Squares, Winner, BoardProps } from "./types";

export default function Game() {
  const [history, setHistory] = useState<Array<Squares>>([Array(9).fill(null)]);
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares: Squares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move: number) {
    setCurrentMove(move);
  }

  function handleSort() {
    setSortAscending(!sortAscending);
  }

  const moves = history.map((squares, move) => {
    let description: string = "";
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    if (currentMove != move) {
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    } else {
      return (
        <li key={move}>
          <p>{`You are at move #${move}`}</p>
        </li>
      );
    }
  });

  if (!sortAscending) {
    moves.reverse();
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
        <button onClick={handleSort}>Sort</button>
      </div>
    </div>
  );
}

function Board(props: BoardProps) {
  function handleClick(i: number) {
    if (props.squares[i] || calculateWinner(props.squares)) return;
    const nextSquares = props.squares.slice();
    nextSquares[i] = props.xIsNext ? "X" : "O";
    props.onPlay(nextSquares);
  }

  const winner = calculateWinner(props.squares);

  let status;

  if (winner) {
    status = "Winner: " + winner.symbol;
  } else if (!props.squares.includes(null)) {
    status = "Draw";
  } else {
    status = "Next player: " + (props.xIsNext ? "X" : "O");
  }

  const elements = [];

  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      row.push(
        <Square
          key={index}
          value={props.squares[index]}
          onSquareClick={() => handleClick(index)}
          isWinner={winner?.squares.includes(index) || false}
        />
      );
    }
    elements.push(
      <div key={i} className="board-row">
        {row}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {elements}
    </>
  );
}
