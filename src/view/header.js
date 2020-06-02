import React from 'react';
import '../App.css';
import logo from '../components/Assets/img/logo.png';
import user from '../components/Assets/img/user.png';
function Header() {
    return (
        <body>
        <div className="Header">
        <header className="App-header">
            <table>
            <thead><img src={logo} height='80' width='80' alt="Hacker Music Logo"></img></thead>
            <tbody>Hacker Music</tbody>
            </table>
            <table>
            <thead><img src={user} height='100' width='100' alt="User Profile Pic"></img></thead>
            <tbody>airborne17th</tbody>
            </table>
            <table>
            <tbody><a href="#">Home</a></tbody>
            <tbody><a href="#">About</a></tbody>    
            <tbody><a href="#">Profile</a></tbody>
            <button className='button'>Log Off</button>
            </table>
        </header>
        </div>
        </body>
    );
  }

export default Header;