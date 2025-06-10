import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, requiredAdmin = false }) => {
  const { isLogin, isAdmin } = useSelector((state) => state.auth);

  if (!isLogin) return <Navigate to="/login" />;

  if (requiredAdmin && !isAdmin) {
    alert("Bạn không có quyền truy cập trang Admin.");
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
