// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import AuthForm from './components/Pages/AuthForm.jsx';
import Layout from './Layout.jsx';
import './index.css';
import App from './App.jsx'; // Assuming App is not used since it's not included in the routes below.
import Home from './components/Pages/Home.jsx';
import PastApplications from './components/Pages/PastApplications.jsx';
import OpenApplications from './components/Pages/OpenApplications.jsx';
import ProtectedRoute from './components/container/ProtectedRoute.jsx'; 
import Profile from './components/Pages/Profile.jsx'; 
import Help from './components/Pages/Help.jsx';
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home/>} />
        <Route path="past-applications" element={<PastApplications />} />
        <Route path="open-applications" element={<OpenApplications />} />
        <Route path="profile" element={<Profile />} />
        <Route path="help" element={<Help />} />
        {/* Uncomment and implement these routes as needed
        <Route path='/past-applications/:current-user' element={<PastApplicationsTable entry={current-user-applications-past}/>} />
        <Route path='/jd/:jd-id' element={<JobDescription job={jobData}/>} />
        */}
      </Route>
  </Route>,
  )

);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);