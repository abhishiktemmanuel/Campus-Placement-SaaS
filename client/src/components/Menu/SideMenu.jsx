import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';


const MenuBar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-6 w-80 min-h-full bg-white text-base-content"> {/* Changed bg-base-200 to bg-white */}
          {/* Sidebar content here */}
          <li><Link to="/" iconSrc="key-square.svg" label="Home">Home</Link></li>
          <li><Link to="/past-applications" iconSrc="3d-square-1.svg" label="Past applications">Past Applications</Link></li>
          <li><Link to="/open-applications" iconSrc="wallet-money-2.svg" label="Open applications">Open Applications</Link></li>
          <li><Link to="/help" iconSrc="message-question-1.svg" label="Help">Help</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default  MenuBar;





