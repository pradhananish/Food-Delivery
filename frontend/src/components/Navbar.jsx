import React, { useState } from 'react'
import {assets} from '../assets/assets'
import "./Navbar.css"

const Navbar = () => {

  const[Menu, setMenu]=useState("Home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" />
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("Home")} className={Menu==="Home"?"activate":""}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={Menu==="Menu"?"activate":""}>Menu</li>
        <li onClick={()=>setMenu("Mobile-app")} className={Menu==="Mobile-app"?"activate":""}>Mobile-app</li>
        <li onClick={()=>setMenu("Contact-us")} className={Menu==="Contact-us"?"activate":""}>contact-us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""/>
        <div className='navbar-search-icon'></div>
        <img src={assets.basket_icon} alt=''/>
        <div className='.dot'></div>
        
      </div>
      <button>sign in</button>

    </div>
  )
}

export default Navbar;
