import React, { useContext } from 'react'
import '../Style/order.css';
import { Store } from '../context/store';
export default function Place_order({c}) {
  const {getTotal}=useContext(Store)
  return (
    <form className='place-order'>
      <div className="place-order-left">
       <p className="title">
        Delivery information

       </p>
       <div className="multi-fields">
        <input type="text" placeholder='first Name' />
        <input type="text" placeholder='Last Name' />
       </div>
       <input type="email" placeholder='Email Address' />
       <input type="text" placeholder='Street' />
       <div className="multi-fields">
        <input type="text" placeholder='city' />
        <input type="text" placeholder='State' />
       </div>
       <div className="multi-fields">
        <input type="text" placeholder='Zip code' />
        <input type="text" placeholder='Country' />
       </div>
       <input type="text" placeholder=' phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-bottom">
      <div className="cart-total">
        <h2>cart Summary</h2>
        <div>
          <div className="cat-total-details">
            <p>Subtotal</p>
            <p>${getTotal()}</p>
            
          </div>
          <hr />
          <div className="cat-total-details">
            <p>Delivery fee</p>
            <p>${getTotal()===0?0:2}</p>
            
          </div>
          <hr />
          <div className="cat-total-details">
            <p>Total</p>
            <p>${getTotal()===0?0:getTotal()+2}</p>
          </div>

        </div>
        <button id='pay'>Proceed to Pay</button>
      </div>
      </div>
      </div>
    </form>
  )
}
