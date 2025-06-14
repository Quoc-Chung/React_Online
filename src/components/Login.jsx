import React, { useState } from 'react';
import '../assets/css/Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName === 'admin' && password === '123') {
      alert('Đăng nhập thành công!');
      navigate('/');
    } else {
      alert('Sai tài khoản hoặc mật khẩu!');
    }
  };

  const handleExit = () => {
    setUserName('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập hệ thống</h2>
      <div className="login-form">
        <input
          type="text"
          placeholder="Tài khoản"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-buttons">
          <button onClick={handleLogin}>Đăng nhập</button>
          <button className="exit" onClick={handleExit}>Thoát</button>
        </div>
      </div>
    </div>
  );
}
