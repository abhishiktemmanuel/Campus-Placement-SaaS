


import React, { useState } from 'react';

const SearchBar = ({ onSearch, className = ""}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className={`relative  bg-gray-100 rounded-[12px] shadow-sm ${className}`}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className=" bg-transparent border-none outline-none font-text-middle-15px-regular text-theme-mail-text-secondary h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-3 mr-4"
          aria-label="Search"
        >
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 56.966 56.966"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

