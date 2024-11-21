import React from "react";
import { Navigate } from "react-router-dom";
import { useUser  } from "../context/UserContext";
import { hasRole, ROLES } from "../../utils/RoleUtils";

const ProtectedRoute = ({ component: Component, roles, redirectPath = "/" }) => {
  const { user } = useUser ();

  // Check if user role is defined and matches the allowed roles
  if (!user.role || !hasRole(user.role, roles)) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Component />;
};

export default ProtectedRoute;