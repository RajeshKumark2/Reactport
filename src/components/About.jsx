import React from 'react'
import dj from '../assets/dj.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import Bootstrap from '../assets/Bootstrap.png'

import python from '../assets/python.png'
import dj3 from '../assets/dj3.png'
import flask from '../assets/flask.png'
import Hi from '../assets/Hi.png'
import sql from '../assets/sql.png'
import doc from '../assets/doc.png'

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm <i>Rajeshkumar.k</i></p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            Junior Python Full-Stack Developer with expertise in web development.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                                <p className='mt-4 text-lg text-gray-600'>
                                    I started my journey in web development with a passion for creating intuitive and 
                                    scalable applications. With proficiency in the Python. 
                                    a dedicated Junior Python Full Stack Developer. I have expertise in both 
                                    front-end and back-end development, allowing me to design and build dynamic, 
                                    user-friendly websites With a solid foundation 
                                    in front-end technologies like JavaScript, React.js, and Bootstrap, 
                                    I focus on crafting responsive and intuitive designs to ensure a seamless user 
                                    experience. On the back-end, along with frameworks like
                                    Django and Flask, enables me to develop robust and efficient systems that are both 
                                    secure and scalable. I am driven by a commitment to innovation and problem-solving, 
                                    eager to collaborate with dynamic teams, and ready to contribute my skills to 
                                    projects that drive organizational success and growth.
                                </p>
                                <img src={dj} alt="" className='p-2 rounded-lg w-52 mt-4' />
                            </div>
                            <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                                <h3 className='text-2xl font-semibold text-red-600'>Skills </h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Bootstrap} alt="" className='w-10' />
                                        <span className='font-semibold'> Bootstrap</span>
                                    </div>



                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={python} alt="" className='w-8' />
                                        <span className='font-semibold'> Python</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={dj3} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'> Django</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={flask} alt="" className='w-10' />
                                        <span className='font-semibold'>Flask</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Hi} alt="" className='w-10' />
                                        <span className='font-semibold'>GitHub</span>
                                    </div>

                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={sql} alt="" className='w-10' />
                                        <span className='font-semibold'>MySql</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={doc} alt="" className='w-9' />
                                        <span className='font-semibold'>Docker</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>
                            Apart from coding, I am passionate about learning new technologies and keeping 
                            myself up-to-date with the latest trends in web development. 
                            helping others dive deep into the world of programming and technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
