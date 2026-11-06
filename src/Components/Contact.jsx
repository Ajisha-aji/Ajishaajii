import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'

function Contact() {
  return (
    <div>
        <div className='pt-9 lg:pt-5 bg-gradient-to-r from-lime-600/30 to-black  bg-black text-white h-120 lg:h-90  opacity-98 lg:px-25 px-6 '>
         <div className=' lg:h-70 bg-lime-700/20 
                    border rounded-3xl opacity-90  border-lime-500/30  text-white px-10 py-10 space-y-1 
                       hover:border-lime-500 shadow-lg shadow-lime-500 hover:translate-x-1 transition delay-150 duration-300 ease-in-out'>
                    <h1 className='lg:text-2xl text-md  font-bold text-lime-500 italic text-center'>Let's Work Together</h1>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:mt-8 mt-4'>
                        <p className='lg:px-15 px:1'>I'm open to new opportunities and collaborations. Whether you have a project idea or just want to connect, feel free to reach out. Let's create something meaningful together!</p>
                   <div>
                     <div className='flex m-3'>
                        <CiLinkedin className='text-lime-500  text-2xl mr-2' />
                        <a href="https://www.linkedin.com/in/ajisha-l-32aji" className='mr-2' target='_blank'>Linkedin</a>
                    </div>
                    <div className='flex m-3'>
                        <IoMailSharp className='text-lime-500  text-2xl mr-2' />
                        <a href="mailto:ajisha2192004@gmail.com" target='_blank' > ajisha2192004@gmail.com</a>
                    </div>
                    <div className='flex m-3'>
                        <FaGithub className='text-lime-500  text-2xl mr-2' />
                        github
                    </div>
                   </div>
                    </div>
                </div> 
        </div>
    </div>
  )
}

export default Contact