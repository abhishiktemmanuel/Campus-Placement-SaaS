import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../client/src/components/Menu/SideMenu';
import Footer from '../client/src/components/footer/Footer';
import Header from '../client/src/components/header/Header';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthForm from '../client/src/components/Pages/AuthForm';
import { useDispatch, useSelector } from 'react-redux';


const auth = getAuth();

function Layout() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);


  if (!user) {
    return <AuthForm />;
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="fixed top-0 left-0 h-full w-1/4">
          <SideMenu />
        </div>
        <div className="overflow-hidden md:w-full lg:ml-[25%] lg:w-3/4">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;





// import { useState } from 'react'

// import ReactDOM from 'react-dom/client'
// import {
//   Route, 
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import CardList from './components/card-scroll/CardScroller'
// import Applications from './components/Applications'
// import MenuBar from './components/Menu/SideMenu'
// import React from 'react';
// import { Link } from 'react-router-dom';





// function App() {
//   const [count, setCount] = useState(0)
  


//   return (
//     <div className="flex ">
//         <MenuBar/>
//       <div className="overflow-hidden ">
//             <CardList cards={cardsData} />
//             <Applications rows={rows} />
//       </div>
//     </div>
//   );
// }
// export default App;


