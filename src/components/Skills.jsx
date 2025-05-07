import React from 'react'
import { data } from '../data/Skills'

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-gradient-to-b from-primary-700 to-primary-800 text-text-100'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='mb-5'>
          <p className='text-4xl font-bold inline border-b-4 border-accent-500'>Skills</p>
          <p className='py-4 text-2xl text-text-200'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {
            data.map((Skill) => (
              <div key={Skill.id} className='pt-5 flex flex-col justify-center items-center rounded-md shadow-lg shadow-primary-900/40 hover:shadow-accent-500/20 hover:scale-110 duration-300 bg-primary-600/10 backdrop-blur-sm p-4'>
                <img className='w-20 mx-auto' src={Skill.image} alt={`${Skill.name} icon`} />
                <p className='my-4'>{Skill.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills