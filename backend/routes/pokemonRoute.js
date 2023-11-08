import express from 'express';
import getAllPokemon from '../controllers/pokemonCon.js';
import getSinglePokemon from '../controllers/getOneCon.js';

const pokemonRoute = express.Router();

pokemonRoute.route('/').get(getAllPokemon);
pokemonRoute
  .route('/:id')
  .get(getSinglePokemon);


export default pokemonRoute;