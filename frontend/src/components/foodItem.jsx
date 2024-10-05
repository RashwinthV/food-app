import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import '../Style/fooditem.css'
import { Store } from '../context/store'

const FoodItem = ( {id,name,price,description,image}) => {

    const {cartItems,addtocart,removefromcart}=useContext(Store);

  return (
    <div className='food-item'>
        <div className="food-item-img-cont">
            <img className='food-item-img' src={image} alt="" />
            {!cartItems[id]? <img className='add' onClick={(()=>addtocart(id))} src={assets.add_icon_white} alt="" /> 
            
            :<div className='food-item-count'>
                <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
            </div>
            }
        </div>
        <div className='rate'>
        <div className="food-info">
        <p>{name}</p></div>
        <div className="food-rating">
            
            <img src={assets.rating_starts} alt="" />

        </div>
        </div>
        <p className="food-item-resc">{description}</p>  
        <p className="food-item-price">${price}</p>
              
        
    </div>
  )
}

export default FoodItem