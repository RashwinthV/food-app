import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"; 

export const Store = createContext(null); 

const Storeprovider = (props) => {
  const [cartItems, setcartItems] = useState({});

  const addtocart = (itemId) => {
    setcartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removefromcart = (itemId) => {
    setcartItems((prev) => {
      const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
      if (newCart[itemId] <= 0) delete newCart[itemId]; 
      return newCart;
    });
  };


  const getTotal=()=>{
    let total=0;
    for(const item in cartItems){
        if (cartItems[item]>0) {
            let iteminfo=food_list.find((product)=>product._id===item)
            total+=iteminfo.price*cartItems[item];
        }
       
    }
    return total;
  }
  const Val = {
    food_list,
    cartItems,
    addtocart,
    removefromcart,
    getTotal
  };

  return (
    <Store.Provider value={Val}>
      {props.children}
    </Store.Provider>
  );
};

export default Storeprovider;


