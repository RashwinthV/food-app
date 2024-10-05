import React, { useContext, useState } from 'react';
import '../Style/cart.css';
import { Store } from '../context/store'; // Import your context
import { useNavigate } from 'react-router-dom';

function Cart() {
  // Destructure the context object
  const { cartItems, food_list, removefromcart,getTotal } = useContext(Store);
   const navigate=useNavigate();
   

  return (
    <div className='cart'>
      <div className="cart-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item) => {
        const quantity = cartItems[item._id] || 0;
        
        if (quantity > 0) {
          return (
            <>
          
             <div key={item._id} className="cart-title cart-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{quantity}</p>
              <p>{item.price * quantity}</p>
              <p onClick={()=>removefromcart(item._id)} >X</p>
            </div>
            <hr />
            </>
           
          );
        }
        return null; 
      })}
      
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
            
            <p>Delevery fee</p>
            <p>${getTotal()===0?0:2}</p>
            
          </div>
          <hr />
          <div className="cat-total-details">
            <p>Total</p>
            <p>${getTotal()===0?0:getTotal()+2}</p>
          </div>

        </div>
        <button onClick={()=>navigate('/order')}>Proceed to checkout</button>

      </div>
      <div className="promocode">
        <div>
          <p>if you have a promocode, Enter it here</p>
          <div className="promo-input">
            <input type="text" placeholder='Enter promocode'/>
            <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Cart;
