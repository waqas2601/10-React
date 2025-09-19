import React from "react";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ margin: "5px 0" }}>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{ marginLeft: "10px" }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
