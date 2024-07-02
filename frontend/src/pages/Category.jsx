import React, { useContext } from 'react'
import './css/Category.css'
import {ShopContext} from '../Context/ShopContext'
import Item from '../components/Item/Item'

const Category = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='category'>
      <div className="category-products">
        {all_products.map((item, i)=>{
          if(props.category === item.category){
            console.log(`${item.category}${props.category}`)
            return (
              <Item key={i} id={item.id} image={item.image[0]} name={item.name} new_price={item.new_price}></Item>
            )
          }
          else {
            return null
          }
      })}
      </div>

    </div>
  )
}
export default Category