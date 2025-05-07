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
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Ahmed Mahmoud, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='text-text-200 text-2xl mb-5 leading-relaxed'>
                            I am passionate about developing innovative solutions that enhance the digital experience for users.
                            I specialize in building web applications and software for a wide range of clients, from startups to established businesses.
                            Whether it's creating responsive websites or full-stack applications, I'm focused on delivering high-quality software that meets the needs of users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About