import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes } from "./routes/Routes.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
);
