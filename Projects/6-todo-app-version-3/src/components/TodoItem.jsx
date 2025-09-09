import { IoMdDoneAll } from "react-icons/io";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-btn"
            onClick={() => onDeleteClick(todoName)}
          >
            <IoMdDoneAll />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
