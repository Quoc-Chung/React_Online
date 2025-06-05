// components/Login.jsx
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Login({ onLogin }) {
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const users = [
    { username: "admin", password: "123", role: "admin" },
    { username: "user", password: "123", role: "user" }
  ];

  const handleSubmit = () => {
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      onLogin(found);
    } else {
      setError("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input type="text" placeholder="Tài khoản" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Đăng nhập</button>
    </div>
  );
}
