import React from 'react'
import { data } from '../data/Skills'

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-gradient-to-b from-primary-700 to-primary-800 text-text-100 py-20'>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='mb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-accent-500'>Skills & Technologies</p>
          <p className='py-4 text-xl text-text-200'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center py-8'>
          {
            data.map((skill) => (
              <div 
                key={skill.id} 
                className='group bg-primary-600/20 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-accent-500/20 hover:scale-105 hover:bg-primary-600/30 transition-all duration-300 border border-primary-600/30'
              >
                <div className='flex flex-col items-center space-y-4'>
                  <div className='w-16 h-16 flex items-center justify-center bg-gradient-to-br from-accent-500/20 to-secondary-500/20 rounded-lg group-hover:from-accent-500/30 group-hover:to-secondary-500/30 transition-all duration-300'>
                    <img 
                      className='w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-300' 
                      src={skill.image} 
                      alt={`${skill.name} icon`} 
                    />
                  </div>
                  <p className='text-sm font-medium text-text-200 group-hover:text-text-100 transition-colors duration-300'>
                    {skill.name}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills