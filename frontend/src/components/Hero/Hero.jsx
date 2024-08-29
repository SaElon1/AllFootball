import React from 'react'
import './Hero.css'
import hand_icon from  '../Assets/hand_icon.png'
import footballer from '../Assets/3D_footballer1.png'
import arrow_img from '../Assets/arrow.png'

const Hero = () => {

    const scrollToOffers = () => {
        const offersSection = document.getElementById('offers-section')
        if(offersSection){
            offersSection.scrollIntoView({behavior: 'smooth'})
        }
    }


  return (
    <div className='hero'>
        <div className="hero-left">
            <div>
        <div className="hero-handIcon">
            <p>Hello</p>
            <img src={hand_icon}></img>
        </div>
        <p>check out</p>
        <p>our latest</p>
        <p>offers</p>
        </div>
        <div className="hero-offersButton">
            <div>Latest Offers</div>
            <img src={arrow_img} alt="" onClick={scrollToOffers} />
        </div>
        </div>
        <div className="hero-right">
            <img src={footballer} alt="" />
        </div>
    </div>
  )
}

export default Hero