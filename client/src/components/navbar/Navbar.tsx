import navIcon from "../../assets/navIcon.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import BackgroundCircles from "./BackgroundCircles";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { motion } from "motion/react";
import { mobileNavbarData } from "../../utils";

const Navbar = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const { isAuthenticated } = useAuthContext();

  const linkStyle =
    "relative hover:text-teal-400 hover:scale-110 transition duration-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-teal-400 after:to-purple-500 after:transition-all after:duration-500 hover:after:w-full";

  return (
    <nav className="bg-black/40 text-text-gray border-b border-teal-500/20 shadow-xl shadow-teal-500 text-2xl font-bebas px-5">
      <div className="flex items-center justify-between h-25">
        <Link to="/" className="z-40" onClick={() => setIsMenuToggled(false)}>
          <motion.img
            className="h-20 rounded-4xl"
            src={navIcon}
            alt="planet"
            animate={{
              filter: [
                "drop-shadow(0 0 3px rgba(20, 184, 166, 0.5))",
                "drop-shadow(0 0 8px rgba(147, 51, 234, 0.6))",
                "drop-shadow(0 0 3px rgba(20, 184, 166, 0.5))",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </Link>

        {isAboveMediumScreen ? (
          <>
            <div className="flex gap-8 -ml-25">
              <Link to={"/explore"}>
                <p className={`${linkStyle}`}>Explore</p>
              </Link>
            </div>

            {!isAuthenticated ? (
              <div className="flex gap-8">
                <Link to="/login">
                  <p className={`${linkStyle}`}>Log in</p>
                </Link>

                <Link to="/register">
                  <p className={`${linkStyle}`}>Register</p>
                </Link>
              </div>
            ) : (
              <div className="flex gap-8">
                <Link to="/logout">
                  <p className={`${linkStyle}`}>Logout</p>
                </Link>
              </div>
            )}
          </>
        ) : (
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <Bars3Icon
              className={`${linkStyle} h-10 w-10 text-text-gray cursor-pointer`}
            />
          </button>
        )}

        {!isAboveMediumScreen && isMenuToggled && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed right-0 bottom-0  z-30 h-full w-full bg-black"
          >
            <BackgroundCircles />

            <div className="flex justify-end p-10">
              <motion.button
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <XMarkIcon
                  className={`${linkStyle} h-10 w-10 text-text-gray cursor-pointer`}
                />
              </motion.button>
            </div>

            <div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
                  },
                }}
                className="flex flex-col justify-center items-center gap-5 mt-10"
              >
                {mobileNavbarData.map((item) => (
                  <motion.div
                    key={item.to}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      className={`${linkStyle} drop-shadow-xl drop-shadow-teal-500/80`}
                      to={item.to}
                      onClick={() => setIsMenuToggled(false)}
                    >
                      <p className={`${linkStyle}`}>{item.label}</p>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 250 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="flex flex-col justify-center items-center gap-8 mt-10"
                >
                  {!isAuthenticated ? (
                    <div className="flex flex-col gap-5 items-center">
                      <Link to="/login" onClick={() => setIsMenuToggled(false)}>
                        <p className="hover:text-purple-500 hover:scale-110 transition duration-500 drop-shadow-xl drop-shadow-purple-500/80">
                          Log In
                        </p>
                      </Link>

                      <Link
                        to="/register"
                        onClick={() => setIsMenuToggled(false)}
                      >
                        <p className="hover:text-purple-500 hover:scale-110 transition duration-500 drop-shadow-xl drop-shadow-purple-500/80">
                          Register
                        </p>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5 items-center">
                      <Link
                        to="/logout"
                        onClick={() => setIsMenuToggled(false)}
                      >
                        <p className="hover:text-purple-500 hover:scale-110 transition duration-500 drop-shadow-xl drop-shadow-purple-500/80">
                          Logout
                        </p>
                      </Link>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
