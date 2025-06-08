import { useState } from "react";
import './App.css'
function App() {

  const [formData, setFormData] = useState({
      fullname: '',
      email: '',
      password: '',
      gender: 'nam',
      hobby: [],
      country: 'vn',
      note: '', 
  });


   const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
        let newHobby = [...formData.hobby];
        if (checked) {
           newHobby.push(value);
      } else {
        newHobby = newHobby.filter(h => h !== value);
      }
      setFormData({ ...formData, hobby: newHobby });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try{
       const guiDuLieu = fetch('http://localhost:8080/api/submit', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
       }); 

       const ketQuaTraVe = (await guiDuLieu).json(); 

       if(guiDuLieu.ok){
           console.log('Gửi thành công:', result);
           /*  window.location.href = '/result'; */ 
       } else{ 
          alert("Gửi lỗi rồi"); 
       }
    }
    catch(error){
      alert("Lôi kết nối tới server !. "); 
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
       <h3 style={{'margin': 'auto', 'textAlign' : 'center'}}> NHAP THONG TIN </h3>
       {/*NHAP THONG TIN KHACH HANG */}
       <div className="form-data">
       <div > 
           <label> Nhập họ tên: </label>
           <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                > 
           </input>
       </div>

         <div> 
           <label> Nhập email: </label>
           <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                > 
           </input>
        </div>


        <div> 
           <label> Nhập password: </label>
           <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                > 
           </input>
        </div>
       
        <div> 
           <label> Giới tính : </label>
           <label>
           <input type = "radio"
                  name = "gender"
                  value="nam"
                  checked={formData.gender ==='nam'}
                  onChange={handleChange}
                   > 
           </input>
           Nam
           </label>
           <label> 
            <input type = "radio"
                  name = "gender"
                  value="nu"
                  checked={formData.gender ==='nu'}
                  onChange={handleChange}
                   > 
           </input>
           Nữ
           </label>
       </div>

        {/* Sở thích */}
    <div>
      <label>Sở thích:</label>
      <label>
        <input
          type="checkbox"
          name="hobby"
          value="thethao"
          checked={formData.hobby.includes('thethao')}
          onChange={handleChange}
        />
        Thể thao
      </label>
      <label>
        <input
          type="checkbox"
          name="hobby"
          value="amnhac"
          checked={formData.hobby.includes('amnhac')}
          onChange={handleChange}
        />
        Âm nhạc
      </label>
      <label>
        <input
          type="checkbox"
          name="hobby"
          value="docsach"
          checked={formData.hobby.includes('docsach')}
          onChange={handleChange}
        />
        Đọc sách
      </label>
    </div>

      {/* Quốc gia */}
    <div>
      <label>Quốc gia:</label>
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="vn">Việt Nam</option>
        <option value="us">Hoa Kỳ</option>
        <option value="jp">Nhật Bản</option>
      </select>
    </div>

    {/* Ghi chú */}
    <div>
      <label>Ghi chú:</label>
      <textarea
        name="note"
        value={formData.note}
        onChange={handleChange}
        rows="4"
      ></textarea>
    </div>


     {/* Nút submit */}
    <div>
      <button type="submit">Đăng ký</button>
    </div>

      </div>
    </form>
   );
}

export default App;
