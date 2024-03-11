import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test App component", function () {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle("React Logo");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument;
});

test("Testing input box", function () {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceholder = screen.getByPlaceholderText("Enter user name");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userid");
  expect(checkInput).toHaveAttribute("type", "text");
});
