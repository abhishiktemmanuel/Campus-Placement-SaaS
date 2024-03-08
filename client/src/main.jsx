import dotenv from "dotenv";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route, 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from './Layout.jsx';
import './index.css'
import App from './App.jsx'
import Home from './components/Pages/Home.jsx'
import PastApplications from './components/Pages/PastApplications.jsx'
import OpenApplications from './components/Pages/OpenApplications.jsx'
import Login from './components/Pages/Login.jsx';
import Signup from './components/Pages/Signup.jsx';
import Protected from './components/Protected.jsx';
import profile from './components/Pages/profile.jsx';
import Help from './components/Pages/Help.jsx'

// dotenv.config({
//   path: "../.env"
// });

const router = createBrowserRouter(
  createRoutesFromElements(

      


    <Route path='/' element={<Protected />}>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />} >
        <Route path="/" index element={<Home />} />
        <Route path="/past-applications" element = {<PastApplications/>}/>
        <Route path="/open-applications" element = {<OpenApplications/>}/>
        <Route path="/profile" element = {<profile/>}/>
        <Route path="/help" element = {<Help/>}/>
      </Route>





      
      {/* <Route path='/past-applications/:current-user' element={<PastApplicationsTable entry={current-user-applications-past}/>} />

      <Route path='/jd/:jd-id' element={<JobDescription job={jobData}/>} /> */}

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
