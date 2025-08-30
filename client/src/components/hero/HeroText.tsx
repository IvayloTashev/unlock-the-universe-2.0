import React from "react";
import { Link } from "react-router-dom";
import FunFacts from "./FunFacts";


type Props = {
  position: string;
};

const HeroText = ({ position }: Props) => {
  return (
    <div
      className={`${position} absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-3/5 mt-10 font-bebas text-white flex flex-col justify-center items-center gap-1`}
    >
      <p className="text-teal-500 text-3xl sm:text-4xl text-shadow-sm text-shadow-teal-500">
        Journey Begins Here
      </p>
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl text-shadow-sm text-shadow-teal-500">
        Unlock the Secrets of the Solar System
      </h2>
      <p className="text-center font-manrope text-xl md:text-2xl text-gray-300 max-w-[700px] mt-2">
        Dive into the cosmos and discover planets, astronauts, space
        missions and more like never before.
      </p>
      <Link
        to="/explore"
        className="text-2xl sm:text-3xl size-fit p-[2px] mt-5 bg-linear-to-r from-purple-500 to-teal-500 rounded-3xl hover:text-shadow-sm hover:text-shadow-purple-500 hover:scale-110 transition duration-500"
      >
        <p className="bg-black rounded-3xl px-5 py-1 h-full w-full">Explore</p>
      </Link>
      <FunFacts />
    </div>
  );
};

export default HeroText;
