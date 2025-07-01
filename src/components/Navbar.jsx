import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiHackerrank } from "react-icons/si";
import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary-900/95 backdrop-blur-sm text-text-200 z-50 shadow-lg">
      <div>
        <img src={Logo} alt="logo" className="w-[100px]" />
      </div>

      <div className="hidden md:flex">
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

      <div className="hidden lg:flex fixed flex-col top-[435%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-white">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedmhmouad41@gmail.com"
              className="flex justify-between items-center w-full text-gray-500"
            >
              Email <HiOutlineMail size={30} className="ml-2 text-red-600" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gradient-to-r from-gray-700 to-gray-600">
            <a
              href="https://github.com/ahmed-226"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-white font-medium pl-4"
            >
              GitHub <FaGithub size={30} className="ml-2" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gradient-to-r from-blue-600 to-blue-500">
            <a
              href="https://www.linkedin.com/in/ahmed-mahmoud-5837b8253"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-white font-medium pl-4"
            >
              LinkedIn <FaLinkedin size={30} className="ml-2" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gradient-to-r from-green-600 to-green-500">
            <a
              href="https://www.hackerrank.com/profile/ahmedmhmouad41"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-white font-medium pl-4"
            >
              HackerRank <SiHackerrank size={25} className="ml-2 text-white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
