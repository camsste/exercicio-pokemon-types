import Router from "express";
import { getPokemonHandler, getAllPokemons } from "../../pages/api/pokemon";

export const router = Router();

// Rota para buscar todos os Pokémon
router.get("/pokemon", getAllPokemons); // Nova rota para buscar todos os Pokémon

// Rota para buscar um Pokémon específico
router.get("/pokemon/:name", getPokemonHandler);

