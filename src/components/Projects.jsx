import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import Ra from '../assets/Ra.png'
import Youtube from '../assets/Youtube.png'
import Webelite from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Build with Django and Python, it my skills and Professional Journey.Completed password encryption and database-backend authentication.',
          image: Portfolio,
          live: "",
          github: ""
        },
        {
          title: 'Portfolio',
          desc: 'This Portfolio! Build with Complete React.js for JavaScript Build my Front-end, A responsive web page showcasing clean and modern user interface.',
          image: Ra,
          live: "",
          github: ""
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
