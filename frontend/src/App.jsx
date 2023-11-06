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
import Battle from "./pages/BattlePage";
import {motion} from 'framer-motion';

function App() {
  const [allEntries, setAllEntries] = useState([]);
  const [mousePosition,setMousePosition] = useState({x:0,y:0});
  console.log(mousePosition);


useEffect(() => { 
  const mouseMove = e => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }
  window.addEventListener('mousemove',mouseMove);
  return () => {
    window.removeEventListener('mousemove',mouseMove)
  }
},[]);


const variants = {
  default: {
    x: mousePosition.x,
    y: mousePosition.y
  }
}




  useEffect(() => {
    async function getAllPokemons() {
      try {
        const response = await fetch('http://localhost:3000/pokefight/pokemon');
        if (response.ok) {
          const data = await response.json();
          console.log(data);
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
    <>
    <div>
      <motion.div className="cursor" variants={variants} animate='default' ></motion.div>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={allEntries.length ? <Home allEntries={allEntries} /> : null} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          {/*<Route path="search"element={<SearchPage searchValue={searchValue} />}/>*/}
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="pokemons" element={<PokeIndex allEntries={allEntries} />} />
          <Route path="pokemons/:pokemonId" element={<PokemonPage allEntries={allEntries} />} />
          <Route path="pokemons/:pokemonId/battle" element={<Battle allEntries={allEntries} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
