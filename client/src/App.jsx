import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Join from "./Pages/Join";
import Aboutsection from "./components/About";
import Home from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutsection />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}
