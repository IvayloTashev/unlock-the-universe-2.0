import { Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Explore from "./components/explore/Explore";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
