import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUpWithEmail, signUpWithGoogle } from '../../api/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmail(email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Signup failed. Please try again.');
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signUpWithGoogle();
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Google sign-up failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Signup</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... Email and Password inputs ... */}
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring">Signup</button>
        </form>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">or sign up with</p>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
        <div className="flex justify-center mt-6">
          <button onClick={handleGoogleSignup} className="p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
            <img src="https://tailwindui.com/img/logos/google.svg" alt="Google" className="w-5 h-5"/>
          </button>
        </div>
        <p className="text-sm text-center mt-6">
          Already have an account? 
          <Link to="/login" className="text-blue-600 hover:underline"> Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;