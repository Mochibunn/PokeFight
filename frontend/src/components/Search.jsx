/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');


  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (inputValue) {
      onSearch(inputValue);
    } else {
      onSearch('');
    }
  };

  return (
    <div className="search-container mb-2">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        style={{ width: '250px', borderRadius: '20px',marginLeft: '-5px', marginTop:'5px' }}
        className='px-3 py-1'
      />
    </div>
  );
}
