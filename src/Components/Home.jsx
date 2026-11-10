import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaDownload, FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import img from "../assets/WhatsApp_Image_2026-10-31_at_10.35.49_AM-removebg-preview.png";
import img1 from "../assets/857b617e-6262-4296-8f7b-cb5644a81750.png";
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Education from './Education';
import { 
    IoIosArrowRoundForward } from 'react-icons/io';
import Certificate from './Certificate';
function Home() {
    return (
        <>
            <div className='bg-gradient-to-r from-black to-lime-600/30  lg:px-3 lg:pt-4 grid lg:grid-cols-2 grid-cols-1  bg-black text-white lg:h-140 h-180 '>
                <div className='lg:space-y-5 space-y-3 p-5 lg:px-25 lg:py-10  py-10 mt-0 text-center lg:text-start'>
                    <h1 className='text-xl '>Hi,I'm</h1>
                    <h1 className='md:text-8xl text-5xl  font-bold text-lime-500  bg-gradient-to-r from-black to-lime-800/30 '>Aji<span className='text-white'>sha</span></h1>
                    <h2 className='text-2xl bg-gradient-to-l from-black to-lime-800/30'>I’m a <span className='text-lime-500 '>Frontend Developer</span></h2>
                    <p className='md:text-2xl lg:text-lg text-center lg:text-start bg-gradient-to-r from-black to-lime-800/30' >An enthusiastic Frontend Developer
                        passionate about building clean, user-friendly,
                        and responsive web applications.</p>
                    <div className='flex space-x-3'><a
                        href="/Ajisha_Resume.pdf" download='/Ajisha_Resume.pdf' className="px-5 py-2 rounded-md bg-lime-500 text-black  hover:bg-lime-400 transition duration-300 flex w-40 justify-between  hover:-translate-y-1 transition duration-300"
                    >

                        <span>Download CV</span> <FaDownload className='mt-1' />
                    </a>
                    <a
                        href='#project' className="px-5 py-2 rounded-md border border-lime-500 text-white hover:text-lime-400 hover:-translate-y-1 transition duration-300 flex w-40 "
                    >

                        <span>View Project</span> <IoIosArrowRoundForward className='mt-1' />
                    </a></div>
                    <div className='flex space-x-4 justify-center lg:justify-start mt-5'>
                        <a href="https://www.linkedin.com/in/ajisha-l-32aji" target='_blank'><CiLinkedin className="text-lime-400 hover:text-white hover:-translate-y-1 transition duration-300 text-2xl" /></a>
                        <FaGithub className="text-lime-400 hover:text-white hover:-translate-y-1 transition duration-300 text-2xl" />
                        <a href="mailto:ajisha2192004@gmail.com" target='_blank'><IoMailSharp className="text-lime-400 hover:text-white hover:-translate-y-1 transition duration-300 text-2xl" /></a>

                    </div>
                </div>

                <div className='relative flex  justify-center lg:mt-18'>
                    <div className=' shadow-lg shadow-lime-500/60 rounded-full lg:h-80 h-60 p-1 '>
                        <div className=' shadow-lg shadow-lime-500/80 rounded-full lg:h-80 h-60 p-1'>
                            <img src={img} alt="" className='rounded-full shadow-lg shadow-lime-400 lg:h-80 h-60 animate-pulse  bg-black' /></div>
                              <img src={img1} alt="" className='absolute left-12 top-0 h-25 animate-bounce hidden lg:block' />
                    </div>
                 
                    
                </div>


            </div>
            <About />
            <Skills />
            <Project  />
            <Certificate/>
            <Education />
            
            </>
    )
}

export default Home