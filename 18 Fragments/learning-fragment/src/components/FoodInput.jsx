import styles from "./FoodInput.module.css";

const FoodInput = ({ handleChange, value, handleAddItem }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddItem(); // same function as the Add button in App.jsx
    }
  };

  return (
    <input
      type="text"
      placeholder="Enter Food Item Here"
      className={styles.foodInput}
      onChange={handleChange}
      onKeyDown={handleKeyDown} // 👈 check for Enter key
      value={value}
    />
  );
};

export default FoodInput;
