import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePokemon } from "../lib/dbClient";

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      if (!+id) throw new Error(`🔢 ID must be an integer value`);
      getSinglePokemon(id).then((data) => {
        console.log(`🟢🐰 Single pokémon fetched!`);
        setPokemon(data);
      });
    } catch (error) {
      console.error(`🛑🐰 Oops, that's an error!\n`, error.message);
    }
  }, [id]);

  return <></>;
};

export default PokemonPage;
