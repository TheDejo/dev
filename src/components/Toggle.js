import React from 'react';
import { IoSunny } from 'react-icons/io5';
import { BsMoon } from 'react-icons/bs';




export const Toggle = ({theme, toggleTheme}) => {
  

  return (
    <div onClick={toggleTheme}>
      {theme === 'light' ? 
      <BsMoon size="30px" 
      style={{
        color:"#2ecc71", 
        position:"absolute",
        top: "6rem",
        right: "4rem",
        transition: "all .5s linear",
        cursor: "pointer"
     }} /> : 
      <IoSunny size="30px" style={{
        color:"#fed330", 
        position:"absolute",
        top: "6rem",
        right: "4rem",
        transition: "all .5s linear",
        cursor: "pointer"
     }} />}
    </div>
  ); 
};

  