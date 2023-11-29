import React from "react";
import dataimage from "../../assets/image/dr.namrata.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="container my-8 mx-auto">
        <div className="flex flex-col gap-8 md:flex-row">
          <img src={dataimage} alt="Dr. Namrata Singh" className="h-96 w-96" />
          <div className="flex flex-col gap-4 my-12">
            <div className="font-bold drop-shadow-xl text-6xl">
              <span className="mr-4 text-red-500">Dr.</span>
              Namrata Singh
            </div>
            <div className="text-xl font-semibold">
              Founder & Director, Turacoz Group
            </div>
            <div className="text-lg text-justify">
              Dr. Namrata is a woman of determination and resilience, living by
              the mantra that "nothing is impossible." With a wealth of
              experience as a paediatrician and medical writer, she possesses
              the unique ability to effectively communicate complex medical
              concepts to a wide range of audiences. As Director of Medical
              Services, she leads her team with a steady hand, always willing to
              go the extra mile to mentor and guide new team members. When she's
              not healing young patients or busy in business, she indulges in
              her love for cooking. She dreams of opening a chain of healthy
              food joints one day and conducting lifestyle modification sessions
              for kids and teenagers. Dr. Namrata is a true leader and a
              constant inspiration to those around her.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

