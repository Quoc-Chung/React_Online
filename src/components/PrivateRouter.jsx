import { Navigate } from 'react-router-dom';

export default function PrivateRouter({ user, yeucauQuyen, children }) {
  if (!user) {
    // Chưa login thì chuyển về login
    return <Navigate to="/login" replace />;
  }
  if (yeucauQuyen && user.role !== yeucauQuyen) {
    // Kiểm tra quyền
    return <Navigate to="/" replace />;
  }
  return children;
}
