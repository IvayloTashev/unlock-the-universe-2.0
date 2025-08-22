import { motion } from "motion/react";
import { useGetAllPhotos } from "../../../hooks/usePhotos";

const PhotoCatalog = () => {
  const photos = useGetAllPhotos();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b1e] to-[#1a1a40] p-8">
      <h1 className="text-4xl text-white mb-8 text-center font-bold">
        Photo Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos?.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={`photo-image`}
              className="w-full h-60 object-cover transform transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCatalog;
