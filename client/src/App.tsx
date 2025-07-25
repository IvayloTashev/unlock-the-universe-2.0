import { Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Explore from "./components/explore/Explore";
import PictureOfTheDay from "./components/picture-of-the-day/PictureOfTheDay";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="explore" element={<Explore />} />
        <Route path="picture-of-the-day" element={<PictureOfTheDay />} />
      </Routes>
    </>
  );
}

export default App;
