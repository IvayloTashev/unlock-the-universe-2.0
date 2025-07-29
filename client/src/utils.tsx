import sun from "./assets/sun.png";
import solarSystem from "./assets/solar-system.png";
import astronaut from "./assets/astronaut.png";
import satellite from "./assets/satellite.png";
import spaceShuttle from "./assets/space-shuttle.png";
import sunImage from "./assets/sun.png";
import mercuryImage from "./assets/mercury.png";
import venusImage from "./assets/venus.png";
import earthImage from "./assets/earth.png";
import marsImage from "./assets/mars.png";
import jupiterImage from "./assets/jupiter.png";
import saturnImage from "./assets/saturn.png";
import uranusImage from "./assets/uranus.png";
import neptuneImage from "./assets/neptune.png";
import type { PlanetName } from "./types";

export const explorePageInfo = [
  { image: solarSystem, title: "Celestial bodies" },
  { image: astronaut, title: "Astronauts" },
  { image: satellite, title: "Satellites" },
  { image: spaceShuttle, title: "Missions" },
];

export const localImages: Record<PlanetName, string> = {
  sun: sunImage,
  mercury: mercuryImage,
  venus: venusImage,
  earth: earthImage,
  mars: marsImage,
  jupiter: jupiterImage,
  saturn: saturnImage,
  uranus: uranusImage,
  neptune: neptuneImage,
};

export const PlanetHeadings = [
  "Facts",
  "Introduction",
  "Namesake",
  "Potential for Life",
  "Size and Distance",
  "Orbit and Rotation",
  "Moons",
  "Formation",
  "Structure",
  "Surface",
  "Atmosphere",
  "Magnetosphere",
];

// sm - 640px
// md - 768px
// lg - 1024px
// xl - 1280px
// 2xl - 1536px
