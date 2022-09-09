import React, { ChangeEvent, useState } from 'react'
import { PokemonListProps } from '../interfaces/PokemonListProps'
import { List } from './styled/List'
import { Search, SearchHeader } from './styled/Search'

export function PokemonsList({ pokemons, setSelectedPokemon, favourites, setFavourites }: PokemonListProps) {
  // TODO 1.1
  const filteredPokemons = pokemons
  const setFilteredPokemons = () => { }

  const handleOnSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    // TODO 1.2
  }

  const handleOnRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    //TODO 2.2
  }

  const handleOnFavouriteChange = (event: ChangeEvent<HTMLInputElement>) => {
    // TODO 4.3
  }

  return (
    <div>
      <h2>Pokemons list:</h2>
      <Search>
        <SearchHeader>
          <label>Search by name:</label>
        </SearchHeader>
        <input onChange={(event) => handleOnSearchChange(event)} />
      </Search>
      <List>
        {filteredPokemons.map(pokemon => (
          <div key={pokemon.id}>
            <input
              id={pokemon.id.toString()}
              name='pokemonRadioInput'
              type='radio'
              onChange={(event) => handleOnRadioChange(event)}
            />
            <input
              id={pokemon.id.toString()}
              name="pokemonCheckboxInput"
              type='checkbox'
              onChange={(event) => handleOnFavouriteChange(event)}
            />
            <span>
              {pokemon.name}
            </span>
          </div>
        ))}
      </List>
    </div >
  )
}

