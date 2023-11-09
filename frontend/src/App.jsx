import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PokemonPage from "./pages/PokemonPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import PokeIndex from "./pages/PokeIndex";
import LeaderBoard from "./pages/LeaderBoard";
import Battle from "./pages/Battle";
import Arena from './pages/Arena';
import SinglePokeCollection from './pages/SinglePokeCollection';
import { motion } from "framer-motion";
import { getAllPokemon } from "./lib/dbClient";

function App() {
  const [allEntries, setAllEntries] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  useEffect(() => {
    const autorun = async () => {
      try {
        const res = await getAllPokemon();
        setAllEntries(res);
      } catch (error) {
        console.error(error);
      }
    };
    autorun();
  }, []);

 

  //? Harun's original fetch function, moved to dbClient.js
  // useEffect(() => {
  //   async function getAllPokemon() {
  //     try {
  //       const response = await fetch("http://localhost:8989/pokefight/pokemon");
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log("🟢🐰 Pokémon fetched!");
  //         setAllEntries(data);
  //       } else {
  //         throw new Error("🛑🐰 Failed to fetch pokémon");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   getAllPokemon();
  // }, []);

  // const getSinglePokemon = async (id) => {
  //   const response
  // };

  return (
    <>
      <div>
        <motion.div
          className="cursor"
          variants={variants}
          animate="default"
        ></motion.div>

        <BrowserRouter>
          <Routes>
            <Route 
            path="/" 
            element={<Layout />}>
              <Route
                index
                element={allEntries.length ? <Home allEntries={allEntries} /> : null}
              />
              <Route 
              path="login" 
              element={<Login />} />
              <Route 
              path="signup" 
              element={<SignUp />} />
              {/*<Route path="search"element={<SearchPage searchValue={searchValue} />}/>*/}
              <Route 
              path="leaderboard" 
              element={<LeaderBoard />} />
              <Route
                path="pokemon"
                element={<PokeIndex allEntries={allEntries} />}
              />
              <Route
                path="pokemon/:id"
                element={<PokemonPage allEntries={allEntries} />}
              />
              <Route
                path="pokemon/pokecollection/:id"
                element={<SinglePokeCollection allEntries={allEntries} />}
              />
              <Route
                path="pokemon/battle"
                element={<Battle allEntries={allEntries} />}
              />
               <Route
                path="pokemon/arena/:id"
                element={<Arena allEntries={allEntries} />}
              />
              <Route 
              path="*" 
              element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
       
      </div>
    </>
  );
}

export default App;