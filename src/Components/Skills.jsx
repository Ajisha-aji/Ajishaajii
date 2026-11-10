import React, { useRef } from 'react';
import { FaHtml5, FaCss3Alt,FaReact,FaBootstrap, FaCode, FaGithub, FaGithubSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMui } from "react-icons/si";
import { FaMobileScreenButton } from "react-icons/fa6";
function Skills() {
   
  return (
    <div  className='relative bg-gradient-to-r from-black to-lime-600/30 grid grid-cols-1  bg-black text-white h-170 lg:h-115  opacity-98'>
    <div className='lg:px-25 pt-15 space-y-5 px-6'>
       <div className='flex justify-center'>
         <h1 className='lg:text-4xl text-xl  font-bold text-white  '>My <span className='text-lime-500'>Skills</span></h1>
        <FaCode className='text-4xl mt-1 ml-2 hidden lg:block' />
       </div>
        <h3 className='text-lg text-center'>Technologies I Work With</h3>
        <div className='grid lg:grid-cols-4 grid-cols-2'>
             <div className=' w-35 h-23 bg-lime-700/20 pt-3
                       border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white space-y-1 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500'>
                   <div className='flex justify-center'><FaHtml5 className='text-orange-500 text-2xl'/></div>
                    <h1 className='text-xl font-bold text-white '>HTML5</h1>
                    </div>
                    <div className=' w-35 h-23 bg-lime-700/20 pt-3
                       border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white space-y-1 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500'>
                   <div className='flex justify-center'><FaCss3Alt className='text-blue-400 text-2xl'/></div>
                    <h1 className='text-xl font-bold text-white '>CSS3</h1>
                    </div>
                    <div className=' w-35 h-23 bg-lime-700/20 pt-3
                       border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white space-y-1 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500'>
                   <div className='flex justify-center'><IoLogoJavascript className='text-yellow-300 text-2xl'/></div>
                    <h1 className='text-xl font-bold text-white '>JavaScript</h1>
                    </div>
                    <div className=' w-35 h-23 bg-lime-700/20 pt-3
                       border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white space-y-1 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500'>
                   <div className='flex justify-center'><FaReact className='text-orange-500 text-2xl'/></div>
                    <h1 className='text-xl font-bold text-white '>React js</h1>
                    </div>
                    <div className=' w-35 h-23 bg-lime-700/20 pt-3
                       border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white space-y-1 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500'>
                   <div className='flex justify-center'><RiTailwindCssFill className='text-blue-500 text-2xl'/></div>
                    <h1 className='text-xl font-bold text-white '>Tailwind Css</h1>
                    </div>
                    <div className=' w-35 h-23 bg-lime-700/20 pt-3
                       border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white space-y-1 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500'>
                   <div className='flex justify-center'><FaBootstrap className='text-violet-500 text-2xl'/></div>
                    <h1 className='text-xl font-bold text-white '>Bootstrap</h1>
                    </div>
                     <div className=' w-35 h-23 bg-lime-700/20 pt-3
                       border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white space-y-1 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500'>
                   <div className='flex justify-center'><SiMui  className='text-blue-500 text-2xl'/></div>
                    <h1 className='text-xl font-bold text-white '>Material UI</h1>
                    </div>
                     <div className=' w-35 h-23 bg-lime-700/20 pt-3
                       border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white space-y-1 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500'>
                   <div className='flex justify-center'><FaGithubSquare  className='text-black text-2xl text-white'/></div>
                    <h1 className='text-xl font-bold text-white '>GitHub</h1>
                    </div>
        </div>
    </div>
    
    </div>
  )
}

export default Skills