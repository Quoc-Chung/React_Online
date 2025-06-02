import Header from './components/Header';
import Admin from './components/Admin';
import Home from './components/Home';
import User from './components/User';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/admins" element={<Admin />} />
          // Nếu toàn bộ các đường dẫn không khớp với các Route trên, sẽ hiển thị NotFound
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
