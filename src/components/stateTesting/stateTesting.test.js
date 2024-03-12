import { fireEvent, render, screen } from "@testing-library/react";
import { StateTesting } from "./stateTesting.component";

test("Method Testing case 1", () => {
  render(<StateTesting />);
  const btn = screen.getByTestId("btn1");
  fireEvent.click(btn);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
