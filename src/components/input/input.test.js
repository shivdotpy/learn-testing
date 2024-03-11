import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./input.component";

describe("Test input component with state", () => {
  test("onchange event", () => {
    render(<Input />);
    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Shiv" } });
    expect(input.value).toBe("Shiv");
  });
});
