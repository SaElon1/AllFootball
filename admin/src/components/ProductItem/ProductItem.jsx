import React, { useState } from 'react'
import productService from '../../services/product'
import './ProductItem.css'


const ProductItem = ({product, onUpdate}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [updatedProduct, setUpdatedProduct] = useState({
        name: product.name,
        description: product.description,
        category: product.category,
        size: product.size,
        images: product.images,
        new_price: product.new_price,
        old_price: product.old_price
    })

    const handleFileChange = (event) => {
      setUpdatedProduct({
          ...updatedProduct,
          images: event.target.files
      });
  }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUpdatedProduct({
          ...updatedProduct,
          [name]: value
        })
      }

    const saveChanges = async () => {
      console.log('updated product:', updatedProduct)
        try{
            const updated = await productService.updateProduct(product._id, updatedProduct)
            onUpdate(updated)
            console.log(updated)
            setIsEditing(false)
        }catch(error){
            console.error('Error in updating the product', error)
        }
    }

    const handleDeleteButton  = async () => {
      try{
        if(window.confirm("Delete product?")) {
          const remove = await productService.removeProduct(product._id)
        }
      }catch(error){
        console.error("Error deleting the product", error)
      }
    }

  return (
    <div className="product-item">
      {isEditing ? (
        <div className='product-item-inputform'>
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={updatedProduct.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="category"
            value={updatedProduct.category}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="size"
            value={updatedProduct.size}
            onChange={handleInputChange}
          />
          <input
            type="file"
            name="images"
            onChange={handleFileChange}
            multiple
          />
          <input
            type="number"
            name="new_price"
            value={updatedProduct.new_price}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="old_price"
            value={updatedProduct.old_price}
            onChange={handleInputChange}
          />
          <button onClick={saveChanges}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className='product-item-info'>
          <p>Name: {product.name}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDeleteButton}>Delete</button>
          <div className="product-item-info-img">
          <img src={product.images[0]} alt={product.name} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductItem