import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleFormLink from "./Toggle.jsx";
import { signUpWithEmail, signUpWithGoogle } from '../../api/auth.js';

const SignUpForm = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
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
    <div>
      <h2 className="text-3xl text-center text-black font-bold mb-8">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      
        <div className="relative">
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="peer input-field" placeholder="Username" />
          <label htmlFor="username" className="absolute left-2 -top-6 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-6">Username</label>
        </div>
        <div className="relative">
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-field peer " placeholder="Email" />
          <label htmlFor="email" className="absolute left-2 -top-6 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown: peer-placeholder-shown:text-base peer-focus:-top-6 ">Email</label>
        </div>
        <div className="relative">
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="peer input-field" placeholder="Password" />
          <label htmlFor="password" className="absolute left-2 -top-6 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown: peer-placeholder-shown:text-base peer-focus:-top-6 ">Password</label>
        </div>        
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center text-sm text-black">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-black mr-2" /> I agree to Terms & Conditions
          </label>
        </div>
        <button className="submit">Register</button>
        <button className="submit  text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring" type="button" onClick={handleGoogleSignup}>Sign up with Google</button>
        <ToggleFormLink isRegistering={true} toggleForm={toggleForm} />
      </form>
    </div>
  );
};

export default SignUpForm;
