/* eslint-disable react/prop-types */
import BGImage from '../assets/images/PixelBG.png';
import { Tabs, Tab } from "@nextui-org/react";
import CardSection from '../components/CardSection';
import { useState } from 'react';
import CustomPagination from '../components/CustomPagination';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/Search';
import { useLocation } from 'react-router-dom';
import Leaderboard from './LeaderBoard';


export default function PokeIndex({ allEntries, leaderboardData }) {
  // eslint-disable-next-line no-unused-vars


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
  return (
    <>
      <div className="w-full bg-cover bg-no-repeat relative aspect-video" style={{ backgroundImage: `url(${BGImage})` }}>
        <div className='text-center'>
          <h1>You better catch em all {userName ? userName : null}!</h1>
        </div>
        <div className="flex w-full flex-col">
          <Tabs className='flex flex-col glassmorphism-input'>
            <Tab key="music" title="Pokedex" >
              <div className='flex flex-row items-start justify-center'>
                <SearchBar type="text" placeholder="Search..." className='glassmorphism-input flex flex-col' onSearch={handleSearch} />
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
            <Tab key="videos" title="Leader Board" className='bg-transparent flex flex-col glassmorphism-input'>
             <Leaderboard leaderboardData={leaderboardData} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
