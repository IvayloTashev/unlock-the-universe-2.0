import React from "react";
import { useParams } from "react-router-dom";
import { useGetMissionById } from "../../../hooks/useSpace";
import rocket from "../../../assets/space-shuttle2.png";
import useMediaQuery from "../../../hooks/useMediaQuery";

const MissionSingleCard = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");
  const { id } = useParams();
  const missionData = useGetMissionById(id!);
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="px-4 py-10 md:max-w-5xl mx-auto relative">
        <div className="text-gray-300 border border-gray-100/10 rounded-3xl bg-card p-6 flex flex-col gap-6 items-center relative overflow-hidden">
          <h2 className="text-4xl font-extrabold text-text-gray text-center">
            {missionData?.name}
          </h2>

          <img
            src={missionData?.image}
            alt={missionData?.name}
            className="rounded-xl w-full max-w-3xl object-cover z-20"
          />

          <p className="text-lg leading-relaxed text-center text-white max-w-3xl">
            {missionData?.description}
          </p>
          {isMobile ? (
            <img
              src={rocket}
              alt="rocket"
              className="absolute bottom-0 left-0 opacity-20"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default MissionSingleCard;
