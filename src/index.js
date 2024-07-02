import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename="/Hadi-Voyage">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
