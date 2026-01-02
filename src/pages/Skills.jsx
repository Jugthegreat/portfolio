import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Code, Wrench } from 'lucide-react'; 
import PageTransition from '../components/PageTransition';

import { 
  SiReact, SiVuedotjs, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiExpress, SiLaravel, SiGo,
  SiMongodb, SiMysql, SiFirebase, SiAmazonwebservices,
  SiGithub, SiDocker, SiFigma, SiPostman
} from "react-icons/si";

// icon with colors and names
const TECH_STACK_DATA = [
  {
    category: "Frontend",
    icon: <Layout size={22} />,
    color: "text-pink-400",
    items: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Vue", icon: <SiVuedotjs />, color: "#4FC08D" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Framer", icon: <SiFramer />, color: "#0055FF" }
    ]
  },
  {
    category: "Backend",
    icon: <Server size={22} />,
    color: "text-pink-400",
    items: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express", icon: <SiExpress />, color: "#ffffff" }, // Putih karena background gelap
      { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
      { name: "Go", icon: <SiGo />, color: "#00ADD8" }
    ]
  },
  {
    category: "Database & Cloud",
    icon: <Database size={22} />,
    color: "text-pink-400",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "AWS", icon: <SiAmazonwebservices />, color: "#FF9900" }
    ]
  },
  {
    category: "Tools",
    icon: <Wrench size={22} />,
    color: "text-pink-400",
    items: [
      { name: "Github", icon: <SiGithub />, color: "#ffffff" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" }
    ]
  }
];

const Skills = () => {
  return (
    <PageTransition>
      <div className="h-full overflow-y-auto bg-[#121212] pb-32 custom-scrollbar">

        {/* header */}
        <div className="px-4 sm:px-6 pt-16 sm:pt-20 md:pt-10 pb-6 bg-gradient-to-b from-[#cc7aa3] via-[#ad4373] to-[#121212] transition-all">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
            Tech Stack
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Languages, frameworks, and tools I use
          </p>
        </div>

        {/* content */}
        <div className="px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {TECH_STACK_DATA.map((stack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="
                bg-[#181818]
                hover:bg-[#282828]
                transition-all
                duration-300
                rounded-xl
                p-5 sm:p-6
                group
                border border-transparent
                hover:border-[#333]
              "
            >
              {/* title */}
              <div className="flex items-center gap-3 mb-6 text-white">
                <div className={`
                  bg-[#2a2a2a]
                  p-2.5
                  rounded-full
                  ${stack.color}
                  group-hover:bg-opacity-80
                  transition
                `}>
                  {stack.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl">
                  {stack.category}
                </h3>
              </div>

              {/* icon */}
              <div className="grid grid-cols-4 gap-4">
                {stack.items.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 group/icon"
                  >
                    <div
                      className="
                        flex items-center justify-center
                        w-14 h-14
                        rounded-xl
                        bg-[#2a2a2a]
                        group-hover/icon:bg-[#333]
                        transition-all
                        duration-300
                        shadow-md
                        group-hover/icon:scale-110
                      "
                      style={{ color: tech.color }} 
                    >
                      {React.cloneElement(tech.icon, { size: 28 })}
                    </div>
                    <span className="text-[10px] md:text-xs text-gray-400 font-medium opacity-0 group-hover/icon:opacity-100 transition-opacity -translate-y-1 group-hover/icon:translate-y-0">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;