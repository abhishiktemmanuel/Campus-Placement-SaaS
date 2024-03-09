import React from 'react';
import InputField from "../auth-components/InputField.jsx";
import SubmitButton from "../auth-components/Submit.jsx";
import ToggleFormLink from "../auth-components/Toggle.jsx";

export const LoginForm = ({ toggleForm }) => (
    <div>
      <h2 className="text-3xl text-center text-black font-bold mb-8">Login</h2>
      <form>
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <SubmitButton text="Login" />
        <ToggleFormLink isRegistering={false} toggleForm={toggleForm} />
      </form>
    </div>
  );
  
  export const RegisterForm = ({ toggleForm }) => (
    <div>
      <h2 className="text-3xl text-center text-black font-bold mb-8">Register</h2>
      <form>
        <InputField type="text" placeholder="Username" />
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center text-sm text-black">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-black mr-2" /> I agree to Terms & Conditions
          </label>
        </div>
        <SubmitButton text="Register" />
        <ToggleFormLink isRegistering={true} toggleForm={toggleForm} />
      </form>
    </div>
  );

  //className="overflow-x-hidden transition-all duration-500 ease-in-out transform  opacity-100"
  
