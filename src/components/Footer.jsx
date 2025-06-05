export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Cửa Hàng. Tất cả quyền được bảo lưu.</p>
            <p>
            <a href="/privacy-policy" className="text-blue-400 hover:underline">Chính sách bảo mật</a> | 
            <a href="/terms-of-service" className="text-blue-400 hover:underline"> Điều khoản dịch vụ</a>
            </p>
        </div>
        </footer>
    );
    }
