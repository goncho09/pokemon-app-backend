import { Router } from "express";

import {getPokemons,getPokemonByIdOrName, getPokemonsByType} from '../controllers/pokemon.controller.js'

const router = Router();

router.get("/pokemon", getPokemons);
router.get("/pokemon/:id", getPokemonByIdOrName);
router.get("/pokemon/type/:id", getPokemonsByType);

export default router;