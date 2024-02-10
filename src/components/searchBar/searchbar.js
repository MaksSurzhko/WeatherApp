import React, { useState, useEffect } from 'react';
import scss from './searchBar.module.css';
import { useTranslation } from 'react-i18next';

const SearchBar = ({ onSearch }) => {
  const { t } = useTranslation();
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
      <input
        className={scss.input}
        type="text"
        placeholder={t('searchBarPlaceholder')}
        value={query}
        onChange={handleInputChange}
      />
      <button className={scss.btn} onClick={handleSearch}>
        {t('searchBarButton')}
      </button>
    </div>
  );
};

export default SearchBar;