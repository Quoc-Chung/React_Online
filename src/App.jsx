import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import './App.css';
function App() {
  const { carts, themCardMoi, updateProduct, xoaProduct, tongTien } = useContext(CartContext); 

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  
  const addProduct  = () => {
     if(name && price && stock){
          const newProduct = { name, price: parseFloat(price), stock: parseInt(stock) };
         themCardMoi(newProduct);
         setName(""); setPrice(""); setStock("");
     }
     else{
      alert("Vui long dien day du thong tin");     
     }
  }
  return (
    <div className="container">
      <h2>Danh sách sản phẩm</h2>
      <div className="add-form">
        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName (e.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="Giá"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          name="stock"
          placeholder="Tồn kho"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <button onClick={addProduct}>Thêm sản phẩm</button>
      </div>

      <div className="product-container">
        {carts.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-name">{product.name}</div>
            <div className="product-info">Giá: ${product.price.toFixed(2)}</div>
            <div className="product-info">Tồn kho: {product.stock}</div>
            <button className="delete-btn" onClick={() => xoaProduct(product.id)}>Xóa</button>
          </div>
        ))}
      </div>

      <h2> TONG TIEN LA : tongTien()</h2>
      <h2>Tổng tiền: ${tongTien().toFixed(2)}</h2>
    </div>
  );
};


export default App;
