import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="font-semibold text-white py-2 px-4 bg-sky-500 rounded-md hover:brightness-110"
      onClick={onClick}>
      {text}
    </button>
  );
}
