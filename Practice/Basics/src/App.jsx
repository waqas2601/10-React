import { useState } from "react";
import TaskList from "./components/TaskList";

export default function App() {
  const tasks = [
    { id: 1, text: "Learn React Basics" },
    { id: 2, text: "Practice Components" },
    { id: 3, text: "Understand Props and Keys" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>My React Starter App</h1>
      <p>This app demonstrates components, props, lists, and keys.</p>

      {/* Passing tasks array as a prop */}
      <TaskList items={tasks} />
    </div>
  );
}
