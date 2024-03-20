import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ToggleFormLink from "./Toggle.jsx";
import { loginUser, loginWithGoogle } from '../../features/authSlice.js';

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const handleGoogleSignIn = async () => {
    dispatch(loginWithGoogle());
  };

  // Navigate on successful login
  if (status === 'succeeded') {
    navigate('/');
  }

  // Optionally, handle error state here

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


