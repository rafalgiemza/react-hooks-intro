import React, { ChangeEvent, createContext, useEffect, useRef, useState } from 'react'
import { Pokemon } from '../interfaces/Pokemon'
import { PokemonListProps } from '../interfaces/PokemonListProps'
import { List } from './styled/List'
import { ResetButton, Search, SearchHeader } from './styled/Search'

export function PokemonsList({ pokemons, setSelectedPokemon, favourites, setFavourites }: PokemonListProps) {
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(pokemons)
  const searchRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setFilteredPokemons(pokemons)
  }, [pokemons])

  const handleOnSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilteredPokemons(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  const handleResetSearch = () => {
    if (searchRef.current) searchRef.current.value = ''
    setFilteredPokemons(pokemons)
  }

  const handleOnRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const res = pokemons.find(pokemon => pokemon.id === parseInt(event.target.id))
    setSelectedPokemon(res)
  }

  const handleOnFavouriteChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const res = pokemons.find(pokemon => pokemon.id === parseInt(event.target.id))
      if (res) setFavourites((fav: Pokemon[]) => [...fav, res])
    } else {
      const filtered = favourites.filter(pokemon => pokemon.id !== parseInt(event.target.id))
      setFavourites(filtered)
    }
  }

  return (
    <div>
      <h2>Pokemons list:</h2>
      <Search>
        <SearchHeader>
          <label>Search by name:</label>
          <ResetButton onClick={handleResetSearch}>RESET</ResetButton>
        </SearchHeader>
        <input onChange={(event) => handleOnSearchChange(event)} ref={searchRef} />
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
