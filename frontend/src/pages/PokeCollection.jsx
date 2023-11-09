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

  useEffect(() => {
    const mockData = [
        {
            "id": 1,
            "name": {
              "english": "Bulbasaur",
              "japanese": "フシギダネ",
              "chinese": "妙蛙种子",
              "french": "Bulbizarre"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 45,
              "Attack": 49,
              "Defense": 49,
              "Sp. Attack": 65,
              "Sp. Defense": 65,
              "Speed": 45
            },
            "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          },
          {
            "id": 2,
            "name": {
              "english": "Ivysaur",
              "japanese": "フシギソウ",
              "chinese": "妙蛙草",
              "french": "Herbizarre"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 60,
              "Attack": 62,
              "Defense": 63,
              "Sp. Attack": 80,
              "Sp. Defense": 80,
              "Speed": 60
            },
            "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
          },
    ];

    setTimeout(() => {
      setCollectionData(mockData);
      setIsLoading(false);
    }, 2000);
  }, []);

  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredEntries = collectionData.filter((entry) =>
    entry.name.english.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dataToDisplay = searchQuery ? filteredEntries : collectionData;

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
