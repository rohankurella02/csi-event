import logo from './logo.svg';
import './App.css';
import NaviBar from './NaviBar.js';
import Home from './Home.js';
import {Route, Routes, NavLink} from 'react-router-dom'
import About from './About.js';
import Success from './Success';
import Fail from './Fail';

function App() {
  return (
    <div className="App">
      <NaviBar />


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/s" element={<Success />} />
      <Route path="/p" element={<Fail />} />
    </Routes>

    </div>
  );
}

export default App;
