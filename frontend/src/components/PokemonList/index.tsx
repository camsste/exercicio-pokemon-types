/* eslint-disable @next/next/no-img-element */
'use client';

import './index.scss';
import { useEffect, useState } from 'react';
import { Pokemon } from '../../../../backend/src/models/pokemonModel'; 
import { pokemonData } from '../../../../backend/src/data/pokemonsdata'; 

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para o termo de pesquisa

  useEffect(() => {
    setPokemonList(pokemonData); 
  }, []);

  // Filtra os Pokémons com base no termo de pesquisa
  const filteredPokemons = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Digite o nome do Pokémon" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado do termo de pesquisa
        className="search-input"
      />
      <ul className="pokemon-list">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <li key={pokemon.id} className="pokemon-item">
              <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
              <h3>{pokemon.name}</h3>
              <p>
                Tipos: {pokemon.types.join(', ')} 
              </p>
              <p>
                Fraquezas: {pokemon.weaknesses.join(', ')}
              </p>
              <div>
              </div>
            </li>
          ))
        ) : (
          <li className="pokemon-item">Nenhum Pokémon encontrado.</li>
        )}
      </ul>
    </div>
  );
}

