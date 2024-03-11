import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test App component", function () {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle("React Logo");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument;
});
