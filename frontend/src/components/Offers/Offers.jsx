import React from 'react'
import './Offers.css'
import offers from '../Assets/offers_data'
import Item from '../Item/Item'

const Offers = () => {
  return (
    <div className='offers'>
        <h1>NEW OFFERS</h1>
        <hr />
        <div className="offer">
            {offers.map((item,i) => {
            return (
            <Item 
            key={i}
            id = {item.id}
            image={item.image[0]}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            />)
})}
        </div>

    </div>
  )
}

export default Offers