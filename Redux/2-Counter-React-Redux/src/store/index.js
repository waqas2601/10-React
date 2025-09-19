import { createStore } from "redux";

const INITIL_VALUE = {
  counter: 0,
};

const counterReducer = (store = INITIL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + action.payload };
  } else if (action.type === "SUBTRACT") {
    return { ...store, counter: store.counter - action.payload };
  } else if (action.type === "RESET") {
    return { ...store, counter: 0 };
  }
  return store;
};

const countStore = createStore(counterReducer);

export default countStore;
