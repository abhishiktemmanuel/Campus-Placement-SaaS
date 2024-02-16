import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    // Implement your search logic here
    console.log(searchQuery);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 text-gray-900 bg-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <button
        type="submit"
        className="p-2 text-white bg-gray-500 rounded-r-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
