import React from 'react';
import styled from 'styled-components';




import {Link} from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex; 
  flex-flow: row nowrap;
  position: relative;
  
  

  li{
    color:#fff;
    padding: 18px 10px;
    font-size: 20px;
    font-weight: 400;
    
  }
  

  @media(max-width: 700px) {
    align-items: center;
    list-style: none;
    display: flex; 
    flex-flow: column nowrap;
    background: #000;
    /* z-index: 999; */
    position: absolute;
    
    opacity: ${({open}) => (open ? '100%' : '0')};
    top: ${({open}) => (open ? '0' : '-100%')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  
   li {
      text-decoration: none;
      list-style: none;
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      
    }

    
  }
`;

const Content = ({open}) => {
  return (
    <Ul open={open}>
        <li><Link to="/" style={{color:"inherit"}}>About</Link></li>
        <li>
          <Link to="/" style={{color:"inherit"}}>Articles</Link></li>
        <li><Link to="/" style={{color:"inherit"}}>Say Hi!</Link></li>
    </Ul>

  );
};

export default Content;