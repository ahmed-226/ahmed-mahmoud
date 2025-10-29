import React from "react";
import { HiArrowNarrowRight, HiEye } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaWhatsapp, FaEnvelope, FaHackerrank } from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import ProfileImage from "../assets/profile-removebg-preview-copy.png";

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/ahmed Mahmoud_Resumre.pdf';
    link.download = 'Ahmed_Mahmoud_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div name="home" className="min-h-screen bg-primary-900 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent-500 rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent-500 rounded-full animate-pulse delay-75 pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse delay-150 pointer-events-none"></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] pt-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-accent-500 text-base font-mono">Software Engineer | DevOps | Fullstack</p>
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                  Hello I'm
                </h1>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient">
                  Ahmed Mahmoud
                </h2>
              </div>
            </div>
            
            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 text-text-200">
              <a 
                href="https://wa.me/201061008946" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent-500 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>+02 01061008946</span>
              </a>
              
              <a 
                href="mailto:ahmedmahmouad41@gmail.com"
                className="inline-flex items-center gap-2 hover:text-accent-500 transition-colors"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>ahmedmahmouad41@gmail.com</span>
              </a>
              
              <a 
                href="https://www.hackerrank.com/profile/ahmedmhmouad41" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent-500 transition-colors"
              >
                <FaHackerrank className="w-5 h-5" />
                <span>HackerRank</span>
              </a>
              
              <a 
                href="https://www.credly.com/users/ahmed-mhmouad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent-500 transition-colors"
              >
                <SiCredly className="w-5 h-5" />
                <span>Credly</span>
              </a>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 relative z-20">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300 cursor-pointer group relative z-30"
              >
                <HiEye className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                Download CV
              </button>

              <Link
                to="work"
                smooth={true}
                duration={800}
                className="inline-flex items-center px-6 py-3 border-2 border-accent-500 text-accent-500 font-semibold rounded-lg hover:bg-accent-500 hover:text-white transition-all duration-300 cursor-pointer group relative z-30"
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
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-500/30 pointer-events-none"></div>
              <div className="absolute inset-4 rounded-full border pointer-events-none"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-primary-800 bg-gradient-to-br from-primary-800 to-primary-700 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-primary-700">
                  <img
                    src={ProfileImage}
                    alt="Ahmed Mahmoud - Full Stack Developer"
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Floating Dots */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-accent-500 rounded-full animate-float pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-accent-500/60 rounded-full animate-float delay-75 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
