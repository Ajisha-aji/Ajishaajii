import React from 'react'

function Certificate() {
  return (
    <div>
         <div className='bg-gradient-to-r from-black to-lime-500/30  lg:px-3 lg:pt-4  grid-cols-1  bg-black text-white lg:h-140 h-120 '>
                <div className='lg:space-y-5 space-y-3 p-5 lg:px-25 lg:py-10  py-10 mt-0 text-center lg:text-start'>
                  
                    <h1 className='lg:text-4xl text-xl  font-bold text-white  text-center '>My <span className='text-lime-500'>Certification</span></h1>
                   
                    <p className='text-md w-full  text-center mt-2'>Professional training that strengthened my practical frontend skills.</p>
                     <div className=' w-full h:87 lg:h-63 bg-lime-700/20 pt-3 
                       border rounded-xl opacity-90  border-lime-500/30  text-white space-y-4 text-center
                       hover:border-lime-500  hover:translate-x-1 transition delay-150 duration-300 ease-in-out shadow-lg shadow-lime-500 mt-8'>
                        <h1 className='text-3xl text-lime-500'>Frontend <span className='text-3xl text-white'>Developer</span> Certification</h1>
                        <h3 className='text-xl'>JClick Solutions, Nagercoil</h3>
                        <p className='lg:mx-40 mx-10'>Completed project-based training in frontend development, gaining practical knowledge of  <span className='text-lime-500'>HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS, responsive web design, Git and GitHub. 
                            </span> Built modern, responsive websites using reusable components and clean coding practices.</p>
                       </div>
                   </div>
                   </div>
    </div>
  )
}

export default Certificate