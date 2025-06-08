import React, { useState } from 'react';

function App() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Tải ảnh lên và hiển thị</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div style={{ marginTop: '20px' }}>
          <h4>Ảnh đã chọn:</h4>
          <img src={preview} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}

export default App;
