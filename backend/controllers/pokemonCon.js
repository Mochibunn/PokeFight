import data from "../data.js";
import chalk from "../lib/chalk.js";

//Promise.all() is a built-in JavaScript method that takes an iterable(array) of promises as its argument. It returns a new promise that resolves when all the promises in the iterable have resolved or rejects

const getAllPokemon = async (req, res, next) => {
  try {
    chalk(`grey`, `\n📍Fetch event`);
    chalk(`white`, `👀🐰 Client requested Pokémon data`);
    const pkmn = await data();
    chalk(`white`, `👀🐰 Fetching sprites..`);
    const pokemonWithSprites = await Promise.all(
      pkmn.map(async (pokemon) => {
        const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
        return {
          ...pokemon,
          sprite: spriteUrl,
        };
      })
    );
    chalk(`green`, `🟢🐰 Pokémon data fetched successfully!`)
    return res.json(pokemonWithSprites);
  } catch (error) {
    chalk(`bgRed`, `🛑🐰 Error!\n` + error.message);
    // console.error({ error: error.message });
    next(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getAllPokemon;
