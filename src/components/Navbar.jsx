import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiHackerrank } from "react-icons/si";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-primary-900/95 backdrop-blur-sm text-text-200 z-50 shadow-lg">
      <div className="hidden md:flex ">
        <ul className="hidden md:flex pr-5 space-x-8">
          <li className="hover:text-accent-400 duration-300 cursor-pointer">
            <Link to="home" smooth={true} duration={800}>
              Home
            </Link>
          </li>
          <li className="hover:text-accent-400 duration-300 cursor-pointer">
            <Link to="About" smooth={true} duration={800}>
              About
            </Link>
          </li>
          <li className="hover:text-accent-400 duration-300 cursor-pointer">
            <Link to="skills" smooth={true} duration={800}>
              Skills
            </Link>
          </li>
          <li className="hover:text-accent-400 duration-300 cursor-pointer">
            <Link to="certifications" smooth={true} duration={800}>
              Certifications
            </Link>
          </li>
          <li className="hover:text-accent-400 duration-300 cursor-pointer">
            <Link to="work" smooth={true} duration={800}>
              Projects
            </Link>
          </li>
          <li className="hover:text-accent-400 duration-300 cursor-pointer">
            <Link to="contact" smooth={true} duration={800}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className="md:hidden z-10 mr-2">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-primary-900/95 backdrop-blur-sm flex flex-col justify-center items-center space-y-8"
        }
      >
        <li className="text-2xl hover:text-accent-400 duration-300">
          <Link onClick={handleClick} to="home" smooth={true} duration={800}>
            Home
          </Link>
        </li>
        <li className="text-2xl hover:text-accent-400 duration-300">
          <Link onClick={handleClick} to="About" smooth={true} duration={800}>
            About
          </Link>
        </li>
        <li className="text-2xl hover:text-accent-400 duration-300">
          <Link onClick={handleClick} to="skills" smooth={true} duration={800}>
            Skills
          </Link>
        </li>
        <li className="text-2xl hover:text-accent-400 duration-300">
          <Link
            onClick={handleClick}
            to="certifications"
            smooth={true}
            duration={800}
          >
            Certifications
          </Link>
        </li>
        <li className="text-2xl hover:text-accent-400 duration-300">
          <Link onClick={handleClick} to="work" smooth={true} duration={800}>
            Projects
          </Link>
        </li>
        <li className="text-2xl hover:text-accent-400 duration-300">
          <Link onClick={handleClick} to="contact" smooth={true} duration={800}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Updated Sidebar Social Links with Binary Color Style */}
      <div className="hidden lg:flex fixed flex-col top-[435%] left-3">
        <ul className="space-y-1">
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-primary-800 border border-accent-500/30 hover:border-accent-500">
            <a
              href="mailto:ahmedmhmouad41@gmail.com"
              className="flex justify-between items-center w-full text-text-100 px-4"
            >
              Email <HiOutlineMail size={20} className="ml-2 text-accent-500" />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-primary-800 border border-accent-500/30 hover:border-accent-500">
            <a
              href="https://github.com/ahmed-226"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-text-100 px-4"
            >
              GitHub <FaGithub size={20} className="ml-2 text-accent-500" />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-primary-800 border border-accent-500/30 hover:border-accent-500">
            <a
              href="https://www.linkedin.com/in/ahmed-mahmoud-5837b8253"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-text-100 px-4"
            >
              LinkedIn <FaLinkedin size={20} className="ml-2 text-accent-500" />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-primary-800 border border-accent-500/30 hover:border-accent-500">
            <a
              href="https://www.hackerrank.com/profile/ahmedmhmouad41"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-text-100 px-4"
            >
              HackerRank <SiHackerrank size={20} className="ml-2 text-accent-500" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;