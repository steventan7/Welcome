import React from "react";
import "./App.css";
import PortfolioContent from "./Components/PortfolioContent";
import WelcomePage from "./Components/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="resume" element={<PortfolioContent />}>
          <Route path="experience/:id" element={<PortfolioContent />} />
          <Route path="portfolio/:id" element={<PortfolioContent />} />
          <Route path="activities/:id" element={<PortfolioContent />} />
        </Route>
        <Route path="contact" element={<PortfolioContent />} />
        <Route path="about-me" element={<PortfolioContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
