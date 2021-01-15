import React from 'react';
import Ogbe from '../images/ogbe.png';

import styled from 'styled-components';


const Div = styled.div`
  min-height: 100vh;
  /* background: #000; */
 

  .ogbe{
    height: 300px;
    
    clip-path: circle(50% at 50% 50%);
  }

  .text-box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: justify;
    align-items: center;
    justify-content: center;
    display: flex;
    overflow: hidden;
  }

  h1{
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 3px;
  }

  p{
    font-size: 20px;
    font-weight: 400;
    width: 90%;
  }
  
  @media(max-width: 900px) {
    
    .text-box{
      display: block;
      text-align: center;
      transform: translate(-50%, -20%);
    }

  }
`;

const About = () => {
  return (
    <Div className='about'>
    <div className="text-box">
    <div className="image">
     <img alt="ogbe" src={Ogbe} className="ogbe" />
    </div>

    <div >
      <h1>Hello I'm Divine Ogbe</h1>
      <p> I am a frontend developer and content creator based in Lagos, Nigeria. Also, I write tech contents on my blog and take macro courses on Javascript and Machine Learning.</p>
    </div>
    </div>
    
    </Div>
  );
};

export default About;