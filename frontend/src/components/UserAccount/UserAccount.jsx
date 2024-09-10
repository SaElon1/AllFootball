import React, { useContext, useEffect, useState } from 'react'
import './UserAccount.css'
import productService from '../../services/product'
import { UserContext } from '../../Context/UserContext'
import OrderData from '../OrderData/OrderData'

const UserAccount = ({handleLogOut}) => {
  const {user} = useContext(UserContext)
  const [orderHistory, setOrderHistory] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const ordersPerPage = 4


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

  const reversedOrderHistory = [...orderHistory].reverse()

  const totalPages = Math.ceil(reversedOrderHistory.length / ordersPerPage)
  const indexOfLast = currentPage * ordersPerPage
  const indexOfFirst = indexOfLast - ordersPerPage
  const currentOrders = reversedOrderHistory.slice(indexOfFirst, indexOfLast)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }


  return (
    <div className='UserAccount'>
        <div className="UserAccount-logout">
            <button onClick={handleClick}>Log Out</button>
        </div>
        <h1> Welcome, {user.name}</h1>
        <div className="UserAccount-orderHistory">
          <h2>Order History</h2>
          {orderHistory.length === 0 ? (
            <p>You have yet to make an order <a href="/">Check out our latest offers here!</a></p>
          ) : (
          currentOrders.map((order, k) => (
            <OrderData key={k} totalPrice={order.totalPrice} date={order.date} products={order.products}></OrderData>
          ))
          )}
        </div>
        {orderHistory.length !== 0 && (
          <div className="UserAccount-orderpages">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>

        )}
        </div>
   
  )
}

export default UserAccount