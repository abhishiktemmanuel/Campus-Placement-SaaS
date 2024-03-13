import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleFormLink from "./Toggle.jsx";
import { signInWithEmail, signInWithGoogle } from '../../userAuthentication/auth.js';

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Google sign-in failed. Please try again.');
    }
  };

  return (
    <div className="text-center">
  <h2 className="text-3xl text-black font-bold mb-8">Login</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="relative">
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-field peer " placeholder="Email" />
      <label htmlFor="email" className="absolute left-2 -top-6 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown: peer-placeholder-shown:text-base peer-focus:-top-6 ">Email</label>
    </div>
    <div className="relative">
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="peer input-field" placeholder="Password" />
      <label htmlFor="password" className="absolute left-2 -top-6 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown: peer-placeholder-shown:text-base peer-focus:-top-6 ">Password</label>
    </div>
    <button type="submit" className="submit">Login</button>
  </form>
  <button onClick={handleGoogleSignIn} className="submit text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring" style={{backgroundColor: '#4285F4', color: 'white'}}>Sign in with Google</button>
  <ToggleFormLink isRegistering={false} toggleForm={toggleForm} />
</div>

  );
};

export default LoginForm;