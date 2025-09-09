import styles from "./item.module.css";

const Item = ({ foodItem, handleButton }) => {
  return (
    <li className={`${styles["all-item"]} list-group-item`}>
      <span className={styles["my-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleButton}
      >
        Buy Now
      </button>
    </li>
  );
};

export default Item;
