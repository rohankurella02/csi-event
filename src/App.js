import logo from './logo.svg';
import './App.css';
import NaviBar from './NaviBar.js';
import Home from './Home.js';
import {Route, Routes, NavLink, useNavigate} from 'react-router-dom';
import Success from './Success';
import Fail from './Fail';
import Login from './Login';
import  {auth, db}  from './firebaseConf.js'
import {useAuthState} from 'react-firebase-hooks/auth'; 
import {useEffect, createContext} from 'react'
import Round2 from './Round2.js';
import R3a from './R3a.js';
import R3b from './R3b.js';
import R3c from './R3c.js';
import R3d from './R3d.js';
import R3s from './R3s.js';
import R3p from './R3p.js';
import Rd4 from './Rd4.js';
import Fs4 from './Fs4.js';
import Pf4 from './Pf4.js';
import Result from './Result.js';

function App() {
  let navigate = useNavigate();


  const [user] = useAuthState(auth);
  useEffect(() => {
    if( user != null && user.displayName === "csi vnrvjiet") {
      navigate('/result')
    }
    
    if (!user) {
      navigate("/login");
    } 
  }, [user]);


  return (
    <div className="App">
      <NaviBar />


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/s" element={<Success />} />
      <Route path="/p" element={<Fail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/round-2' element={<Round2 />} />
      <Route path='/r3a' element={<R3a />} />
      <Route path='/r3b' element={<R3b />} />
      <Route path='/r3c' element={<R3c />} />
      <Route path='/r3d' element={<R3d />} />
      <Route path='/r3s' element={<R3s />} />
      <Route path='/r3p' element={<R3p />} />
      <Route path='/rd4' element={<Rd4 />} />
      <Route path='/fs4' element={<Fs4 />} />
      <Route path='/pf4' element={<Pf4 />} />
      <Route path='/result' element={<Result />} />
    </Routes>

    </div>
  );
}

export default App;
