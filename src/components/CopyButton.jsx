import { useState } from "react";
import CopyIcon from "../assets/copy_icon.png";
import CheckIcon from "../assets/check_icon.png";
import Tooltip from "./Tooltip";

export default function CopyButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setIsTooltipVisible(true);
    setTimeout(() => {
      setIsCopied(false);
      setIsTooltipVisible(false);
    }, 1500);
  };

  return (
    <>
      <Tooltip message="복사됨" isOpen={isTooltipVisible}>
        <button type="button" disabled={isCopied} onClick={handleClick}>
          <img
            className="w-6 h-6"
            src={isCopied ? CheckIcon : CopyIcon}
            alt={isCopied ? "복사됨" : "복사하기"}
          />
        </button>
      </Tooltip>
    </>
  );
}
