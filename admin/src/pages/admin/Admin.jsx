import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Addproducts from '../../components/Addproducts/Addproducts'
import Allproducts from '../../components/Allproducts/Allproducts'

const Admin = () => {
  return (
    <div className='admin'>
      <Routes>
        <Route path="/addproducts" element={<Addproducts/>}></Route>
        <Route path="/allproducts" element={<Allproducts/>}></Route>
      </Routes>
    </div>
  )
}

export default Admin