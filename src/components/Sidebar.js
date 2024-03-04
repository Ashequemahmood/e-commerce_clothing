import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"}
    w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[-30px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        {/* icons */}

        <div
          onClick={handleClose}
          className="w-8 h-8 cursor-pointer flex justify-center items-center "
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {/* cart item */}
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      {/* total, clear cart */}
      <div className="py-4 mt-4 flex flex-col gap-y-3">
      <div className="flex justify-between items-center w-full">
        <div className="uppercase font-semibold">
          <span className="mr-2">Total: € 1000</span>
        </div>
        {/* clear cart icon */}
        <div onClick={clearCart} className="cursor-pointer bg-red-500 py-4 flex justify-center items-center text-white text-xl h-12 w-12">
          <FiTrash2 />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
