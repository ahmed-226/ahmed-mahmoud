import React, { useState, useEffect } from "react";
import { HiExternalLink } from "react-icons/hi";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAward,
  FaCertificate,
} from "react-icons/fa";
import { data } from "../data/Certifications";

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const handleCertificateClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      name="certifications"
      className="w-full bg-gradient-to-b from-primary-800 to-primary-800 text-text-100 py-20 relative overflow-hidden"
    >
      {/* Background Elements - Updated colors to match theme */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-accent-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Modern Header - Updated colors */}

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent-500">
            Certifications
          </p>
          <p className="py-6 text-2xl text-text-200">
            Professional achievements and continuous learning journey
          </p>
        </div>

        {/* Modern Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Certificate Display - Updated background */}
          <div className="relative bg-primary-600/20 backdrop-blur-xl rounded-3xl p-8 border border-primary-600/30 shadow-2xl">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-all duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {data.map((cert) => (
                  <div key={cert.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
                      {/* Certificate Image */}
                      <div className="order-2 md:order-1">
                        <div
                          onClick={() => handleCertificateClick(cert.link)}
                          className="group relative cursor-pointer"
                        >
                          {cert.image ? (
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-accent-500/25">
                              <div className="aspect-[4/3] bg-white rounded-2xl p-4">
                                <img
                                  src={cert.image}
                                  alt={`${cert.title} certificate`}
                                  className="w-full h-full object-contain"
                                />
                              </div>

                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-end justify-center p-6">
                                <div className="text-center text-text-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                  <HiExternalLink className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                                  <p className="font-medium">
                                    View Certificate
                                  </p>
                                </div>
                              </div>

                              {/* Verified Badge */}
                              <div className="absolute top-4 right-4 bg-secondary-500 text-primary-900 p-2 rounded-full shadow-lg">
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          ) : (
                            <div className="aspect-[4/3] bg-gradient-to-br from-primary-600/30 to-primary-700/30 rounded-2xl flex items-center justify-center border border-primary-600/40">
                              <div className="text-center">
                                <FaAward className="w-16 h-16 text-accent-500 mx-auto mb-4" />
                                <p className="text-text-200">
                                  Certificate Preview
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Certificate Info */}
                      <div className="order-1 md:order-2 space-y-6">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${cert.badgeColor} text-white shadow-lg`}
                            >
                              {cert.issuer}
                            </span>
                            <span className="text-text-300 text-sm font-medium">
                              {cert.date}
                            </span>
                          </div>

                          <h3 className="text-3xl md:text-4xl font-bold text-text-100 mb-4 leading-tight">
                            {cert.title}
                          </h3>

                          <p className="text-lg text-text-200 leading-relaxed mb-6">
                            {cert.description}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          <button
                            onClick={() => handleCertificateClick(cert.link)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-secondary-500 hover:from-accent-400 hover:to-secondary-400 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent-500/25 transform hover:scale-105"
                          >
                            <HiExternalLink className="w-5 h-5" />
                            View Certificate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modern Navigation Arrows - Updated colors */}
          <button
            onClick={goToPrevious}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-600/80 hover:bg-accent-500/80 backdrop-blur-sm text-text-100 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent-500/30 border border-primary-600/40 hover:border-accent-500/50"
          >
            <FaChevronLeft className="w-5 h-5 mx-auto" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-600/80 hover:bg-accent-500/80 backdrop-blur-sm text-text-100 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent-500/30 border border-primary-600/40 hover:border-accent-500/50"
          >
            <FaChevronRight className="w-5 h-5 mx-auto" />
          </button>
        </div>

        {/* Modern Progress Indicators - Updated colors */}
        <div className="flex justify-center items-center gap-6 mt-12">
          {/* Dots */}
          <div className="flex gap-3">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent-500 scale-125 shadow-lg shadow-accent-500/50"
                    : "bg-primary-600/60 hover:bg-accent-500/60"
                }`}
              />
            ))}
          </div>

          {/* Modern Progress Bar */}
        </div>

        {/* Auto-play Status - Updated colors */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoPlaying
                ? "bg-secondary-500/20 text-secondary-500 border border-secondary-500/30"
                : "bg-primary-600/20 text-text-300 border border-primary-600/30"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? "bg-secondary-500" : "bg-text-300"
              }`}
            />
            {isAutoPlaying ? "Auto-playing" : "Paused"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
