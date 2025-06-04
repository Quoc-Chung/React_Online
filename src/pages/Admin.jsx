import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const { trangThaiDangNhap } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!trangThaiDangNhap) {
      navigate('/login');
    }
  }, [trangThaiDangNhap, navigate]);

  return (
    <div>
      <h3>Đây là trang Quản trị</h3>
      <p>TRANG NÀY KHÔNG CÓ HEADER / FOOTER</p>
    </div>
  );
}
