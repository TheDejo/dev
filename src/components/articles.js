import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Div = styled.div`
  min-height: 70vh; 
  display: inline-flex;
  /* max-width: 100vw; */
  display: relative;
  
  .card{
    height: 300px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 20px;
    margin-bottom: 10px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    border-radius: 18px;
  }

  .card img{
    height: 300px;
    width: 400px;
    border-radius: 18px;
    
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    width: 400px;
    position: absolute;
    font-weight: 300;
    padding: 30px;
    background: #fff;
    opacity: 0.7;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  }

  @media(max-width: 900px) {
    .card{
      height: 200px
    }

    .card img{
    height: 200px;
    width: 300px;
    border-radius: 18px;
    
    }
    h1 {
      width: 300px;
      padding: 15px;
      font-size: 23px;
    }
  }
`;


const Article = () => {

  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gcampbell391')
      .then(resp => resp.json())
      .then(data => {
        setBlogs(data.items)
      })
  }, [])

  
  return (
    <div>
      {blogs.map(blog => {
        return (
          <Div>
             <div className="card">
            <a style={{color: "#000"}} href={blog.link} target="_blank" rel="noopener noreferrer">
            <h1>{blog.title}</h1>
            <img src={blog.thumbnail} alt={blog.title} />
          </a>
        </div>
          </Div>
         
        )
      })}
    </div>

    
    
  );
}

export default Article;