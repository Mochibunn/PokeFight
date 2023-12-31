/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import ArenaBG from '../assets/images/pokemonarena.webp';
import { Button } from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getSinglePokemon,getLeaderBoardData,updateLeaderBoardData,updatePokemonCollection } from '../lib/dbClient';
import Logo from '../components/Logo';
import { useUserContext } from '../context/userContext';

//const backend = import.meta.env.VITE_BACKEND;


// eslint-disable-next-line react/prop-types
const Arena = ({allEntries} ) => {
const {user} = useUserContext();
const [pokemonData, setPokemonData] = useState(null);
const [opponent, setOpponent] = useState(null);
const [ifWon, setifWon] = useState(null);
const [showWon, setshowWon] = useState(false);
const [isSaved, setIsSaved] = useState(false);
const [showSave,setshowSave] = useState(false);
const [isBattled, setisBattled] = useState(false);
const [uLeaderBoardData, setULeaderBoardData] = useState([]);
const [uPokemonCollection, setUPokemonCollection] = useState([]);
const [isCaught, setisCaught] = useState(false);



const fetchData = async () => {
  try {
    if (!user) throw new Error(`🔢 Please login`);
    const userResponse = await getLeaderBoardData();
    const findUser = userResponse.find((userData) => userData.userName === user.userName);
    
    if (!findUser) throw new Error(`User with userName ${user.userName} not found`);
    
    const userId = user._id;
    console.log(userId);
   
    const collectionResponse = await updateLeaderBoardData(userId); 
    if (!collectionResponse) throw new Error(`Collection data not found for user ${user.userName}`);
    setULeaderBoardData(collectionResponse);
    console.log(`🟢🐰 Leaderboard data is updated!`, user, collectionResponse);
    
    const anotherResponse = await updatePokemonCollection(userId);
    if (!anotherResponse) throw new Error(`Collection data not found for user ${user.userName}`);
    setUPokemonCollection(anotherResponse);
    console.log(`🟢🐰 Pokemon Collection is updated!`, user, collectionResponse);

  } catch (error) {
    console.error(`🛑🐰 Oops, that's an error!\n`, error.message);
  }
};

useEffect(() => {
  fetchData();
}, [user]);



const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    try {
      if (!+id) throw new Error(`🔢 ID must be an integer value`);
      getSinglePokemon(id).then((data) => {
        console.log(`🟢🐰 Single pokémon fetched!`);
        setPokemonData(data);
      });
    } catch (error) {
      console.error(`🛑🐰 Oops, that's an error!\n`, error.message);
    }
  }, [id]);

  const chooseOpponent = () => {
    const randomIndex = Math.floor(Math.random() * allEntries.length);
    const randomOpponent = allEntries[randomIndex];
    setOpponent(randomOpponent);
    setshowWon(false);
    setIsSaved(false);
    setisBattled(false);
    setshowSave(false);
    setisCaught(false);
  };

  const compareHP = () =>{ 
    if (pokemonData.base.HP > opponent.base.HP) {
     console.log('You won');
     setifWon(true);
     setshowWon(true);
     setIsSaved(false);
     setshowSave(true);
     setisBattled(true)
    } else {
      console.log('You lost');
      setifWon(false);
      setshowWon(true);
      setIsSaved(false);
      setshowSave(true);
      setisBattled(true)
    }
  };

  useEffect(() => {
    chooseOpponent();
  }, []);
  
  const handleSave = async () => {
     updateLeaderBoardData(uLeaderBoardData);
      setIsSaved(true)
  
  };
  
  const handleCatch = async () => {
   updatePokemonCollection(uPokemonCollection);
      setisCaught(true)
  };
  

  return (
    <div className='relative w-full h-screen bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${ArenaBG})` }}>
        <Logo style={{width:'100px'}}/>
      <div className='absolute left-1/2 transform -translate-x-1/2 /2 text-4xl text-white flex flex-col items-center' style={{marginTop:'140px'}}>
    {isCaught 
    ? (<h1 className='neon-light' style={{fontSize: '1.5rem', textAlign:'center'}}>Pokemon was added<br /> to Your Collection!</h1>)
  : ''}
    
    { showWon ? ( 
ifWon ? <h1 className='neon-light'>You Won :D </h1> : <h1 className='neon-light-opponent'>You Lost </h1> )   
:  ( 
  <>
  { pokemonData &&
<div>
 <h1 className='neon-light'>{pokemonData.name.english} Vs.</h1>
</div> }
{ opponent &&
<div>
 <h1 className='neon-light-opponent' >{opponent.name.english}</h1>
</div>  }
</> 
) 
}
{isSaved ? (<><h1 style={{fontSize: '1rem'}}>Your game has been saved</h1>
<Button  onClick={() => navigate('/pokemon')}
          className="text-black rounded-full px-10 py-5"
          style={{ fontFamily: 'G1', fontSize: '1rem', backgroundColor: '#ffcc01' }}>Go to LeaderBoard</Button></> ) : ('')}
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

        {isBattled && ifWon ? (
          <Button
            onClick={handleCatch}
            className="text-black rounded-full px-10 py-5"
            style={{ fontFamily: 'G1', fontSize: '1rem', backgroundColor: '#ffcc01' }}
          >
            Catch Pokemon
          </Button>
        ) : (
          <Button
            onClick={compareHP}
            className="text-black rounded-full px-10 py-5"
            style={{ fontFamily: 'G1', fontSize: '1rem', backgroundColor: '#ffcc01' }}
          >
            Battle
          </Button>
        )}
        {isSaved ? (
          ''
        ) : showSave && (
          <Button
            onClick={handleSave}
            className="text-black rounded-full px-10 py-5"
            style={{ fontFamily: 'G1', fontSize: '1rem', backgroundColor: '#ffcc01' }}
          >
            Save
          </Button>
        )}
        </div>
      <div className='flex justify-between'>

           
      {pokemonData && (
        <div className=' mt-[300px]'>
          <img src={pokemonData.sprite} className='neon-light' style={{width:'300px',height:'300px'}}></img>
          <h1 className='neon-light'>{pokemonData.base.hp}</h1>
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
