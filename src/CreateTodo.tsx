import { useState } from "react";

export function CreateTodo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() === "") return;   // hoppa över tomma
    setTodos([...todos, text]);
    setText("");                      // töm fältet
  }

  return (
    <div>
      <h1>Min Todo-lista</h1>

      <input
        placeholder="Skriv en todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Lägg till</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

