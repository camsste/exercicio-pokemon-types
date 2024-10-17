import { Pokemon } from '../models/pokemonModel';

const pokemons: Pokemon[] = [
    {
        name: "pikachu",
        types: ["electric"],
        weaknesses: ["ground"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    {
        name: "charizard",
        types: ["fire", "flying"],
        weaknesses: ["water", "electric", "rock"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
    },
    {
        name: "bulbasaur",
        types: ["grass", "poison"],
        weaknesses: ["fire", "psychic", "flying", "ice"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
        name: "squirtle",
        types: ["water"],
        weaknesses: ["electric", "grass"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
    {
        name: "mewtwo",
        types: ["psychic"],
        weaknesses: ["bug", "ghost", "dark"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
    },
    {
        name: "gengar",
        types: ["ghost", "poison"],
        weaknesses: ["ghost", "psychic", "dark", "ground"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
    },
    {
        name: "lucario",
        types: ["fighting", "steel"],
        weaknesses: ["fire", "fighting", "ground"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png"
    },
    {
        name: "jigglypuff",
        types: ["fairy", "normal"],
        weaknesses: ["steel", "poison"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
    },
    {
        name: "garchomp",
        types: ["dragon", "ground"],
        weaknesses: ["ice", "dragon", "fairy"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png"
    },
    {
        name: "lapras",
        types: ["water", "ice"],
        weaknesses: ["electric", "grass", "fighting", "rock"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png"
    },
    {
        name: "aegislash",
        types: ["steel", "ghost"],
        weaknesses: ["fire", "ground", "ghost", "dark"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/681.png"
    },
    {
        name: "salamence",
        types: ["dragon", "flying"],
        weaknesses: ["ice", "dragon", "fairy", "rock"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png"
    },
    {
        name: "scizor",
        types: ["bug", "steel"],
        weaknesses: ["fire"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png"
    },
    {
        name: "gliscor",
        types: ["ground", "flying"],
        weaknesses: ["water", "ice"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/472.png"
    },
    {
        name: "umbreon",
        types: ["dark"],
        weaknesses: ["fighting", "bug", "fairy"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"
    },
    {
        name: "golem",
        types: ["rock", "ground"],
        weaknesses: ["water", "grass", "ice", "fighting", "ground", "steel"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png"
    },
    {
        name: "froslass",
        types: ["ice", "ghost"],
        weaknesses: ["fire", "rock", "ghost", "dark", "steel"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/478.png"
    },
    {
        name: "toxapex",
        types: ["poison", "water"],
        weaknesses: ["electric", "ground", "psychic"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/748.png"
    }
];

export default pokemons;
