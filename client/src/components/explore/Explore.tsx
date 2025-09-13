import React from "react";
import CardExplore from "./CardExplore";
import { explorePageInfo } from "../../utils";
import { motion } from "motion/react";

const Explore = () => {
  return (
    <motion.section
      className="min-h-screen pb-10 flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h1 className="font-bebas w-3/4 text-center text-5xl mt-15  bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.6)]">
        Discover the wonders of space.
      </h1>
      <div className="w-full px-15 sm:px-10 md:px-20 mt-10 flex flex-wrap justify-center gap-5">
        {explorePageInfo.map((item) => (
          <CardExplore key={item.title} image={item.image} title={item.title}>
            {item.title}
          </CardExplore>
        ))}
      </div>
    </motion.section>
  );
};

export default Explore;
