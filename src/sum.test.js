import sum from "./sum";

test("Testing for sum function I", function () {
  let firstNumber = 10;
  let secondNumber = 20;

  let output = 30;
  expect(sum(firstNumber, secondNumber)).toBe(output);
});

test("Testing for sum function II", function () {
  let firstNumber = 50;
  let secondNumber = 50;

  let output = 100;
  expect(sum(firstNumber, secondNumber)).toBe(output);
});
