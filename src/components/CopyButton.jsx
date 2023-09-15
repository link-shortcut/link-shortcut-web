import { useState } from "react";

export default function CopyButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <button
      className="bg-emerald-600 w-32 text-white active:bg-emerald-600 font-bold uppercase text-sm px-auto py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-emerald-900 disabled:bg-emerald-900"
      type="button"
      disabled={isCopied}
      onClick={handleClick}
    >
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
}
