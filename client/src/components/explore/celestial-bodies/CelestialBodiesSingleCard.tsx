import React from "react";
import { useParams } from "react-router-dom";
import { useGetCelestialBodybyId } from "../../../hooks/useSpace";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { PlanetHeadings } from "../../../utils";
import SolarSystemLoader from "../../shared/LoadSpinner";
import { motion } from "motion/react";

const CelestialBodiesSingleCard = () => {
  const { id } = useParams();
  const { spaceData, isLoading } = useGetCelestialBodybyId(id!);

  return (
    <section className="text-text-gray flex justify-center items-center">
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
          <div className="w-[90%] xl:w-[95%] mt-10 flex flex-col gap-10 z-10">
            <div className="flex flex-col gap-10 xl:flex-row">
              <div className="flex flex-col">
                <h1 className="mb-4 text-3xl sm:text-4xl font-bold">
                  {spaceData?.title}
                </h1>
                <img
                  src={spaceData?.image}
                  alt="planet-image"
                  className="rounded-3xl xl:max-h-[700px] object-cover shadow-lg border-2 border-gray-100/20"
                />
              </div>

              <div className="xl:w-[50%] flex justify-center items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {PlanetHeadings.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLocaleLowerCase().split(" ").join("-")}`}
                      className="w-[45%] flex justify-between items-center px-4 py-2 border border-gray-100/20 bg-card hover:bg-gray-700 transition rounded-xl text-sm sm:text-base"
                    >
                      <p>{item}</p>
                      <ArrowDownIcon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              id="facts"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Facts</h2>
              <p>{spaceData?.facts}</p>
            </div>

            <div
              id="introduction"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Introduction</h2>
              <p>{spaceData?.introduction}</p>
            </div>

            <div
              id="namesake"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Namesake</h2>
              <p>{spaceData?.namesake}</p>
            </div>

            <div
              id="potential-for-life"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Potential for Life</h2>
              <p>{spaceData?.potentialForLife}</p>
            </div>

            <div
              id="size-and-distance"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Size and Distance</h2>
              <p>{spaceData?.sizeAndDistance}</p>
            </div>

            <div
              id="orbit-and-rotation"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Orbit and Rotation</h2>
              <p>{spaceData?.orbitAndRotation}</p>
            </div>

            <div
              id="moons"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Moons</h2>
              <p>{spaceData?.moons}</p>
            </div>

            <div
              id="formation"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Formation</h2>
              <p>{spaceData?.formation}</p>
            </div>

            <div
              id="structure"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Structure</h2>
              <p>{spaceData?.structure}</p>
            </div>

            <div
              id="surface"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Surface</h2>
              <p>{spaceData?.surface}</p>
            </div>

            <div
              id="atmosphere"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Atmosphere</h2>
              <p>{spaceData?.atmosphere}</p>
            </div>

            <div
              id="magnetosphere"
              className="bg-card border border-gray-100/20 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-2">Magnetosphere</h2>
              <p>{spaceData?.magnetosphere}</p>
            </div>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-teal-500 text-white shadow-lg hover:scale-115 cursor-pointer animate-bounce z-20"
          >
            ↑
          </button>
        </>
      )}
    </section>
  );
};

export default CelestialBodiesSingleCard;
