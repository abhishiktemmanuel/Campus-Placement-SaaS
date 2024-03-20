import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../container/Container';
import Logo from '../global-component/Logo.jsx';
import LogoutBtn from '../auth-components/LogoutBtn.jsx';
import SearchBar from '../global-component/SearchBar.jsx';
import { ProfileButton } from './ProfileButton.jsx';
import { useSelector } from 'react-redux';




  

function SideMenu() {
  const user = useSelector((state) => state.auth.user);

  

  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Home'); // State to track the active nav item

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
    },
    {
      name: 'Past Applications',
      slug: "/past-applications",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
    ,
    },
    {
      name: 'Open Applications',
      slug: "/open-applications",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
    },    
    {
      name: 'Help',
      slug: "/help",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>    
    },
  ];

  const handleNavItemClick = (itemName, slug) => {
    setActiveNav(itemName); // Update the active nav item state
    navigate(slug); // Navigate to the clicked item's route
  };

  return (
    <div className="bg-white h-screen relative md:block hidden">
      <h1>{}</h1>
  <Container>
    <div className="w-full">
      <Link to="/">
        <Logo className="" />
      </Link>
      <hr className="border-t border-gray-200" /> 
    </div>
    <nav className="flex flex-col items-center justify-between min-h-full">
      <ul className="flex flex-col items-start w-full px-4">
        <SearchBar className="my-6 w-full"/>
        {navItems.map((item) => (
          <li key={item.name} className="list-none font-light pb-4 w-full">
            <button
              onClick={() => handleNavItemClick(item.name, item.slug)}
              className={`flex items-center w-full px-3 py-2 rounded-lg text-left ${
                activeNav === item.name ? 'bg-[#5932EA] text-white' : 'text-gray-400'
              }`}
            >
              {item.icon}
              <span className="ml-4">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 w-full px-4 py-2">
      <div className="flex flex-row ">
        <ProfileButton className="my-4" name={user.email} role={user.role} imageUrl={user.imageUrl}/>
        <LogoutBtn className='ml-4' />
      </div>
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





