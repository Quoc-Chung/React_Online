import { useState } from "react";

function App() {
  const [page, setPage] = useState("");      
  const [dulieu, setDuLieu] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [thongbao, setThongBao] = useState("");

  const handleDuLieu = async (e) => {
    e.preventDefault();
    setLoading(true);
    setThongBao("");
    setDuLieu(null); 

    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setDuLieu(data.data); 
        setThongBao("Lấy dữ liệu thành công!");
      } else {
        setThongBao(`Lỗi: ${data.message || "Không xác định"}`);
      }
    } catch (error) {
      setThongBao("Lỗi kết nối đến server!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>GỌI API VỚI SỐ TRANG</h2>
      <form onSubmit={handleDuLieu}>
        <label htmlFor="page">Nhập số trang: </label>
        <input
          type="number"
          id="page"
          name="page"
          value={page}
          onChange={(e) => setPage(e.target.value)}
          min="1"
          style={{ marginRight: "10px" }}
        />
        <button type="submit" disabled={loading || page === ""}>
          {loading ? "Đang tải..." : "Lấy dữ liệu"}
        </button>
      </form>

      {thongbao && <p style={{ marginTop: "10px" }}>{thongbao}</p>}

    </div>
  );
}

export default App;
