import { Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Explore from "./components/explore/Explore";
import PictureOfTheDay from "./components/picture-of-the-day/PictureOfTheDay";
import ExploreCatalog from "./components/explore/ExploreCatalog";
import SingleCard from "./components/explore/SingleCard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:title" element={<ExploreCatalog />} />
        <Route path="/explore/:title/:id" element={<SingleCard />} />
        <Route path="/picture-of-the-day" element={<PictureOfTheDay />} />
      </Routes>
    </>
  );
}

export default App;
