export default function InputBox({
  disabled,
  text,
  placeholder,
  handleChange,
}) {
  return (
    <input
      className="relative transition-all text-sm duration-300 py-2.5 px-4 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-md tracking-wide font-light placeholder-gray-400 bg-white focus:ring disabled:opacity-80 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20"
      type="text"
      value={text}
      disabled={disabled}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
