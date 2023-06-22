import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import thunder from "../assets/thunder.png";
import badge from "../assets/badge.png";
import custom from "../assets/customize.png";
import credit from "../assets/credit-card.png";

const About = () => {
  return (
    <div className=" flex flex-col gap-10 px-10 mt-[25vh]" id="about">
      <div className="flex md:flex-row flex-col gap-10 md:justify-between">
        <div className="md:max-w-[27vw] w-fit min-h-[30vh] rounded-lg shadow-3xl bg-[#222222] card">
          <div className="flex justify-center mt-2 ">
            <img
              src={thunder}
              alt="thunder"
              className="h-[7vh] p-2 shadow-3xl bg-[#1A1A1A]"
            />
          </div>
          <h1 className="text-xl font-poppins font-medium text-center mt-5">
            Fastest Delivery
          </h1>
          <p className="py-4 px-6 text-md font-poppins text-gray-400">
            Fueling your cravings, we dash to your door, Fast food, faster
            service, satisfaction galore. In the blink of an eye, taste
            sensations arrive, Convenience meets flavor, our promise to thrive.
            Experience the speed, indulge and revive
          </p>
        </div>
        <div className="md:max-w-[27vw] w-fit min-h-[30vh] rounded-lg shadow-3xl bg-[#222222] card">
          <div className="flex justify-center mt-2 ">
            <img
              src={badge}
              alt="thunder"
              className="h-[7vh] p-2 shadow-3xl bg-[#1A1A1A]"
            />
          </div>
          <h1 className="text-xl font-poppins font-medium text-center mt-5">
            Quality Food
          </h1>
          <p className="py-4 px-6 text-md font-poppins text-gray-400">
            {" "}
            Savor the excellence, a symphony for your taste buds, We elevate
            good food, craftsmanship that never budges. Each dish a masterpiece,
            prepared with utmost care, Quality ingredients, flavors beyond
            compare. Indulge in culinary bliss, where taste and perfection pair
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-10 md:justify-between">
        <div className="md:max-w-[27vw] w-fit min-h-[30vh] rounded-lg shadow-3xl bg-[#222222] card">
          <div className="flex justify-center mt-2 ">
            <img
              src={custom}
              alt="thunder"
              className="h-[7vh] p-2 shadow-3xl bg-[#1A1A1A]"
            />
          </div>
          <h1 className="text-xl font-poppins font-medium text-center mt-5">
            Customized Food
          </h1>
          <p className="py-4 px-6 text-md font-poppins text-gray-400">
            {" "}
            Craft your culinary masterpiece, a personalized symphony of flavors,
            Our custom food made option brings your unique vision to savor. From
            ingredient to seasoning, every detail is in your control, Create a
            meal tailored to your taste, satisfying body and soul.
          </p>
        </div>
        <div className="md:max-w-[27vw] w-fit min-h-[30vh] rounded-lg shadow-3xl bg-[#222222] card">
          <div className="flex justify-center mt-2 ">
            <img
              src={credit}
              alt="thunder"
              className="h-[7vh] p-2 shadow-3xl bg-[#1A1A1A]"
            />
          </div>
          <h1 className="text-xl font-poppins font-medium text-center mt-5">
            Online payment
          </h1>
          <p className="py-4 px-6 text-md font-poppins text-gray-400">
            {" "}
            Seamless transactions at your fingertips, with just a click or tap,
            Our online payment feature simplifies your dining experience,
            bridging the gap. From secure gateways to multiple options, we
            ensure a smooth flow, Effortlessly settle your bill, wherever you
            go. Embrace the convenience, as digital payment takes its role.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
