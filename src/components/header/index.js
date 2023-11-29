import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full sticky border-b border-gray-100 top-0 h-16 bg-white z-50">
        <div className="container mx-auto">
          <div className="py-0 flex justify-center relative z-10 redColor h-16 md:justify-between items-center">
            <Link
              className="font-semibold text-xl drop-shadow-2xl"
              to="/"
            >
              Dr. Namrata Singh
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-96 bg-gradient-to-l from-slate-50 to-slate-100 h-16 z-0"></div>
          <div
            className="absolute top-0"
            style={{
              borderTop: "65px solid white",
              borderLeft: "32px solid transparent",
              left: "352px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Header;
