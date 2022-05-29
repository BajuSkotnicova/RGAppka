import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Trails from "./pages/Trails";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { UserProvider } from "./context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { HOME_PATH, TRAILS_PATH, SAVED_TRAILS_PATH } from "./Paths";
import "./index.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={TRAILS_PATH} element={<Trails />} />
            <Route
              path={SAVED_TRAILS_PATH}
              element={
                <ProtectedRoute user={user}>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<p>There is nothing here: 404!</p>} />
          </Routes>
        </UserProvider>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
