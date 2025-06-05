// components/Login.jsx
import { useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = [
    { username: 'admin', password: '123', role: 'admin' },
    { username: 'user', password: '123', role: 'user' }
  ];

  const checkCredentials = (username, password) => {
    return users.find(user => user.username === username && user.password === password);
  };

  const DangNhap = () => {
    const user = checkCredentials(username, password);
    if (user) {
      localStorage.setItem("trangThaiDangNhap", "true");
      localStorage.setItem("quyen", user.role);
      onLogin(true, user.role); // Gọi callback để cập nhật trạng thái đăng nhập
      navigate('/');
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu!');
    }
  };

  const Thoat = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label className="lblTen">Tên đăng nhập</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="txtTen"
          placeholder="Nhập tên đăng nhập"
        />
      </div>

      <div className="form-group">
        <label className="lblMK">Mật khẩu</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="txtMK"
          placeholder="Nhập mật khẩu"
        />
      </div>

      <div className="button-group">
        <button onClick={DangNhap} className="btnDangNhap">Đăng nhập</button>
        <button onClick={Thoat} className="btnThoat">Thoát</button>
      </div>
    </div>
  );
}
