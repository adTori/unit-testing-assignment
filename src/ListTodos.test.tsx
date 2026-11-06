import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ListTodos } from "./ListTodos";

describe("ListTodos component", () => {

    it("should display the heading Mina Todos", () => {
        render(<ListTodos todos={[]} />);

        expect(
            screen.getByRole("heading", { name: "Mina Todos" })
        ).toBeInTheDocument();
    });


    it("should display a message when the todo list is empty", () => {
        render(<ListTodos todos={[]}/>);

        expect(screen.getByText("Inga todos ännu!")).toBeInTheDocument();
    });

});