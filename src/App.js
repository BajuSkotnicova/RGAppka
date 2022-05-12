import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Trails from "./pages/Trails";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Trail1 from "./pages/Trail1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trails" element={<Trails />} />
          <Route path="/trail" element={<Trail1 />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
