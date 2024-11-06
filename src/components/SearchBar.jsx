import PropTypes from 'prop-types';
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="border rounded p-2 px-4 flex-grow mt-2"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Updates searchTerm state
      />
      <button
        className="bg-black text-white px-4 p-2 rounded ml-2"
        onClick={handleSearch} // Triggers search when clicked
      >
        Search
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
