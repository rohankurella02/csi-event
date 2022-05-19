import React from 'react';
import './App.css';
import csi from './CSI.png';
import { Navbar,Nav, Container } from 'react-bootstrap';
import {Route, Routes, NavLink} from 'react-router-dom'

function NaviBar() {
    return (
        <div className='Navibar'>
            <img src={csi} alt="csi" />
            <h1>FLASHFORTE 2K22</h1>
            <ul>
                <li><NavLink to='/'  >Home</NavLink> </li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
           
        </div>
    )
}

export default NaviBar;