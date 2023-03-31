import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async() => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
