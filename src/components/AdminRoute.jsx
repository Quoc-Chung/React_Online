// components/AdminRoute.jsx
import { Navigate } from "react-router-dom";

export default function AdminRoute({ isAuthenticated, role, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    alert("Bạn không có quyền truy cập!");
    return <Navigate to="/" replace />;
  }

  return children;
}
