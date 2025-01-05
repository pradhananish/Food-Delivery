import React, { useState } from 'react';
import { assets } from '../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('menu');

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'activate' : ''}>Home</Link>
        <a href='#Explore-menu' onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'activate' : ''}>Menu</a>
        <a href='#app-download' onClick={() => setMenu('Mobile-app')} className={menu === 'Mobile-app' ? 'activate' : ''}>Mobile-app</a>
        <a href='#footer' onClick={() => setMenu('Contact-us')} className={menu === 'Contact-us' ? 'activate' : ''}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search Icon" />
        <div className='navbar-search-icon'></div>
        <img src={assets.basket_icon} alt="Basket Icon" />
        <div className='dot'></div>
      </div>
      <button onClick={() => setShowLogin(true)}>Sign In</button>
    </div>
  );
};

export default Navbar;
