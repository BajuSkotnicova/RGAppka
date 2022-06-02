import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "./App.css";
import Navbar from "./components/Navbar";
import Trails from "./pages/Trails";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { UserProvider } from "./context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  HOME_PATH,
  TRAILS_PATH,
  SAVED_TRAILS_PATH,
  DETAIL_PATH,
} from "./Paths";
import "./index.css";
import { auth, getCollection, addUidConverter } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Detail from "./pages/Detail";

function App() {
  const [user] = useAuthState(auth);

  const collection = getCollection("trails");
  const [trails, loading, error] = useCollectionData(
    collection.withConverter(addUidConverter),
    { snapshotListenOptions: { includeMetadataChanges: true } }
  );

  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path={HOME_PATH} element={<Home />} />
            <Route
              path={TRAILS_PATH}
              element={
                <Trails trails={trails} loading={loading} error={error} />
              }
            />
            <Route
              path={`${DETAIL_PATH}/:id`}
              element={
                <Detail trails={trails} loading={loading} error={error} />
              }
            />
            <Route
              path={SAVED_TRAILS_PATH}
              element={
                <ProtectedRoute user={user}>
                  <Account trails={trails} loading={loading} error={error} />
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
