import React from 'react'
import { data } from '../data/Skills'

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='mb-5'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4 text-2xl'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {
            data.map((Skill) => (
              <div key={Skill.id} className='pt-5 flex flex-col justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
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

