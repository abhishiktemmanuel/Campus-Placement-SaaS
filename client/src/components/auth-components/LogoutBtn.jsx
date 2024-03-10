import React from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../config/firebase-config.js'

function LogoutBtn() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('User logged out successfully');
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
