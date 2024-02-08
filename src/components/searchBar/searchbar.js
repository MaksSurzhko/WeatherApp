import React, { useState } from 'react';
import scss from './searchBar.module.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <div className={scss.box}>
      <input className={scss.input}
        type="text"
        placeholder="Enter city name"
        value={query}
        onChange={handleInputChange}
      />
      <button className={scss.btn} onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;


