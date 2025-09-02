import React from "react";
import { useGetAllAstronauts } from "../../../hooks/useSpace";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SolarSystemLoader from "../../shared/LoadSpinner";

const AstronautsCatalog = () => {
  const { astronautsData, isLoading } = useGetAllAstronauts();

  return (
    <section className="flex flex-col items-center px-4 py-12 bg-gradient-to-bl from-black via-gray-900 to-black">
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

      {astronautsData && !isLoading && (
        <>
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-10">
            Astronauts
          </h1>

          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap justify-center">
            {astronautsData?.map((item) => (
              <Link
                to={item._id}
                key={item._id}
                className="transform transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="border border-gray-100/20 rounded-3xl pb-3 flex flex-col gap-3 items-center justify-center cursor-pointer filter md:grayscale md:hover:grayscale-0">
                  <img
                    src={item.image}
                    alt="astronaut-image"
                    className="w-[200px] h-[250px] rounded-t-3xl"
                  />
                  <h2 className="w-full text-white text-center text-2xl font-bebas z-10 mt-2">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default AstronautsCatalog;
