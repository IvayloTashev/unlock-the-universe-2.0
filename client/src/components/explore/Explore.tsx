import React from "react";
import CardExplore from "./CardExplore";
import { explorePageInfo } from "../../utils";

const Explore = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="font-bebas w-3/4 text-center text-5xl mt-15 text-text-white">
        Discover the wonders of space.
      </h1>
      <div className="px-15 sm:px-10 md:px-20 mt-10 flex flex-wrap justify-center gap-5">
        {explorePageInfo.map((item) => (
            <CardExplore key={item.title} image={item.image} title={item.title}>
              {item.title}
            </CardExplore>
        ))}
      </div>
    </section>
  );
};

export default Explore;
