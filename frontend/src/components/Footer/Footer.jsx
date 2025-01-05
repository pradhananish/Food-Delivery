import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                    <img src={assets.logo} alt=''/>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, nemo ipsum similique porro at aliquid voluptatibus commodi amet, quaerat ullam qui quo quam delectus alias ratione provident quibusdam eius sapiente!</p>
                    <div className='footer-socail-icon'>
                        <img src={assets.facebook_icon} alt=''/>
                        <img src={assets.twitter_icon} alt=''/>
                        <img src={assets.linkedin_icon} alt=''/>
                    </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN CONTACT</h2>
                <ul>
                    <li>Phone: +977 9812345678</li>
                    <li>Email: info@foodie.com</li>
                    <li>Address: Kathmandu, Nepal</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 © Tomato.com - All rights reserved.</p>
    </div>
  )
}

export default Footer
