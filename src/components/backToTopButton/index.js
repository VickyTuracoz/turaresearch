import React, { useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`${
        showButton ? "block" : "hidden"
      } fixed z-50 bottom-4 right-4 backgroundRedColor text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors duration-300`}
      onClick={scrollToTop}
    >
      <BiUpArrowAlt size={30} color="white" />
    </button>
  );
}

export default BackToTopButton;
