/* eslint-disable react/prop-types */
import BGImage from '../assets/images/PixelBG.png';
import { Tabs, Tab } from "@nextui-org/react";
import CardSection from '../components/CardSection';
import { useState, useEffect } from 'react'; 
import CustomPagination from '../components/CustomPagination';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/Search';
import PokeCollection from './PokeCollection';
import { useLocation } from 'react-router-dom';
import Leaderboard from './LeaderBoard';
import LoadingPage from '../components/LoadingPage';
import Logo from '../components/Logo';



export default function PokeCollectionIndex({ allEntries, leaderboardData }) {
  const [loading, setLoading] = useState(true);
  
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get('userName');

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
        
            <h1>You better catch em all {userName ? userName : null}!</h1>
          </div>
          <div className="flex flex-col my-20">
            <Tabs className='flex flex-col w-full' defaultActive={2}>
              <Tab key="pokedex" title="Pokedex" style={{borderRadius: '10px'}}>
                <div className='flex flex-row items-start justify-center'>
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
    <PokeCollection/>
  </Tab>
              <Tab key="leaderboard" title="Leader Board" className='flex flex-col' style={{borderRadius: '10px'}}>
                <Leaderboard leaderboardData={leaderboardData} />
              </Tab>
             
            </Tabs>
          </div>
          
          </div>
        
      )}
    </>
  );
}
