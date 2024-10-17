import { Pokemon } from '../models/pokemonModel';

const pokemons: Pokemon[] = [
    {
        id: 1,
        name: "pikachu",
        types: ["electric"],
        weaknesses: ["ground"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    {
        id: 2,
        name: "charizard",
        types: ["fire", "flying"],
        weaknesses: ["water", "electric", "rock"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
    },
    {
        id: 3,
        name: "bulbasaur",
        types: ["grass", "poison"],
        weaknesses: ["fire", "psychic", "flying", "ice"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
        id: 4,
        name: "squirtle",
        types: ["water"],
        weaknesses: ["electric", "grass"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
    {
        id: 5,
        name: "mewtwo",
        types: ["psychic"],
        weaknesses: ["bug", "ghost", "dark"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
    },
    {
        id: 6,
        name: "gengar",
        types: ["ghost", "poison"],
        weaknesses: ["ghost", "psychic", "dark", "ground"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
    },
    {
        id: 7,
        name: "lucario",
        types: ["fighting", "steel"],
        weaknesses: ["fire", "fighting", "ground"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png"
    },
    {
        id: 8,
        name: "jigglypuff",
        types: ["fairy", "normal"],
        weaknesses: ["steel", "poison"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
    },
    {
        id: 9,
        name: "garchomp",
        types: ["dragon", "ground"],
        weaknesses: ["ice", "dragon", "fairy"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png"
    },
    {
        id: 10,
        name: "lapras",
        types: ["water", "ice"],
        weaknesses: ["electric", "grass", "fighting", "rock"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png"
    },
    {
        id: 11,
        name: "aegislash",
        types: ["steel", "ghost"],
        weaknesses: ["fire", "ground", "ghost", "dark"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/681.png"
    },
    {
        id: 12,
        name: "salamence",
        types: ["dragon", "flying"],
        weaknesses: ["ice", "dragon", "fairy", "rock"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png"
    },
    {
        id: 13,
        name: "scizor",
        types: ["bug", "steel"],
        weaknesses: ["fire"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png"
    },
    {
        id: 14,
        name: "gliscor",
        types: ["ground", "flying"],
        weaknesses: ["water", "ice"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/472.png"
    },
    {
        id: 15,
        name: "umbreon",
        types: ["dark"],
        weaknesses: ["fighting", "bug", "fairy"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"
    },
    {
        id: 16,
        name: "golem",
        types: ["rock", "ground"],
        weaknesses: ["water", "grass", "ice", "fighting", "ground", "steel"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png"
    },
    {
        id: 17,
        name: "froslass",
        types: ["ice", "ghost"],
        weaknesses: ["fire", "rock", "ghost", "dark", "steel"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/478.png"
    },
    {
        id: 18,
        name: "toxapex",
        types: ["poison", "water"],
        weaknesses: ["electric", "ground", "psychic"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/748.png"
    }
];

export default pokemons;
