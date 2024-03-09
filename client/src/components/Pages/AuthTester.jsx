import React, { useState } from 'react';
import { LoginForm, RegisterForm } from "../auth-components/LoginRegister.jsx";

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="mx-6 flex flex-row justify-center items-center min-h-screen">
      <div className={` max-w-md overflow-hidden transition-all duration-500 ease-in-out bg-white bg-opacity-20 rounded-3xl backdrop-blur-lg shadow-2xl  ${isRegistering ? 'py-16' : 'py-8'}`}>
        <div className="flex">
          <div className={` w-full justify-center items-center transition-transform duration-500 ease-in-out ${isRegistering ? '-translate-x-[400px]' : 'translate-x-1/2'}`}>
            <LoginForm toggleForm={toggleForm} />
          </div>
          <div className={` w-full justify-center items-center transition-transform duration-500 ease-in-out ${isRegistering ? '-translate-x-1/2' : 'translate-x-[400px]'}`}>
            <RegisterForm toggleForm={toggleForm} />
          </div>
        </div>
      </div>
      </div>
  );
};

export default AuthForm;


// <div className="relative flex items-center justify-center w-full min-h-screen">
    //   <div className={`w-full max-w-md transition-all duration-500 ease-in-out bg-white bg-opacity-20 rounded-3xl backdrop-blur-lg shadow-2xl overflow-hidden ${isRegistering ? 'py-16' : 'py-10'}`}>
    //     <div className="flex">
    //       <div className={` w-full transition-transform duration-500 ease-in-out ${isRegistering ? '-translate-x-full' : 'translate-x-0'}`}>
    //         <LoginForm toggleForm={toggleForm} />
    //       </div>
    //       <div className={` w-full transition-transform duration-500 ease-in-out ${isRegistering ? 'translate-x-0' : 'translate-x-full'}`}>
    //         <RegisterForm toggleForm={toggleForm} />
    //       </div>
    //     </div>
    //   </div>
    // </div>

{/* <div className={`relative w-full max-w-md ${containerHeight} transition-height duration-500 ease-in-out bg-white bg-opacity-20 rounded-3xl backdrop-blur-lg shadow-2xl overflow-hidden`}>
      <div className="flex">
        <div className={`flex-shrink-0 w-full transition-transform duration-500 ease-in-out ${isRegistering ? '-translate-x-full' : 'translate-x-0'}`}>
          <LoginForm toggleForm={toggleForm} />
        </div>
        <div className={`flex-shrink-0 w-full transition-transform duration-500 ease-in-out ${isRegistering ? 'translate-x-0' : 'translate-x-full'}`}>
          <RegisterForm toggleForm={toggleForm} />
        </div>
      </div>
    </div> */}



// import React, { useState } from 'react';

// const AuthForm = () => {
//   const [isRegistering, setIsRegistering] = useState(false);

//   const toggleForm = () => {
//     setIsRegistering(!isRegistering);
//   };

//   // Adjust the height of the container based on the active form
//   const containerHeight = isRegistering ? 'h-auto py-16' : 'h-auto py-10';

//   return (
//     <div className={`relative w-full max-w-md ${containerHeight} transition-height duration-500 ease-in-out bg-white bg-opacity-20 rounded-3xl backdrop-blur-lg shadow-2xl overflow-hidden`}>
//       <div className={`overflow-x-hidden transition-all duration-500 ease-in-out transform ${isRegistering ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
//         {/* Login form */}
//         <h2 className="text-3xl text-center text-black font-bold mb-8">Login</h2>
//           <form>
//           <input type="email" required className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition duration-300" placeholder="Email" />
//           <input type="password" required className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition duration-300" placeholder="Password" />
//             <button type="submit" className="btn w-full py-2 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full text-black font-bold transition duration-300">Login</button>
//             <div className="login-register text-center mt-6">
//               <p className="text-sm">
//                 Don't have an account?
//                 <a href="#" className="text-black font-bold hover:underline" onClick={toggleForm}> Register</a>
//               </p>
//             </div>
//           </form>
//       </div>
//       <div className={`overflow-x-hidden transition-all duration-500 ease-in-out transform ${isRegistering ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
//         {/* Register form */}
//         <h2 className="text-3xl text-center text-black font-bold mb-8">Register</h2>
//         <form>
//           <input type="text" required className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition duration-300" placeholder="Username" />
//           <input type="email" required className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition duration-300" placeholder="Email" />
//           <input type="password" required className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition duration-300" placeholder="Password" />

//             <div className="flex justify-between items-center mb-6">
//               <label className="flex items-center text-sm text-black">
//                 <input type="checkbox" className="form-checkbox h-4 w-4 text-black mr-2" /> I agree to Terms & Conditions
//               </label>
//             </div>
//             <button type="submit" className="btn w-full py-2 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full text-black font-bold transition duration-300">Register</button>
//             <div className="login-register text-center mt-6">
//               <p className="text-sm">
//                 Already have an account?
//                 <a href="#" className="text-black font-bold hover:underline" onClick={toggleForm}> Login</a>
//               </p>
//             </div>
//           </form>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;