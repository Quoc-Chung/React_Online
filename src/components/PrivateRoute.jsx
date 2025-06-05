// components/PrivateRoute.jsx
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ user, children, requiredRole }) {
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
