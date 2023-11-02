
import data from '../data.js';

const getAllPokemon = async (req, res) => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0');
    if (response.ok) {
      const data = await response.json();
      return res.json(data);
    } else {
      return res.status(404).json({ error: 'Pokemon not found' });
    }
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getSinglePokemon = async (req, res) => {
  try {
    const { id } = req.params; 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    if (response.ok) {
      const data = await response.json();
      return res.json(data);
    } else {
      return res.status(404).json({ error: 'Pokemon not found' });
    }
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}



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
    const {id }= req.params;
    const pkmn = await data();
    const pokemon = pkmn.find(p => p.id === id);
    if (pokemon) {
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
      pokemon.sprite = imageUrl;
      return res.json(pokemon);
    } else {
      return res.status(404).json({ error: 'Pokemon not found' });
    }
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


const getOnePokemon = async (req, res, next) => {
  try {
    const {id} = req.params;

    const findPokemon = jsonData.find(pokemon => pokemon.id === id)

    findPokemon.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    return res.json(findPokemon);
  } catch (error) {
    next(error);
  }
};



export { getAllPokemon,
  getSinglePokemon };