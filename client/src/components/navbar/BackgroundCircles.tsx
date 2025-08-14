import React from "react";
import stars from "../../assets/stars.svg"
import { motion } from "motion/react";

const BackgroundCircles = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
    >
      <motion.div
        className="w-[51.375rem] aspect-square border border-gray-100/20 rounded-full shadow-[0_0_30px_rgba(0,255,255,0.15)]"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-gray-100/20 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.1)] -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        <img
          src={stars}
          alt="stars"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-gray-100/20 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.05)] -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.01, 1] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default BackgroundCircles;
