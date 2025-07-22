import React from "react";
import starsBackground from "../../assets/starsBackground.png";
import planetEarth from "../../assets/planetEarth.png";
import CardExplore from "./CardExplore";
import { explorePageInfo } from "../../utils";

const Explore = () => {
  return (
    <section className="px-15 sm:px-10 md:px-20 mt-10 flex flex-wrap justify-center gap-5">
        {explorePageInfo.map((item) => (
            <CardExplore image={item.image}>{item.title}</CardExplore>
        ))}
    </section>
  );
};

export default Explore;
