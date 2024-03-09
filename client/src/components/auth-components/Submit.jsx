const SubmitButton = ({ text }) => (
    <button
      type="submit"
      className="btn w-full mt-6  bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full text-black font-bold transition duration-300"
    >
      {text}
    </button>
  );

  export default SubmitButton;