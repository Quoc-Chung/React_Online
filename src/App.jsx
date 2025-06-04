import  Header  from "./Header";
import  Footer  from "./Footer";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ChiTietSanPham from './pages/ChiTietSanPham';
import { Routes, Route } from 'react-router-dom';
import UserProvider from "./UserProvider";
function App() {
  return (
    <> 
     <UserProvider>
      <Header />
       <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chitietsanpham/:id_sanPham" element={<ChiTietSanPham />} />
       </Routes>
      <Footer />
      </UserProvider>
    </>
  );
}

export default App;
