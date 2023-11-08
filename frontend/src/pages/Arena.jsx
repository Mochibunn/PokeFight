/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import ArenaBG from '../assets/images/pokemonarena.webp';
import { Button } from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getSinglePokemon } from '../lib/dbClient';
import Logo from '../components/Logo';



// eslint-disable-next-line react/prop-types
const Arena = ({allEntries} ) => {
const [loaded, setLoaded] = useState(false);
const [pokemonData, setPokemonData] = useState(null);
const [opponent, setOpponent] = useState(null);

const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    try {
      if (!+id) throw new Error(`🔢 ID must be an integer value`);
      getSinglePokemon(id).then((data) => {
        console.log(`🟢🐰 Single pokémon fetched!`);
        setPokemonData(data);
        setLoaded(true);
      });
    } catch (error) {
      console.error(`🛑🐰 Oops, that's an error!\n`, error.message);
    }
  }, [id]);

  const chooseOpponent = () => {
    const randomIndex = Math.floor(Math.random() * allEntries.length);
    const randomOpponent = allEntries[randomIndex];
    setOpponent(randomOpponent);
  };

  useEffect(() => {
    chooseOpponent();
  }, []);
  

  return (
    <div className='relative w-full h-screen bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${ArenaBG})` }}>
        <Logo style={{width:'100px'}}/>
      <div className='absolute left-1/2 transform -translate-x-1/2 /2 text-4xl text-white flex flex-col items-center' style={{marginTop:'140px'}}>
      
      {pokemonData && (
  <div>
    <h1 className='neon-light'>{pokemonData.name.english}</h1>
  </div>
)}
        Vs.
        {opponent && (
  <div>
    <h1 className='neon-light-opponent' >{opponent.name.english}</h1>
  </div>
)}
      </div>
     
<div className='flex justify-between gap-20 absolute bottom-10 left-1/2 transform -translate-x-1/2'>
<Button
          onClick={() => navigate('/pokemon')}
          className="text-black rounded-full px-10 py-5"
          style={{ fontFamily: 'G1', fontSize: '1rem', backgroundColor: '#ffcc01' }}
        >
       Go Back
        </Button>
        <Button
         onClick={() => chooseOpponent()}
          className="text-black rounded-full px-10 py-5"
          style={{ fontFamily: 'G1', fontSize: '1rem', backgroundColor: '#ffcc01' }}
        >
         Choose Opponent
        </Button>
        <Button
          onClick={() => navigate('/pokemon/battle')}
          className="text-black rounded-full px-10 py-5"
          style={{ fontFamily: 'G1', fontSize: '1rem', backgroundColor: '#ffcc01' }}
        >
         Battle
        </Button>
</div>
      <div className='flex justify-between'>

           
      {pokemonData && (
        <div className=' mt-[300px]'>
          <img src={pokemonData.sprite} className='neon-light' style={{width:'300px',height:'300px'}}></img>
        </div>
      )}
      {opponent && (
        <div className=' mt-[300px]'>
          <img src={opponent.sprite} className='neon-light-opponent' style={{ width: '300px',height:'300px' }} ></img>
        </div>
      )}
           
      </div>
    
    
         </div>
  );
};

export default Arena;
