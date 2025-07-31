import React from "react";
import { Link } from "react-router-dom";
import starsBackground from "../../assets/starsBackground.png"

type Props = {
  image: string;
  children: React.ReactNode;
  title: string;
  id?: string;
};

const CardExplore = ({ image, children, title, id }: Props) => {
  const path = id ? id : title.toLowerCase().replaceAll(" ", "");

  return (
    <Link
      to={path}
      className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] p-5 rounded-3xl border border-gray-100/20 group transition-all relative"
    >
      <img src={starsBackground} alt="" className="absolute w-full h-full top-0 left-0 object-cover rounded-3xl opacity-60" />
      <div className="flex flex-col items-center gap-5">
        <img
          src={image}
          alt={`${image}`}
          className="w-full max-w-[200px] group-hover:scale-110 transition duration-500 z-10"
        />
        <p className="text-white text-center text-3xl sm:text-4xl font-bebas z-10">
          {children}
        </p>
      </div>
    </Link>
  );
};

export default CardExplore;
