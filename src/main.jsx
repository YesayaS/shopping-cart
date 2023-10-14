import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Router from "./router";

import "./index.css";
import "@fontsource/rubik";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
