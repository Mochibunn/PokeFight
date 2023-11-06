import { useState } from 'react';
import axios from 'axios';

const backend = import.meta.env.VITE_BACKEND;

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    console.log('Query:', inputValue);
    searchPokemon(inputValue);
  }
  
  const searchPokemon = async (query) => {
    try {
      const { data } = await axios.get(`${backend}/pokefight/pokemon?q=${query}`);
      console.log('API Response:', data);
      setSearchResults(data);
    } catch (error) {
      console.error(`Failed to fetch pokémon for search term: ${query}`, error);
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <div id="search-results">
        {searchResults.map((result, index) => (
          <div key={index}>{result.name}</div>
        ))}
      </div>
    </div>
  );
}
