import React from "react";
import stars from "../../assets/stars.svg"

const BackgroundCircles = () => {
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-gray-100/20 rounded-full -translate-x-1/2 -translate-y-1/2 mt-13 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-gray-100/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <img src={stars} alt="stars" className="mt-40" />
        <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-gray-100/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default BackgroundCircles;
