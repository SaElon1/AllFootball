import React, { useContext, useState } from 'react'
import './css/Category.css'
import {ShopContext} from '../Context/ShopContext'
import Item from '../components/Item/Item'

const Category = (props) => {
  const {all_products} = useContext(ShopContext)
  const [sortProduct, setSortProduct] = useState('desc')

  const sortProducts = (products, sort) => {
    return products.sort((a,b) => {
      if (sort === 'asc') {
        return a.new_price - b.new_price
      } else {
        return b.new_price - a.new_price
      }
    })
  }

  const filteredProducts = all_products.filter(item => props.category === item.category)
  const sortedProducts = sortProducts(filteredProducts, sortProduct)

  const handleSortChange = (event) => {
    console.log(event.target.value)
    setSortProduct(event.target.value)
  }


  return (
    <div className='category'>
      <div className="sort-products">
        <label>Sort by price</label>
        <select value={sortProduct} onChange={handleSortChange}>
          <option value='asc'>Lowest</option>
          <option value='desc'>Highest</option>
        </select>
      </div>
      <div className="category-products">
        {sortedProducts.map((item, i)=>{
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