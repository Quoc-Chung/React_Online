
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import PrivateRouter from "../components/PrivateRouter";
import DonHang from "../components/DonHang";
import GioHang from "../components/GioHang";
import Login from "../components/Login";
import Admin from "../components/Admin";
import Unauthorized from "../components/Unauthorized";
import RoleBasedRoute from "../components/RoleBaseRoute";

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

             <Route path="/unauthorized" element={<Unauthorized />} />

             <Route
                path="/admin"
                element={
                    <RoleBasedRoute allowedRoles={["admin"]}>
                    <Admin />
                    </RoleBasedRoute>
                }
            />
      </Routes>
  );
}
