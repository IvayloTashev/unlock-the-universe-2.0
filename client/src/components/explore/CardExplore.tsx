import React from "react";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  children: React.ReactNode;
  title: string;
};

const CardExplore = ({ image, children, title }: Props) => {
  return (
    <Link to={title.toLowerCase().replaceAll(' ','')} className="w-full sm:w-[45%] md:w-[30%] lg:w-[25%] p-5 bg-card rounded-3xl border border-gray-100/20 group transition-all">
      <div className="flex flex-col items-center gap-5">
        <img
          src={image}
          alt={`${image}`}
          className="w-full max-w-[200px] group-hover:scale-110 transition duration-500"
        />
        <p className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bebas">
          {children}
        </p>
      </div>
    </Link>
  );
};

export default CardExplore;
