import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/Navbar'
import PokemonList from './components/pokemon/PokemonList'

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
