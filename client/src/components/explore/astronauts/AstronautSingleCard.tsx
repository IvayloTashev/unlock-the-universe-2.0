import React from "react";
import { useParams } from "react-router-dom";
import { useGetAstronautById } from "../../../hooks/useSpace";
import { motion } from "motion/react";
import astronaut2 from "../../../assets/astronaut-2.png";
import moon from "../../../assets/moon.png";
import useMediaQuery from "../../../hooks/useMediaQuery";
import SolarSystemLoader from "../../shared/LoadSpinner";

const AstronautSingleCard = () => {
  const { id } = useParams();
  const { astronautsData, isLoading } = useGetAstronautById(id!);
  const isAbove2xl = useMediaQuery("(min-width: 1536px)");

  return (
    <motion.section
      className="min-h-screen text-text-gray py-16 px-4 relative bg-gradient-to-br from-black via-gray-900 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {isLoading && (
        <motion.div
          key="spinner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <SolarSystemLoader />
        </motion.div>
      )}

      {isAbove2xl && (
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          src={astronaut2}
          alt="astronaut-image"
          className="absolute top-0 left-0 max-w-[400px]"
        />
      )}

      {isAbove2xl && (
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          src={moon}
          alt="astronaut-image"
          className="absolute top-100 right-0 max-w-[400px]"
        />
      )}

      {astronautsData && !isLoading && (
        <div
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10
      py-20 px-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={astronautsData?.image}
              alt={astronautsData?.title}
              className="rounded-3xl max-w-[320px] w-full object-cover shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center md:text-left"
          >
            <h1 className="text-3xl font-extrabold mb-4">
              {astronautsData?.title}
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              {astronautsData?.description}
            </p>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default AstronautSingleCard;
