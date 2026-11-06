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

    it("should display all todos passed through props", () => {
        render (<ListTodos todos={["Handla mat", "Plugga React", "Städa"]} />);

        expect(screen.getByText("Handla mat")).toBeInTheDocument();
        expect(screen.getByText("Plugga React")).toBeInTheDocument();
        expect(screen.getByText("Städa")).toBeInTheDocument();
    });

    it("should render as many li elements as there are todos", () => {
        render(<ListTodos todos={["Handla mat", "Plugga React", "Städa"]} />);

        expect(screen.getAllByRole("listitem")).toHaveLength(3);
    });

});