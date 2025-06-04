import { useContext } from 'react';
import { AuthContext } from '../AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { dangNhap } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    dangNhap();
    navigate('/');
  };

  return (
    <div>
      <h3>Đăng nhập</h3>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}
