import { useState } from "react";

export default function SelectableButton({ text, isSelected, onClick }) {
  return (
    <button
      onClick={onClick} // Call onClick passed from parent
      className={`py-1 px-4 rounded-full transition-all duration-300  ${
        isSelected
          ? "border-[#014EE6] text-[#014EE6]"
          : "border-[#5B5B5B] text-[#5B5B5B]"
      } border-2`}
    >
      {text}
    </button>
  );
}
