import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404.jsx";

function AppLauncher() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export  default AppLauncher;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppLauncher />
  </React.StrictMode>
);
