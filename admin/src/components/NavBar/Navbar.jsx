import React, { useState, useRef } from 'react'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
    const [menu, setMenu] = useState('frontpage')
    const menuref = useRef()

  return (
    <div className='navbar'>
        <div className="nav-logo"><img src={logo} alt="" /></div>
        <ul ref={menuref} className='nav-menu'>
        <li onClick={() => setMenu('frontpage')}><Link style={{textDecoration: 'none'}} to='/'>Main</Link>{menu ==="frontpage"?<hr/>:<></>}</li>
            <li onClick={() => setMenu('addproducts')}><Link style={{textDecoration: 'none'}} to='/addproducts'>Add Products</Link>{menu ==="addproducts"?<hr/>:<></>}</li>
            <li onClick={() => setMenu('allproducts')}><Link style={{textDecoration: 'none'}} to='/allproducts'>Product List</Link>{menu ==="allproducts"?<hr/>:<></>}</li>
        </ul>

    </div>
  )
}

export default Navbar