import React, {useState} from 'react';
import styled from 'styled-components';
import Content from './content';



const StyledBurger = styled.div`
  display: none;

  @media(max-width: 700px) {
    width: 2rem;
    height: 2rem;
    position: relative;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({open}) => open ? '#fed330' : '#fed330'};
      transform-origin:1px;
      transition: all 0.3s linear;
  
      &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'}
      }

      &:nth-child(2) {
        transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({open}) => open ? 0 : 1};
        
      }

      &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'}
      }
    
  }

  @media(max-width: 285px) {
    right: 1px;
    left: 25px;
  }
} 
  
`;

const Burger = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
    <Content open={open} toggle={toggle}/>
    </>
  );
};

export default Burger;