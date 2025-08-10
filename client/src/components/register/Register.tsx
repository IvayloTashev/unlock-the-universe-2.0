import React from "react";
import backgroundImageDesktop from "../../assets/register-background-desktop.jpg";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="relative">
      <img
        src={backgroundImageDesktop}
        alt="background-image"
        className="absolute opacity-50 w-full h-[90vh] object-cover brightness-50"
      />

      <div className="pt-40">
        <div className="border border-gray-100/20 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%] text-white mx-auto py-5 rounded-2xl bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <h1 className="text-3xl font-bebas text-center">Registration</h1>
          <form action="" className="p-4 flex flex-col gap-8">
            <div className="border-b flex justify-between">
              <input
                type="text"
                placeholder="Username"
                className="p-2 outline-none"
              />
              <UserIcon className="w-5 text-indigo-300" />
            </div>

            <div className="border-b flex justify-between">
              <input
                type="text"
                placeholder="Email"
                className="p-2 outline-none"
              />
              <EnvelopeIcon className="w-5 text-indigo-300" />
            </div>

            <div className="border-b flex justify-between">
              <input
                type="password"
                placeholder="Password"
                className="p-2 outline-none"
              />
              <LockClosedIcon className="w-5 text-indigo-300" />
            </div>

            <div className="border-b flex justify-between">
              <input
                type="password"
                placeholder="Repeat Password"
                className="p-2 outline-none"
              />
              <LockClosedIcon className="w-5 text-indigo-300" />
            </div>

            <button className="mt-4 bg-indigo-500/20 border border-indigo-400 text-indigo-200 py-2 rounded-lg font-semibold hover:bg-indigo-500/30 hover:shadow-[0_0_10px_rgba(99,102,241,0.7)] transition">
              Create an account
            </button>
            <Link className="hover:cursor-pointer mx-auto" to={"/login"}>
              <p className="text-md text-text-gray hover:text-white">Already have an account?</p>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
