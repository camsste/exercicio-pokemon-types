'use client';

import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';

interface Pokemon {
  name: string;
  types: string[];
  image: string;
}

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('http://localhost:8080/pokemon/${name}');
        setPokemons(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemon-list">
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <p>{pokemon.types.join(', ')}</p>
          </div>
        ))
      ) : (
        <p>Loading Pokémon...</p>
      )}
    </div>
  );
};

export default PokemonList;

