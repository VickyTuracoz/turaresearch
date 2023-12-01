import React from "react";
import { connect } from "react-redux";
import banner from "../../assets/image/homepageBanner.jpg";
import banner1 from "../../assets/image/homepageBanner.png";
import training from "../../assets/image/training.jpg";
import publication from "../../assets/image/publication.jpg";
import medicoMarketing from "../../assets/image/medicoMarketing.jpg";
import journalSubmission from "../../assets/image/journalSubmission.jpg";
import ai from "../../assets/image/ai.jpg";
import publicationai from "../../assets/image/publicationai.jpg";
import design from "../../assets/image/design.svg";
import writing from "../../assets/image/writing.svg";
import editing from "../../assets/image/editing.jpg";
import review from "../../assets/image/review.svg";
import education from "../../assets/image/education.svg";
import rating from "../../assets/image/rating.svg";
import regulatory from "../../assets/image/regulatory.svg";
import reviewPublication from "../../assets/image/reviewPublication.svg";
import quality from "../../assets/image/quality.svg";
import grammarly from "../../assets/image/grammarly.jpg";
import turnitin from "../../assets/image/turnitin.jpg";
import x9 from "../../assets/image/x9.jpg";
import Semantic from "../../assets/image/Semantic.jpg";
import namrata from "../../assets/image/drNamrata.jpg";
import shruti from "../../assets/image/shruti.jpg";
import team1 from "../../assets/image/team1.png";
import team2 from "../../assets/image/team2.png";
import team3 from "../../assets/image/team3.png";
import serviceimage from "../../assets/image/service.png";
import customer1 from "../../assets/image/customer1.jpg";
import customer2 from "../../assets/image/customer2.jpg";
import customer3 from "../../assets/image/customer3.jpg";
import customer4 from "../../assets/image/customer4.jpg";
import customer5 from "../../assets/image/customer5.jpg";
import customer6 from "../../assets/image/customer6.jpg";
import customer7 from "../../assets/image/customer7.jpg";
import achievement1 from "../../assets/image/achievement1.jpg";
import achievement2 from "../../assets/image/achievement2.jpg";
import achievement3 from "../../assets/image/achievement3.jpg";
import achievement4 from "../../assets/image/achievement4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const HomePage = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const carouselData = [
    {
      imageSrc: banner,
    },
    {
      imageSrc: banner1,
    },
    {
      imageSrc: banner1,
    },
    {
      imageSrc: banner1,
    },
  ];

  const clientFeedback = [
    {
      image: serviceimage,
      name: "Pediatrician",
      description:
        "It was very well capsulated in terms of the content. Turacoz has the skills to curate the content and design the sessions according to the topic decided. In general, it was very good in terms of the overall content and capsulation ",
    },
    {
      image: serviceimage,
      name: "Pediatrician",
      description:
        "It was very well capsulated in terms of the content. Turacoz has the skills to curate the content and design the sessions according to the topic decided. In general, it was very good in terms of the overall content and capsulation ",
    },
    {
      image: serviceimage,
      name: "Pediatrician",
      description:
        "It was very well capsulated in terms of the content. Turacoz has the skills to curate the content and design the sessions according to the topic decided. In general, it was very good in terms of the overall content and capsulation ",
    },
    {
      image: serviceimage,
      name: "Pediatrician",
      description:
        "It was very well capsulated in terms of the content. Turacoz has the skills to curate the content and design the sessions according to the topic decided. In general, it was very good in terms of the overall content and capsulation ",
    },
    {
      image: serviceimage,
      name: "Pediatrician",
      description:
        "It was very well capsulated in terms of the content. Turacoz has the skills to curate the content and design the sessions according to the topic decided. In general, it was very good in terms of the overall content and capsulation ",
    },
    {
      image: serviceimage,
      name: "Pediatrician",
      description:
        "It was very well capsulated in terms of the content. Turacoz has the skills to curate the content and design the sessions according to the topic decided. In general, it was very good in terms of the overall content and capsulation ",
    },
    {
      image: serviceimage,
      name: "Pediatrician",
      description:
        "It was very well capsulated in terms of the content. Turacoz has the skills to curate the content and design the sessions according to the topic decided. In general, it was very good in terms of the overall content and capsulation ",
    },
    {
      image: serviceimage,
      name: "Pediatrician",
      description:
        "It was very well capsulated in terms of the content. Turacoz has the skills to curate the content and design the sessions according to the topic decided. In general, it was very good in terms of the overall content and capsulation ",
    },
  ];

  let serviceSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  const newsData = [
    {
      image: publication,
      name: "Publication",
    },
    {
      image: ai,
      name: "Artifical Intelligence",
    },
    {
      image: training,
      name: "Training",
    },
    {
      image: medicoMarketing,
      name: "Medico Marketing",
    },
  ];

  const popularBlogs = [
    {
      name: "Avoiding Red Marks – Make Your Citations Perfect",
      description:
        "You cannot share a single post on social media without acknowledging",
    },
    {
      name: "Keywords – The Probe to Your Manuscript",
      description:
        "“Content is the king”, they say. Keywords are the powerful weapons of your king.",
    },
    {
      name: "Visual Data – An aid for Scientific Writers",
      description:
        "You cannot share a single post on social media without acknowledging",
    },
    {
      name: "5 Steps Towards Freelance Medical Writing",
      description:
        "Working within organized cabins, reporting to managers, and clocking in as per company norms",
    },
  ];

  const service = [
    {
      image: writing,
      name: "Writing",
      width: "24px",
      height: "24px",
      description:
        "Comprehensive support for scientific publication writing, including manuscript creation, journal and content development.",
    },
    {
      image: review,
      name: "Review & Editing",
      width: "24px",
      height: "24px",
      description:
        "Offering meticulous scrutiny and refinement of scientific content to ensure accuracy, adherence to standards and documents",
    },
    {
      image: design,
      name: "Designing",
      width: "32px",
      height: "32px",
      description:
        "Bringing medical concepts to life through captivating visuals and interactive solutions, from illustrations to website design and e-learning modules.",
    },
    {
      image: education,
      name: "Education & Training",
      width: "40px",
      height: "40px",
      description:
        "Elevating medical education and communication through a diverse range of services, from training materials to disease awareness campaigns and multimedia",
    },
  ];
  const otherservice = [
    {
      image: rating,
      name: "Expertise and Knowledge",
      width: "32px",
      height: "32px",
      description:
        "With a focus on precision, quality, and innovation, we consistently deliver  publications that make a meaningful  impact in the scientific community.",
    },
    {
      image: regulatory,
      name: "Regulatory Complicance",
      width: "32px",
      height: "32px",
      description:
        "Our team of experts is well-versed in the nuances of various publication houses and is dedicated to keeping up with the standards.",
    },
    {
      image: quality,
      name: "Quality and Accuracy",
      width: "32px",
      height: "32px",
      description:
        "We know that the value of information lies in its precision. Our rigorous quality assurance processes and attention to detail guarantee that the information you receive is reliable.",
    },
    {
      image: reviewPublication,
      name: "Peer-reviewed Publications",
      width: "32px",
      height: "32px",
      description:
        "We work closely with authors, researchers, and institutions to ensure that their contributions not only meet the standards of excellence but also make a meaningful impact in their respective fields.",
    },
  ];
  const expert = [
    {
      image: namrata,
      name: "Dr. Namrata Singh",
      designation: "Founder & Director, Turacoz Group",
    },
    {
      image: shruti,
      name: "Dr Shruti Banerjee Shah",
      designation: "Director, Strategy & Growth",
    },
    {
      image: team1,
      name: "Dr Priyanka Biswas Karmakar",
      designation: "Medical Writer 1",
    },
    {
      image: team2,
      name: "Team Member",
      designation: "Designation",
    },
    {
      image: team3,
      name: "Gursimran Alagh",
      designation: "Project Lead – Learning & Development",
    },
  ];
  const customer = [
    { image: customer1 },
    { image: customer2 },
    { image: customer3 },
    { image: customer4 },
    { image: customer5 },
    { image: customer6 },
    { image: customer7 },
  ];
  const achievement = [
    { image: achievement1 },
    { image: achievement2 },
    { image: achievement3 },
    { image: achievement4 },
  ];
  return (
    <>
      <div className="relative z-10 mb-12">
        <Slider {...settings} className="slider banner_slider">
          {carouselData?.map((item, index) => (
            <div className=" border-0 relative active:border-0 " key={index}>
              <div>
                <div className="border-0 relative z-0">
                  <img
                    src={item?.imageSrc}
                    alt="Tura Research"
                    className="image-carousal relative z-0"
                  />
                  <div className="flex flex-col absolute z-10 justify-center items-center top-0 left-16 py-12">
                    <div className="xl:text-4xl text-white drop-shadow-2xl text-2xl text-shadow">
                      Empower | Ensure | Elevate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-4xl text_blue w-[38%] font-bold">
          Today's Top News
        </div>
        <span className="border-t w-full border-gray-700"></span>
        <div className="flex gap-1">
          <div className="footer_background w-4 h-4 rounded-full"></div>
          <div className="bg-gray-200 w-4 h-4 rounded-full"></div>
          <div className="bg-gray-200 w-4 h-4 rounded-full"></div>
          <div className="bg-gray-200 w-4 h-4 rounded-full"></div>
          <div className="bg-gray-200 w-4 h-4 rounded-full"></div>
          <div className="bg-gray-200 w-4 h-4 rounded-full"></div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap py-12 gap-4 justify-between">
          {newsData &&
            newsData?.map((item, index) => {
              return (
                <div key={index} className=" flex-1 relative">
                  <div className="relative flex flex-col h-72 transition-all items-end gap-4">
                    <img
                      src={item?.image}
                      className="absolute z-0 h-full rounded-md card_image object-cover"
                      alt={item?.name}
                    />
                    <div className="text-white absolute top-6 right-4 px-2 py-1 background_color rounded">
                      {item?.name}
                    </div>
                    <div className="card absolute z-10 h-full w-full">
                      <div className="rounded-md bg-gradient-to-t transition-all from-black flex flex-col h-72 justify-end gap-2 p-4">
                        <div className="text-white font-semibold flex gap-2 text-sm">
                          <IoTimeOutline size={18} /> September 28, 2023
                        </div>
                        <div className="text-white ml-6 text-sm">
                          It was very well capsulated in terms of the content.
                          Turacoz has the skills to curate the content and
                          design the sessions according to the topic decided. In
                          general, it was very good in terms of the overall
                          content and capsulation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="container mx-auto flex justify-between">
        <div className="w-1/3">
          <div className="text-4xl text_blue flex items-end pt-12 font-bold">
            Popular Blogs
          </div>
          <div className="flex flex-col gap-4 py-8">
            {popularBlogs &&
              popularBlogs?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 shadow-sm shadow-black "
                  >
                    <IoTimeOutline color="#1f3f85" size={24} />
                    <div className="flex flex-col">
                      <div className="font-bold w-4/5">{item?.name}</div>
                      <div className="text-sm w-4/5">{item?.description}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="w-3/5 flex flex-col gap-6">
          <div className="rounded-2xl background_color text-2xl text-white p-4">
            <div className="font-bold">Insider Knowledge</div>
            Publication | Editing | Journal Submission
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <img
                  src={publicationai}
                  alt="publicationai"
                  className="rounded blog_image_2"
                />
                <div className="flex gap-2 items-center">
                  <IoTimeOutline color="#0856a2" size={20} />
                  <div className="font-semibold text_blue">Publication</div>
                </div>
                <div className="ml-6 text-sm">
                  It was very well capsulated in terms of the content.
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src={editing}
                  alt="journal Submission"
                  className="rounded  blog_image_2"
                />
                <div className="flex gap-2 items-center">
                  <IoTimeOutline color="#0856a2" size={20} />
                  <div className="font-semibold text_blue">Editing</div>
                </div>
                <div className="ml-6 text-sm">
                  It was very well capsulated in terms of the content.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-3/4">
              <img
                src={journalSubmission}
                alt="editing"
                className="rounded blog_image"
              />
              <div className="flex gap-2 items-center">
                <IoTimeOutline color="#0856a2" size={20} />
                <div className="font-semibold text_blue">
                  Journal Submission
                </div>
              </div>
              <div className="ml-6 text-sm">
                It's important to choose reputable and experienced medical
                writing professionals or agencies that adhere to ethical
                guidelines and industry standards
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-4xl text_blue font-bold">Our Services</div>
        <span className="footer_background w-10 h-2 block mt-1"></span>
        <div className="my-4">
          <div>
            Optimize your scientific publications with our comprehensive
          </div>
          <div>services to maximize the impact of your research.</div>
        </div>
        <div className="flex justify-between gap-2">
          {service &&
            service?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col py-4 gap-2 justify-center items-center"
                >
                  <div className="w-12 h-12 rounded-full background_color flex justify-center items-center">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      style={{ width: item?.width, height: item?.height }}
                    />
                  </div>
                  <div className="text_blue font-bold">{item?.name}</div>
                  <div className="text-sm text-center w-4/5">
                    {item?.description}
                  </div>
                  <Link
                    to="#"
                    className="text_blue font-medium text-sm underline cursor-pointer"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div className="container mx-auto my-12">
        <div className="text-4xl text_blue font-bold">What sets us apart</div>
        <span className="footer_background w-10 h-2 block mt-1"></span>
        <div className="my-4">
          <div>
            Choose us for unparalleled expertise and dedication to elevate your
          </div>
          <div>scientific communication and publication needs.</div>
        </div>
        <div className="flex justify-between gap-8 py-4">
          {otherservice &&
            otherservice?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col py-4 gap-2 justify-center"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full background_color flex justify-center items-center">
                      <img
                        src={item?.image}
                        alt={item?.name}
                        style={{ width: item?.width, height: item?.height }}
                      />
                    </div>
                    <div className="text_blue font-bold w-1/2">
                      {item?.name}
                    </div>
                  </div>
                  <div className="text-sm pr-8">{item?.description}</div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-4xl text_blue text-center font-bold">
          Writing with Precision: AI as Your Guide
        </div>
        <div className="my-12">
          <div className="flex gap-6">
            <div className="flex flex-1 flex-col items-center justify-center text-center border-r-8 border-gray-300 rounded">
              <img src={grammarly} alt="grammarly" />
              <div className="px-4">
                Ensure both science and grammar are on point
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center text-center border-r-8 border-gray-300 rounded">
              <img src={x9} alt="x9" />
              Control your referencing choices
            </div>
            <div className="flex flex-1 flex-col items-center justify-center text-center border-r-8 border-gray-300 rounded">
              <img src={turnitin} alt="turnitin" />
              Promote originality with minimal plagiarism
            </div>
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <img src={Semantic} alt="Semantic" />
              Search for articles and generate summaries
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-4xl text_blue font-bold">Our Experts</div>
        <span className="footer_background w-10 h-2 block mt-1"></span>
        <div className="flex gap-4 my-12">
          {expert &&
            expert?.map((item, index) => {
              return (
                <div key={index} className="flex-1 relative">
                  <div className="relative z-0 flex flex-col h-72">
                    <img
                      src={item?.image}
                      className="absolute z-0 h-full w-full expert_image object-cover"
                      alt={item?.name}
                    />
                    <div className="card_text relative z-10 h-full w-full">
                      <div className="bg-gradient-to-t absolute z-0 transition-all opacity-40 w-full from-blue-700 to-blue-700 h-72"></div>
                      <div className="absolute z-10 justify-end gap-2 p-4 flex flex-col h-full w-full">
                        <div className="text-white font-semibold opacity-100 flex gap-2 text-sm">
                          {item?.name}
                        </div>
                        <div className="w-12 h-1 bg-white rounded-lg opacity-100"></div>
                        <div className="text-white text-sm opacity-100">
                          {item?.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex my-6 justify-between items-center gap-2">
          {customer &&
            customer?.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item?.image} alt="Customer" />
                </div>
              );
            })}
          <div className="py-2 px-6 text-white font-bold footer_background h-full w-52 flex justify-center items-center text-center">
            25K + Trusted Worldwide Happy Customer
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-4xl text_blue font-bold">Client Feedback</div>
        <span className="footer_background w-10 h-2 block mt-1"></span>
        <div className="relative z-10 mt-8 mb-12">
          <Slider {...serviceSettings} className="slider client_slider">
            {clientFeedback &&
              clientFeedback?.map((item, index) => (
                <div
                  key={index}
                  className="relative z-0 flex flex-col h-72"
                >
                  <img
                    src={item?.image}
                    className="absolute z-0 h-full w-full expert_image object-cover"
                    alt={item?.name}
                  />
                  <div className="card_text relative z-10 h-full w-full">
                    <div className="bg-gradient-to-t absolute z-0 transition-all opacity-40 w-full from-black to-black h-72"></div>
                    <div className="absolute z-10 justify-end gap-2 p-4 flex flex-col h-full w-full">
                      <div className="text-white font-semibold opacity-100 flex gap-2 text-sm">
                        {item?.name}
                      </div>
                      <div className="text-white text-sm opacity-100">
                        {item?.description}
                      </div>
                      <Link to={"#"}>
                        <div className="text-white flex gap-4 justify-between items-center footer_background underline px-2 py-1 w-32">
                          Read More
                          <FaChevronRight color="#fff" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <div className="relative my-4">
        <Slider {...serviceSettings}>
          {achievement?.map((item, index) => (
            <img
              key={index}
              src={item?.image}
              alt="Tura Research Achievement"
              className="w-40 h-40"
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
