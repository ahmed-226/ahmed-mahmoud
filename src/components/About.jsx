import React from 'react'

const About = () => {
    return (
        <div name='About' className='w-full h-screen bg-gradient-to-b from-primary-800 to-primary-700 text-text-100'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-accent-500'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Ahmed Mahmoud, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='text-text-200 text-2xl mb-5 leading-relaxed'>
                            Passionate Software Engineer with strong expertise in full-stack web development,
                            desktop applications.
                            Skilled in various development frameworks from backend API (Node.js, Express,
                            PostgreSQL, MongoDB) dynamic frontends (React, Material UI).
                            I approach projects with both technical depth and a systems-thinking mindset
                            understanding the big picture while delivering efficient, clean code. I thrive in fast-learning
                            environments, I can work and understand systems end-to-end and learn new skills fast
                            enough to adapt to almost any project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About