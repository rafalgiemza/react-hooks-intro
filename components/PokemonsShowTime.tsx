import { useEffect, useState } from "react";
import { FavouritesContext } from "./FavouritesContext";
import { Pokemon } from "../interfaces/Pokemon";
import { Layout } from "./layout/Layout";
import { PokemonCard } from "./PokemonCard";
import { PokemonsFavouritesList } from "./PokemonsFavouritesList";
import { PokemonsList } from "./PokemonsList";

export function PokemonsShowTime() {
  const [pokemonsList, setPokemonList] = useState<Pokemon[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)
  const [favourites, setFavourites] = useState<Pokemon[]>([])

  useEffect(() => {
    fetch("/api/pokemons")
      .then((res) => res.json())
      .then((data) => setPokemonList(data));
  }, [])

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