import './Header.css';

import { Link } from 'react-router-dom';
export default function Header(){
    return (
        <nav className="main-nav"> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/chitietsanpham/123">Chi Tiet San Pham</Link></li>
            </ul>
        </nav>
    );
}