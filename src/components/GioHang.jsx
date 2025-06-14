import { useNavigate } from "react-router-dom";

export default function GioHang(){ 
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
   return (
    <> 
         <h2> GIO HANG</h2>
         <button onClick={handleLogout}>Đăng xuất</button>
    </>
   ); 
}