
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';  
import About from './components/About';
import Test from './components/Test';

function App() {
  return (
    <> 
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/test" element={<Test />} />
         
        </Routes>

    </>
  );
}

export default App;
