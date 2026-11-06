import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import flourish from '../assets/project1.jpg';
import aura from '../assets/project2.jpg';
import stone from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';

function ProjectView() {
  const lists = [
    {
      id: 1,
      name: "Flourish Cake Shop",
      image: stone,
      description: "A responsive cake shopping website developed using React.js and React Bootstrap. Users can explore cakes, view product details, and manage their shopping cart.",
      technology: ["React.js", "JavaScript", "React Bootstrap", "CSS3"],
    
    },
    {
      id: 2,
      name: "Aura Beauty",
      image: aura,
      description: "A responsive beauty and cosmetics website developed using React.js and React Bootstrap. Users can explore beauty products and contact the store.",
      technology: ["React.js", "JavaScript", "React Bootstrap", "CSS3"],
     
    },
    {
      id: 3,
      name: "STONE SIP",
      image: flourish,
      description: "A modern cold brew coffee website developed using HTML, CSS, JavaScript, and Bootstrap. Users can explore coffee products and manage their shopping cart.",
      technology: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
     
    },
    {
      id: 4,
      name: "Zelva - Nature Cottage",
       image: project4,
      description: "A nature-inspired cottage website designed with responsive layouts, interactive navigation, animated backgrounds, and attractive service sections.",
      technology: ["HTML5", "CSS3", "Bootstrap"],
     
     
    },
    {
      id: 5,
      name: "Student Result Manager",
      image: project6,
      description: "A student result management application that allows users to enter student details, dynamically add subjects, and calculate total marks, average, and grades.",
      technology: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
     
     
    },

    {
      id: 6,
      name: "Food Restaurant Website",
      image: project5,
      description: "A responsive restaurant website designed to showcase food-related content, image galleries, and restaurant information with Bootstrap components and animations.",
      technology: ["HTML5", "CSS3", "Bootstrap", "AOS"],
      
     
    }
  ];
  return (
    <div className='bg-gradient-to-r from-black to-lime-700/30 grid grid-cols-1  bg-black text-white h-720 lg:h-270  '>
      <div className='lg:px-25 pt-15 space-y-5 px-6 flex justify-between' >
        <h1 className='lg:text-4xl text-xl  font-bold text-white '>My <span className='text-lime-500'>Projects</span></h1>

      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:px-20 px-6'>
        {lists.map((item, index) => (
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

export default ProjectView