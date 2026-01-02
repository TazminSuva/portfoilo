import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Link ইমপোর্ট করতে হবে
import About from "./About";
import { Contact } from "lucide-react";

const Hero = () => {
  const titles = ["Front-End Developer", "MERN Stack Developer"];
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // প্রজেক্ট ডাটা (এটি আপনি চাইলে আলাদা ফাইল থেকেও আনতে পারেন)
  const allProjects = [
    {
      id: 1,
      title: "Fast-Food",
      description: "Greeen Health Is A Health Related LMS And Book Sell Platform. Which Provide Secured Payment System On Sslcommerz.",
      image: "./images.jpeg", 
      techStack: ["React Js", "Mongodb", "Next Js", "Mongoose", "TanStack Query"],
      liveLink: "https://foodzap-five.vercel.app/",
      detailsLink: "#",
    },
    {
      id: 2,
      title: "KidysToy",
      description: "EduManage Is A Comprehensive MERN Stack Platform Designed To Revolutionize Skill Learning And Class Management.",
      image: "./Screenshot_31.png", 
      techStack: ["Node Js", "React Js", "Mongodb", "Express Js", "TanStack", "Firebase"],
      liveLink: "https://ephemeral-cascaron-b7b09d.netlify.app/",
      detailsLink: "#",
    },
    {
      id: 3,
      title: "Productive Apps",
      description: "Luxe Stay Is A Modern Full-Stack Hotel Management Website Built Using The MERN Stack. It Is Developed To Efficiently Manage Operations.",
      image: "./Screenshot_1.png",
      techStack: ["Firebase", "JWT", "NodeJS", "ExpressJs",  "React" ,"Tailwind"],
      liveLink: "https://curious-crepe-4685cc.netlify.app/",
      detailsLink: "#",
      highlight: true, // ডানপাশের কার্ডটির মতো গ্লো ইফেক্ট দিতে
    },
    { id: 4, title: "Other Project", image: "...", description: "..." } // এটি হোমে দেখাবে না
  ];

  // শুধু প্রথম ৩টি প্রজেক্ট ফিল্টার করা হলো
  const homeDisplayProjects = allProjects.slice(0, 3);

  useEffect(() => {
    const speed = 100;
    let timer;
    if (!deleting && charIndex <= titles[titleIndex].length) {
      timer = setTimeout(() => {
        setDisplayText(titles[titleIndex].substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (deleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setDisplayText(titles[titleIndex].substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (!deleting && charIndex > titles[titleIndex].length) {
      timer = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timer);
  }, [charIndex, deleting, titleIndex, titles]);

  return (
    <div className="bg-[#111111] text-white">
  <div className="px-6 py-15 w-full flex flex-col items-center overflow-hidden">
    <div className="w-full max-w-10xl grid grid-cols-1 md:grid-cols-12 items-center px-6 py-4">
          <div className="md:col-span-7 space-y-6">
            <div className="text-xl text-gray-300">Hello, My Name Is</div>
            <div className="text-2xl md:text-5xl font-bold uppercase tracking-wider">
              <span className="block text-yellow-500">MST.Suva</span> 
              <span className="block text-blue-500">Akther</span>
              <h1 className="text-3xl md:text-3xl font-semibold mt-10">
                I'm <span className="text-orange-500 underline">{displayText}</span>
                <span className="animate-pulse ml-1 text-orange-500">|</span>
              </h1>
            </div>
            <div className="max-w-xl text-lg text-gray-300">
              <p>"I am a web developer with practical experience in building full-stack (MERN) applications <br />
               using React, Node.js, Express, and MongoDB."</p>
            </div>
            <div className="flex gap-4 pt-4">
              <a className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-600 transition-all" href="/contact">Contact Me</a>
              <a className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-md font-bold hover:bg-yellow-500 hover:text-black transition-all" href="./Suva_CV1.pdf" target="_blank" rel="noreferrer">See Resume</a>
            </div>
          </div>
          <div className="md:col-span-5 mt-12 md:mt-0 flex justify-center items-center">
            <img src="./img.svg" alt="Dev" className="w-full max-w-md animate-float" style={{ animation: 'float 3s ease-in-out infinite' }} />
          </div>
        </div>
      </div>

      <About />

      {/* --- Home Page Project Section (3 Projects) --- */}
      <section className="px-6 py-16 max-w-7xl mx-auto relative -top-35">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500">Featured Projects</h2>
          <p className="text-gray-400 mt-2">Some of my recent works</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeDisplayProjects.map((project) => (
            <div key={project.id} className={`bg-[#1a1c23] p-5 rounded-2xl border border-gray-800 transition-all hover:border-yellow-500/50 ${project.highlight ? "shadow-[0_0_20px_rgba(234,179,8,0.2)]" : ""}`}>
              <div className="bg-[#0d0e12] rounded-xl p-3 mb-4 border border-gray-800">
                <img src={project.image} alt={project.title} className="w-full h-44 object-cover rounded-md" />
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack?.map((tech, i) => (
                  <span key={i} className="text-[10px] bg-gray-800 text-yellow-500 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.description} className="flex-1 border bg-yellow-500 text-center text-black font-bold py-2 rounded-lg">Details</a>
                <a href={project.liveLink} className="flex-1 border border-gray-700 text-center py-2 rounded-lg text-xs hover:text-yellow-500">Live Demo</a>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <Link to="/portfolio" className="bg-yellow-500 text-black px-10 py-3 rounded-full font-bold hover:bg-yellow-600 transition-all inline-block">
            See All Projects
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Hero;