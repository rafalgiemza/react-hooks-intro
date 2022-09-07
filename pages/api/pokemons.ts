// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Pokemon } from '../../interfaces/Pokemon'
import pokemons from './pokemon-simplified.json'

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  res.status(200).json(pokemons)
}
