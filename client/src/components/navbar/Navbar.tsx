import React, { useState } from "react";
import navIcon from "../../assets/navIcon.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import BackgroundCircles from "./BackgroundCircles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const linkStyle = "hover:text-teal-500 hover:scale-110 transition duration-500";

  return (
    <nav className="bg-card text-text-gray text-2xl font-bebas px-6 border-b-1 border-gray-100/20">
      <div className="flex items-center justify-between h-25">
        <Link to="/" className="z-30" onClick={() => setIsMenuToggled(false)}>
          <img className="h-22 rounded-4xl" src={navIcon} alt="planet" />
        </Link>

        {isAboveMediumScreen ? (
          <>
            <div className="flex gap-8">
              <Link to={"/explore"}>
                <p className={`${linkStyle}`}>Explore</p>
              </Link>
            </div>

            <div className="flex gap-8">
              <Link to="/signup">
                <p className={`${linkStyle}`}>Sign Up</p>
              </Link>

              <Link to="/register">
                <p className={`${linkStyle}`}>Register</p>
              </Link>
            </div>
          </>
        ) : (
          <button className="" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <Bars3Icon className={`${linkStyle} h-10 w-10 text-text-gray cursor-pointer`} />
          </button>
        )}

        {!isAboveMediumScreen && isMenuToggled && (
            <div className="fixed right-0 bottom-0 bg-card z-20 h-full w-full">
              <BackgroundCircles />

              <div className="flex justify-end p-10">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon className={`${linkStyle} h-10 w-10 text-text-gray cursor-pointer`} />
                </button>
              </div>

              <div>
                <div className="flex flex-col justify-center items-center gap-8 mt-10">
                  <Link to={"/explore"} onClick={() => setIsMenuToggled(false)}>
                    <p className={`${linkStyle}`}>Explore</p>
                  </Link>

                  <Link to="/signup" onClick={() => setIsMenuToggled(false)}>
                    <p className={`${linkStyle}`}>Sign Up</p>
                  </Link>

                  <Link to="/register" onClick={() => setIsMenuToggled(false)}>
                    <p className={`${linkStyle}`}>Register</p>
                  </Link>
                </div>
              </div>
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
