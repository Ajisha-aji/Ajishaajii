
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-lime-500/30">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold italic">
              Aji<span className="text-lime-500 animate-ping">sha.</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Frontend Developer
            </p>
          </div>
          <p className="text-gray-300 text-sm text-center">
            Let's build something <span className="text-lime-400">amazing</span> together!
          </p>
          <div className="flex gap-5 text-xl">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-400 hover:-translate-y-1 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
             href="https://www.linkedin.com/in/ajisha-l-32aji" target='_blank'
              rel="noreferrer"
              className="hover:text-lime-400 hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ajisha2192004@gmail.com" target='_blank'
              className="hover:text-lime-400 hover:-translate-y-1 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

        </div>
        <div className="border-t border-gray-800 mt-6 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-xs">
            © 2026 Ajisha. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs">
            Designed & Built with
            <span className="text-lime-400 animate-pulse"> ♥ </span>
            by Ajisha
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
