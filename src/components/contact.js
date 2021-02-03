import React from 'react';
import Wave from '../images/wave.png';
import styled from 'styled-components';

const Div = styled.div`
  min-height: 80vh;
  /* width: 90%; */
    

  .heading{
    display: flex;
    margin-left: 10%;
  }

  h1{
    font-size: 50px;  
    margin-bottom: 5px;
    padding-right: 20px;
    font-family: Roboto Condensed;
  }

  .wave {
    height: 60px;
  }
  
  .contact {
    
    display: flex;
    align-items: center;
  }

  .contact .contact-info {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contact .contact-info .card {
    position: relative;
    flex: 1;
    max-width: 300px;
    height: 140px;
    background-color: #000;
    border-radius: 18px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    margin: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card .icon {
    font-size: 32px;
    color:#fed330; 
    transition: 0.3s linear;
  }

  .contact-info .card:hover .icon{
    transform: scale(4);
    opacity: 0;
  }

  .card-content h3,
  .card-content span {
    position: absolute;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
  }

  .card-content h3 {
    top: 20px;
    text-transform: uppercase;
    color: #fed330;
  }

  .card-content span {
    bottom: 20px;
    color: #fff;
    font-weight: 300;
  }

  .card:hover h3 {
    opacity: 1;
    bottom: 46px;
    transition: .3s linear .3s;
  }

  .card:hover span {
    opacity: 1;
    bottom: 46px;
    transition: .3s linear .3s;
  }

  

  @media screen and (max-width:600px) {
    height: 100vh;
    
  .contact .contact-info .card {
    flex: 100%;
    max-width: 500px;
  }
}
`;

const contact = () => {
  return (
    <Div id="wave">
      <div className="heading">
        <h1>Say Hi </h1>
        <img alt="wave" src={Wave} className="wave" />
      </div>
      
      <div className="contact">
      
      <div className="contact-info">
        <div className="card">
          <i className="envelope icon"></i>
          <div className ="card-content">
            <h3>Email</h3>
            <span>Divineogbe@gmail.com</span>
          </div>
        </div>

        <div className="card">
          <i className="phone icon"></i>
          <div className ="card-content">
            <h3>Phone</h3>
            <span>+234 810 1841 835</span>
          </div>
        </div>

        <div className="card">
          <i className="location arrow icon"></i>
          <div className ="card-content">
            <h3>Location</h3>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
    </Div>
  );
};

export default contact;