import { Pokemon } from '../models/pokemonModel';

export const pokemonData: Pokemon[] = [
  {
    id: 1,
    name: "pikachu",
    types: ["electric"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
    id: 2,
    name: "charizard",
    types: ["fire", "flying"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  },
  {
    id: 3,
    name: "bulbasaur",
    types: ["grass", "poison"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 4,
    name: "squirtle",
    types: ["water"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
  {
    id: 5,
    name: "mewtwo",
    types: ["psychic"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
  },
  {
    id: 6,
    name: "gengar",
    types: ["ghost", "poison"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
  },
  {
    id: 7,
    name: "lucario",
    types: ["fighting", "steel"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
  },
  {
    id: 8,
    name: "jigglypuff",
    types: ["fairy", "normal"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
  },
  {
    id: 9,
    name: "garchomp",
    types: ["dragon", "ground"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png",
  },
  {
    id: 10,
    name: "lapras",
    types: ["water", "ice"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
  },
  {
    id: 11,
    name: "aegislash",
    types: ["steel", "ghost"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/681.png",
  },
  {
    id: 12,
    name: "salamence",
    types: ["dragon", "flying"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png",
  },
  {
    id: 13,
    name: "scizor",
    types: ["bug", "steel"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png",
  },
  {
    id: 14,
    name: "gliscor",
    types: ["ground", "flying"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/472.png",
  },
  {
    id: 15,
    name: "umbreon",
    types: ["dark"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
  },
  {
    id: 16,
    name: "golem",
    types: ["rock", "ground"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
  },
  {
    id: 17,
    name: "froslass",
    types: ["ice", "ghost"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/478.png",
  },
  {
    id: 18,
    name: "toxapex",
    types: ["poison", "water"],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/748.png",
  },
];

// Fraquezas por tipo
export const typeWeaknesses: { [key: string]: string[] } = {
  normal: ["fighting"],
  fire: ["water", "rock", "ground"],
  water: ["electric", "grass"],
  electric: ["ground"],
  grass: ["fire", "ice", "poison", "flying", "bug"],
  ice: ["fire", "fighting", "rock", "steel"],
  fighting: ["flying", "psychic", "fairy"],
  poison: ["ground", "psychic"],
  ground: ["water", "ice", "grass"],
  flying: ["electric", "ice", "rock"],
  psychic: ["bug", "ghost", "dark"],
  bug: ["fire", "flying", "rock"],
  rock: ["water", "grass", "fighting", "ground", "steel"],
  ghost: ["ghost", "dark"],
  dragon: ["ice", "dragon", "fairy"],
  dark: ["fighting", "bug", "fairy"],
  steel: ["fire", "fighting", "ground"],
  fairy: ["poison", "steel"],
};
