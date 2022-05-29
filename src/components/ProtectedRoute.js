import React from "react";
import { Navigate } from "react-router-dom";
import { HOME_PATH } from "../Paths";
const ProtectedRoute = ({ user, fallbackURL, children }) => {
  if (!user) {
    return <Navigate to={fallbackURL || HOME_PATH} replace />;
  }
  return children;
};
export default ProtectedRoute;
