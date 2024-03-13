import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase-config.js';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/store.js';

function LogoutBtn({ className = "" }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(logoutUser()); // Dispatch the logoutUser action
      console.log('User logged out successfully');
      navigate('/'); // Redirect to the login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout} className={`${className}`}>
      <ion-icon name="log-out-outline" size="large"></ion-icon>
    </button>
  );
}

export default LogoutBtn;
