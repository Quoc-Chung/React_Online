import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const { dangXuat } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    dangXuat();
    navigate('/login');
  }, [dangXuat, navigate]);

  return null;
}
