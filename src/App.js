// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from "react";

const emptySquares = Array(9).fill(null);

export const calculateNextValue = (squares) => {
  const xSquares = squares.filter((s) => s === "X");
  const oSquares = squares.filter((s) => s === "O");
  if (xSquares.length === oSquares.length) {
    return "X";
  }
  return xSquares.length > oSquares.length ? "O" : "X";
};

export const calculateWinner = (squares) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkLine = (line, squares) => {
    const correspondingSquares = squares.filter((s, i) => line.includes(i));
    const isCorrespondingSquaresMatching = correspondingSquares.every(
      (s) => s === correspondingSquares[0]
    );
    return isCorrespondingSquaresMatching ? correspondingSquares[0] : null;
  };

  return winningLines.reduce(
    (winner, line) =>
      checkLine(line, squares) ? checkLine(line, squares) : winner,
    null
  );
};

export const selectSquare = (squareIndex, squares) => {
  const nextValue = calculateNextValue(squares);
  const result = squares.map((s, i) => (i === squareIndex ? nextValue : s));
  return result;
};


export const Board = () => {
  const [squares, setQuares] = React.useState(emptySquares);
  const winner = calculateWinner(squares);

  const play = (squareIndex) => {
    setQuares(selectSquare(squareIndex, squares));
  };

  const restart = () => {
    setQuares(emptySquares);
  };

  const calculateStatus = (winner, nextValue) => {
    if (winner) {
      return `The winner is ${winner} !`;
    }

    return `${nextValue} it's your turn !`;
  };

  function renderSquare(i) {
    return (
      <button
        disabled={squares[i] || winner}
        className="square"
        onClick={() => play(i)}
      >
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div className="status">STATUS : {calculateStatus(winner, calculateNextValue(squares))}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
  );
};

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

function App() {
  return <Game />;
}

export default App;
