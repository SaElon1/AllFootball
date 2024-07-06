import React from 'react'

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className='productdisplay'>
        <div className="product-images">
            {product.image.map((item, i) => {
                console.log(item.image)
                return (
                <img key={i} src={item} alt="" />
                )
            })}
        </div>
    </div>
  )
}

export default ProductDisplay