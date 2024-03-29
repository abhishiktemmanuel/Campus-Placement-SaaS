// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LoadingIndicator from '../global-component/Loading.jsx'

const ProtectedRoute = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = React.useState(null);

  React.useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserAuthenticated(!!user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (isUserAuthenticated === null) {
    // Authentication state is still loading
    return <LoadingIndicator/>; 
  }

  if (!isUserAuthenticated) {
    // User not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;