import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../container/Container';
import Logo from '../Logo.jsx';
import LogoutBtn from './LogoutBtn';
import SearchBar from './SearchBar';
import { ProfileButton } from '../ProfileViews.jsx';

function SideMenu() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Home'); // State to track the active nav item

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      icon: 'home-icon', // Replace with actual icon component or class
    },
    {
      name: 'Past Applications',
      slug: "/past-applications",
      icon: 'past-applications-icon', // Replace with actual icon component or class
    },
    {
      name: 'Open Applications',
      slug: "/open-applications",
      icon: 'open-applications-icon', // Replace with actual icon component or class
    },
    {
      name: 'Help',
      slug: "/help",
      icon: 'help-icon', // Replace with actual icon component or class
    },
  ];

  const handleNavItemClick = (itemName, slug) => {
    setActiveNav(itemName); // Update the active nav item state
    navigate(slug); // Navigate to the clicked item's route
  };

  return (
    <div className="bg-white h-screen drawer lg:drawer-open">
      <Container>
        <nav className="flex flex-col items-center justify-between min-h-full">
          <div className="w-full">
            <Link to="/">
              <Logo className="" />
            </Link>
            <hr className="border-t border-gray-200" /> 
          </div>

          <ul className="flex flex-col items-start w-full px-4">
            <ProfileButton className="my-4" />
            <SearchBar className="mb-6"/>
            {navItems.map((item) => (
              <li key={item.name} className="list-none pb-4 w-full">
                <button
                  onClick={() => handleNavItemClick(item.name, item.slug)}
                  className={`flex items-center w-full px-3 py-2 rounded-lg text-left ${
                    activeNav === item.name ? 'bg-[#5932EA] text-white' : 'text-gray-400'
                  }`}
                >
                  {/* Replace 'i' with actual icon component */}
                  <i className={`${item.icon} text-lg`}></i>
                  <span className="ml-4">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="align-baseline items-center w-full py-4">
            <LogoutBtn />
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default SideMenu;




// const SideMenu = () => {
//   return (
//     <div className="drawer lg:drawer-open">
//       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
//       <div className="drawer-side">
//         <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
//         <ul className="menu p-6 w-80 min-h-full bg-white text-base-content"> {/* Changed bg-base-200 to bg-white */}
//           {/* Sidebar content here */}
//           <li><SearchBar/></li>
//           <li><Link to="/" iconSrc="key-square.svg" label="Home">Home</Link></li>
//           <li><Link to="/past-applications" iconSrc="3d-square-1.svg" label="Past applications">Past Applications</Link></li>
//           <li><Link to="/open-applications" iconSrc="wallet-money-2.svg" label="Open applications">Open Applications</Link></li>
//           <li><Link to="/help" iconSrc="message-question-1.svg" label="Help">Help</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default  SideMenu;





