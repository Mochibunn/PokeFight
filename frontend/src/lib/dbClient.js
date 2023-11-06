import axios from "axios";
const backend = import.meta.env.VITE_BACKEND;

const getAllPokemon = async () => {
  try {
    const { data } = await axios.get(`${backend}/pokefight/pokemon`);
    console.log("🟢🐰 All pokémon fetched!");
    return data;
  } catch (error) {
    console.error(`🛑🐰 Failed to fetch pokémon`, error);
  }
};

const getSinglePokemon = async (id) => {
  try {
    if (!+id) throw new Error(`🔢 ID must be an integer value`);
    const { data } = await axios.get(`${backend}/pokefight/pokemon/${id}`);
    return data;
  } catch (error) {
    return `🛑🐰 Ack! An error!\n`, error;
  }
};

export { getAllPokemon, getSinglePokemon };
