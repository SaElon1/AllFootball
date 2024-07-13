import React, { useContext, useState, useRef } from "react";
import './Navbar.css'
import Logo from '../Assets/Logo.png'
import cart_logo from '../Assets/cart_logo.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown from '../Assets/dropdown.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const {getCartItems} = useContext(ShopContext)
    const menuRef = useRef()

    const toggleDropdown = (event) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        event.target.classList.toggle('open')
    }


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={Logo} alt="" />
            </div>
            <img className="nav-dropdown" onClick={toggleDropdown} src={dropdown} alt=""></img >
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu ==="shop"?<hr/>:<></>}</li> 
                <li onClick={()=>{setMenu("shirts")}}><Link style={{textDecoration: 'none'}} to='/shirts'>Shirts</Link>{menu ==="shirts"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("shoes")}}><Link style={{textDecoration: 'none'}} to='/shoes'>Shoes</Link>{menu ==="shoes"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("socks&shorts")}}><Link style={{textDecoration: 'none'}} to='/socks&shorts'>Socks & Shorts</Link>{menu ==="socks&shorts"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("balls&pads")}}><Link style={{textDecoration: 'none'}} to='/balls&pads'>Balls & Pads</Link>{menu ==="balls&pads"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_logo} alt=""></img></Link>
                <div className="nav-cart-count">{getCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar

