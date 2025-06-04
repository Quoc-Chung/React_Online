import {myContext}  from '../UserProvider';
import { useContext } from 'react';

export default function Contact() {

    const { user } = useContext(myContext);
    const {setUser} = useContext(myContext);
    return (
        <div className="contact">   
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>
            <p>Email: tuquocchung@gmail.com </p>
            <h1> THÔNG TIN KHÁCH HÀNG </h1>
            <p>Tên: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Vai trò: {user.role}</p>

            <button onClick={() => setUser({ name: "Tu Quoc Chung", email: "tuqucochung@gmai.com" , role: "user" })}>Cập nhật thong tin </button>
        </div>
        );
}
