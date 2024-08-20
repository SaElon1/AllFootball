import React, { useEffect, useState } from 'react'
import './OrderData.css'

const OrderData = ({totalPrice, date, products}) => {

    const orderDate = new Date(date)

    const formattedDate = orderDate.toLocaleDateString('fi-Fi', {
        day: '2-digit',
        month: '2-digit',
        year:'numeric'
    })

  return (
    <div className='OrderData'>
        <div className="OrderData-format">
          <div className="OrderData-products">
            {products.map((product, k) => (
              <div key={k}>
              <img src={product.images[0]} alt="" />
              <p>{product.name}</p>
            </div>
            ))}
          </div>
        <p>Total price: {totalPrice}€ |</p>
        <p>Order made: {formattedDate} |</p>
        </div>
        <div className="OrderData-hr">
            <hr />
        </div>
    </div>
  )
}

export default OrderData