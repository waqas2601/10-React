import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    const value = Number(inputElement.current.value) || 0;
    dispatch({ type: "ADD", payload: value });
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    const value = Number(inputElement.current.value) || 0;
    dispatch({ type: "SUBTRACT", payload: value });
    inputElement.current.value = "";
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary "
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="number"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-secondary" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>

        <button type="button" className="btn btn-warning" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};
export default Controls;
