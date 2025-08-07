import React from "react";
import skyWithStars2 from "../../assets/skyWithStars2.png";
import homeBackground from "../../assets/homeBackground.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeroText from "./HeroText";

const Hero = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 768px)");

  return (
    <section>
      {isAboveMediumScreen ? (
        <div className="h-screen overflow-hidden">
          <img
            src={homeBackground}
            alt="solarSystem"
            className="w-full h-full object-cover opacity-40"
          />
          <HeroText position="top-2/5" />
        </div>
      ) : (
        <div className="relative">
          <img
            src={skyWithStars2}
            alt="skyWithStars"
            className="w-full object-cover opacity-40"
          />
          <HeroText position="top-[40%]" />
        </div>
      )}
    </section>
  );
};

export default Hero;
