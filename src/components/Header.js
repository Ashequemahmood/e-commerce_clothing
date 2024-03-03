import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <div>
      <div>Header</div>
      <div onClick={()=> setIsOpen(!isOpen)}>
        <BsBag className="cursor-pointer flex relative"/>
      </div>
    </div>
  );
};

export default Header;
