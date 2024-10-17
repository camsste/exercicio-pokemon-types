// pages/api/pokemon.js
// pages/api/pokemon.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import pokemons from '../../src/data/pokemonsdata';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Mapeando as fraquezas de cada Pokémon
      const weaknesses = pokemons.map(pokemon => ({
        name: pokemon.name,
        weaknesses: pokemon.weaknesses
      }));

      res.status(200).json(weaknesses);
    } catch (error) {
      res.status(500).json({ message: "Error fetching data" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
