import data from "../data.js";
import chalk from "../lib/chalk.js";

const getSinglePokemon = async (req, res, next) => {
  try {
    const { id } = req.params;
    chalk(`grey`, `\n📍Single pokémon fetch event`);
    chalk(`white`, `👀🐰 Client requested pokémon data with id ${id}`);
    if(!+id) throw new Error(`${id} is not a valid integer value`);
    const pkmn = await data();
    const onePokemon = pkmn.find((p) => p.id == id);
    chalk(`white`, `👀🐰 Found ${onePokemon.name.english} with ID ${id}!`);
    if (onePokemon) {
      const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${onePokemon.id}.svg`;
      chalk(`white`, `👀🐰 Fetching sprite for ${onePokemon.name.english}..`);
      const pokemon = {
        ...onePokemon,
        sprite: spriteUrl,
      };
      chalk(`green`, `🟢🐰 Pokémon data fetched successfully!`);
      return res.json(pokemon);
    } else {
      chalk(`red`, `🛑🐰 Pokémon not found!`);
      return res.status(404).json({ error: "❌🐰 Pokémon not found" });
    }
  } catch (error) {
    chalk(`red`,`🛑🐰 Error!\n🛑🐰 `+error.message);
    chalk(`red`,`🛑🐰 Failed to fetch pokémon data!`);
    // next(error);
    return res.status(500).json({ error: "🛑🐰 Internal Server Error" });
  }
};

export default getSinglePokemon;
