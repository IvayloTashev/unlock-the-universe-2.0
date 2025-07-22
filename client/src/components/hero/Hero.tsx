import React from "react";
import solarSystem from "../../assets/solar-system.png";
import solarSystem2 from "../../assets/solar-system2.png";
import solarSystem3 from "../../assets/solar-system3.png";
import skyWithStars from "../../assets/skyWithStars.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeroText from "./HeroText";

const Hero = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 768px)");

  return (
    <section>
      {isAboveMediumScreen ? (
        <div className="h-screen overflow-hidden">
          <img src={solarSystem2} alt="solarSystem" className="mx-auto w-full opacity-60" />
          <HeroText position="top-1/2" />
        </div>
      ) : (
        <div className="relative">
          <img src={skyWithStars} alt="skyWithStars" className="opacity-40" />
          <img
            src={solarSystem3}
            alt="solarSystem"
            className="absolute top-80 mx-auto sm:mt-15 opacity-70"
          />
          <HeroText position="top-1/2" />
        </div>
      )}
    </section>
  );
};

export default Hero;
