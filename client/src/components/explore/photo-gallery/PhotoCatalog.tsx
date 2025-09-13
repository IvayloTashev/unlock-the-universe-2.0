import { motion } from "motion/react";
import { useGetAllPhotos } from "../../../hooks/usePhotos";
import { Link } from "react-router-dom";

const PhotoCatalog = () => {
  const photos = useGetAllPhotos();

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-bl from-black via-gray-900 to-black p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h1 className="text-5xl mb-8 text-center font-bebas bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.6)]">
        Photo Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos?.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="overflow-hidden rounded-xl cursor-pointer shadow-sm shadow-teal-500/60"
          >
            <Link to={item._id}>
              <img
                src={item.image}
                alt={`photo-image`}
                className="w-full h-60 object-cover transform transition-transform duration-300"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PhotoCatalog;
