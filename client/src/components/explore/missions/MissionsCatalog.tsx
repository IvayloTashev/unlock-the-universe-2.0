import React from "react";
import { useGetAllMissions } from "../../../hooks/useSpace";
import { Link } from "react-router-dom";

const MissionsCatalog = () => {
  const missionsData = useGetAllMissions();

  return (
    <section className="px-5 py-10">
      <div className="flex flex-col gap-8 items-center justify-center md:flex-row md:flex-wrap">
        {missionsData?.map((item) => (
          <Link to={item._id} className="relative w-[350px] h-[300px] rounded-2xl overflow-hidden shadow-xl group" key={item._id}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full p-4 backdrop-blur-md bg-black/30">
              <h2 className="text-white text-center text-2xl font-semibold group-hover:text-teal-500 transition-colors duration-300">
                {item.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MissionsCatalog;
