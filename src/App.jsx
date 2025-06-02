
import { Routes, Route , Link} from 'react-router-dom';
import About from './screens/About';
import Products from './screens/Products';
import Home from './screens/Home';
import NotFound from './screens/NotFound';

function App() {
  return (
    <> 

      <h1>My React Router App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link  to="/about">About</Link></li>
          <li><Link to="/product:123">Products</Link></li>
          <li><Link to="/non-existent">Not Found</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/product:id" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
