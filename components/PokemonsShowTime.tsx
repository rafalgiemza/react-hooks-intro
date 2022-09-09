import { FavouritesContext } from "./FavouritesContext";
import { Layout } from "./layout/Layout";
import { PokemonCard } from "./PokemonCard";
import { PokemonsFavouritesList } from "./PokemonsFavouritesList";
import { PokemonsList } from "./PokemonsList";
import { Loading } from "./styled/Loading";

export function PokemonsShowTime() {
  const bulbasaur = {
    "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "special_attack": 65,
    "special_defense": 65,
    "speed": 45
  }

  // TODO
  const pokemonsList = [bulbasaur]
  const setPokemonList = () => { }
  const selectedPokemon = null
  const setSelectedPokemon = () => { }
  const favourites = Array()
  const setFavourites = () => { }

  // TODO

  if (pokemonsList.length === 0) return <Loading />

  return (
    <Layout>
      <PokemonsList
        pokemons={pokemonsList}
        setSelectedPokemon={setSelectedPokemon}
        favourites={favourites}
        setFavourites={setFavourites}
      />
      <FavouritesContext.Provider value={favourites}>
        <PokemonCard selectedPokemon={selectedPokemon} />
        <PokemonsFavouritesList />
      </FavouritesContext.Provider>
    </Layout>
  )
}