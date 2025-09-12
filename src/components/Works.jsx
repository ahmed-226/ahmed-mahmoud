import React from 'react'
import { data } from "../data/Projects.js";

const Works = () => {
    const project = data;

    return (
        <div name='work' className='w-full text-text-100 bg-gradient-to-b pt-10 from-primary-800 to-primary-700'>
            <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-accent-500'>
                        Work
                    </p>
                    <p className='py-6 text-2xl text-text-200'>Check out some of my recent work</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                            className="w-full h-[18rem] shadow-lg shadow-primary-900/50 group container rounded-md flex justify-left text-left items-end pl-5 pb-2 mx-auto relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-primary-900 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                            <div className="opacity-0 group-hover:opacity-100 z-10">
                                <span className="text-2xl text-left font-bold text-text-100 tracking-wider">
                                    {item.name}
                                </span>
                                <div className="pt-4 text-left">
                                    <a href={item.github}>
                                        <button className="text-center rounded-lg px-4 py-3 m-2 ml-0 bg-accent-500 hover:bg-accent-400 text-text-100 font-bold text-lg transition-colors duration-300">
                                            Code
                                        </button>
                                    </a>
                                    <a href={item.live} target="_blank" rel="noopener noreferrer">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 ml-0 bg-secondary-500 hover:opacity-80 text-primary-900 font-bold text-lg transition-colors duration-300">
                                            Live
                                        </button>
                                    </a>
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