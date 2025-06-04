import { useNavigate } from "react-router-dom";
export default function About(){
    const navigate = useNavigate();
    const ChuyenDoiTrang = () => {      
        navigate("/contact");
    }
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>Welcome to our website! We are dedicated to providing the best service possible.</p>
            <p>Our team is passionate about what we do and we strive to exceed your expectations.</p>
            <p>Thank you for visiting our site!</p>
            <button onClick={ChuyenDoiTrang}>Liên lạc với tôi !</button>
        </div>
    );
}