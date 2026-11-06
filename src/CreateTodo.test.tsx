import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateTodo } from "./CreateTodo";
import { test, expect } from "vitest";

// 1. Komponent ska visa rubriken
test("visar rubriken 'Min Todo-lista'", () => {
  render(<CreateTodo />);
  expect(screen.getByText("Min Todo-lista")).toBeInTheDocument();
});

// 2. Användaren ska kunna skriva i input
test("ska uppdatera textfältet när man skriver", async () => {
  render(<CreateTodo />);
  const input = screen.getByPlaceholderText("Skriv en todo...");

  await userEvent.type(input, "Handla mjölk");

  expect(input).toHaveValue("Handla mjölk");
});

// 3. Klick på 'Lägg till' ska lägga till todo i listan
test("ska lägga till ny todo i listan och tömma fältet", async () => {
  render(<CreateTodo />);
  const input = screen.getByPlaceholderText("Skriv en todo...");
  const button = screen.getByText("Lägg till");

  await userEvent.type(input, "Diska");
  await userEvent.click(button);

  expect(screen.getByText("Diska")).toBeInTheDocument();
  expect(input).toHaveValue(""); // fältet ska tömmas
});


