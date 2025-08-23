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
import { AuthContextProvider } from "./contexts/AuthContext";
import Logout from "./components/logout/Logout";
import IsAuthenticated from "./components/guards/IsAuthenticated";
import IsNotAuthenticated from "./components/guards/IsNotAuthenticated";
import PhotoCatalog from "./components/explore/photo-gallery/PhotoCatalog";
import NotFound from "./components/not-found/NotFound";
import PhotoSingleCard from "./components/explore/photo-gallery/PhotoSingleCard";

function App() {
  return (
    <>
      <AuthContextProvider>
        <header>
          <Navbar />
        </header>

        <main>
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
            <Route path="/explore/photos" element={<PhotoCatalog/>} />
            <Route path="/explore/photos/:id" element={<PhotoSingleCard />} />
            <Route path="*" element={<NotFound />} />

            <Route element={<IsNotAuthenticated />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LogIn />} />
            </Route>

            <Route element={<IsAuthenticated />}>
              <Route path="/logout" element={<Logout />} />
            </Route>
            
          </Routes>
        </main>
      </AuthContextProvider>
    </>
  );
}

export default App;
