import React from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import { SiFramer } from "react-icons/si";
import { FaOsi } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const About = () => {
    return (
        <div className="px-6 py-1 bg-[#111111] text-white min-h-screen ">
              <section className="container px-4 py-20 mx-auto text-center border-t border-gray-800">
          <h1 className="mb-10 text-4xl font-bold text-white">About Me</h1>
          
          <div className="flex flex-col items-center space-y-6">
            <img 
              alt="Profile" 
              className="object-cover w-48 h-48 border-4 border-yellow-400 rounded-full shadow-2xl transition-transform hover:scale-105" 
              src="./unnamed.webp" 
            />
            
            <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
              "I'm <span className="text-yellow-400 font-semibold">MST.Suva Akther</span>, a passionate MERN-stack web developer specializing in Front-End Development. I enjoy solving real-world problems through clean, scalable code and intuitive user experiences."
            </p>
          </div>
        </section>
        {/* --- Skills Section --- */}
        <div className="mb-10  font-bold text-yellow-500">
          <h2 className="mb-10 text-3xl font-bold text-yellow-400 text-center uppercase tracking-widest">My Skills</h2>
          
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            
            <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
             <IoLogoJavascript />

                </div>
                <span className="text-md font-semibold text-gray-200">JavaScript</span>

            </div>

            <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                <FaReact/>
                </div>
                <span className="text-md font-semibold text-gray-200">React.js</span>
            </div>
     <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <FaNodeJs/>
                </div>
                <span className="text-md font-semibold text-gray-200">Node.js</span>
            </div>
                 <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <SiExpress/>
                </div>
                <span className="text-md font-semibold text-gray-200">Express.js</span>
            </div>
                 <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <SiMongodb/>
                </div>
                <span className="text-md font-semibold text-gray-200">MongoDB</span>
            </div>
                 <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    < TbBrandTailwind/>
                </div>
                <span className="text-md font-semibold text-gray-200">Tailwind CSS</span>
            </div>
                 <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <SiFirebase/>
                </div>
                <span className="text-md font-semibold text-gray-200">Firebase</span>
            </div>
                 <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <FaBootstrap/>
                </div>
                <span className="text-md font-semibold text-gray-200">BootStrap</span>
            </div>
                 <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <SiFramer/>
                </div>
                <span className="text-md font-semibold text-gray-200">Framer-motion</span>
            </div>
             <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <FaOsi/>
                </div>
                <span className="text-md font-semibold text-gray-200">AOS</span>
            </div>
             <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <FaPython/>
                </div>
                <span className="text-md font-semibold text-gray-200">Python</span>
            </div>
             <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <FaJava/>
                </div>
                <span className="text-md font-semibold text-gray-200">Java</span>
            </div>
             <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <FaFigma/>
                </div>
                <span className="text-md font-semibold text-gray-200">Figma</span>
            </div>
             <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <IoLogoHtml5/>
                </div>
                <span className="text-md font-semibold text-gray-200">Html</span>
            </div>
             <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    <FaCss3Alt/>
                </div>
                <span className="text-md font-semibold text-gray-200">Css</span>
            </div>
            <div className="bg-[#1C1C28] border border-yellow-400/20 rounded-xl shadow-lg p-6 flex flex-col items-center hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(248,185,12,0.3)] transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-yellow-400 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400 group-hover:text-black transition-all">
             <FaGithub/>
                </div>
                <span className="text-md font-semibold text-gray-200">Git & GitHub</span>
            </div>
           
        </div>
        {/* --- Education & Qualifications Section --- */}
<section className="container px-4 py-20 mx-auto">
  <h2 className="mb-12 text-3xl font-bold text-center text-yellow-500 uppercase tracking-widest">
    Education & Qualifications
  </h2>

  <div className="max-w-4xl mx-auto space-y-6">
    
    {/* Diploma Card */}
    <div className="bg-[#1C1C28] p-6 rounded-xl border border-gray-800 shadow-lg hover:border-yellow-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-100">Diploma In Computer Science</h3>
      <p className="text-gray-400">Habiganj Polytechnic Institute (HPI)</p>
      <span className="text-yellow-500 font-medium">2022 - Present</span>
    </div>

    {/* SSC Card */}
    <div className="bg-[#1C1C28] p-6 rounded-xl border border-gray-800 shadow-lg hover:border-yellow-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-100">SSC In Humanities</h3>
      <p className="text-gray-400">Mannan Master School & College</p>
      <span className="text-yellow-500 font-medium">2020 - 2022</span>
    </div>

    {/* Self Learning Card */}
    <div className="bg-[#1C1C28] p-6 rounded-xl border border-gray-800 shadow-lg hover:border-yellow-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-100">Web Development Self Learning</h3>
      <p className="text-gray-400">Youtube, Documentations Etc</p>
      <span className="text-yellow-500 font-medium">2024 - 2025</span>
    </div>

    {/* Course Card */}
    <div className="bg-[#1C1C28] p-6 rounded-xl border border-gray-800 shadow-lg hover:border-yellow-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-100">Web Development (Level 1)</h3>
      <p className="text-gray-400">Programming Hero</p>
      <span className="text-yellow-500 font-medium">2025 - 2026</span>
    </div>

  </div>
</section>
                </div>

        </div>

    );
};

export default About;