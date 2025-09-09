import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalval(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalval(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
