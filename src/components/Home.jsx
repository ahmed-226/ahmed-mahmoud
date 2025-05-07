import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-scroll";
import CV from "../assets/Ahmed_Mahmoud.pdf";
import ProfileImage from "../assets/profile.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-primary-900 to-primary-800"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <p className="text-accent-500 text-xl font-medium mb-2">
              Hi, my name is
            </p>
            <h1 className="text-5xl sm:text-7xl font-bold text-text-100 tracking-tight">
              AHMED
            </h1>
            <h2 className="text-4xl sm:text-6xl font-bold text-text-300 tracking-wide mt-1">
              I'm a Full Stack Developer.
            </h2>
            <p className="text-text-200 py-6 max-w-[700px] text-xl leading-relaxed">
              I'm a full-stack developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I'm focused on building responsive full-stack web
              applications.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link to="work" duration={800} smooth={true}>
                <div className="btn-primary group">
                  View Work
                  <span className="group-hover:translate-x-1 group-hover:rotate-90 transition-transform duration-300 ml-3">
                    <HiArrowNarrowRight size={25} />
                  </span>
                </div>
              </Link>

              <a href={CV} target="_blank" rel="noopener noreferrer">
                <div className="btn-secondary group">
                  View CV
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    <MdOutlineArrowOutward size={22} />
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-accent-500/10 animate-pulse"></div>
            <div className="absolute w-56 h-56 sm:w-64 sm:h-64 -right-4 bottom-4 rounded-lg border-2 border-secondary-500/30"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500 to-secondary-500 rounded-2xl rotate-6 opacity-20"></div>
              <div className="relative overflow-hidden rounded-2xl border-4 border-text-100/10 shadow-2xl shadow-primary-900/70">
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="w-80 h-96 sm:w-96 sm:h-[28rem] object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-500/10 rounded-full border border-accent-500/30 z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
