
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import PrivateRouter from "../components/PrivateRouter";
import DonHang from "../components/DonHang";
import GioHang from "../components/GioHang";
import Login from "../components/Login";

export default function AppRoutes() {
  return (
     <Routes>
         <Route path="/" element={<Home/>} > </Route>
             <Route path="/don-hang" element={
               <PrivateRouter>
                  <DonHang/>
               </PrivateRouter>
             }> </Route>
             <Route path="/gio-hang" element={
                <PrivateRouter>
                    <GioHang/>
               </PrivateRouter>              
             }> </Route>
             <Route path="/login" element={<Login/>}></Route>
      </Routes>
  );
}
