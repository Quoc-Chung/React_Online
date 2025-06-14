import { useNavigate } from "react-router-dom";
export default function DonHang (){
 const navigate = useNavigate();
 const handleLogout = () => {
         localStorage.removeItem("token");
         navigate("/");
  };
    return (
       <>
          <h2> DON HANG </h2>
          <button onClick={handleLogout}>Đăng xuất</button>
       </>
    ); 
}