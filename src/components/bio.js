import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 80vh;
  position: relative;

  .bio-box{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    text-align: justify;
    align-items: center;
    justify-content: center;
    display: flex;
    overflow: hidden;
    
  }

  h2{
    font-size: 50px;  
    margin-bottom: 5px;
    padding-right: 30px;
    font-family: Roboto Condensed;
  }

  .heading{
    margin-right: 100px;
  }

  .dash {
    min-height: 6px;
    width: 40px;
    background-color: #fed330;
    margin-bottom: 20px;
  }
  
  p{ 
    text-align: justify;
    font-size: 20px;
    margin-bottom: 30px;
  }
  @media(max-width: 600px) {
    height: 100vh;

    .bio-box{
      display: block;
      text-align: center;
      top: 15%;
      margin-top: 10%;
      transform: translate(-50%, -20%);
    }

    .heading{
      margin-right: 1px;
      display: block;
    }

    .dash {
      margin-left: 25%;
    }
  }

  @media(max-width: 360px) {
    height: 110vh;
  }
`;

const Bio = () => {
  return (
    <Div id="bio-box">
      <div className="bio-box">
        <div className="heading">
          <h2>About Me</h2>
          <div className="dash"></div>
        </div>
        <div>
          <p>To give you a brief overview of my skillset – I studied Electrical Engineering (M.Eng) and I have building frontend web applications for a while.<br/>

          I enjoy approaching code from a different point of view considering great user interface as well as seamless functionality, to bring an innovative solution to satisfy both business and client.</p>
        </div>
      </div> 
    </Div>
  );
};

export default Bio;