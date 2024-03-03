import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <header className="bg-pink-500">
      <div>Header</div>
      <div onClick={()=> setIsOpen(!isOpen)}>
        <BsBag className="cursor-pointer flex relative"/>
      </div>
    </header>
  );
};

export default Header;
