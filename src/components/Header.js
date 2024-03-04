import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import {BsBag} from 'react-icons/bs'
import { CartContext } from "../contexts/CartContext";
import logo from '../img/logo.svg'
import { Link } from "react-router-dom";

const Header = () => {
  const {itemAmount} = useContext(CartContext)
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const [isActive, setIsActive] = useState(false);

  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-20 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link to={'/'}>
        <div>
          <img className="w-[40px]" src={logo} alt="" />
        </div>
        </Link>
      <div onClick={()=> setIsOpen(!isOpen)} className="cursor-pointer flex relative">
        <BsBag className="text-2xl"/>
      </div>
      {/* itemAmount */}
      <div className="bg-red-500 absolute  text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center text-white right-6 bottom-6">
        {itemAmount}
      </div>
      </div>
    </header>
  );
};

export default Header;
