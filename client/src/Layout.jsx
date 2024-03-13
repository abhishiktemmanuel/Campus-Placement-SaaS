import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './components/Menu/SideMenu';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthForm from './components/Pages/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from './store/store.js';


const auth = getAuth();

function Layout() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        console.log("You are logged out");
        dispatch(clearUser());
      }
    });

    return unsubscribe;
  }, [dispatch]);

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
