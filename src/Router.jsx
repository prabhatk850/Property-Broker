import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Component/Home'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Product from './Component/Product'
import Productdes from './Component/Productdes'
import Auth from './Component/Auth'
import Profile from './Component/User/profile'
import Wishlist from './Component/User/wishlist'
import Shortlist from './Component/User/shortlist'
import Enquiry from './Component/User/enquiries'
import Post from './Component/Postproperty'
import Propertylocation from './Component/Postproperty/propertylocation'
import Propertyprofile from './Component/Postproperty/propertyprofile'
import Photos from './Component/Postproperty/photos'
import Price from './Component/Postproperty/price'



function Router () {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<Product/>} />
        <Route path='/product-description' element={<Productdes/>} />
        <Route path='/Auth' element={<Auth/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/shortlist' element={<Shortlist/>} />
        <Route path='/enquiry' element={<Enquiry/>} />
        <Route path='/addproperty' element={<Post/>} />
        <Route path='/location' element={<Propertylocation/>} />
        <Route path='/propertyprofile' element={<Propertyprofile/>} />
        <Route path='/photos' element={<Photos/>} />
        <Route path='/price' element={<Price/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router