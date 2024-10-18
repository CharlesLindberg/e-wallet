import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import CardDetailPage from "./pages/CardDetailPage/CardDetailPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addcard" element={<AddCardPage />} />
          <Route path="/card/:id" element={<CardDetailPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
