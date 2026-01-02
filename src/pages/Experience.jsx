import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// DATA DUMMY
const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Tech Startup Inc.",
    location: "Jakarta, Indonesia",
    period: "Aug 2025 - Present",
    type: "Full-time",
    description: "Developing responsive web applications using React.js and Tailwind CSS. Collaborating with UI/UX designers.",
    skills: ["React", "Tailwind", "Figma", "Git"]
  },
  {
    id: 2,
    role: "Laboratory Assistant",
    company: "University Computer Lab",
    location: "Depok, Indonesia",
    period: "Jan 2024 - Jul 2024",
    type: "Part-time",
    description: "Assisted students with C++ and Java programming assignments. Maintained lab equipment.",
    skills: ["C++", "Java", "Teaching", "Linux"]
  }
];

const Experience = () => {
  return (
    <PageTransition>
      <div className="h-full overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#1e1e1e] to-[#121212] pb-32">
         {/* header */}
         <div className="px-6 pt-20 md:pt-8 pb-6 bg-gradient-to-b from-[#51df82] via-[#1d6d48] to-[#121212]">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">Work Experience</h1>
            <p className="text-gray-400">My professional career journey.</p>
         </div>

         <div className="px-6 space-y-4">
            {EXPERIENCE_DATA.map((item, idx) => (
               <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#181818] p-5 rounded-lg hover:bg-[#282828] transition border border-transparent hover:border-[#333] flex flex-col md:flex-row gap-4"
               >
                  <div className="md:w-48 shrink-0 flex flex-col gap-1">
                      <span className="text-white font-bold text-sm flex items-center gap-2">
                         <Calendar size={14} className="text-gray-400"/> {item.period}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{item.type}</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                         <MapPin size={12}/> {item.location}
                      </span>
                   </div>
                   <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <p className="text-spotify-green text-sm font-bold mb-2">{item.company}</p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                         {item.skills.map(skill => (
                            <span key={skill} className="px-2 py-1 bg-[#2a2a2a] text-xs text-gray-300 rounded hover:text-white transition">
                               {skill}
                            </span>
                         ))}
                      </div>
                   </div>
               </motion.div>
            ))}
         </div>
      </div>
    </PageTransition>
  );
};

export default Experience;