import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Placeorder from './pages/Place_order';
import Footer from './components/footer';
import Login from './components/login';
const App = () => {
  const[ShowLogin,setShowLogin]=useState(false);
  return (
    <>
    {ShowLogin?<Login setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
      <BrowserRouter>
      <Navbar setShowLogin={setShowLogin} />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<Placeorder/>}/>
        </Routes>
        
        
      </BrowserRouter>
      
      
     
    </div>
    <Footer/>
    </>
   
  )
}

export default App