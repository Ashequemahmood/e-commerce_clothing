import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, price, image, amount } = item;
  const {removeFromCart, increaseAmount, decreasedAmount} = useContext(CartContext)
  

  return (
    <div className="flex  gap-x-4 py-2 border-b border-gray-200 text-gray-500 w-full font-light">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex justify-between w-full">
          {/* title */}
          <Link to={`/product/${id}`} className="text-sm max-w-[240px] uppercase font-medium text-primary hover:underline mb-2">{title}</Link>
          {/* remove icon */}
          <div onClick={()=>removeFromCart(id)} className="text-xl cursor-pointer">
            <IoMdClose className="text-gray-500 bg-slate-300 hover:text-red-700 transition" />
          </div>
          </div>
          {/* quantity, price, final price */}
          <div className=" flex gap-x-2 text-sm h-[36px]">
            {/* qty */}
            <div className="flex flex-1  max-w-[100px] h-full border items-center text-primary font-medium">
              {/* minus */}
              <div onClick={()=> decreasedAmount(id)} className="flex-1 flex items-center justify-center h-full cursor-pointer ">
                <IoMdRemove/>
              </div>
              {/* amount */}
              <div className="flex items-center justify-center h-full px-2">
                {amount}
              </div>
              {/* plus */}
              <div onClick={()=>increaseAmount(id)} className="flex-1 flex items-center justify-center h-full cursor-pointer ">
                <IoMdAdd/>
              </div>
            </div>
            {/* item price */}
            <div className="flex flex-1 justify-around items-center">€ {price}</div>
            {/* final price */}
            <div className="flex flex-1 justify-end items-center font-medium text-primary">{`€ ${parseFloat(price * amount).toFixed(2)} `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
