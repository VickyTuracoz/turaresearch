import React from "react";
import { Helmet } from "react-helmet";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PAGE_TITLES from "../../Utils/title";
import carousel1 from "../../assets/image/image.png";
import carousel2 from "../../assets/image/image2.jpeg";
import carousel4 from "../../assets/image/image4.png";
import carousel3 from "../../assets/image/turaimage.png";
import Navbar from "../Navbar";
import SVG from "../SVG";

const HomePage = () => {
  const publicationData = [
    {
      name: "DR. NAMRATA SINGH",
      image: carousel1,
      description:
        "Aircraft and engineers: Time to SHINE at the Virgin Atlantic Hangar",
    },
    {
      name: "DR. NAMRATA SINGH",
      image: carousel2,
      description:
        "Realising the need for accessible and quality healthcare for all, our campaign ‘Health Cannot Wait’ aims at providing people from the under-privileged sections",
    },
    {
      name: "DR. NAMRATA SINGH",
      image: carousel3,
      description:
        "Aircraft and engineers: Time to SHINE at the Virgin Atlantic Hangar",
    },
    {
      name: "DR. NAMRATA SINGH",
      image: carousel3,
      description:
        "Aircraft and engineers: Time to SHINE at the Virgin Atlantic Hangar",
    },
    {
      name: "DR. NAMRATA SINGH",
      image: carousel1,
      description:
        "Realising the need for accessible and quality healthcare for all, our campaign ‘Health Cannot Wait’ aims at providing people from the under-privileged sections",
    },
  ];
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <span className="z-0">
        <BsArrowLeftShort size={60} color="white" />
      </span>
    ),
    nextArrow: (
      <span className="z-0">
        <BsArrowRightShort size={60} color="white" />
      </span>
    ),
  };
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLES.home}</title>
      </Helmet>
      <>
        <Navbar />
        <div className="relative">
          <img
            src={carousel4}
            alt="carousal"
            className="relative z-0 w-full h-1/2"
          />
          <div className="absolute z-10 top-1/2 w-full">
            <div className="text-center text-white font-bold drop-shadow-xl text-6xl">
              <span className="mr-4 text-red-500">Dr.</span>
              Namrata Singh
            </div>
          </div>
          <div className="h-20 absolute z-10 bottom-0 w-full">
            <SVG />
          </div>
        </div>
        <div className="relative z-10">
          <div className="container mx-auto">
            <div className="flex py-8 gap-4 justify-between pr-6">
              <div className="flex gap-4 flex-col leading-10 w-3/5 text-center mx-auto text-2xl">
                Our platform is driven by a mission to bridge the health
                information gap, steering research, and tailoring scientific
                knowledge to for those we serve. We offer unwavering support for
                critical decisions. The Turacoz family challenge themselves with
                entrepreneurial adventures to create a positive impact in the
                world. Learn about their latest projects and how they’re working
                to change business for good.
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container mx-auto py-4">
            <div className="text-5xl font-bold text-center">
              <span className="mr-4 text-red-500">Latest</span>
              Post from the Dr. Namrata Singh
            </div>
            <div className="relative">
              <div className="py-8">
                <Slider {...settings} className="slider banner_slider">
                  {publicationData?.map((item, index) => (
                    <div className="flex flex-col gap-8" key={index}>
                      <img
                        src={item?.image}
                        className="object-contain h-96"
                        alt={item?.name}
                      />
                      <div className="flex relative z-0 flex-col p-4 gap-2">
                        <div className="absolute -top-8 left-4 z-10 bg-white redColor p-2">
                          {item?.name}
                        </div>
                        <div className="font-semibold text-3xl">
                          {item?.description}
                        </div>
                        <div className="text-sm text-gray-700">
                          18 OCTOBER 2023
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="relative" id="Articles">
          <div className="container mx-auto py-4">
            <div className="text-5xl font-bold text-center">
              <span className="mr-4 text-red-500">Article</span>
              from the Dr. Namrata
            </div>
            <div className="relative">
              <div className="py-8">
                <Slider {...settings} className="slider banner_slider">
                  {publicationData?.map((item, index) => (
                    <Link
                      key={index}
                      to={`article/${item?.name}`}
                      state={{ item: item }}
                    >
                      <div className="flex flex-col gap-8">
                        <img
                          src={item?.image}
                          className="object-cover h-96"
                          alt={item?.name}
                        />
                        <div className="flex relative z-0 flex-col p-4 gap-2">
                          <div className="absolute -top-8 left-4 z-10 bg-white redColor p-2">
                            {item?.name}
                          </div>
                          <div className="font-semibold text-3xl">
                            {item?.description}
                          </div>
                          <div className="text-sm text-gray-700">
                            18 OCTOBER 2023
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="relative" id="Publications">
          <div className="container mx-auto py-4">
            <div className="text-5xl font-bold text-center">
              <span className="mr-4 text-red-500">Publications</span>
              from the Dr. Namrata
            </div>
            <div className="relative">
              <div className="py-8">
                <Slider {...settings} className="slider banner_slider">
                  {publicationData?.map((item, index) => (
                    <Link
                      key={index}
                      to={`Publication/${item?.name}`}
                      state={{ item: item }}
                    >
                      <div className="flex flex-col gap-8">
                        <img
                          src={item?.image}
                          className="object-cover h-96"
                          alt={item?.name}
                        />
                        <div className="flex relative z-0 flex-col p-4 gap-2">
                          <div className="absolute -top-8 left-4 z-10 bg-white redColor p-2">
                            {item?.name}
                          </div>
                          <div className="font-semibold text-3xl">
                            {item?.description}
                          </div>
                          <div className="text-sm text-gray-700">
                            18 OCTOBER 2023
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="relative" id="Blogs">
          <div className="container mx-auto py-4">
            <div className="text-5xl font-bold text-center">
              <span className="mr-4 text-red-500">Blogs</span>
              from the Dr. Namrata
            </div>
            <div className="relative">
              <div className="py-8">
                <Slider {...settings} className="slider banner_slider">
                  {publicationData?.map((item, index) => (
                    <Link
                      key={index}
                      to={`Blogs/${item?.name}`}
                      state={{ item: item }}
                    >
                      <div className="flex flex-col gap-8">
                        <img
                          src={item?.image}
                          className="object-cover h-96"
                          alt={item?.name}
                        />
                        <div className="flex relative z-0 flex-col p-4 gap-2">
                          <div className="absolute -top-8 left-4 z-10 bg-white redColor p-2">
                            {item?.name}
                          </div>
                          <div className="font-semibold text-3xl">
                            {item?.description}
                          </div>
                          <div className="text-sm text-gray-700">
                            18 OCTOBER 2023
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="relative" id="Books">
          <div className="container mx-auto py-4">
            <div className="text-5xl font-bold text-center">
              <span className="mr-4 text-red-500">Books</span>
              from the Dr. Namrata
            </div>
            <div className="relative">
              <div className="py-8">
                <Slider {...settings} className="slider banner_slider">
                  {publicationData?.map((item, index) => (
                    <Link
                      key={index}
                      to={`Books/${item?.name}`}
                      state={{ item: item }}
                    >
                      <div className="flex flex-col gap-8">
                        <img
                          src={item?.image}
                          className="object-cover h-96"
                          alt={item?.name}
                        />
                        <div className="flex relative z-0 flex-col p-4 gap-2">
                          <div className="absolute -top-8 left-4 z-10 bg-white redColor p-2">
                            {item?.name}
                          </div>
                          <div className="font-semibold text-3xl">
                            {item?.description}
                          </div>
                          <div className="text-sm text-gray-700">
                            18 OCTOBER 2023
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
