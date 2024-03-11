import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button.component";

test("Testing button component", () => {
  render(<Button />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);

  const text = screen.getByText("Updated data");
  expect(text).toBeInTheDocument();
});
