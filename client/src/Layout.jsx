import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from './components/Menu/SideMenu'
import Footer from './components/footer/Footer'
import { ProfileCard } from './components/ProfileView'

function Layout() {
  return (
    <>
    <div className="flex flex-row ">
        <div className='fixed top-0 left-0 h-full w-1/4 '>
          <SideMenu/>
        </div>
        <div className="overflow-auto md:w-full lg:ml-[25%] lg:w-3/4">
          <ProfileCard/>
          <Outlet/>
          <Footer/>
        </div>
    </div>
    </>
  )
}
export default Layout