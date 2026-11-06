import React from 'react'

function About() {
    return (
        <div className='bg-gradient-to-r from-black to-lime-700/30 grid grid-cols-1  bg-black text-white h-230 lg:h-130 h-200 opacity-98'>
            <div className='lg:px-25 pt-15 space-y-5 px-6'>
                <h1 className='lg:text-4xl text-xl  font-bold text-white '>About <span className='text-lime-500'>Me</span></h1>
                <p className='text-lg lg:pr-125 '>I build modern, responsive web interfaces with HTML, CSS, JavaScript and React. I care about clean code, accessibility and the small details that make a site feel right. Outside coding, I love singing and stitching dresses, which keeps me creative and detail-focused.</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:px-25 '>
                <div className=' h-40 bg-lime-700/20
         border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white px-10 py-10 space-y-1
         hover:border-lime-500 hover:shadow-lg shadow-lime-500 hover:translate-x-1 transition delay-150 duration-300 ease-in-out'>
                    <h1 className='text-xl font-bold text-white ' >Clean Code</h1>
                    <p>Readable, reusable components.</p>
                </div>
                <div className=' h-40 bg-lime-700/20
         border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white px-10 py-10 space-y-1
         hover:border-lime-500 hover:shadow-lg shadow-lime-500 hover:translate-x-1 transition delay-150 duration-300 ease-in-out'>
                    <h1 className='text-xl font-bold text-white '>Responsive</h1>
                    <p>Looks great on phone, tablet and desktop.</p>
                </div>
                <div className=' h-40 bg-lime-700/20
         border rounded-3xl opacity-90  border-lime-500/30 m-5 text-white px-10 py-10 space-y-1 
         hover:border-lime-500 hover:shadow-lg shadow-lime-500 hover:translate-x-1 transition delay-150 duration-300 ease-in-out'>
                    <h1 className='text-xl font-bold text-white'>Creative</h1>
                    <p>Thoughtful details and polishes UI.</p>
                </div>
            </div>
        </div>
    )
}

export default About