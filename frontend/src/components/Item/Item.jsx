import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      {props.image.map((img, i)=> {
        return (
        <img src={img} alt=''/>
        )
      })}
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