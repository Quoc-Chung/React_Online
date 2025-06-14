import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
        <Routes>
            <Route path="/*" element={<App />}></Route>
        </Routes>
      
    </React.StrictMode>
  </BrowserRouter>
);
