export type SquareState = "X" | "O" | null;
export type Squares = Array<SquareState>;
export interface BoardProps {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (a: Squares) => void;
}
export interface Winner {
  symbol: string;
  squares: number[];
}
