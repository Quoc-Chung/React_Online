import AppContext from "./AppContext";
import { useContext } from "react";
export default function ThongDiep(){

    const thongDiep = useContext(AppContext); 
    return (
        <>
           <h2    
           > THONG DIEP {thongDiep}</h2>
        </>
    );
}