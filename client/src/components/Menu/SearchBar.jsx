import React, { useState } from 'react';

const SearchBar = ({className = ""}) => {
   // State to hold the search input value
   const [searchTerm, setSearchTerm] = useState("");

   // Function to handle input changes
   const handleInputChange = (event) => {
     setSearchTerm(event.target.value);
   };
 
   // Function to handle form submission
   const handleSubmit = (event) => {
     event.preventDefault(); // Prevent the form from refreshing the page
     console.log("Searching for:", searchTerm); // For demonstration, log the search term
     // Here, you would typically call a search function or API
   };
 
   return (
     <form onSubmit={handleSubmit} className={`relative w-full h-[40px] bg-gray-100 rounded-[12px] shadow-sm ${className}`}>
       {/* Search icon can be placed here */}
       <input
         type="text"
         value={searchTerm}
         onChange={handleInputChange}
         placeholder="Search"
         className="absolute h-[20px] top-[10px] left-[40px] w-[140px] bg-transparent border-none outline-none font-text-middle-15px-regular text-theme-mail-text-secondary"
         aria-label="Search"
       />
       <button
         type="submit"
         className="inline-flex flex-row-reverse content-end  px-[6px] py-[2px] absolute top-[9px] right-[185px]"
         aria-label="Submit search"
       >
          <ion-icon name="search-outline" size="small" ></ion-icon>
       </button>
     </form>
   );
};
export default SearchBar;
