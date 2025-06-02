
import './App.css';
import Body from './pages/Body.jsx';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
       {/* Đây là phần header của ứng dụng */}
      <nav> 
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">New</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

       <Body />


      {/* Đây là phần footer của ứng dụng */}
      <footer>
        <p>&copy; 2023 My Application</p>
      </footer>
    </>
  );
}

export default App;
