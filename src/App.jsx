import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import CardDetailPage from "./pages/CardDetailPage/CardDetailPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addcard" element={<AddCardPage />} />
          <Route path="/card/:id" element={<CardDetailPage />} />
          <Route
            path="/settings"
            element={
              <SettingsPage
                currentTheme={theme}
                onThemeChange={handleThemeChange}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
