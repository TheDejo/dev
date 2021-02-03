import React, { Component } from 'react';
import {Link} from 'react-scroll';
import styled from 'styled-components';


import Logo from '../../images/logo.png';
import Burger from './burger'


const Nav = styled.nav`
  max-width: 100vw;
  width: 100%;
  height:65px;
  background: transparent;
  padding: 0 20px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 2;

  .logo {
    height: 60px;
    cursor: pointer;
  }
 
`;

class Header extends Component {
  render() {
    return (
      <Nav >
      <div className="logo">
      <Link to="text-box" smooth={true} duration={1000} >
          <img alt="logo" src={Logo} className="logo" />
      </Link>
      </div>
      <Burger />
    </Nav>
    );
  }
}

export default Header;