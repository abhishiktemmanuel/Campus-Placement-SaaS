const ToggleFormLink = ({ isRegistering, toggleForm }) => (
    <div className="login-register text-center">
      <p className="text-sm">
        {isRegistering ? 'Already have an account?' : "Don't have an account?"}
        <a href="#" className="text-black font-bold hover:underline" onClick={toggleForm}>
          {isRegistering ? ' Login' : ' Register'}
        </a>
      </p>
    </div>
  );
  export default ToggleFormLink;