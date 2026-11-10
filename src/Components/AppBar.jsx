import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { FaHome, FaUserGraduate, FaDownload } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { Link } from 'react-router-dom';

function AppBar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className='font-serif flex justify-between items-center px-6 md:py-0 py-4 bg-gradient-to-r from-black to-lime-800 h-full text-white'>
      <div className=' text-4xl relative'>
        <h1 className='italic font-dancing text-lime-400'>
          🌿Ajisha
        </h1>
      </div>
      <div className='md:hidden' onClick={() => { setMenu(!menu) }}>
        {menu ? <MdCancel className='text-[40px]' /> : <CiMenuFries className='text-[30px] font-bold ' />}
      </div>
      <div className="py-4 text-[18px] space-x-7 hidden md:block "  >
        <Link to="/" href="#Home" className='hover:text-lime-500'>Home</Link>
        <Link to="/about" href="#About" className='hover:text-lime-500'>About</Link>
        <Link to="/skills" href="#Skill" className='hover:text-lime-500'>Skills</Link>
        <Link to='/projectview' href="#Home" className='hover:text-lime-500'> Projects</Link>
         <Link to='/certificate' href="#education" className='hover:text-lime-500'> Certificate</Link>
        <Link to='/education' href="#education" className='hover:text-lime-500'> Education</Link>
        
        <a
          href='https://wa.me/917538852926' target="_blank" className="px-5 py-2 rounded-md border bg-lime-500 border-lime-500 text-white hover:bg-lime-800 hover:-translate-y-1 transition duration-300  w-40 "
        > Contact  </a>

      </div>
      {menu && (<div className='md:hidden text-[20px] bg-black h-70 flex flex-col z-10 
       absolute left-0  top-18 w-3/3 py-10 space-y-4 ' >

        <Link to="/" href="#Home" className='flex space-x-2 items-center ml-4 bg-gradient-to-l from-black to-lime-800 '><FaHome /><span>Home</span></Link>
        <Link to="/about" href="#About" className='flex space-x-2 items-center ml-4 bg-gradient-to-r from-black to-lime-800/20'><IoPersonSharp /><span>About</span></Link>
         <Link to="/skills" href="#Skill" className='flex space-x-2 items-center ml-4 bg-gradient-to-l from-black to-lime-800 '><FaCode /><span>Skill</span></Link>
         <Link to='/projectview' href="#Home" className='flex space-x-2 items-center ml-4 bg-gradient-to-r from-black to-lime-800/20' > <GoProject /><span>Project</span></Link>
         <Link to='/education' href="#education" className='flex space-x-2 items-center ml-4 bg-gradient-to-l from-black to-lime-800 '> <FaUserGraduate /><span>Education</span></Link>

      </div>)}
    </nav>
  )
}

export default AppBar