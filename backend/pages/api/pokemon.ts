import { Request, Response } from 'express';
import { pokemonData, typeWeaknesses } from '../../src/data/pokemonsdata';

// Função para buscar todos os Pokémon
export const getAllPokemons = (req: Request, res: Response) => {
  try {
    // Retorna todos os Pokémon disponíveis
    res.status(200).json(pokemonData);
  } catch (error) {
    console.error('Erro ao buscar todos os Pokémon:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

// Função para buscar um Pokémon específico pelo nome
export const getPokemonHandler = (req: Request, res: Response) => {
  const { name } = req.params;

  // Encontre o Pokémon pelo nome
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

  // Responder com os dados do Pokémon e suas fraquezas
  res.status(200).json({
    name: pokemon.name,
    types: pokemon.types,
    weakness: uniqueWeaknesses,
    image: pokemon.image,
  });
};

