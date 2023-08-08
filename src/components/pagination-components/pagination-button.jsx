import React from "react";

export const PButton = ({ button: Button }) => {
  return (
    <div
      className="hover:cursor-pointer py-2 px-4 mx-1 border-2 
    max-lg:text-xs max-lg:py-1 max-lg:px-2
    max-md:border-0 max-md:py-0 max-md:px-0"
    >
      <Button />
    </div>
  );
};
