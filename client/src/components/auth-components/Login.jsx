import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleFormLink from "./Toggle.jsx";
import { signInWithEmail, signInWithGoogle } from '../../api/auth.js';

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
    <div >
      <h2 className="text-3xl text-center text-black font-bold mb-8">Login</h2>
      <form onSubmit={handleSubmit} >
        <input class="input-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required  />
        <input class="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required  />
        <button class="submit" type="submit" >Login</button>
      </form>
      <button class="submit  text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring" onClick={handleGoogleSignIn} style={{backgroundColor: '#4285F4', color: 'white' }}>Sign in with Google</button>
      <ToggleFormLink isRegistering={false} toggleForm={toggleForm} />
    </div>
  );
};

export default LoginForm;