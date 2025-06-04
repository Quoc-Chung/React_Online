import React from 'react';
import { useState } from 'react';

export default function GenderSelector(){

    const [gender , setGender] = useState();

    const handleChange = (event) => {
        setGender(event.target.value);
    }
    return (
        <div>
            <h3>Chọn giới tính:</h3>
                <label>
                    <input
                    type="radio"
                    name="gender"
                    value="Nam"
                    checked={gender === 'Nam'}
                    onChange={handleChange}
                    />
                    Nam
                </label>

                <label style={{ marginLeft: '20px' }}>
                    <input
                    type="radio"
                    name="gender"
                    value="Nữ"
                    checked={gender === 'Nữ'}
                    onChange={handleChange}
                    />
                    Nữ
                </label>
                {gender ? (
  <div style={{ marginTop: '20px' }}>
    <p>Giới tính đã chọn: {gender}</p>
    {gender === 'Nam' ? (
      <img
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
        src="/nam.png"
        alt="Ảnh Nam"
      />
    ) : (
      <img
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
        src="/nu.png"
        alt="Ảnh Nữ"
      />
    )}
  </div>
) : (
  <p style={{ marginTop: '20px' }}>Chưa chọn giới tính</p>
)}


        </div>


    );
}