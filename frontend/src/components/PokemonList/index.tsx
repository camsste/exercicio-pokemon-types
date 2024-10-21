'use client';

import './index.scss';
import { useEffect, useState } from 'react';
import { Pokemon } from 'C:/Users/andre/exercicio-pokemon-types/backend/src/models/pokemonModel'; // Certifique-se de ajustar o caminho correto
import { pokemonData } from 'C:/Users/andre/exercicio-pokemon-types/backend/src/data/pokemonsdata';  // Caminho correto para a lista de pokémons

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemonList(pokemonData);
  }, []);

  return (
    <ul className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <li key={pokemon.id} className="pokemon-item">
          <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
          <h3>{pokemon.name}</h3>
          <p>Types: {pokemon.types.join(', ')}</p>
        </li>
      ))}
    </ul>
  );
}
