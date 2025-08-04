import { Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Explore from "./components/explore/Explore";
import PictureOfTheDay from "./components/picture-of-the-day/PictureOfTheDay";
import CelestialBodiesCatalog from "./components/explore/celestial-bodies/CelestialBodiesCatalog";
import CelestialBodiesSingleCard from "./components/explore/celestial-bodies/CelestialBodiesSingleCard";
import AstronautsCatalog from "./components/explore/astronauts/AstronautsCatalog";
import AstronautSingleCard from "./components/explore/astronauts/AstronautSingleCard";
import MissionsCatalog from "./components/explore/missions/MissionsCatalog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/explore/celestialbodies" element={<CelestialBodiesCatalog />} />
        <Route path="/explore/celestialbodies/:id" element={<CelestialBodiesSingleCard />} />

        <Route path="/explore/astronauts" element={<AstronautsCatalog />} />
        <Route path="/explore/astronauts/:id" element={<AstronautSingleCard />} />

        <Route path="/explore/missions" element={<MissionsCatalog />} />

        <Route path="/picture-of-the-day" element={<PictureOfTheDay />} />
      </Routes>
    </>
  );
}

export default App;
