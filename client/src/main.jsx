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
import AuthForm from './components/Pages/AuthTester.jsx';
import Layout from './Layout.jsx';
import './index.css';
import App from './App.jsx'; // Assuming App is not used since it's not included in the routes below.
import Home from './components/Pages/Home.jsx';
import PastApplications from './components/Pages/PastApplications.jsx';
import OpenApplications from './components/Pages/OpenApplications.jsx';
import Login from './components/Pages/Login.jsx';
import Signup from './components/Pages/Signup.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'; 
import Profile from './components/Pages/Profile.jsx'; 
import Help from './components/Pages/Help.jsx';

// Assuming you have a function to check if the user is authenticated
// This can be a simple check against localStorage, Firebase auth state, etc.
const isAuthenticated = () => {
  // Implement your authentication logic here
  return !!localStorage.getItem('user');
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<AuthForm />} />
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="past-applications" element={<ProtectedRoute><PastApplications /></ProtectedRoute>} />
        <Route path="open-applications" element={<ProtectedRoute><OpenApplications /></ProtectedRoute>} />
        <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="help" element={<ProtectedRoute><Help /></ProtectedRoute>} />
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