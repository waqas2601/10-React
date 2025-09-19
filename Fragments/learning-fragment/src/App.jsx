import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

const App = () => {
  // State to store input text
  let [textShow, setTextState] = useState("");

  // State to store food items (array)
  let [foodItems, setFoodItems] = useState([
    "Chicken Makhni",
    "MilkShake",
    "Fruits",
  ]);

  // Handle input change
  const handleChange = (event) => {
    setTextState(event.target.value);
  };

  // Handle adding new item
  const handleAddItem = () => {
    if (textShow.trim() !== "") {
      setFoodItems([...foodItems, textShow]); // add new item
      setTextState(""); // clear input after adding
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        {/* Show error if no items */}
        <ErrorMessage items={foodItems}></ErrorMessage>

        {/* Input to add food */}
        <FoodInput
          handleChange={handleChange}
          value={textShow}
          handleAddItem={handleAddItem}
        ></FoodInput>

        <button className="btn btn-primary mt-2" onClick={handleAddItem}>
          Add Food
        </button>

        {/* Show list of food items */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
};

export default App;
