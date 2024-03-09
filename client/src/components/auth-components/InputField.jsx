const InputField = ({ type, placeholder, required = true }) => (
    <input
      type={type}
      required={required}
      className="w-full my-2 px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition duration-300"
      placeholder={placeholder}
    />
  );

export default InputField;