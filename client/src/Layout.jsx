import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuBar from './components/Menu/SideMenu'
import Navbar from './components/Navbar'

function Layout() {
  return (
    <>
    <div className="flex flex-row ">
        <div className='fixed top-0 left-0 h-full w-1/4 '>
          <MenuBar/>
        </div>
        <div className="overflow-auto md:w-full lg:ml-[25%] lg:w-3/4">
          <Outlet/>
        </div>
    </div>
    </>
  )
}
export default Layout