import React from 'react';
import './App.css';
import csi from './CSI.png';
import { Navbar,Nav, Container } from 'react-bootstrap';
import {Route, Routes, NavLink} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'; 
import  {auth, db}  from './firebaseConf.js'
import { getAuth, signOut } from "firebase/auth";

function NaviBar() {

    const [user] = useAuthState(auth);

    const signOut = () => {
        auth.signOut().catch(alert)
    }

    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }

    return (
        <div className='Navibar'>
            <img src={csi} alt="csi" />
            <h1>FLASHFORTE 2K22</h1>
            <ul>
                {user ? <li>Hi, {toTitleCase(user.displayName.split(" ")[1])} </li> : <li></li>}
                {user ? <li><NavLink className="link" to='/login'  onClick={signOut}>Sign Out</NavLink> </li> : <li><NavLink className="link" to='/login'  >Sign In</NavLink> </li>}
            </ul>
           
        </div>
    )
}

export default NaviBar;