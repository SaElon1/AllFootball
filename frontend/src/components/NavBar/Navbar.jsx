import React from "react";
import './Navbar.css'
import Logo from '../Assets/Logo.png'
import cart_logo from '../Assets/cart_logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={Logo} alt="" />
            </div>
            <ul className="nav-menu">
                <li>Shirts</li>
                <li>Shoes</li>
                <li>Socks&Shorts</li>
                <li>Balls&Pads</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_logo} alt=""></img>
            </div>
        </div>
    )
}

export default Navbar

