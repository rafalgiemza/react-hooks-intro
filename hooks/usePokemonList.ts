import { useState, useRef, useEffect, ChangeEvent } from "react"
import { Pokemon } from '../interfaces/Pokemon'
import { PokemonListProps } from "../interfaces/PokemonListProps"

export function usePokemonList({ pokemons, setSelectedPokemon, favourites, setFavourites }: PokemonListProps) {
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

  return {
    searchRef,
    filteredPokemons,
    handleResetSearch,
    handleOnSearchChange,
    handleOnRadioChange,
    handleOnFavouriteChange
  }
}