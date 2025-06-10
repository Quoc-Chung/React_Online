// pages/Login.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import { admin, user } from "../credentials/credentials";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === admin.username && password === admin.password) {
      dispatch(login({ username }, true));
      alert("Đăng nhập với quyền Admin");
      navigate("/admin");
    } else if (username === user.username && password === user.password) {
      dispatch(login({ username }, false));
      alert("Đăng nhập với quyền User");
      navigate("/");
    } else {
      alert("Sai thông tin");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto", paddingTop: "100px" }}>
      <h2>Đăng nhập</h2>
      <input placeholder="Tên" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default Login;
