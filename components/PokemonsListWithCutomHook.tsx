import { PokemonListProps } from '../interfaces/PokemonListProps'
import { List } from './styled/List'
import { ResetButton, Search, SearchHeader } from './styled/Search'
import { usePokemonList } from '../hooks/usePokemonList'

export function PokemonsList(pokemonListProps: PokemonListProps) {
  const {
    searchRef,
    filteredPokemons,
    handleResetSearch,
    handleOnSearchChange,
    handleOnRadioChange,
    handleOnFavouriteChange
  } = usePokemonList(pokemonListProps)

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

