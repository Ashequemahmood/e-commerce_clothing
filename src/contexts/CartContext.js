import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  
  // add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    console.log(newItem)
    // check if the new item already in the cart
    const cartItem = cart.find((item)=>{
      return item.id === id;
    })
    // check if cart has the cart item
    if(cartItem){
      const newCart = [...cart].map((item)=> {
        if(item.id === id){
          return {...item, amount: cartItem.amount + 1}
        }else{
          return item;
        }
      })
      setCart(newCart)
    }else{
      setCart([...cart, newItem])
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item)=> {
      return item.id !== id;
    })
    setCart(newCart)
  }

  // clearCart
  const clearCart = () => {
    setCart([])
  }

  // increase count
  const increaseAmount = (id) => {
    const cartItem = cart.find((item)=>item.id === id)
    addToCart(cartItem, id)
  }

  // decreased amount
  const decreasedAmount = (id) => {
    const cartItem = cart.find((item)=>{
      return item.id === id;
    })
    if(cartItem){
      const newCart = cart.map((item)=> {
        if(item.id === id){
          return {...item, amount: cartItem.amount - 1}
        }else{
          return item;
        }
      })
      setCart(newCart)
    }
      
    
    if(cartItem.amount < 2){
        removeFromCart(id)
      }
    
  }


  return (
    <CartContext.Provider value={{addToCart, cart, removeFromCart, clearCart, increaseAmount, decreasedAmount, itemAmount}}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
