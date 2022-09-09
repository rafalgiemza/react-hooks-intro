import { render, screen } from '@testing-library/react'
import { PokemonCard } from '@/components/PokemonCard'

describe('PokemonCard', () => {
  it('renders No pokemon selected :(', () => {
    render(<PokemonCard selectedPokemon={null} />)

    const heading = screen.getByRole('heading', {
      name: /No pokemon selected/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders a pokemon', () => {
    const selectedPokemon = {
      id: 10,
      name: 'test',
      type: [],
      hp: 10,
      attack: 10,
      defense: 10,
      special_attack: 10,
      special_defense: 10,
      speed: 10,
    }
    render(<PokemonCard selectedPokemon={selectedPokemon} />)

    const heading = screen.getByRole('heading', {
      name: /Pokemon details/i,
    })

    expect(heading).toBeInTheDocument()
  })
})