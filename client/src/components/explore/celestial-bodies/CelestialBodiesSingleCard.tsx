import React from "react";
import { useParams } from "react-router-dom";
import { useGetCelestialBodybyId } from "../../../hooks/useSpace";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { PlanetHeadings } from "../../../utils";

const CelestialBodiesSingleCard = () => {
  const { id } = useParams();
  const planetData = useGetCelestialBodybyId(id!);

  return (
    <section className="text-text-gray flex justify-center items-center">
      <div className="w-[90%] xl:w-[95%] mt-10 flex flex-col gap-10 z-10">
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex flex-col">
            <h1 className="mb-4 text-3xl sm:text-4xl font-bold">
              {planetData?.title}
            </h1>
            <img
              src={planetData?.image}
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

        <div id="facts" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Facts</h2>
          <p>{planetData?.facts}</p>
        </div>

        <div id="introduction" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Introduction</h2>
          <p>{planetData?.introduction}</p>
        </div>

        <div id="namesake" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Namesake</h2>
          <p>{planetData?.namesake}</p>
        </div>

        <div id="potential-for-life" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Potential for Life</h2>
          <p>{planetData?.potentialForLife}</p>
        </div>

        <div id="size-and-distance" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Size and Distance</h2>
          <p>{planetData?.sizeAndDistance}</p>
        </div>

        <div id="orbit-and-rotation" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Orbit and Rotation</h2>
          <p>{planetData?.orbitAndRotation}</p>
        </div>

        <div id="moons" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Moons</h2>
          <p>{planetData?.moons}</p>
        </div>

        <div id="formation" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Formation</h2>
          <p>{planetData?.formation}</p>
        </div>

        <div id="structure" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Structure</h2>
          <p>{planetData?.structure}</p>
        </div>

        <div id="surface" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Surface</h2>
          <p>{planetData?.surface}</p>
        </div>

        <div id="atmosphere" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Atmosphere</h2>
          <p>{planetData?.atmosphere}</p>
        </div>

        <div id="magnetosphere" className="bg-card border border-gray-100/20 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Magnetosphere</h2>
          <p>{planetData?.magnetosphere}</p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-teal-500 text-white shadow-lg hover:scale-115 cursor-pointer animate-bounce z-20"
      >
        ↑
      </button>

    </section>
  );
};

export default CelestialBodiesSingleCard;
