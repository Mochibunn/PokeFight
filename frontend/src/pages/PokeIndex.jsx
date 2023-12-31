/* eslint-disable react/prop-types */
import BGImage from '../assets/images/PixelBG.png';
import { Tabs, Tab } from "@nextui-org/react";
import CardSection from '../components/CardSection';
import { useState, useEffect } from 'react'; 
import CustomPagination from '../components/CustomPagination';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/Search';
import PokeCollection from './PokeCollection';
import Leaderboard from './LeaderBoard';
import LoadingPage from '../components/LoadingPage';
import Logo from '../components/Logo';
import { useUserContext } from '../context/userContext';


export default function PokeIndex({ allEntries, leaderboardData }) {
const {user} = useUserContext();

  const [loading, setLoading] = useState(true);
  
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  


  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredEntries = allEntries.filter((entry) =>
    entry.name.english.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dataToDisplay = searchQuery ? filteredEntries : allEntries;

 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 1000); 
  }, []);



  return (
    <>
      {loading ? ( 
        <LoadingPage />
      ) : (
        
        <div className="w-full bg-cover bg-no-repeat relative aspect-video" style={{ backgroundImage: `url(${BGImage})` }}>
          <Logo/>
          <div className='text-center'>
        
            <h1>You better catch em all {user ? user.userName : null}!</h1>
          </div>
          <div className="flex flex-col my-20">
            <Tabs className='flex justify-center'  >
              <Tab key="pokedex" title="Pokedex"  >
                <div className='flex flex-col items-center justify-center'>
                  <SearchBar type="text" placeholder="Search..." className='flex flex-col' onSearch={handleSearch} />
                  <div>
                    <CardSection
                      data={dataToDisplay.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
                      component={PokemonCard} 
                    />
                  </div>
                </div>
                <CustomPagination
                  total={Math.ceil(dataToDisplay.length / itemsPerPage)}
                  current={currentPage}
                  onChange={(newPage) => setCurrentPage(newPage)}
                 
                />
              </Tab>
             
              <Tab key="pokecollection" title="Poke Collection" className='' style={{ borderRadius: '10px' }}>
    <PokeCollection />
  </Tab>
              <Tab key="leaderboard" title="Leader Board" className='flex flex-col' style={{borderRadius: '10px'}}>
                <Leaderboard leaderboardData={leaderboardData}  />
              </Tab>
             
            </Tabs>
          </div>
          
          </div>
        
      )}
    </>
  );
}
