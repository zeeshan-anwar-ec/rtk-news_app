import React, { useState } from "react";

export const PButton = ({ val, setCurrentPage, buttonColor }) => {
  const [color, setColor] = useState(buttonColor? buttonColor: "text-black")
  return (
    <button
      onClick={() => {
        setCurrentPage(val);
        window.scroll(0, 0);
      }}
      className={`${color} hover:cursor-pointer py-2 px-4 mx-1 border-2 
    max-lg:text-xs max-lg:py-1 max-lg:px-2
    max-md:border-0 max-md:py-0 max-md:px-0`}
    >
      {val}
    </button>
  );
};
