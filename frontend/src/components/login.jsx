import React, { useState } from 'react'
import '../Style/login.css'
import { assets } from '../assets/assets'
const Login = ({setShowLogin}) => {
    const [currstate,setcurrstate]=useState("signup")
  return (
    <div className='login'>
        <form className="login-con">
            <div className="login-title">
                <h2>{currstate}</h2>
                {/* <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" /> */}
                <p onClick={()=>setShowLogin(false)}>x</p>
            </div>
            <div className="login-input">
                {currstate==="Login"?<></>:<input type="text" placeholder='Name' required />}

                <input type="email" placeholder='abc@gmail.com' required />
                <input type="password" placeholder='password' required />
    
                <button >{currstate==="signup"?"create account":"Log in"}</button>
                </div>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing , i agree to the terms of use and privacy policy</p>
                
                </div>
                <div className="options">
                {currstate==="Login"?<p>create new account? <span onClick={()=>setcurrstate("signup")}>click here</span></p>
                : <p>Already have an account? <span onClick={()=>setcurrstate("Login")}> Login here</span></p>
}
                </div>
                
                
            
        </form>
        

    </div>
  )
}

export default Login