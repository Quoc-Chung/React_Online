import { useLocation } from 'react-router-dom';

export default function Footer() {
  const isAuthenticated = !!localStorage.getItem("token");
  const location = useLocation();

  return (
    <>
      {(isAuthenticated === true || location.pathname === "/") && (
        <>
          <p>Đường dẫn hiện tại: {location.pathname}</p>
          <p>Đây là chân trang</p>
        </>
      )}
    </>
  );
}
