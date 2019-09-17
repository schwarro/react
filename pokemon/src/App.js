import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/layout/Dashboard'

import BackgroundImage from './pattern.png'

function App() {
  return (
    <div className="App" style={{background: `url(${BackgroundImage})`}}>
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
