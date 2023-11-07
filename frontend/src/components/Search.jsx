/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import TypeFilter from './TypeFilter';



const backend = import.meta.env.VITE_BACKEND;


export default function SearchBar({ onSearch, searchResults }) {
  const [query, setQuery] = useState('');
  
  const [selectedTypes, setSelectedTypes] = useState(['All']); 

  const [selectedSort, setSelectedSort] = useState('None'); 

  const [showAllChips, setShowAllChips] = useState(false);

  const [availableTypes, setAvailableTypes] = useState([]);


  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    console.log('Query:', inputValue);
    searchPokemon(inputValue, selectedTypes, selectedSort);
  }

 
  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSelectedSort(selectedSort);
    searchPokemon(query, selectedTypes, selectedSort);
  }

  const handleShowAllChips = () => {
    if (showAllChips) {
      setSelectedTypes([]);
    } else {
      setSelectedTypes(availableTypes);
    }
    setShowAllChips(!showAllChips);
  };

  const fetchAvailableTypes = async () => {
    try {
      const response = await axios.get(`${backend}/pokefight/pokemon`);
      if (response.data && response.data.type) {
        const availableTypes = response.data.type;
        setAvailableTypes(availableTypes);
        console.log(availableTypes);
      }
    } catch (error) {
      console.error('Failed to fetch available types', error);
    }
  };

  useEffect(() => {
    fetchAvailableTypes();
  }, []);

  const searchPokemon = async (query, types, sort) => {
    try {
      if (!query) {
        onSearch([]); 
        return;
      }
      const { data } = await axios.get(`${backend}/pokefight/pokemon?q=${query}`);
      console.log('API Response:', data);
  
      let filteredResults;
      if (types.includes('All')) {
        filteredResults = data;
      } else {
        filteredResults = data.filter(result => types.some(type => result.type.includes(type)));
      }
  
      if (sort !== 'None') {
        filteredResults.sort((a, b) => a.base[sort] - b.base[sort]);
      }
  
      onSearch(filteredResults);
    } catch (error) {
      console.error(`Failed to fetch pokémon for search term: ${query}`, error);
      onSearch([]);
    }
  };
  

  return (
    <div className="search-container">
      <div className='flex '>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
       style={{width:'200px'}}
      />
        <select onChange={handleSortChange}>
        <option value="None">Sort by</option>
        <option value="HP">HP</option>
        <option value="Attack">Attack</option>
        <option value="Sp. Attack">Sp. Attack</option>
        <option value="Defense">Defense</option>
        <option value="Sp. Defense">Sp. Defense</option>
        <option value="Speed">Speed</option>
       </select>
      </div>
     

       <button onClick={handleShowAllChips}>
      {showAllChips ? 'Hide All Types' : 'Show All Types'}
    </button>
    <TypeFilter
  selectedTypes={selectedTypes}
  setSelectedTypes={setSelectedTypes}
  availableTypes={availableTypes}
  showAll={showAllChips}
/>

  
      <div id="search-results">
        {searchResults && Array.isArray(searchResults) ? (
          searchResults.map((result, index) => (
            <div key={index}>{result.name.english}</div>
          ))
        ) : null}
      </div>
    </div>
  );
}
