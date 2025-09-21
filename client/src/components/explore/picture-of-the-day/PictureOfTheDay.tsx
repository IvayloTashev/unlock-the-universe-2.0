import React from "react";
import { useGetPod } from "../../../hooks/useGetPod";
import { motion } from "motion/react";
import SolarSystemLoader from "../../shared/LoadSpinner";

const PictureOfTheDay = () => {
  const { nasaPicture, isLoading } = useGetPod();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {isLoading && (
        <motion.div
          key="spinner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <SolarSystemLoader />
        </motion.div>
      )}

      {nasaPicture?.media_type === "image" ? (
        <div className="p-5 flex flex-col gap-8 justify-center items-center h-screen bg-gradient-to-b from-black via-gray-900 to-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={nasaPicture.url}
              alt="nasaPictureOfTheDay"
              className="rounded-3xl max-h-[70vh] shadow-md shadow-purple-500/30"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-text-gray text-center p-6 max-w-[90vw] md:max-w-[80vw] bg-white/5 backdrop-blur-lg border border-gray-100/20 rounded-3xl"
          >
            <h1 className="text-2xl font-bold">{nasaPicture.title}</h1>
            <p className="mt-3">{nasaPicture.explanation}</p>
          </motion.div>
        </div>
      ) : (
        <div>
          <div>
            <iframe
              src={nasaPicture?.url}
              title="video"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="text-text-gray">
            <h1>{nasaPicture?.title}</h1>
            <p>{nasaPicture?.explanation}</p>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default PictureOfTheDay;
