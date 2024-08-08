import React, { useContext } from 'react'
import './Offers.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const Offers = () => {
  const {offerproducts} = useContext(ShopContext)
  return (
    <div className='offers'>
        <h1>NEW OFFERS</h1>
        <hr />
        <div className="offer">
            {offerproducts.map((item,i) => {
            return (
            <Item 
            key={i}
            id = {item.id}
            image={item.images[0]}
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