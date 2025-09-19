import Task from "./Task";

export default function TaskList({ items }) {
  return (
    <ul>
      {items.map((task) => (
        // key ensures React knows which <li> is which
        <Task key={task.id} text={task.text} />
      ))}
    </ul>
  );
}
