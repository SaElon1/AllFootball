import React, { useState } from "react";
import './Navbar.css'
import Logo from '../Assets/Logo.png'
import cart_logo from '../Assets/cart_logo.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={Logo} alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}>Shop{menu ==="shop"?<hr/>:<></>}</li> 
                <li onClick={()=>{setMenu("shirts")}}>Shirts{menu ==="shirts"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("shoes")}}>Shoes{menu ==="shoes"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("socks&shorts")}}>Socks & Shorts{menu ==="socks&shorts"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("balls&pads")}}>Balls & Pads{menu ==="balls&pads"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_logo} alt=""></img>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar

