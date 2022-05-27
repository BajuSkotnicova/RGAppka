import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Trails from "./pages/Trails";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Account from "./pages/Account";

import ProtectedRoute from "./components/ProtectedRoute";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trails" element={<Trails />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
