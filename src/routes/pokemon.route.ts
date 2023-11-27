import express from 'express';
import { PokemonController } from '../controllers/pokemon.controller';
import { validateData } from '../middleware/validateSchema';
import { pokemonNameSchema } from '../utils/schemas/pokemon.schema';

const Router = express.Router();

const { getPokemonVariationByName } = PokemonController;

Router.get('/:pokemonName', validateData(pokemonNameSchema, 'params'), getPokemonVariationByName);

export default Router;
