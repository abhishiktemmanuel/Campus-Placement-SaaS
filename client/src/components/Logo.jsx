import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as necessary
function Logo({ width = "170px"}) {
  return (
    <div>
        <img src={logo} alt="LOGO" style={{ width }} />
    </div>
  );
}

export default Logo;
