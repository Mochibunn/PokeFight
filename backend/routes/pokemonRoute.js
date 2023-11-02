import express from 'express';
import {getAllPokemon,
        getSinglePokemon} from '../controllers/pokemonCon.js';

const pokemonRoute = express.Router();

pokemonRoute.route('/pokemon').get(getAllPokemon);
pokemonRoute
  .route('/pokemon/:id')
  .get(getSinglePokemon);

export default pokemonRoute;