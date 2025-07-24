import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavSection from "./components/NavSection"; // Corrected import (no destructuring)
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";

const App = () => {
  return (
    <BrowserRouter>
      <NavSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
