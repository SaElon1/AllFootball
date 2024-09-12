import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Addproducts from '../../components/Addproducts/Addproducts'
import Allproducts from '../../components/Allproducts/Allproducts'
import FrontPage from '../../components/FrontPage/FrontPage'

const Admin = () => {
  return (
    <div className='admin'>
      <Routes>
        <Route path="/" element={<FrontPage/>}></Route>
        <Route path="/addproducts" element={<Addproducts/>}></Route>
        <Route path="/allproducts" element={<Allproducts/>}></Route>
      </Routes>
    </div>
  )
}

export default Admin