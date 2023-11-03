import data from '../data.js';


const getSinglePokemon = async (req, res, next) => {
    try {
      const { id } = req.params;
      const pkmn = await data();
      const onePokemon = pkmn.find((p) => p.id == id);
      if (onePokemon) {
        const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${onePokemon.id}.svg`;
        
        const pokemon = {
          ...onePokemon,
          sprite: spriteUrl,
        };  
        return res.json(pokemon);
      } else {
        return res.status(404).json({ error: 'Pokemon not found' });
      }
    } catch (error) {
      console.error(error.message);
      next(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  export default getSinglePokemon;