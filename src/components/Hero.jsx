import React from 'react'
import hero from '../assets/Hero.png'
const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl  mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h3 className='lg:text-7xl text-3xl font-bold lg:leading-snug'>Hi! <br />I'm <i>Rajeshkumar.k</i> </h3>
               <p className='md:text-2xl text-xl mb-4'>Python Ful-Stack Developer.</p>
               <p className='mb-4'>I'm a passionate web developer with expertise in JavaScript, React.js, Bootstrap, and Django. modern web technologies.
                 I love creating beautiful and functional website that solve real world problems.</p>
{/*                
               <button className='bg-black text-white px-3 py-2 w-max rounded-md'>
                <a href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing" download target='_blank'>Download CV</a></button> */}
            </div>
            
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={hero} alt="" className='lg:h-[90vh] h-96' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
