import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Component/Home'
import Header from './Component/Header'
import Footer from './Component/Footer'


function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/header' element={<Header />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/' element={<Homepage />} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default Router