import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App"; // Страница с персонажами
import AppSecond from "./AppSecond"; // Страница с локациями
import AppThird from "./AppThird"; // Страница с эпизодами
import reportWebVitals from "./reportWebVitals";
import "./index.css";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/locations" element={<AppSecond />} />
        <Route path="/episodes" element={<AppThird />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

reportWebVitals();
