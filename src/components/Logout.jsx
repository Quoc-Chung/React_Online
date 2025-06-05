

// components/Logout.jsx
import { useEffect } from 'react';

export default function Logout({ onLogout }) {
  useEffect(() => {
    onLogout(); // thực hiện logout khi truy cập
  }, []);

  return null;
}
