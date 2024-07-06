import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <div className='images'>
        <Link to={`/product/${props.id}`}> <img src={props.image} alt=''/></Link>
      </div>
        <p>{props.name}</p>
        <div className="item-prices">
        <div className="item-newPrice">
            {props.new_price}
        </div>
        <div className="item-oldPrice">
            {props.old_price}
        </div>
        </div>
    </div>
  )
}

export default Item