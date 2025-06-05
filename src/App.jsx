import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import GioHang from './pages/GioHang.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import About from './pages/About.jsx';
import Admin from './pages/Admin.jsx';

function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    role: ''
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("trangThaiDangNhap") === "true";
    const role = localStorage.getItem("quyen") || "";
    setAuth({ isAuthenticated: loggedIn, role: role });
  }, []);

  const handleLogin = (status, role) => {
    localStorage.setItem("trangThaiDangNhap", status);
    localStorage.setItem("quyen", role);
    setAuth({ isAuthenticated: status, role });
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("trangThaiDangNhap");
    localStorage.removeItem("quyen");
    setAuth({ isAuthenticated: false, role: "" });
    navigate("/login");
  };

  const isLoginPage = location.pathname === "/login";

  const PrivateRoute = ({ children }) =>
    auth.isAuthenticated ? children : <Navigate to="/login" replace />;

  const AdminRoute = ({ children }) => {
    if (!auth.isAuthenticated) return <Navigate to="/login" replace />;
    if (auth.role !== "admin") {
      alert("Bạn không có quyền truy cập!");
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <>
      {!isLoginPage && auth.isAuthenticated && (
        <Header role={auth.role} onLogout={handleLogout} />
      )}

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />

        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/giohang" element={<PrivateRoute><GioHang /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
      </Routes>

      {!isLoginPage && auth.isAuthenticated && <Footer />}
    </>
  );
}

export default App;
