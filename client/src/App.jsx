import { useState } from 'react'
import './App.css'

import ReactDOM from 'react-dom/client'
import {
  Route, 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CardList from './components/card-scroll/CardScroller'
import Applications from './components/Applications'
import MenuBar from './components/Menu/SideMenu'
import React from 'react';
import { Link } from 'react-router-dom';





function App() {
  const [count, setCount] = useState(0)
  


  return (
    <div className="flex ">
        <MenuBar/>
      <div className="overflow-hidden ">
            <CardList cards={cardsData} />
            <Applications rows={rows} />
      </div>
    </div>
  );
}
export default App;

