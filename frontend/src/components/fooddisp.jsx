import React, { useContext } from 'react'
import '../Style/fooddisp.css'
import { Store } from '../context/store'
import FoodItem from './foodItem'

const Fooddisp = ({category}) => {


    const {food_list}=useContext(Store)

    return (
    <div id="food-dips" className='food-disp'>
        <h2>
           Best Dishes near you

        </h2>
        <div className="food-list">
            {food_list.map((item,index)=>{
                if (category==="All"|| category===item.category) {
                 return(
                    <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />                )   
                }

                })}
        </div>

    </div>
  )
}

export default Fooddisp

