import { todoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import { useContext } from "react";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  const todoItemsFromContext = useContext(todoItemsContext);
  // console.log(`items from context: ${todoItemsFromContext}`);
  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
