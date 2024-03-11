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
    <button onClick={handleLogout} className="ml-3">
      <ion-icon name="log-out-outline" size="large"></ion-icon>
    </button>

  );
}

export default LogoutBtn;
