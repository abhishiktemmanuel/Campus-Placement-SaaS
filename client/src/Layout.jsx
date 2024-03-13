import {React, useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from './components/Menu/SideMenu'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthForm from './components/Pages/AuthForm'

const auth = getAuth();
function Layout() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user)
      } else {
        console.log("You are logged out")
        setUser(null)
      }
    });
  }, []);

  if(user === null){
    return(
      <AuthForm />
    )
  }
  return (
    <>
    <div className="flex flex-row ">
        <div className='fixed top-0 left-0 h-full w-1/4 '>
          <SideMenu user = {user}/>
        </div>
        <div className="overflow-hidden md:w-full lg:ml-[25%] lg:w-3/4">
          <Header user = {user}/>
          <Outlet user = {user}/>
          <Footer/>
        </div>
    </div>
    </>
  )
}
export default Layout