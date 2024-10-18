import { Request, Response } from 'express';
import { pokemonData, typeWeaknesses } from '../../src/data/pokemonsdata';

export const getPokemonHandler = (req: Request, res: Response) => {
  const { name } = req.params;

  // Encontre o pokémon pelo nome
  const pokemon = pokemonData.find((p) => p.name.toLowerCase() === name.toLowerCase());

  if (!pokemon) {
    return res.status(404).json({ message: 'Pokémon not found' });
  }

  // Obtenha as fraquezas com base nos tipos
  const weaknesses: string[] = [];
  pokemon.types.forEach((type) => {
    const typeWeakness = typeWeaknesses[type];
    if (typeWeakness) {
      weaknesses.push(...typeWeakness);
    }
  });

  // Remover fraquezas duplicadas
  const uniqueWeaknesses = [...new Set(weaknesses)];

  // Responder com os dados do pokémon e suas fraquezas
  res.status(200).json({
    name: pokemon.name,
    types: pokemon.types,
    weakness: uniqueWeaknesses,
    image: pokemon.image,
  });
}
