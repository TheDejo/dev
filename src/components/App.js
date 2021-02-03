import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useDarkMode} from './colorMode'
import {Toggle} from './Toggle'
import Header from './navBar';
import About from './about';
import Bio from './bio';
import Contact from './contact';
import Footer from './footer'

import { GlobalStyles, lightTheme, darkTheme } from '../style/globalStyles';
import { ThemeProvider } from 'styled-components';
import '../style/App.css';




const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <BrowserRouter>
       <ThemeProvider theme={themeMode}>
       <GlobalStyles />
       <Header/>
       <Toggle theme={theme} toggleTheme={toggleTheme}/>
       <About />
       <Bio />
       <Contact />
       <Footer />
      </ThemeProvider>
      
    </BrowserRouter>
  );
};

export default App;