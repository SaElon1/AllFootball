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
          <div className="OrderData-dateprice">
          <h2>Order date: {formattedDate}</h2>
          <p>Total price: {totalPrice}€</p>       
          </div>
          <div className="OrderData-products">
            {products.map((product, k) => (
              <div key={k}>
              <img src={product.images[0]} alt="" />
              <p>{product.name}</p>
            </div>
            ))}
          </div>
        </div>
        <div className="OrderData-hr">
            <hr />
        </div>
    </div>
  )
}

export default OrderData