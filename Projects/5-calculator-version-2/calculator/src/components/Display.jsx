import styles from "../App.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      value={displayValue}
      readOnly
      className={styles.display}
    />
  );
};
export default Display;
