import { motion } from "motion/react";
import { useGetAllPhotos } from "../../../hooks/usePhotos";
import { Link } from "react-router-dom";

const PhotoCatalog = () => {
  const photos = useGetAllPhotos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181841] via-black to-[#181841] p-8">
      <h1 className="text-5xl text-white mb-8 text-center font-bebas">
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
    </div>
  );
};

export default PhotoCatalog;
