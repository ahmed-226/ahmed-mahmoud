import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight, HiDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import ProfileImage from "../assets/profile-removebg-preview-copy.png";

const Home = () => {
  const [commitCount, setCommitCount] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/ahmed-226/events/public`)
      .then(res => res.json())
      .then(events => {
        const commits = events
          .filter(e => e.type === "PushEvent")
          .reduce((acc, e) => acc + e.payload.commits.length, 0);
        setCommitCount(commits);
      });
  }, []);

  const stats = [
    { number: "2+", label: "Years of Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "16+", label: "Technologies Mastered" },
    { number: commitCount !== null ? `${commitCount}+` : "…", label: "Recent Commits" },
  ];

  const handleDownloadCV = () => {
    window.open('/Ahmed_Mahmoud_Abdelaal.pdf', '_blank');
  };



  return (
    <div name="home" className="min-h-screen bg-primary-900 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent-500 rounded-full animate-pulse delay-75"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse delay-150"></div>
      
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] pt-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-accent-500 text-base font-mono">Fullstack Developer</p>
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                  Hello I'm
                </h1>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient">
                  Ahmed Mahmoud
                </h2>
              </div>
            </div>
            
            <p className="text-text-200 text-base leading-relaxed max-w-lg font-light">
            I’m great at building smooth, user-friendly digital experiences and skilled in multiple programming languages and tools.            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 ">
              <a
                onClick={handleDownloadCV}
                className="btn-primary group"
                type="a"
              >
                <HiDownload className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                Download CV
              </a>

              <Link
                to="#work"
                smooth={true}
                duration={800}
                className="btn-secondary group cursor-pointer inline-flex items-center"
              >
                <span>View Work</span>
                <HiArrowNarrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated Border Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-500/30"></div>
              <div className="absolute inset-4 rounded-full border "></div>
              
              {/* Profile Image Container */}
              <div className="relative w-[550px] h-[550px] lg:w-100 lg:h-100 rounded-full overflow-hidden border-4 border-primary-800 bg-gradient-to-br from-primary-800 to-primary-700 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-primary-700">
                  <img
                    src={ProfileImage}
                    alt="Ahmed Mahmoud - Full Stack Developer"
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Floating Dots */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-accent-500 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-accent-500/60 rounded-full animate-float delay-75"></div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-primary-700">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl lg:text-3xl font-black text-gradient mb-1">
                {stat.number}
              </div>
              <div className="text-text-300 text-xs font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Social Links - Updated with binary color style */}
      <div className="hidden lg:flex fixed flex-col top-[50%] left-0 transform -translate-y-1/2 z-40">
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
        </ul>
      </div>
    </div>
  );
};

export default Home;