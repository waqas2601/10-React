import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { Provider } from "react-redux";
import countStore from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={countStore}>
      <App />
    </Provider>
  </StrictMode>
);
