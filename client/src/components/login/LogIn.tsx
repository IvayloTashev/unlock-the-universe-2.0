import { useActionState, useEffect, useState } from "react";
import backgroundImageDesktop from "../../assets/register-background-desktop.jpg";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useLoginAction } from "../../hooks/useForm";
import { motion } from "motion/react";

const LogIn = () => {
  const navigate = useNavigate();
  const loginAction = useLoginAction();
  const [state, formAction, isPending] = useActionState(loginAction, null);

  const [email, setEmail] = useState("");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formAction(formData);
  };

  useEffect(() => {
    if (state?.success) {
      navigate("/");
    }
  }, [state]);

  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <img
        src={backgroundImageDesktop}
        alt="background-image"
        className="absolute opacity-50 w-full h-screen object-cover brightness-50"
      />

      <div className="pt-40">
        <div className="border border-gray-100/20 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%] text-white mx-auto py-5 rounded-2xl bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <h1 className="text-3xl font-bebas text-center">
            Log in to your account
          </h1>
          <form
            action={formAction}
            className="p-4 flex flex-col gap-8"
            onSubmit={onFormSubmit}
          >
            <div className="border-b flex justify-between">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 outline-none w-[95%]"
              />
              <EnvelopeIcon className="w-5 text-indigo-300" />
            </div>

            <div className="border-b flex justify-between">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="p-2 outline-none w-[95%]"
              />
              <LockClosedIcon className="w-5 text-indigo-300" />
            </div>

            <button
              type="submit"
              className="mt-4 bg-indigo-500/20 border border-indigo-400 text-indigo-200 py-2 rounded-lg font-semibold hover:bg-indigo-500/30 hover:shadow-[0_0_10px_rgba(99,102,241,0.7)] transition"
            >
              Log in
            </button>

            {state?.error && (
              <p className="text-red-400 text-center">{state.error}</p>
            )}

            <Link className="hover:cursor-pointer mx-auto" to={"/register"}>
              <p className="text-md text-text-gray hover:text-white">
                Don't have an account?
              </p>
            </Link>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default LogIn;
