import { motion } from "motion/react";

const PhotoCatalog = () => {
  const images = [
    "https://static.scientificamerican.com/sciam/cache/file/B5A67C1C-08B8-4FB1-A454CD0B9CF16C2C_source.jpeg",
    "https://cdn.britannica.com/29/148329-050-269A9EFE/night-sky-Milky-Way-Galaxy.jpg",
    "https://cdn.shopify.com/s/files/1/1935/4371/files/MilkyWay_Hills_a96e4e48-740b-4833-890b-1cdafc382225.jpg?v=1659042183",
    "https://imageio.forbes.com/specials-images/imageserve/5f285681289af0e7316b841b/The-Milky-Way-in-all-of-its-glory-over-Two-Jack-Lake-in-Banff-National-Park--Alberta/960x0.jpg?format=jpg&width=960",
    "https://ichef.bbci.co.uk/ace/standard/1800/cpsprodpb/641c/live/975f2bf0-173f-11ef-b559-b5d176629cf7.jpg",
    "https://darksitefinder.com/wp-content/uploads/2016/02/IMGP8189-copy-1024x819.jpg",
    "https://starwalk.space/gallery/images/milky-way-faq/1920x1080.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b1e] to-[#1a1a40] p-8">
      <h1 className="text-4xl text-white mb-8 text-center font-bold">
        Photo Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src={src}
              alt={`${i}`}
              className="w-full h-60 object-cover transform transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCatalog;
