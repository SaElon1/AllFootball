import React from 'react'
import { Link } from 'react-router-dom'
import './OrderSummary.css'

const OrderSummary = ({order}) => {
  console.log(order)
  return (
    <div className='ordersummary'>
        <h2>Thank you for the order! Here is what's waiting for you!</h2>
        <p>Order ID: {order._id}</p>
        <div className='ordersummary-products'>
        {order.products.map((product, k) => (
              <div key={k}>
              <img src={product.images[0]} alt="" />
              <p>{product.name}</p>
            </div>
            ))}
        </div>
        <div className="ordersummary-link">
            <Link to='/'>While you are waiting, feel free to check out our latest offers</Link>
        </div>
    </div>
  )
}

export default OrderSummary