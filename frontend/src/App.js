import './App.css';
import Navbar from './components/NavBar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop'
import Category from './pages/Category'
import Product from './pages/Product'
import Cart from './pages/Cart'
import SignupLogin from './pages/SignupLogin'
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import productService from './services/product';



function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/shirts' element={<Category category="Shirts"/>}/>
        <Route path='/shoes' element={<Category category="Shoes"/>}/>
        <Route path='/socks&shorts' element={<Category category="Socks&Shorts"/>}/>
        <Route path='/balls&pads' element={<Category category="Balls&Pads"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<SignupLogin/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
