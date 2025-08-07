import sun from "./assets/sun.png";
import solarSystem from "./assets/solar-system.png";
import astronaut from "./assets/astronaut.png";
import pod from "./assets/pod.png";
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
  { image: spaceShuttle, title: "Missions" },
  { image: pod, title: "Picture of the Day" },
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

export const funFactsData = [
  "Jupiter’s Great Red Spot is a storm larger than Earth!",
  "Venus is the hottest planet in the Solar System, even hotter than Mercury!",
  "A day on Venus is longer than its year!",
  "Mars has the largest volcano in the Solar System – Olympus Mons!",
  "Mercury has no atmosphere to retain heat, so its temperature fluctuates drastically.",
  "Saturn could float in water because it’s mostly made of gas and has a low density.",
  "The Moon is slowly drifting away from Earth at about 3.8 cm per year.",
  "Neptune has the strongest winds in the Solar System, reaching up to 2,100 km/h.",
  "Uranus rotates on its side, making its seasons extreme.",
  "Earth is the only known planet to support life — so far.",
  "Jupiter has 95 known moons — more than any other planet!",
  "The asteroid belt lies between Mars and Jupiter.",
  "Pluto, once a planet, is now classified as a dwarf planet.",
  "The Sun accounts for about 99.86% of the mass in the Solar System.",
  "A year on Neptune lasts 165 Earth years.",
  "Mars appears red because of iron oxide (rust) on its surface.",
  "The Great Wall of Mars is a massive canyon system called Valles Marineris.",
  "Some asteroids have moons of their own.",
  "The solar wind creates auroras on Earth and other planets with magnetic fields.",
  "There are more stars in the universe than grains of sand on all Earth’s beaches.",
  "Comets are made of ice, dust, and rock — sometimes called 'dirty snowballs'.",
  "Earth's rotation is gradually slowing — about 17 milliseconds every 100 years.",
  "The Kuiper Belt is home to many dwarf planets including Pluto and Eris.",
  "One day on Jupiter lasts only 10 hours!",
  "The Moon has 'moonquakes', similar to earthquakes.",
  "Mercury has water ice in its permanently shadowed craters.",
  "Venus spins in the opposite direction to most planets.",
  "Some scientists believe Europa (a moon of Jupiter) may harbor life beneath its icy crust.",
  "Mars has polar ice caps made of water and carbon dioxide.",
  "The tallest mountain in the Solar System is Olympus Mons on Mars.",
  "The Sun’s core temperature is around 15 million °C (27 million °F).",
  "Saturn’s rings are made mostly of water ice particles.",
  "A day on Mercury lasts 59 Earth days.",
  "The coldest temperature recorded in the Solar System is on Triton, Neptune’s largest moon.",
  "Uranus has a faint ring system like Saturn, but much less visible.",
  "Some meteorites found on Earth came from Mars.",
  "The Sun is about 4.6 billion years old.",
  "Earth’s magnetic field protects us from harmful solar radiation.",
  "Jupiter’s moon Io has over 400 active volcanoes.",
  "Titan, Saturn’s largest moon, has lakes of liquid methane.",
  "Solar eclipses can only occur during a new moon.",
  "The Moon has no atmosphere — that’s why its footprints stay for millions of years.",
  "A light beam from the Sun takes about 8 minutes to reach Earth.",
  "Neptune was discovered through mathematics before being seen with a telescope.",
  "The inner planets (Mercury, Venus, Earth, Mars) are rocky, while outer planets are gas giants.",
  "The Moon always shows the same face to Earth due to synchronous rotation.",
  "Mars has the largest dust storms in the Solar System.",
  "Solar energy on Earth comes from nuclear fusion in the Sun's core.",
  "Space is not completely empty — it contains cosmic dust, particles, and radiation.",
  "Earth's axis tilt is what causes the seasons."
]

// sm - 640px
// md - 768px
// lg - 1024px
// xl - 1280px
// 2xl - 1536px
