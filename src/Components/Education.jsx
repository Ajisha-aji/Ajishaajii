import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { IoMailSharp } from "react-icons/io5";
import { FaGithub, FaUserGraduate } from "react-icons/fa";
import Contact from './Contact';

function Education() {
    return (
       <>
        <div className='bg-gradient-to-r from-lime-600/30 to-black  bg-black text-white h-160 lg:h-180  opacity-98 lg:px-25 px-6 '>
            <div className='pt-15  mb-5 space-y-3'>
               <div className='flex justify-center'> 
                 <h1 className='lg:text-5xl text-xl  font-bold text-white text-center'><span className=' text-lime-500'>Educ</span>ation </h1>
                <FaUserGraduate className='text-3xl mt-4 ml-2 text-lime-500 hidden lg:block'/>
               </div>
                <h3 className='text-md text-center'>My Learning Journey</h3>
            </div>
            <div className='grid grid-cols-1 '>
                <div className='   flex flex-col justify-center items-center w-full'>
                    <div className='border-l border-lime-500 h-105 '>
                    <div className='w-70 lg:w-160 w-2/3 h-43 bg-lime-700/20 pt-3 m-x-60
                       border rounded-xl opacity-90  border-lime-500/30 m-5 text-white space-y-4 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500 mt-8'>
                     
                    <div className='mt-[-100px]'>
                        <span className='text-lime-500 text-9xl lg:ml-[-680px] ml-[-320px]'>.</span>
                       <div className='mt-5'>
                         <h2 className="lg:text-xl font-bold text-white mt-[-29px] ml-4">
                            B.E. Electronics and Communication Engineering
                        </h2>
                        <p className='ml-5 text-gray-400'>(2022-2026)</p>
                        <p className='ml-5 text-gray-400'>Arunachala College Of Engineering For Women</p>
                       </div>
                    </div>
                    </div>
                     <div className=' w-70 lg:w-160  h-43 bg-lime-700/20 pt-3 m-x-60
                       border rounded-xl opacity-90  border-lime-500/30 m-5 text-white space-y-4 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500 mt-8'>
                     
                    <div className='mt-[-100px]'><span className='text-lime-500 text-9xl lg:ml-[-681px] ml-[-320px]'>.</span>
                       <div className='mt-5'>
                         <h2 className="lg:text-xl font-bold text-white mt-[-29px] ml-4">
                            Higher Secondary Education
                        </h2>
                        <p className='ml-5 text-gray-400'>(2020-2022)</p>
                        <p className='ml-5 text-gray-400'>Yettacode Higher Secondary School</p>
                       </div>
                       </div>
                        </div>
                </div>
                </div>
                
            </div>
        </div>
        
       </>
    )
}

export default Education