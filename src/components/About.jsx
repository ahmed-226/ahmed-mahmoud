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
                        <p className='text-text-200 text-xl leading-relaxed'>
                            I'm a passionate Software Engineer specializing in both full-stack development and DevOps practices. 
                            With expertise spanning from frontend technologies like React and JavaScript to backend systems using 
                            Node.js, Express, PostgreSQL, and MongoDB, I build complete, scalable applications from the ground up. 
                            My experience extends to desktop applications, computer vision, and Python development, giving me a 
                            versatile toolkit for solving diverse technical challenges.
                        </p>
                        <p className='text-text-200 text-xl mt-5 leading-relaxed'>
                            What sets me apart is my strong DevOps foundation I don't just write code, I ensure it runs reliably 
                            at scale. I leverage AWS, Docker, Kubernetes, and CI/CD pipelines to automate deployments and maintain 
                            robust infrastructure. This dual expertise allows me to think holistically about software: from crafting 
                            clean, efficient code to architecting the systems that keep it running smoothly in production. Currently 
                            pursuing a degree in System and Biomedical Engineering while continuously building innovative solutions 
                            that bridge development and operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About