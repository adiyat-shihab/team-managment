import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes } from "./routes/Routes.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      {" "}
      <Routes />
    </AuthProvider>
  </QueryClientProvider>,
);
