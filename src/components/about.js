import React from 'react';
import Ogbe from '../images/ogbe.png';
import {Link} from 'react-scroll';
import styled from 'styled-components';


const Div = styled.div`
  min-height: 100vh;
  position: relative; 

  @keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

 
  100% {
    opacity: 1;
    transform: translate(0);
  }
}


  .ogbe{
    height: 300px;
    margin-right: 40px;
    clip-path: circle(50% at 50% 50%);
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }

  .text-box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: justify;
    align-items: center;
    justify-content: center;
    display: flex;
    overflow: hidden;
  }

  h1{
    font-size: 60px;
    font-weight: 500;
    letter-spacing: 3px;
    font-family: Yusei Magic;
    animation: moveInRight 1s ease-out;
  }

  p{
    font-size: 25px;
    font-weight: 500;
    animation: moveInRight 1s ease-out;
  }

  button {
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 20px;
    display: inline-block;
    transition: all .2s;
    position: relative;
    background-color: #2ecc71;
    color: #fff;
    border: none;
    animation: moveInBottom .5s ease-out .75s;
    animation-fill-mode: backwards;
  }

  button:link,
  button:visited {
    text-decoration: none;
  }

  button:hover {
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  button:active {
    transform: translateY(-1px) ;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border: none;
  }

  button:after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all .4s;
  border: none;
  }

  button::after {
    background-color: #2ecc71;
    border: none;
  }

  button:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  
  
  @media(max-width: 600px) {
    height: 120vh;

    .text-box{
      display: block;
      text-align: center;
      top: 30%;
      transform: translate(-50%, -20%);
    }

    .ogbe {
      margin-right: 10px;
    }

  }

  @media(max-width: 360px){
    .ogbe{
      height: 200px;
    }

    h1{
      font-size: 40px;
    }
  }
`;

const Header = () => {
  return (
    <Div id="text-box">
    <div className="text-box">
      <div className="image">
      <img alt="ogbe" src={Ogbe} className="ogbe" />
      </div>

      <div>
        <h1>Hello I'm Divine</h1>
        <p>Software Engineer</p>
        <Link to="wave" smooth={true} duration={1000}><button>Contact Me</button></Link>
      </div>
      
    </div>
    
    </Div>
  );
};

export default Header;