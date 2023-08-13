import React, { useState } from "react";

export const PButton = ({ val, setCurrentPage, currentPage }) => {
  const [style, setStyle] = useState(
    currentPage
      ? "text-white bg-sky-400"
      : "text-white bg-black/80 max-md:text-white "
  );

  const scrollToTop = () => {
    const scrollDuration = 500; // Adjust this value as needed
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <button
      onClick={() => {
        setCurrentPage(val);
        scrollToTop(); // Call the scroll function
      }}
      className={`hover:cursor-pointer py-1 px-3 mx-1 rounded-lg ${style}
        max-lg:text-sm max-lg:py-1 max-lg:px-2
      `}
    >
      {val}
    </button>
  );
};
