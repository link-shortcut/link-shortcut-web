export default function Button({ disabled, name, handleClick }) {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className="px-5 py-1 bg-purple-100 text-sm text-purple-600 font-semibold rounded border border-purple-200 hover:text-white hover:bg-purple-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
    >
      {name}
    </button>
  );
}
