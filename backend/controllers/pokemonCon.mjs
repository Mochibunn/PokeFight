
import data from '../data.mjs';

const allPokemon = async (req, res) => {
  try {
    const pkmn = await data();
    return res.json(pkmn);
  } catch (error) {
    console.error({ error: error.message });
  }
};

const singlePokemon = async (req, res) => {
  try {
    const pokemonId = parseInt(req.params.id);
    const pkmn = await data();
    const pokemon = pkmn.find(p => p.id === pokemonId);
    if (pokemon) {
      return res.json(pokemon);
    } else {
      return res.status(404).json({ error: 'Pokemon not found' });
    }
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


export { allPokemon,
  singlePokemon };