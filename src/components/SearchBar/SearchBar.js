import React, { useState } from 'react';
import "./SearchBar.css"
const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='input'
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Поиск по имени..."
      />
      <button className='button' type="submit">Поиск</button>
    </form>
  );
};

export default SearchBar;