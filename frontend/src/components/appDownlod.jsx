import React from 'react'
import { assets } from '../assets/assets';
import '../Style/footer.css'

const AppDownlod = () => {
  return (
    <div className='app-con'id='appd'>
        
        <p>For better experience download <br/>Foody App</p>

        <div className="app-download"> 
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
        </div>
  )
}

export default AppDownlod