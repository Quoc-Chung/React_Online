import { Navigate, useLocation } from "react-router-dom";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const roles = JSON.parse(localStorage.getItem("role") || "[]");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  const hasAccess = roles.some((r) => allowedRoles.includes(r));

  if (!hasAccess) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleBasedRoute;
