import React, { useState } from 'react';
import LoginForm from "../auth-components/Login.jsx";
import SignUpForm from "../auth-components/SignUp.jsx";
import backgroundImage from '../../assets/bg.jpg'

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
    >



      <div className={` mx-6 max-w-md overflow-hidden transition-all duration-500 ease-in-out bg-white bg-opacity-20 rounded-3xl backdrop-blur-lg shadow-2xl  ${isRegistering ? 'py-16' : 'py-8'}`}>
        <div className="flex">
          <div className={` w-full justify-center items-center transition-transform duration-500 ease-in-out ${isRegistering ? '-translate-x-[400px]' : 'translate-x-1/2'}`}>
            <LoginForm toggleForm={toggleForm} />
          </div>
          <div className={` w-full justify-center items-center transition-transform duration-500 ease-in-out ${isRegistering ? '-translate-x-1/2' : 'translate-x-[400px]'}`}>
            <SignUpForm toggleForm={toggleForm} />
          </div>
        </div>
      </div>
      </div>
  );
};

export default AuthForm;