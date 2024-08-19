import React from 'react'
import productService from '../../services/product'
import { UserContext } from '../../Context/UserContext'
import { useContext } from 'react'
import './Order.css'


const Order = ({cartitems, totalPrice}) => {
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

            }catch(error){
                console.error('Error in making the order', error)
            }
        }else{
            return
        }
    }

  return (
    <div className='Order-button'>
        <button onClick={placeOrder}>Order</button>
    </div>
  )
}

export default Order