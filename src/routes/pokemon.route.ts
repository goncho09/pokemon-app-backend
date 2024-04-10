import { Router } from "express";

import {getPokemons,getPokemonById, getPokemonsByType} from '../controllers/pokemon.controller'

const router = Router();

router.get("/pokemon", getPokemons);
router.get("/pokemon/:id", getPokemonById);
router.get("/pokemon/type/:id", getPokemonsByType);

export default router;