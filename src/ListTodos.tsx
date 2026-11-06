interface ListTodosProps {
  todos: string[];
}

export function ListTodos({ todos }: ListTodosProps) {
  return (
    <div>
      <h2>Mina Todos</h2>

      {todos.length === 0 ? (
        <p>Inga todos ännu!</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

