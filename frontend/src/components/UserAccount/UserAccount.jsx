import React, { useContext, useEffect, useState } from 'react'
import './UserAccount.css'
import productService from '../../services/product'
import { UserContext } from '../../Context/UserContext'
import OrderData from '../OrderData/OrderData'

const UserAccount = ({handleLogOut}) => {
  const {user} = useContext(UserContext)
  const [orderHistory, setOrderHistory] = useState([])
  const handleClick = () => {
    handleLogOut()
  }

  useEffect(() => {
    const fetchOrderHistory = async() => {
    try{
      const orders = await productService.getOrderHistory()
      setOrderHistory(orders)
    }catch(error){
      console.error(error)
    }
  }
  fetchOrderHistory()
  }, [])


  return (
    <div className='UserAccount'>
        <h1> Welcome, {user.name}</h1>
        <div className="UserAccount-logout">
            <button onClick={handleClick}>Log Out</button>
        </div>
        <div className="UserAccount-orderHistory">
          <h2>Order History</h2>
          {orderHistory.map((order, k) => (
            <OrderData totalPrice={order.totalPrice} date={order.date} products={order.products}></OrderData>
          ))}
        </div>
        </div>
   
  )
}

export default UserAccount