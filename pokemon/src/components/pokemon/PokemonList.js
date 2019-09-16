import React, { Component } from 'react';
import PokemonCard from './PokemonCard'
import styled from 'styled-components'

export default class PokemonList extends Component {
  render() {
    return (
      <div className="row">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    )
  }
}
