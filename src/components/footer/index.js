import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_background text-white">
      <div className="container mx-auto">
        <div className="flex gap-8 justify-around flex-col font-semibold md:flex-row text-white items-start pt-12">
          <div className="flex w-40 gap-4 flex-col">
            <div className="font-semibold">
              Site Map
              <span className="border-b mt-4 border-gray-400 flex" />
            </div>
            <ul className="list-none gap-1 flex flex-col">
              <li>About Me</li>
              <li>Revolutionizing society</li>
            </ul>
          </div>
          <div className="flex w-40 gap-4 flex-col">
            <div className="font-semibold">
              Resources
              <span className="border-b mt-4 border-gray-400 flex" />
            </div>
            <ul className="list-none flex flex-col">
              <li>Blog</li>
              <li>Books</li>
              <li>Articles</li>
              <li>Neswletter</li>
            </ul>
          </div>
          <div className="flex w-40 gap-4 flex-col">
            <div className="font-semibold">
              Help & Support
              <span className="border-b mt-4 border-gray-400 flex" />
            </div>
            <ul className="list-none flex gap-1 flex-col">
              <li>Reach Out to Me</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center py-4">
        <div className="flex">
          <div className="text-lg w-full my-02">Follow me on</div>
        </div>
        <div className="flex gap-5 mt-4 icon-color">
          <span className="facebook">
            <Link to="https://www.facebook.com/turacozhealthcaresolutions/">
              <FaFacebookF size={24} />
            </Link>
          </span>
          <span className="instagram relative">
            <Link to="https://www.instagram.com/turacoz/">
              <FaInstagram size={24} className="icon" />
            </Link>
          </span>
          <span className="linkedin">
            <Link to="https://www.linkedin.com/company/turacoz-healthcare-solutions/">
              <FaLinkedinIn size={24} />
            </Link>
          </span>
          <span className="twitter">
            <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fturacoz">
              <FaTwitter size={24} />
            </Link>
          </span>
        </div>
      </div>
      <span className="border-t my-8 border-gray-400 flex" />
      <div className="container mb-4 mx-auto">
        <div className="text-center text-white text-sm">
          © Copyright 2023 - All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
