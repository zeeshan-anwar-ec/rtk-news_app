import React, { useState } from "react";

export const PButton = ({ val, setCurrentPage, currentPage }) => {
  const [style, setStyle] = useState(
    currentPage
      ? "text-white bg-sky-400"
      : "text-white  bg-black/80 max-md:text-white "
  );
  return (
    <button
      onClick={() => {
        setCurrentPage(val);
        window.scroll(0, 0);
      }}
      className={`hover:cursor-pointer py-1 px-3 mx-1 rounded-lg ${style}
    max-lg:text-sm max-lg:py-1 max-lg:px-2
    `}
    >
      {val}
    </button>
  );
};
