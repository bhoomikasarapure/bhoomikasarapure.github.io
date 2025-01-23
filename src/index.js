import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Make sure you have an App.js file in the src folder
import "./index.css"; // You can add this if you have an index.css file for global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
