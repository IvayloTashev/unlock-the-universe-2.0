import React from "react";
import { useGetPod } from "../../../hooks/useGetPod";

const PictureOfTheDay = () => {
  const nasaPodData = useGetPod();

  return (
    <section>
      {nasaPodData?.media_type === "image" ? (
        <div className="p-5 flex flex-col gap-8 justify-center items-center">
          <div className="">
            <img
              src={nasaPodData.url}
              alt="nasaPictureOfTheDay"
              className="rounded-3xl max-h-[70vh] border-1 border-gray-100/20"
            />
          </div>
          <div className="text-text-gray text-center p-3 max-w-[90vw] md:max-w-[80vw] bg-card border-1 border-gray-100/20 rounded-3xl">
            <h1 className="text-2xl font-bold">{nasaPodData.title}</h1>
            <p className="mt-3">{nasaPodData.explanation}</p>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <iframe
              src={nasaPodData?.url}
              title="video"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="text-text-gray">
            <h1>{nasaPodData?.title}</h1>
            <p>{nasaPodData?.explanation}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PictureOfTheDay;
