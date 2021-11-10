import { calculateNextValue, calculateWinner, selectSquare } from "./App";

test("Game successfully update its status after first player targets the fourth square", () => {
  expect(selectSquare(3, [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ])).toStrictEqual([
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

test("Game successfully update its status after second player targets the first square", () => {
  expect(
    selectSquare(0, [null, null, null, "X", null, null, null, null, null])
  ).toStrictEqual(["O", null, null, "X", null, null, null, null, null]);
});

test("Game successfully calculate which player needs to play at round 5", () => {
  expect(
    calculateNextValue(["O", null, null, "X", "X", null, "O", null, null])
  ).toStrictEqual("X");
});

test("Game successfully calculate which player needs to play at round 6", () => {
  expect(
    calculateNextValue(["O", null, 'X', "X", "X", null, "O", null, null])
  ).toStrictEqual("O");
});


test("Game successfully calculate who is the winner based on its current status", () => {
  expect(
    calculateWinner(["O", 'O', 'O', "X", "X", null, "X", null, 'X'])
  ).toStrictEqual("O");
});

test("Game successfully calculate that there is no winner based on its current status", () => {
  expect(
    calculateWinner(["O", 'O', null, "X", "X", null, "X", null, null])
  ).toStrictEqual(null);
});