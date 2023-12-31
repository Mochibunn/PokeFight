/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import CardSection from '../components/CardSection';
import CustomPagination from '../components/CustomPagination';
import CPokemonCard from '../components/CPokemonCard';
import SearchBar from '../components/Search';
import {getLeaderBoardData, getPokemonCollection} from '../lib/dbClient';
import { useUserContext } from '../context/userContext';



export default function PokeCollection() {

  const {user} = useUserContext();
  const [collectionData, setCollectionData] = useState([]);
 

  const fetchData = async () => {
    try {
      if (!user) throw new Error(`🔢 Please login`);
      const userResponse = await getLeaderBoardData();
      const findUser = userResponse.find((userData) => userData.userName === user.userName);
      
      if (!findUser) throw new Error(`User with userName ${user.userName} not found`);
      
      const userId = user._id;
      console.log(userId);
     
     
      const collectionResponse = await getPokemonCollection(userId); 
      if (!collectionResponse) throw new Error(`Collection data not found for user ${user.userName}`);
      
      setCollectionData(collectionResponse);
      console.log(`🟢🐰 User data and collection fetched!`, user, collectionResponse);
    } catch (error) {
      console.error(`🛑🐰 Oops, that's an error!\n`, error.message);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [user]);


  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

 
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredEntries = collectionData.filter((entry) =>
    entry.name.english.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dataToDisplay = searchQuery ? filteredEntries : collectionData;

  return (
    <div className='flex flex-col items-center'> 
      
        <div className='flex flex-col items-center'> 
          <SearchBar type="text" placeholder="Search..." className='flex flex-col' onSearch={handleSearch} />
          <div>
            {collectionData.length > 0 ? (
              <CardSection
                data={dataToDisplay.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
                component={CPokemonCard}
              />
            ) : (
              <p>Your Poke Collection is empty.</p>
            )}
          </div>
        </div>

      <CustomPagination
        total={Math.ceil(collectionData.length / itemsPerPage)}
        current={currentPage}
        onChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}
