import React, { useContext, useState } from 'react';
import '../Style/navbar.css';
import { assets } from '../assets/assets';
import{Link} from 'react-router-dom';
import { Store } from '../context/store';
const Navbar = ({setShowLogin}) => {

    const [menu,setmenu]=useState("")

    const {getTotal}=useContext(Store);

  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo} alt='logos' className='logo'/>  </Link> 
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href="#exp-menu" onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href="#appd" onClick={()=>setmenu("mobile")} className={menu==="mobile"?"active":""}>mobile app</a>
            <a href='#foot' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search" />
            <div className="navbar-search-icon">
               <Link to='/cart'><img src={assets.basket_icon} alt="" />
               <div className={getTotal()===0?"":"dot"}></div> </Link> 
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>

    </div>
  )
}

export default Navbar;