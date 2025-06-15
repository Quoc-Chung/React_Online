import { useEffect, useState } from "react";
import ThongDiep from "./components/ThongDiep";
import AppContext from "./components/AppContext";

function App() {
   const  [isOpen , setIsOpen] = useState(false); 
   
   const [thongDiep, setThongDiep] = useState("");

   const HienThiThongDiep = () => { 
      setIsOpen(true); 

      setTimeout(()=>{
          setIsOpen(false)
      },3000);
   }

   return (
    <AppContext.Provider value={thongDiep}>
      <label> Nhap thong diep can truyen</label>
      <input type="text" 
             value={thongDiep} 
             onChange={(e) => setThongDiep(e.target.value)}>
      </input>

      <button onClick={HienThiThongDiep}> Gui Thong Diep </button>

      {isOpen && (
       <ThongDiep thongDiep={thongDiep}></ThongDiep>   
      )} 
    </AppContext.Provider>
   );S
}

export default App;
