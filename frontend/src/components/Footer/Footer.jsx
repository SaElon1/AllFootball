import React from 'react'
import './Footer.css'
import logo from '../Assets/Logo.png'
import instagram from '../Assets/instagram.png'
import facebook from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>
        <ul className='footer-links'>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ</li>
        </ul>
        <div className="footer-icons">
            <div className="icons-container">
                <img src={instagram} alt="" />
            </div>
            <div className="icons-container">
                <img src={facebook} alt="" />
            </div>
            <div className="icons-container">
                <img src={twitter} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer