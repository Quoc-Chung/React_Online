import { useParams } from 'react-router-dom';

export default function ChiTietSanPham() {

    const { id_sanPham } = useParams();
    return (
        <div className="chitietsanpham">
            <h1>Chi Tiết Sản Phẩm</h1>
            <p>Thông tin chi tiết về sản phẩm sẽ được hiển thị ở đây.</p>
            <p>Vui lòng chọn một sản phẩm để xem thông tin chi tiết.</p>
            <p>ID Sản Phẩm: {id_sanPham}</p>
         
        </div>
    );
}