import React from 'react';
import { Code, Laptop, Terminal, Database, FileCode, Figma, MoveRight } from 'lucide-react';

const Service = () => {
  const serviceData = [
    {
      id: 1,
      icon: <Code size={32} className="text-amber-500" />,
      title: "Web Design",
      desc: "I'm A Website Designer Who Is Passionate About Making Error-Free Fully Responsive Conversion PSD Or Figma To HTML.",
    },
    {
      id: 2,
      icon: <Laptop size={32} className="text-amber-500" />,
      title: "Front-End Developer",
      desc: "I'm A Front-End Web Developer Who Is Passionate About Making Error-Free Websites Using HTML, CSS, Bootstrap, JS, React.",
    },
    {
      id: 3,
      icon: <Terminal size={32} className="text-amber-500" />,
      title: "Web Development",
      desc: "I'm A Web Developer Who Is Passionate About Making Error-Free Websites With HTML, CSS, JS, MongoDB, Node, Express, ReactJS.",
    },
    {
      id: 4,
      icon: <Database size={32} className="text-amber-500" />,
      title: "MERN Development",
      desc: "I'm A MERN Stack Web Developer Who Is Passionate About Making Error-Free Websites With MongoDB, Node, Express, ReactJS.",
    },
    {
      id: 5,
      icon: <FileCode size={32} className="text-amber-500" />,
      title: "PSD To HTML",
      desc: "I'm A Web Designer Who Is Passionate About Fully Responsive PSD To HTML Conversion With HTML, CSS, JS.",
    },
    {
      id: 6,
      icon: <Figma size={32} className="text-amber-500" />,
      title: "Figma To HTML",
      desc: "I'm A Web Designer Who Is Passionate About Fully Responsive Conversion With HTML, CSS, JS And 100% Client Satisfaction.",
    },
  ];

  return (
    <section className="bg-[#111111] py-20 px-6 min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-2">What I Do</h1>
          <p className="text-amber-500 text-lg font-medium">My Services</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <div 
              key={service.id} 
              className="bg-[#18181b] border border-gray-800 p-10 rounded-3xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] group"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {service.desc}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-500 transition-colors"
              >
                Say Hello <MoveRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;