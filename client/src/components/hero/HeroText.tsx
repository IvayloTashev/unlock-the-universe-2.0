import React from "react";
import { Link } from "react-router-dom";

type Props = {
  position: string;
};

const HeroText = ({ position }: Props) => {
  return (
    <div className={`${position} absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 font-bebas text-white flex flex-col justify-center items-center gap-1`}>
      <h2 className="text-center text-5xl text-shadow-sm text-shadow-teal-500">
        Unlock the Secrets of the Solar System
      </h2>
      <p className="text-center text-xl mt-2 text-shadow-sm text-shadow-purple-500">
        From Mercury to Pluto (yes, we still love you)
      </p>
      <Link
        to="/explore"
        className="text-3xl size-fit p-[2px] mt-5 bg-linear-to-r from-purple-500 to-teal-500 rounded-3xl hover:text-shadow-sm hover:text-shadow-purple-500 hover:scale-110"
      >
        <p className="bg-black rounded-3xl px-5 py-1 h-full w-full">Explore</p>
      </Link>
    </div>
  );
};

export default HeroText;
