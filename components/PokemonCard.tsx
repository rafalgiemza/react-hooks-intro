import { PokemonCardProps } from "../interfaces/PokemonCardProps"

export function PokemonCard({ selectedPokemon }: PokemonCardProps) {
  const imgSrcBase = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`

  if (!selectedPokemon) return <h2>No pokemon selected :(</h2>

  return (
    <div>
      <h2>Pokemon details:</h2>
      <img
        src={`${imgSrcBase}/${selectedPokemon.id}.png`}
        alt={selectedPokemon.name}
      />
      <h2>{selectedPokemon.name}</h2>
      <p>type: {selectedPokemon.type.join(`, `)} </p>
      <p>hp:{selectedPokemon.hp} </p>
      <p>attack:{selectedPokemon.attack} </p>
      <p>defense:{selectedPokemon.defense} </p>
      <p>special attack:{selectedPokemon.special_attack} </p>
      <p>special defense:{selectedPokemon.special_defense} </p>
      <p>speed:{selectedPokemon.speed} </p>
    </div>
  )
}