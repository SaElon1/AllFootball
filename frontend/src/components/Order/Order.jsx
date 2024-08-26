import React, { useState } from 'react'
import productService from '../../services/product'
import { UserContext } from '../../Context/UserContext'
import { useContext } from 'react'
import './Order.css'
import Notification from '../Notification/Notification'


const Order = ({cartitems, totalPrice}) => {
    const [notficationMessage, setNotificationMessage] = useState(null)
    const [notificationStatus, setNotificationStatus] = useState('success')
    const {user} = useContext(UserContext)

    const placeOrder = async () => {
        if (window.confirm("Confirm order")) {
            const order = {
                userId: user._id,
                products: cartitems,
                totalPrice: totalPrice
            }
            try{
                const newOrder = await productService.placeOrder(order)
                console.log('Order made', newOrder)
                setNotificationMessage('Order made succesfully. Thank you!')
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 4000)

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

  return (
    <div className="Order">
         <Notification message={notficationMessage} type={notificationStatus}></Notification>
    <div className='Order-button'>
        <button onClick={placeOrder}>Order</button>
    </div>
    </div>
  )
}

export default Order