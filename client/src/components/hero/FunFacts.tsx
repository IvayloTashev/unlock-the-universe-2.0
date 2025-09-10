import React, { useMemo } from "react";
import { funFactsData } from "../../utils";
import { motion } from "motion/react";
import factsImg from "../../assets/facts.png";

const FunFacts = () => {
  const randomFact = useMemo(() => {
    const index = Math.floor(Math.random() * funFactsData.length);
    return funFactsData[index];
  }, []);

  return (
    <div className="mt-20 px-4 sm:px-0 justify-center flex flex-col gap-3 relative">
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        src={factsImg}
        alt="facts-image"
        className="w-25 z-20 absolute -left-15 -top-15 opacity-90"
      />
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 20px rgba(20, 184, 166, 0.6)",
        }}
        className="bg-white/10 backdrop-blur-md font-manrope text-white text-center text-base sm:text-lg max-w-2xl p-5 rounded-xl border border-teal-500/20 shadow-lg"
      >
        <span className="italic text-gray-200">{randomFact}</span>
      </motion.div>
    </div>
  );
};

export default FunFacts;
