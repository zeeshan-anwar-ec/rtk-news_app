import React, { useState } from "react";

export const PButton = ({ val, setCurrentPage, currentPage }) => {
  const [style, setStyle] = useState(
    currentPage
      ? "text-white bg-sky-400"
      : "text-white bg-black/80 max-md:text-white "
  );

  const scrollToTop = () => {
    const scrollDuration = 700;
    const startScrollY = window.scrollY;
    const targetScrollY = 0;
    const easing = t => t * t;

    const scrollInterval = setInterval(() => {
      const elapsed = Date.now() - startTimestamp;
      if (elapsed < scrollDuration) {
        const progress = easing(elapsed / scrollDuration);
        const nextScrollY = startScrollY + (targetScrollY - startScrollY) * progress;
        window.scrollTo(0, nextScrollY);
      } else {
        clearInterval(scrollInterval);
        window.scrollTo(0, targetScrollY);
      }
    }, 15);

    const startTimestamp = Date.now();
  };

  return (
    <button
      onClick={() => {
        setCurrentPage(val);
        scrollToTop();
      }}
      className={`hover:cursor-pointer py-1 px-3 mx-1 rounded-lg ${style}
        max-lg:text-sm max-lg:py-1 max-lg:px-2
      `}
    >
      {val}
    </button>
  );
};
