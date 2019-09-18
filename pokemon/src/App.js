import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/layout/Dashboard'
import Pokemon from './components/pokemon/Pokemon'
import BackgroundImage from './pattern.png'

function App() {
  return (
    <Router>
      <div className="App" style={{background: `url(${BackgroundImage})`}}>
        <Navbar />
        <div className="container">
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/pokemon/:pokemonIndex' component={Pokemon} />
        </div>
      </div>
    </Router>
  );
}

export default App;
