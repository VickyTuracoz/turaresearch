import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/image/turaresearchfooter.png";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { TbMailOpened } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer_background text-white">
      <div className="container mx-auto">
        <div className="flex gap-8 justify-between flex-col md:flex-row text-white items-start pt-12">
          <div className="flex gap-4 flex-col">
            <div className="">
              <img src={footerLogo} className="w-40" alt="Tura Research" />
            </div>
            <ul className="list-none gap-1 flex flex-col">
              <li className="font-semibold">India</li>
              <li className="flex gap-2 items-start w-4/5">
                <CiLocationOn size={24} /> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec tincidunt, orci a varius
              </li>
              <li className="flex gap-2 items-center">
                <FiPhoneCall /> +91 99999 99999
              </li>
              <li className="flex gap-2 items-center">
                <TbMailOpened /> info@turaresearch.com
              </li>
              <li className="pt-4 font-semibold">Canada</li>
              <li className="flex gap-2 items-start w-4/5">
                <CiLocationOn size={24} /> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec tincidunt, orci a varius
              </li>
              <li className="flex gap-2 items-center">
                <FiPhoneCall /> +91 99999 99999
              </li>
              <li className="flex gap-2 items-center">
                <TbMailOpened /> info@turaresearch.com
              </li>
            </ul>
          </div>
          <div className="flex w-48 gap-4 flex-col">
            <div className="font-semibold">Resources</div>
            <ul className="list-none flex flex-col">
              <li>Blog</li>
              <li>Books</li>
              <li>Articles</li>
              <li>Neswletter</li>
            </ul>
            <div className="font-semibold">Resources</div>
            <ul className="list-none flex flex-col">
              <li>Blog</li>
              <li>Books</li>
              <li>Articles</li>
              <li>Neswletter</li>
            </ul>
          </div>
          <div className="flex w-48 gap-4 flex-col">
            <div className="font-semibold">Help & Support</div>
            <ul className="list-none flex gap-1 flex-col">
              <li>Reach Out to Me</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
            <div className="font-semibold">Help & Support</div>
            <ul className="list-none flex gap-1 flex-col">
              <li>Reach Out to Me</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex justify-between items-center border-t py-4 border-gray-400 my-4 mx-auto">
        <div className="flex flex-col">
          <div className=" text-white">
            © Copyright 2023 - All Right Reserved
          </div>
          <div className="">
            Terms of Use | Privacy Policy | Copyright Policy
          </div>
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
          <span className="youtube">
            <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fturacoz">
              <FaYoutube size={24} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
