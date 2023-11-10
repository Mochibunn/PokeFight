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
    const response = await axios.get(`${backend}/user/high`);
    console.log("🟢🐰 Leaderboard data fetched!");
    return response.data;
  } catch (error) {
    console.error("🛑🐰 Failed to fetch leaderboard data", error);
  }
};

const getPokemonCollection = async (userId) => {
  try {
    const response  = await axios.get(`${backend}/user/${userId}/collection`);
    console.log(`Collection data for user ${userId} is fetched!`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch collection data:", error);
  }
};

const updateLeaderBoardData = async (userId) => {
  try {
    const response = await axios.put(`${backend}/user/${userId}/won`);
    console.log("🟢🐰 Leaderboard data is updated!");
    return response.data;
  } catch (error) {
    console.error("🛑🐰 Failed to update leaderboard data", error);
  }
};


const updatePokemonCollection = async (userId) => {
  try {
    const response = await axios.put(`${backend}/user/${userId}/collection`);
    console.log("🟢🐰 Pokemon Collection data is updated!");
    return response.data;
  } catch (error) {
    console.error("🛑🐰 Failed to update pokemon collection data", error);
  }
};



export {
  getAllPokemon,
  getSinglePokemon,
  getLeaderBoardData,
  getPokemonCollection,
  updateLeaderBoardData,
  updatePokemonCollection
}
