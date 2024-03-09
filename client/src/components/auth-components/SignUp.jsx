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
      <form onSubmit={handleSubmit}>
        <input class="input-field" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input class="input-field" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input class="input-field" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center text-sm text-black">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-black mr-2" /> I agree to Terms & Conditions
          </label>
        </div>
        <button class="submit">Register</button>
        <button class="submit  text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring" type="button" onClick={handleGoogleSignup}>Sign up with Google</button>
        <ToggleFormLink isRegistering={true} toggleForm={toggleForm} />
      </form>
    </div>
  );
};

export default SignUpForm;
