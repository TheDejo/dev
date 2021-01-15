import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


import Logo from '../../images/logo.png';
import Burger from './burger'


const Nav = styled.nav`
  max-width: 100vw;
  width: 100%;
  height:65px;
  background: #000;
  border-bottom: 3px solid #fed330;
  padding: 0 20px;
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;

  .logo {
    height: 60px;
  }
 
`;

class Header extends Component {
  render() {
    return (
      <Nav >
      <div className="logo">
      <Link href="/" >
          <img alt="logo" src={Logo} className="logo" />
      </Link>
      </div>
      <Burger />
    </Nav>
    );
  }
}

export default Header;