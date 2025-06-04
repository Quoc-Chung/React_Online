import { useState } from "react";
export default function TrangThai() {
    const [status, setStatus] = useState('CHƯA ĐĂNG NHẬP');

    return (
        <div>
     
        <h3> TRẠNG THÁI BAN ĐẦU:    {status ? (status) : ('CHƯA ĐĂNG NHẬP')} </h3>

        <input onChange={(e) => setStatus(e.target.value)} placeholder="Nhập trạng thái" />
        </div>
    );
}