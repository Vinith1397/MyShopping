import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import ShopAssistantDock from './components/ShopAssistantDock'

const App = () => {
  // In a real app, you would get these from your auth context or state
  const userId = localStorage.getItem('userId');
  const authToken = localStorage.getItem('authToken');

  return (
    <div className='routesClass'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/collections' element={<Collections/>} />
        <Route path='/product/:product' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/place-orders' element={<PlaceOrder/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
      <ShopAssistantDock userId={userId} authToken={authToken} />
    </div>
  )
}

export default App
