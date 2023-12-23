import React from "react";
import Home from "../pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Layout() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}
