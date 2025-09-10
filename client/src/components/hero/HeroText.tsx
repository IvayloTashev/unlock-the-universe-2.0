import React from "react";
import { Link } from "react-router-dom";
import FunFacts from "./FunFacts";

type Props = {
  position: string;
};

const HeroText = ({ position }: Props) => {
  return (
    <div
      className={`${position} absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:mt-20 font-bebas text-white flex flex-col justify-center items-center gap-1`}
    >
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.6)]">
        Unlock the Secrets of the Solar System
      </h2>
      <p className="text-center font-manrope text-xl md:text-2xl text-gray-300 max-w-[700px] mt-2">
        Dive into the cosmos and discover planets, astronauts, space missions
        and more like never before.
      </p>
      <Link
        to="/explore"
        className="relative px-8 py-3 mt-6 rounded-full text-2xl font-semibold text-text-gray border border-gray-600 hover:border-teal-400 hover:text-teal-400 transition duration-300"
      >
        Explore
        <span className="absolute inset-0 rounded-full border border-teal-400 opacity-0 hover:opacity-40 animate-ping"></span>
      </Link>
      <FunFacts />
    </div>
  );
};

export default HeroText;
