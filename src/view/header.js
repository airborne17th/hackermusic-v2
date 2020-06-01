import React from 'react';
import '../App.css';
import logo from '../components/Assets/img/logo.png';
import user from '../components/Assets/img/user.png';
function Header() {
    return (
        <div className="Header">
        <header className="App-header">
            <p><img src={logo} height='144' width='144' alt="Hacker Music Logo"></img> Hacker Music</p>
            <p><img src={user} height='144' width='144' alt="User Profile Pic"></img> airborne17th</p>
            <p><button className='button'>Log Off</button></p>
        </header>
        </div>
    );
  }

export default Header;