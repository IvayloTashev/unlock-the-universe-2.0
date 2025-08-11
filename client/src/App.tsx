import { Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Explore from "./components/explore/Explore";
import CelestialBodiesCatalog from "./components/explore/celestial-bodies/CelestialBodiesCatalog";
import CelestialBodiesSingleCard from "./components/explore/celestial-bodies/CelestialBodiesSingleCard";
import AstronautsCatalog from "./components/explore/astronauts/AstronautsCatalog";
import AstronautSingleCard from "./components/explore/astronauts/AstronautSingleCard";
import MissionsCatalog from "./components/explore/missions/MissionsCatalog";
import MissionSingleCard from "./components/explore/missions/MissionSingleCard";
import PictureOfTheDay from "./components/explore/picture-of-the-day/PictureOfTheDay";
import Register from "./components/register/Register";
import LogIn from "./components/login/LogIn";

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
        <Route path="/explore/missions/:id" element={<MissionSingleCard />} />

        <Route path="/explore/pictureoftheday" element={<PictureOfTheDay />} />

        <Route path="/register" element={<Register/> } />
        <Route path="/login" element={<LogIn/> } />

      </Routes>
    </>
  );
}

export default App;
