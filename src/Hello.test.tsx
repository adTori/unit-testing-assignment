import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello component", () => {
  it("should display Hello", () => {
    render(<Hello />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});