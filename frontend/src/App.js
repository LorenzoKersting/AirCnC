import React from 'react';
import './App.css';


import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo}  alt="AirCnC" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>
      </div>
    </div>
  );
}

export default App;
