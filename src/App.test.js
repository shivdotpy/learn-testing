import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Check if render text `code by`", () => {
  render(<App />);
  const linkElement = screen.getByText(/Code by Shiv Sharma/i);
  expect(linkElement).toBeInTheDocument();
});
