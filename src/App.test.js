import { calculateNextValue, calculateWinner, emptySquares, selectSquare } from "./App";

test("Frist Moove : Player 1 selects the fourth square", () => {
  expect(selectSquare(3, emptySquares)).toStrictEqual([
    null,
    null,
    null,
    "X",
    null,
    null,
    null,
    null,
    null,
  ]);
});

test("Second Moove : Player 2 selects the first square", () => {
  expect(
    selectSquare(0, [null, null, null, "X", null, null, null, null, null])
  ).toStrictEqual(["O", null, null, "X", null, null, null, null, null]);
});

test("Which one is the next to play ? fifth tour.", () => {
  expect(
    calculateNextValue(["O", null, null, "X", "X", null, "O", null, null])
  ).toStrictEqual("X");
});

test("Which one is the next to play ? sixth tour.", () => {
  expect(
    calculateNextValue(["O", null, 'X', "X", "X", null, "O", null, null])
  ).toStrictEqual("O");
});


test("Which one is the winner ?", () => {
  expect(
    calculateWinner(["O", 'O', 'O', "X", "X", null, "X", null, 'X'])
  ).toStrictEqual("O");
});