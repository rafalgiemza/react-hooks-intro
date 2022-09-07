import { Pokemon } from "./Pokemon"

export interface PokemonListProps {
  pokemons: Pokemon[]
  setSelectedPokemon: Function
  favourites: Pokemon[]
  setFavourites: Function
}
