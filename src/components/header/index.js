import React from "react";
import { Link } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/image/logo.png";
const Header = () => {
  return (
    <>
      <div className="w-full sticky top-0 z-50">
        <div className="bg-slate-100">
          <div className="flex flex-col lg:flex-row px-4 gap-2 md:px-12 py-1 justify-between">
            <div className="text_blue">
              Singapore | India | USA | Canada | Netherlands
            </div>
            <div className="flex flex-col md:flex-row gap-2 text_blue">
              <div className="flex gap-2 items-center">
                <BiSolidPhoneCall size={20} /> +91 99999 99999 |
              </div>
              <div className="flex gap-2 items-center">
                <IoIosMail size={20} /> info@turaresearch.com
              </div>
            </div>
            <div className="flex gap-4 text_blue items-center">
              | <FaTwitter /> <FaFacebookF /> <FaYoutube />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="py-2 flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center">
              <Link className="font-semibold text-xl drop-shadow-2xl" to="/">
                <img src={logo} alt="TuraResearch" className="w-36 my-2" />
              </Link>
              <div className="flex text_blue w-full md:w-1/2 bg-slate-100">
                <input
                  type="text"
                  className="w-full px-2 py-1 text_blue bg-slate-100"
                  placeholder="Search for subject or person"
                />
                <select name="search" id="search" className="bg-slate-100 py-1">
                  <option value="All categories">All categories</option>
                  <option value="New categories">New categories</option>
                  <option value="Old categories">Old categories</option>
                </select>
                <div className="background_color px-2 py-1 flex items-center">
                  <IoIosSearch color="white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background_color py-2">
          <div className="flex flex-col md:flex-row gap-4 text-white justify-between px-4 md:px-12">
            <div className="text-right w-full md:w-1/2">
              Home | Our Services | Why Choose us | Client Testimonials |
              Resources
            </div>
            <div>Let's Talk | SIGN UP</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
