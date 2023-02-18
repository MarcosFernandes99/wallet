import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Wallet } from './components/wallet';
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Wallet />
    </ThemeProvider>
  );
}

export default App;
