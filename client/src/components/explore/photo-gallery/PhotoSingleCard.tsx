import React from "react";
import { useParams } from "react-router-dom";
import { useGetOnePhoto } from "../../../hooks/usePhotos";

const PhotoSingleCard = () => {
  const { id } = useParams();

  const photo = useGetOnePhoto(id!);

  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen flex justify-center items-start px-4 py-10">
      <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
        <div className="relative group">
          <img
            src={photo?.image}
            alt="photo"
            className="w-full max-w-[800px] rounded-t-2xl object-cover transition-transform duration-500"
          />
        </div>

        {photo?.description && (
          <div className="px-6 py-4 text-gray-300">
            <p className="text-lg leading-relaxed">{photo.description}</p>
          </div>
        )}

        <div className="border-t border-gray-700 px-6 py-4">
          <h2 className="text-xl font-semibold text-white mb-3">Comments</h2>
          <div className="space-y-3">
            {/* Map comments here */}
            <p className="text-gray-400 italic">No comments yet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSingleCard;
