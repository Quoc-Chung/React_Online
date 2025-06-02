import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import News from './News.jsx';
import Contact from './Contact.jsx';
export default function Body(){
    return (
    <>
     {/* Đây là phần Routes - PHẦN SẼ THAY ĐỔI - của ứng dụng */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

    );
}