import { createContext, useState} from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [trangThaiDangNhap, setTrangThaiDangNhap] = useState(() => {
    return localStorage.getItem('dangNhap') === 'true';
  });

  const dangNhap = () => {
    setTrangThaiDangNhap(true);
    localStorage.setItem('dangNhap', 'true');
  };

  const dangXuat = () => {
    setTrangThaiDangNhap(false);
    localStorage.removeItem('dangNhap');
  };

  return (
    <AuthContext.Provider value={{ trangThaiDangNhap, dangNhap, dangXuat }}>
      {children}
    </AuthContext.Provider>
  );
}
