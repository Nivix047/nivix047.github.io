import React from "react";
import Home from "../pages/Home";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Contact from "../pages/Home/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Layout() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
