import { Pokemon } from "interfaces/Pokemon";
import { useEffect, useState } from "react";
import { FavouritesContext } from "./FavouritesContext";
import { Layout } from "./layout/Layout";
import { PokemonCard } from "./PokemonCard";
import { PokemonsFavouritesList } from "./PokemonsFavouritesList";
import { PokemonsList } from "./PokemonsList";
import { Loading } from "./styled/Loading";

export function PokemonsShowTime() {
  const [pokemonsList, setPokemonList] = useState<Pokemon[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)
  const [favourites, setFavourites] = useState<Pokemon[]>([])

  useEffect(() => {
    fetch('/api/pokemons')
      .then(value => value.json())
      .then(pokemons => setPokemonList(pokemons))
  }, [])

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