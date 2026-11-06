import React from 'react';
import flourish from '../assets/project1.jpg';
import aura from '../assets/project2.jpg';
import stone from '../assets/project3.jpg';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';


function Project() {
  const list = [
    {
      id: 1,
      name: "Flourish Cake Shop",
      image: stone,
      description: "A responsive cake shopping website developed using React.js and React Bootstrap. Users can explore cakes, view product details, and manage their shopping cart.",
      technology: ["React.js", "JavaScript", "React Bootstrap", "CSS3"]
    },
    {
      id: 2,
      name: "Aura Beauty",
      image: aura,
      description: "A responsive beauty and cosmetics website developed using React.js and React Bootstrap. Users can explore beauty products and contact the store.",
      technology: ["React.js", "JavaScript", "React Bootstrap", "CSS3"]
    },
    {
      id: 3,
      name: "STONE SIP",
      image: flourish,
      description: "A modern cold brew coffee website developed using HTML, CSS, JavaScript, and Bootstrap. Users can explore coffee products and manage their shopping cart.",
      technology: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
    }
  ];
  return (
    <div id='project' className='bg-gradient-to-r from-black to-lime-600/30 grid grid-cols-1  bg-black text-white h-400 lg:h-160  '>
      <div className='lg:px-25 pt-15 space-y-5 px-6 flex justify-between' >
        <h1 className='lg:text-4xl text-xl  font-bold text-white '>My <span className='text-lime-500'>Projects</span></h1>
        <Link to='/projectview'  className='flex gap-1'> <h1 className='mt-4 text-sm'>View All Project</h1>
          <span className='mt-5 text-lime-400 text-lg'><IoIosArrowRoundForward /></span></Link>
       </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:px-20 px-6'>
        {list.map((item, index) => (
          <div key={index} className='m-3 border border-lime-500 rounded-2xl lg:h-110 h:115'>
            <img src={item.image} alt="" className='h-60 w-full rounded-2xl p-3 opacity-60' />
            <h1 className='text-xl font-bold text-white p-2'>{item.name}</h1>
            <h2 className='text-xs p-3'>{item.description}</h2>
            <div className=' flex flex-wrap lg:gap-2 p-2 space-y-4 gap:1'>
              {item.technology.map((items, index) => (
                <div key={index} >
                  <span
                    key={index}
                    className='text-xs border border-lime-500/40 bg-lime-500/10 text-lime-400 px-3  py-2 rounded-full'
                  >
                    {items}
                  </span>
                </div>
              ))}
              
            </div>
         
          </div>
        ))}
        
      </div>
       
      
    </div>
  )
}

export default Project