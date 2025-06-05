import { Link, useNavigate } from "react-router-dom";
import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  const handleReplace = () => {
    navigate("/about", { replace: true });
  };

  const handlePush = () => {
    navigate("/about"); // mặc định là replace: false
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/test">Test</Link></li>
        <li>
          <button onClick={handleReplace}>
            Go to About (Có Replace)
          </button>
        </li>
        <li>
          <button onClick={handlePush}>
            Go to About (Không có Replace)
          </button>
        </li>
      </ul>
    </nav>
  );
}
