import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basic_1 from './components/Basic_1'
import Basic_2 from './components/Basic_2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic_2 />
        
      </header>
    </div>
  );
}

export default App;
