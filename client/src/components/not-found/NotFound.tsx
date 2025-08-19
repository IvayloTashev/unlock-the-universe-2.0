import { motion } from "motion/react";
import { Link } from "react-router-dom";
import astronaut from "../../assets/astronaut-3.png";

const NotFound = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.img
        src={astronaut}
        alt="astronaut"
        className="w-120 absolute -top-13"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <motion.h1
        className="text-9xl font-bold text-teal-400 drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        404
      </motion.h1>

      <p className="mt-4 text-xl text-center text-gray-300">
        Oops, something went wrong <br />
        You are lost in space.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-teal-500 rounded-xl text-lg font-semibold hover:bg-teal-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
