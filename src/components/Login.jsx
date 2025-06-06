import { useState } from 'react';

export default function Login({ onLogin }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const users = [
    { userName: 'USER1', password: '123', role: 'user' },
    { userName: 'USER2', password: '123', role: 'admin' }
  ];

  const checkUser = (userName, password) => {
    return users.find(u => u.userName === userName && u.password === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = checkUser(userName, password);
    if (foundUser) {
      alert('Đăng nhập thành công!');
      onLogin(foundUser);
    } else {
      alert('Sai tài khoản hoặc mật khẩu!');
    }
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}
