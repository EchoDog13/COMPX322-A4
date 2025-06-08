import React from 'react';
import './SearchBar.css';

function SearchBar({ value, onChange }) {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search projects..." 
        className="searchBar"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
