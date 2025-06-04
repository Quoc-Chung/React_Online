import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import Product from './pages/Product.jsx';
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';
import Admin from './pages/Admin.jsx';

function App() {
  const { trangThaiDangNhap } = useContext(AuthContext);
  const location = useLocation();

  const isAdminPage = location.pathname === '/admin';
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isAdminPage && !isLoginPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={trangThaiDangNhap ? <About /> : <Navigate to="/login" replace />} />
        <Route path="/cart" element={trangThaiDangNhap ? <Cart /> : <Navigate to="/login" replace />} />
        <Route path="/products" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!isAdminPage && !isLoginPage && <Footer />}
    </>
  );
}

export default App;
