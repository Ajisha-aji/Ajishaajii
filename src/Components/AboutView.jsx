
import React from 'react';
import { FaCode, FaMobileAlt, FaPalette } from "react-icons/fa";

function AboutView() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-black to-lime-900 text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

       
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-bold">
            About <span className="text-lime-400">Me</span>
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Get to know more about me and my journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-5">
              I'm a <span className="text-lime-400">Frontend Developer</span>
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              I build modern, responsive and user-friendly web interfaces
              using HTML, CSS, JavaScript and React.
              I enjoy transforming creative ideas into beautiful
              digital experiences.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              I am passionate about learning new technologies,
              improving my coding skills and creating websites
              that provide a great user experience.
            </p>

            <p className="text-lime-300 mt-5 italic">
              Outside coding, I love singing and stitching dresses,
              which keeps my creativity alive.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div className="bg-white/5 border border-lime-500/30 p-7 rounded-2xl hover:bg-lime-500/10 hover:-translate-y-2 transition duration-300">
              <FaCode className="text-lime-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Clean Code</h3>
              <p className="text-gray-400">
                Writing readable and reusable components.
              </p>
            </div>

            <div className="bg-white/5 border border-lime-500/30 p-7 rounded-2xl hover:bg-lime-500/10 hover:-translate-y-2 transition duration-300">
              <FaMobileAlt className="text-lime-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Responsive</h3>
              <p className="text-gray-400">
                Creating websites for all screen sizes.
              </p>
            </div>

            <div className="bg-white/5 border border-lime-500/30 p-7 rounded-2xl hover:bg-lime-500/10 hover:-translate-y-2 transition duration-300 sm:col-span-2">
              <FaPalette className="text-lime-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Creative Design</h3>
              <p className="text-gray-400">
                Designing attractive interfaces with attention to detail.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutView;
