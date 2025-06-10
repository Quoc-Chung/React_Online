import { useState } from "react";
import { useSelector , useDispatch  } from "react-redux";
import { them_san_pham, xoa_san_pham,tinh_tong_tien } from "./actions/action";
import './App.css';
function App() {
   const [id, setId] = useState(0);
   const [name, setName] = useState('');
   const [price, setPrice] = useState(0);

   const dispatch = useDispatch(); 

   const data = useSelector(state => state.productReducer); 

   const product = data.products; 
   const tong_tien = data.total;  

   return (
    <div className='data'> 
        <div className="id">
            <label> Nhập id :</label>
            <input 
                  type= "text" 
                  name= "id"
                  value={id} 
                  onChange={(x) => setId(x.target.value)}
               ></input>
         </div>
         <div className="name">
         <label> Nhập tên sản phẩm :</label>
        <input 
             type= "text" 
             name= "name"
             value={name} 
             onChange={(x) => setName(x.target.value)}
         ></input>
         </div>
    
         <div className="price">
          <label> Nhập giá sản phẩm :</label>
        <input 
             type= "text" 
             name= "price"
             value={price} 
             onChange={(x) => setPrice(x.target.value)}
         ></input>
         </div>

         <button onClick={() => dispatch(them_san_pham({ id, name, price: Number(price) }))}>
         THÊM SẢN PHẨM
         </button>

         {product && (
            <table>
                  <thead>
                     <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Thao tác</th>
                     </tr>
                  </thead>
                  <tbody>
                     {product.map((value, index) => (
                        <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.price}</td>
                        <td>
                           <button onClick={() => dispatch(xoa_san_pham(value.id))}>XÓA</button>
                        </td>
                        </tr>
                     ))}
                  </tbody>
                  </table>

            )}


         <button onClick={() => dispatch(tinh_tong_tien())}> 
            TÍNH TỔNG TIỀN
         </button>
         <h4> TỔNG SỐ TIỀN LÀ : {tong_tien}</h4>
    </div>
   );
}

export default App;
