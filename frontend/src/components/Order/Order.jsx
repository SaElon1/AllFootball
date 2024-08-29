import React, { useState, useEffect } from 'react'
import { UserContext } from '../../Context/UserContext'
import { useContext } from 'react'
import './Order.css'
import Notification from '../Notification/Notification'
import { ShopContext } from '../../Context/ShopContext'
import OrderSummary from '../OrderSummary/OrderSummary'

const Order = ({cartitems, totalPrice}) => {
    const [notficationMessage, setNotificationMessage] = useState(null)
    const [notificationStatus, setNotificationStatus] = useState('success')


    const {user} = useContext(UserContext)
    const {clearUserCart, placeOrder, order} = useContext(ShopContext)

    const submitOrder = async () => {
        if (window.confirm("Confirm order")) {
            const new_order = {
                userId: user._id,
                products: cartitems,
                totalPrice: totalPrice
            }
            try{
                const newOrder = await placeOrder(new_order)
                console.log('Order made', newOrder)
                console.log('OrderStatus: ', order)
                setNotificationMessage('Order made succesfully. Thank you!')
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 4000)
                clearUserCart()

            }catch(error){
                console.error('Error in making the order', error)
                setNotificationMessage('Something went wrong. Please try again')
                setNotificationStatus('error')
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 4000)
            }
        }else{
            return
        }
    }
    useEffect(() => {
        console.log('Order in Order component:', order); // Debug
      }, [order]);

    if (order) {
        console.log('There is something in order')
        return <div>
            <Notification message={notficationMessage} type={notificationStatus}></Notification>
            <OrderSummary order={order} />
            </div>
    }else{
        console.log('From Order: Order is not updating here')
    }


  return (
    <div className="Order">
    <div className='Order-button'>
        <button onClick={submitOrder}>Order</button>
    </div>
    </div>
  )
}

export default Order