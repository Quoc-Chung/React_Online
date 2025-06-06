import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import GioHang from './pages/GioHang';

import PrivateRouter from './components/PrivateRouter';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Load user từ localStorage khi App mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Hàm gọi khi login thành công
  const handleLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    navigate('/');
  };

  // Hàm logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && user && <Header user={user} onLogout={handleLogout} />}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={
          <PrivateRouter user={user}>
            <Home />
          </PrivateRouter>
        } />
        <Route path="/giohang" element={
          <PrivateRouter user={user}>
            <GioHang />
          </PrivateRouter>
        } />
        <Route path="/contact" element={
          <PrivateRouter user={user}>
            <Contact />
          </PrivateRouter>
        } />
        <Route path="/admin" element={
          <PrivateRouter user={user} yeucauQuyen="admin">
            <Admin />
          </PrivateRouter>
        } />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
