import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto py-4">
      <ul className="flex justify-between list-unstyled text-slate-800 text-lg m-0 gap-4">
        <li className="font-weight cursor-pointer hover:text-red-500 hover:font-semibold transition-all">
          <Link to={"aboutMe"}>ABOUT ME</Link>
        </li>
        <li className="font-weight cursor-pointer hover:text-red-500 hover:font-semibold transition-all">
          {/* <Link to={"#Articles"}>ARTICLES</Link> */}
          <a href="#Articles">ARTICLES</a>
        </li>
        <li className="font-weight cursor-pointer hover:text-red-500 hover:font-semibold transition-all">
          <a href="#Publications">PUBLICATIONS</a>
        </li>
        <li className="font-weight cursor-pointer hover:text-red-500 hover:font-semibold transition-all">
          <a href="#Blogs">BLOGS</a>
        </li>
        <li className="font-weight cursor-pointer hover:text-red-500 hover:font-semibold transition-all relative group">
          {/* <Link to="#">BOOKS</Link> */}
          <a href="#Books">BOOKS</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
