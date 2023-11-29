import React from "react";

const SVG = () => {
  return (
    <svg
      viewBox="0 0 200 25"
      preserveAspectRatio="none"
      className="w-full h-full absolute bottom-0"
    >
      <polygon
        points="0,0 200,25 0,25"
        className="fill-white stroke-white w-full"
      ></polygon>
    </svg>
  );
};

export default SVG;
