import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.color};
    transition: all .5s linear;
  }
`;


export const lightTheme = {
  body: '#fff',
  color: '#121212'
}

export const darkTheme = {
  body: '#121212',
  color: '#fff'
}