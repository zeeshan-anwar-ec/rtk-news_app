import React, { useState } from "react";

export const PButton = ({ val, setCurrentPage, currentPage }) => {
  const [style, setStyle] = useState(
    currentPage
      ? "text-sky-400 border-black bg-white"
      : "text-white  bg-black/80 max-md:text-black "
  );
  return (
    <button
      onClick={() => {
        setCurrentPage(val);
        window.scroll(0, 0);
      }}
      className={`hover:cursor-pointer py-1 px-3 mx-1 border-2 rounded-lg ${style}
    max-lg:text-xs max-lg:py-1 max-lg:px-2
    max-md:border-0 max-md:bg-transparent max-md:py-0 max-md:px-0`}
    >
      {val}
    </button>
  );
};
