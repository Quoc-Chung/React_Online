import { useNavigate, useLocation } from "react-router-dom"; 

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleLogin = () => {
    localStorage.setItem("token", "123456");

    const redirectPath = location.state?.from || "/"; 
    navigate(redirectPath);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}
