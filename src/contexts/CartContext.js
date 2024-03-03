import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  
  // add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}

    // check if the item already in the cart
    const cartItem = cart.find((item)=>{
      return item.id === id;
    })

    // if cart item is already in the cart
    if(cartItem){
      const newCart = [...cart].map((item)=>{
        if(item.id === id){
          return {...item, amount: cartItem.amount + 1};
        }else{
          return item;
        }
      });
      setCart(newCart)
    }else{
      setCart([...cart, newItem])
    }
  };

  console.log(cart)

  return (
    <CartContext.Provider value={{addToCart}}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
