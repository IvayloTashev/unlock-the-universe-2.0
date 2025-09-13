import React from "react";
import CardExplore from "../CardExplore";
import { localImages } from "../../../utils";
import { useGetAllCelestialBodies } from "../../../hooks/useSpace";
import type { PlanetName } from "../../../types";
import SolarSystemLoader from "../../shared/LoadSpinner";
import { motion } from "motion/react";

const CelestialBodiesCatalog = () => {
  const { spaceData, isLoading } = useGetAllCelestialBodies();

  return (
    <motion.section
      className="flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black"
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

      {spaceData && !isLoading && (
        <>
          <h1 className="font-bebas w-3/4 text-center text-5xl mt-15 bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.6)]">
            Celestial bodies
          </h1>
          <div className="px-15 sm:px-10 md:px-20 mt-10 flex flex-wrap justify-center gap-5">
            {spaceData?.map((item) => {
              const key = item.title.toLowerCase() as PlanetName;
              const image = localImages[key] ?? item.image;

              return (
                <CardExplore
                  key={item.title}
                  image={image}
                  title={item.title}
                  id={item._id}
                >
                  {item.title}
                </CardExplore>
              );
            })}
          </div>
        </>
      )}
    </motion.section>
  );
};

export default CelestialBodiesCatalog;
