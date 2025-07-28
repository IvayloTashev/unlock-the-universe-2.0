import React from "react";
import CardExplore from "./CardExplore";
import { localImages } from "../../utils";
import { useParams } from "react-router-dom";
import { useGetAllByType } from "../../hooks/useSpace";
import type { PlanetName } from "../../types";

const ExploreCatalog = () => {
  const { title } = useParams();
  const planetsData = useGetAllByType(title!);

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="font-bebas w-3/4 text-center text-5xl mt-15 text-text-white">
        Planets
      </h1>
      <div className="px-15 sm:px-10 md:px-20 mt-10 flex flex-wrap justify-center gap-5">
        {planetsData?.map((item) => {
          const key = item.title.toLowerCase() as PlanetName;
		  const image = localImages[key] ?? item.image;

          return (
            <CardExplore key={item.title} image={image} title={item.title} id={item._id}>
              {item.title}
            </CardExplore>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreCatalog;
