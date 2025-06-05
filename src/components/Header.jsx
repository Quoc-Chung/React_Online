// Header.jsx
import { Link } from 'react-router-dom';

export default function Header({ role }) {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Trang Chủ</Link></li>
          <li><Link to="/giohang">Giỏ Hàng</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/logout">Đăng xuất</Link></li>

          {/* Chỉ admin mới thấy link này */}
          {role === "admin" && <li><Link to="/admin">Admin</Link></li>}
        </ul>
      </nav>
    </header>
  );
}
