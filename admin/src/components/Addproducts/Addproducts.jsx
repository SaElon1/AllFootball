import React from 'react'

const Addproducts = () => {
  return (
    <div>
      <h1>Add a new product to the database</h1>
      <form className='addproducts-form'>
        <div>
          <p>Product Name</p>
        <input type="text" placeholder='Name'></input>
        </div>
        <div>
          <p>Description for the product</p>
        <input type="text" placeholder='Description'></input>
        </div>
        <div>
          <p>Product category</p>
          <select name="category" className='addproduct-selector'>
            <option value="Shirts">Shirts</option>
            <option value="Shoes">Shoes</option>
            <option value="Socks&Shirts">Socks & Shirts</option>
            <option value="Balls&Pads">Balls & Padsß</option>
          </select>
        </div>
        <div>
          <p>Select size</p>
          <select name="size" className='addproduct-selector'>
          <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
          </select>
        </div>
        <div>
          <p>Original price</p>
        <input type="text" placeholder='Original price'></input>
        </div>
        <div>
          <p>Offer price</p>
          <input type="text" placeholder='Offer price'></input>
        </div>
        <div>
          <p>Upload images of the product</p>
        <input type="file" multiple></input>
        </div>
        <div className="addproducts-submitButton">
          <button type='submit'>Add Product</button>
        </div>
      </form>
    </div>
  )
}

export default Addproducts