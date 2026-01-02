import React from "react";

const Portfolio = () => {
  // Projects Data
  const projects = [
    {
      id: 1,
      title: "Fast-Food",
      description: "Greeen Health Is A Health Related LMS And Book Sell Platform. Which Provide Secured Payment System On Sslcommerz.",
      image: "/images.jpeg", // <-- এখানে পরিবর্তন
      techStack: ["React Js", "Mongodb", "Next Js", "Mongoose", "TanStack Query"],
      liveLink: "https://foodzap-five.vercel.app/",
      detailsLink: "#",
    },
    {
      id: 2,
      title: "KidysToy",
      description: "EduManage Is A Comprehensive MERN Stack Platform Designed To Revolutionize Skill Learning And Class Management.",
      image: "./Screenshot_31.png", // <-- এখানে পরিবর্তন
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
      highlight: true, 
    },
    {
      id: 4,
      title: "Emergency Service",
      description: "Emergency Service provides fast, reliable, and professional assistance during critical situations. Dedicated to saving lives and ensuring safety, the service delivers immediate support, rapid response, and essential care when every second matters.",
      image: "./images (2).jpeg",
      techStack: ["Firebase", "JWT", "NodeJS", "ExpressJs",  "React" ,"Tailwind"],
      liveLink: "https://thriving-meringue-019a1c.netlify.app/",
      detailsLink: "#",
      highlight: true, 
    },
    {
      id: 5,
      title: "Green Nest",
      description: "Green Nest is a nature-inspired brand dedicated to promoting a sustainable and eco-friendly lifestyle. Rooted in the idea of harmony between people and nature, Green Nest focuses on creating green, healthy, and comfortable living solutions.",
      image: "./360_F_438235725_so62x2LeCWoLTDRMq2bTicNqCBRl2ICl.jpg",
      techStack: [ "React" ,"Mongodb", "Tailwind"],
      liveLink: "https://curious-crepe-4685cc.netlify.app/",
      detailsLink: "#",
      highlight: true, 
    },
    {
      id: 6,
      title: "Webflow Agencies",
      description: "Webflow Agencies are specialized teams that design, build, and optimize websites using Webflow. They focus on creating visually stunning, responsive, and user-friendly websites while offering custom solutions to help businesses grow online efficiently.",
      image: "./wc-mini.png",
      techStack: ["Html, Css"],
      liveLink: "https://genuine-pithivier-3c3932.netlify.app/",
      detailsLink: "#",
      highlight: true, 
    },
  ];

  return (
    <section className="bg-[#111111] py-12 md:py-20 px-4 md:px-10 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-yellow-500 mb-10">My Portfolio</h2>
          <p className="text-gray-400 tracking-widest uppercase text-sm">Recent Work</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-[#1a1c23] rounded-2xl p-5 border border-gray-800 transition-all duration-300 hover:border-yellow-500/50 flex flex-col ${
                project.highlight ? "shadow-[0_0_20px_rgba(234,179,8,0.2)]" : ""
              }`}
            >
              {/* Image */}
              <div className="bg-[#0d0e12] rounded-xl p-4 mb-6 border border-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-md object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-yellow-500 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-[11px] font-medium bg-[#252833] text-yellow-500 px-3 py-1 rounded-md border border-yellow-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-600 transition-colors duration-300 text-sm">
                  See Details
                </button>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex-1 border border-gray-700 text-gray-300 font-bold py-3 rounded-xl hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 text-sm text-center"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
