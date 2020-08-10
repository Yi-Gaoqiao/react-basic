import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basic_1 from './components/Basic_1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic_1 name="Hooks"/>
        <Basic_1 name="Today"/>

      </header>
    </div>
  );
}

export default App;
