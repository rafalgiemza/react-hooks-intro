import React from 'react'
import { List } from './styled/List'
import { usePokemonList } from 'hooks/usePokemonLst'
import { Search, SearchHeader } from './styled/Search'
import { PokemonListProps } from '../interfaces/PokemonListProps'

export function PokemonsList(props: PokemonListProps) {
  const pokemonList = usePokemonList(props)

  return (
    <div>
      <h2>Pokemons list:</h2>
      <Search>
        <SearchHeader>
          <label>Search by name:</label>
        </SearchHeader>
        <input onChange={(event) => pokemonList.handleOnSearchChange(event)} />
      </Search>
      <List>
        {pokemonList.filteredPokemons.map(pokemon => (
          <div key={pokemon.id}>
            <input
              id={pokemon.id.toString()}
              name='pokemonRadioInput'
              type='radio'
              onChange={(event) => pokemonList.handleOnRadioChange(event)}
            />
            <input
              id={pokemon.id.toString()}
              name="pokemonCheckboxInput"
              type='checkbox'
              onChange={(event) => pokemonList.handleOnFavouriteChange(event)}
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
