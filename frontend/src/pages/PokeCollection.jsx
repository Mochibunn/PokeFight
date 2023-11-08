/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import CardSection from '../components/CardSection';
import CustomPagination from '../components/CustomPagination';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/Search';
import LoadingPage from '../components/LoadingPage';

export default function PokeCollection() {
  const [collectionData, setCollectionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: 'Pikachu',
        sprite: 'pikachu.png',
        type: 'Electric',
        base: {
          HP: 35,
          Attack: 55,
          Defense: 40,
          'Sp. Attack': 50,
          'Sp. Defense': 50,
          Speed: 90,
        },
      },
      {
        id: 2,
        name: 'Charizard',
        sprite: 'charizard.png',
        type: 'Fire/Flying',
        base: {
          HP: 78,
          Attack: 84,
          Defense: 78,
          'Sp. Attack': 109,
          'Sp. Defense': 85,
          Speed: 100,
        },
      },
    ];

    setTimeout(() => {
      setCollectionData(mockData);
      setIsLoading(false);
    }, 2000);
  }, []);

  const dataToDisplay = collectionData;

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className='flex flex-row items-start justify-center'>
          <SearchBar type="text" placeholder="Search..." className='flex flex-col' onSearch={handleSearch} />
          <div>
            {collectionData.length > 0 ? (
              <CardSection
                data={dataToDisplay.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
                component={PokemonCard}
              />
            ) : (
              <p>Your Poke Collection is empty.</p>
            )}
          </div>
        </div>
      )}
      <CustomPagination
        total={Math.ceil(collectionData.length / itemsPerPage)}
        current={currentPage}
        onChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}
