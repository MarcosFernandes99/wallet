import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Wallet } from './components/wallet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wallet />
      </header>
    </div>
  );
}

export default App;
