import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/products">Sản phẩm</Link></li>
        <li><Link to="/cart">Giỏ hàng</Link></li>
        <li><Link to="/about">Giới thiệu</Link></li>
        <li><Link to="/admin">Quản trị</Link></li>
        <li><Link to="/logout">Đăng xuất</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
