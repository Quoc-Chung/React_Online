// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

import Home from "./pages/Home";
import GioHang from "./pages/GioHang";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

export default function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null); 
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/"); 
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      {user && <Header user={user} onLogout={handleLogout} />}

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route path="/" element={
          <PrivateRoute user={user}>
            <Home />
          </PrivateRoute>
        } />

        <Route path="/giohang" element={
          <PrivateRoute user={user}>
            <GioHang />
          </PrivateRoute>
        } />

        <Route path="/contact" element={
          <PrivateRoute user={user}>
            <Contact />
          </PrivateRoute>
        } />

        <Route path="/admin" element={
          <PrivateRoute user={user} requiredRole="admin">
            <Admin />
          </PrivateRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
