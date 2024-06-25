import React from 'react'
import './Hero.css'
import hand_icon from  '../Assets/hand_icon.png'
import footballer from '../Assets/3D_footballer1.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2> HELLO CHECK OUT OUR LATEST OFFERS</h2>
        </div>
        <div className="hero-handIcon">
            <img src={hand_icon}></img>
        </div>
        <div className="hero-right">
            <img src={footballer} alt="" />
        </div>
    </div>
  )
}

export default Hero