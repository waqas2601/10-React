// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const INITIL_VALUE = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment(state) {
      state.counterVal++;
    },
    decrement(state) {
      state.counterVal--;
    },
    add(state, action) {
      state.counterVal = state.counterVal + action.payload;
    },
    subtract(state, action) {
      state.counterVal = state.counterVal - action.payload;
    },
    reset(state) {
      state.counterVal = 0;
    },
  },
});

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

const countStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // counter: counterReducer,
  },
});

export const counterActons = counterSlice.actions;
export default countStore;
