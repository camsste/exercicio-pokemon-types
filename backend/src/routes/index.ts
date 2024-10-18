import Router from "express";
import { getPokemonHandler } from "../../pages/api/pokemon";

export const router = Router();

// Exemplo de como a API funciona
router.get("/", function (req, res) {
  try {
    res.status(200).send("Hello World");
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// Rota para buscar Pokémon
router.get("/pokemon/:name", getPokemonHandler);
