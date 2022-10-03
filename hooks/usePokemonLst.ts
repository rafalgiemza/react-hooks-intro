import { Pokemon } from "interfaces/Pokemon"
import { PokemonListProps } from "interfaces/PokemonListProps"
import { useState, ChangeEvent } from "react"

export function usePokemonList(pokemonListProps: PokemonListProps) {
  const { pokemons, setSelectedPokemon, favourites, setFavourites } = pokemonListProps

  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(pokemons)

  const handleOnSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFilteredPokemons(pokemons.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().includes(target.value.toLowerCase())))
  }

  const handleOnRadioChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSelectedPokemon(pokemons.find((pokemon: Pokemon) => pokemon.id.toString() === target.id))
  }

  const handleOnFavouriteChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      const res = pokemons.find((pokemon: Pokemon) => pokemon.id.toString() === target.id)
      if (res) setFavourites((old: Pokemon[]) => ([...old, res]))
    } else {
      const filtered = favourites.filter((pokemon: Pokemon) => pokemon.id !== parseInt(target.id))
      setFavourites(filtered)
    }
  }

  return {
    filteredPokemons,
    handleOnSearchChange,
    handleOnRadioChange,
    handleOnFavouriteChange,
  }
}
