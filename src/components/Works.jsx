import React from 'react'
import { data } from "../data/Projects.js";

const Works = () => {
    const project = data;

    return (
        <div name='work' className='w-full text-text-100 bg-gradient-to-b pt-10 from-primary-800 to-primary-700 py-20'>
            <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-accent-500'>
                        Work
                    </p>
                    <p className='py-6 text-2xl text-text-200'>Check out some of my recent work</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.map((item, index) => (
                        <div
                            key={index}
                            className="bg-primary-600/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-accent-500/20 border border-primary-600/30 overflow-hidden group transition-all duration-300 hover:scale-105"
                        >
                            {/* Project Image */}
                            <div 
                                className="w-full h-48 relative overflow-hidden"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-60"></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-5 space-y-3">
                                {/* Project Name */}
                                <h3 className="text-xl font-bold text-text-100 group-hover:text-accent-500 transition-colors duration-300">
                                    {item.name}
                                </h3>

                                {/* Project Description */}
                                <p className="text-sm text-text-200 line-clamp-2">
                                    {item.description}
                                </p>

                                {/* Tech Keywords */}
                                {item.tech && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.tech.map((technology, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="px-2 py-1 text-xs font-medium bg-accent-500/20 text-accent-500 rounded-md border border-accent-500/30"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Buttons */}
                                <div className="flex gap-3 pt-2">
                                    <a 
                                        href={item.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <button className="w-full text-center rounded-lg px-4 py-2 bg-accent-500 hover:bg-accent-400 text-text-100 font-semibold text-sm transition-colors duration-300">
                                            View Code
                                        </button>
                                    </a>
                                    {item.live && (
                                        <a 
                                            href={item.live} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <button className="w-full text-center rounded-lg px-4 py-2 bg-secondary-500 hover:bg-secondary-400 text-primary-900 font-semibold text-sm transition-colors duration-300">
                                                Live Demo
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Works