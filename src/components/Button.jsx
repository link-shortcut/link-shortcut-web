export default function Button({ disabled, name, handleClick }) {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className="w-[68px] h-[35px] text-sm translate duration-300 bg-indigo-600 text-white font-semibold rounded hover:text-white hover:bg-indigo-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
    >
      {name}
    </button>
  );
}
