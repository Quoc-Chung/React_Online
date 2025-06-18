import './App.css';
function App() {
   
   const initialProducts = [
    { id: 1, name: "Laptop", price: 999.99, stock: 5 },
    { id: 2, name: "Smartphone", price: 499.99, stock: 10 },
    { id: 3, name: "Headphones", price: 79.99, stock: 20 },
    { id: 4, name: "Tablet", price: 299.99, stock: 8 },
    { id: 5, name: "Camera", price: 899.99, stock: 4 },
    { id: 6, name: "Monitor", price: 199.99, stock: 6 },
    { id: 7, name: "Keyboard", price: 49.99, stock: 12 },
    { id: 8, name: "Mouse", price: 29.99, stock: 15 },
    { id: 9, name: "Speaker", price: 59.99, stock: 9 },
    { id: 10, name: "Speaker", price: 59.99, stock: 10 }
  ];
   return (
    <div className='container'>
      <h1> Danh sach san pham </h1> 
      <div className='product_list'>
         {initialProducts.map((value, index) => (
            <div className='productt_cart' key={index}>
                 <h3> {value.name}</h3>
                 <p>Giá: ${value.price}</p>
                 <p>Tồn kho: {value.stock}</p>
                  <div className="card-buttons">
                     <button className="edit-btn">Sửa</button>
                     <button className="delete-btn">Xóa</button>
                  </div>
            </div>
         ))}
         
      </div>   
    </div>
   );
}

export default App;
