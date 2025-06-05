// components/Header.jsx
import { Link } from "react-router-dom";

export default function Header({ user, onLogout }) {
  return (
    <header>
      <nav>
        <Link to="/">Trang chủ</Link> |{" "}
        <Link to="/giohang">Giỏ hàng</Link> |{" "}
        <Link to="/contact">Liên hệ</Link> |{" "}
        {user?.role === "admin" && <Link to="/admin">Quản trị</Link>} |{" "}
        <span>Xin chào {user.username}</span> |{" "}
        <button onClick={onLogout}>Đăng xuất</button>
      </nav>
    </header>
  );
}

