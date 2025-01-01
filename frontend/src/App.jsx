import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar'
import PlaceOrder from './pages/PlaceOrder/placeOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App

