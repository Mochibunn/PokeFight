import express from 'express';
import getAllPokemon from '../controllers/pokemonCon.js';
import getSinglePokemon from '../controllers/getOneCon.js';

const pokemonRoute = express.Router();

pokemonRoute.route('/pokemon').get(getAllPokemon);
pokemonRoute
  .route('/pokemon/:id')
  .get(getSinglePokemon);

export default pokemonRoute;