import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Component/Home'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Product from './Component/Product'
import Productdes from './Component/Productdes'


function Router () {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<Product/>} />
        <Route path='/product-description' element={<Productdes/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router