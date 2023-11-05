import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PokemonPage from "./pages/PokemonPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import PokeIndex from "./pages/PokeIndex";
import LeaderScore from "./pages/LeaderScore";
import Battle from "./pages/BattlePage";
const { DEV, VITE_BACKEND_URL_DEPLOY, VITE_BACKEND_URL_DEV } = import.meta.env;

function App() {
  const [allEntries, setAllEntries] = useState([]);

  useEffect(() => {
    async function getAllPokemons() {
      try {
        const response = await fetch(
          `${DEV ? VITE_BACKEND_URL_DEV : VITE_BACKEND_URL_DEPLOY}/pokefight/pokemon`
        );
        if (response.ok) {
          const data = await response.json();
          setAllEntries(data);
        } else {
          throw new Error("Failed to fetch pokemons");
        }
      } catch (error) {
        console.error(error);
      }
    }

    getAllPokemons();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home allEntries={allEntries} />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="leaderscore" element={<LeaderScore />} />
          <Route path="pokemons" element={<PokeIndex />} />
          <Route
            path="pokemons/:pokemonId"
            allEntries={allEntries}
            element={<PokemonPage />}
          />
          <Route
            path="pokemons/:pokemonId/battle"
            allEntries={allEntries}
            element={<Battle />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
