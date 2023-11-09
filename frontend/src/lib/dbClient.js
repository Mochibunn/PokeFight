import axios from "axios";
const backend = import.meta.env.VITE_BACKEND;

const getAllPokemon = async () => {
  try {
    const { data } = await axios.get(`${backend}/pokemon`);
    console.log("🟢🐰 All pokémon fetched!");
    return data;
  } catch (error) {
    console.error(`🛑🐰 Failed to fetch pokémon`, error);
  }
};

const getSinglePokemon = async (id) => {
  try {
    if (!+id) throw new Error(`🔢 ID must be an integer value`);
    const { data } = await axios.get(`${backend}/pokemon/${id}`);
    return data;
  } catch (error) {
    return `🛑🐰 Ack! An error!\n`, error;
  }
};

const getLeaderBoardData = async () => {
try {
  const {response} = await axios.get(`${import.meta.env.VITE_BACKEND}/user/all`);
 console.log("🟢🐰 All leader board data is fetched!");
 return response;
} catch (error) {
  console.error('Failed to fetch leaderboard data:', error);
}
};

const getPokemonCollection = async () => {
  try {
    const {response} = await axios.get(`${import.meta.env.VITE_BACKEND}/pokemon/collection`);
   console.log("🟢🐰 All collection data is fetched!");
   return response;
   
  } catch (error) {
    console.error('Failed to fetch collection data:', error);
  }
  };



export { getAllPokemon, getSinglePokemon, getLeaderBoardData,getPokemonCollection };
