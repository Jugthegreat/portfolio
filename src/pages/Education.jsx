import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// DATA DUMMY
const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Bachelor of Informatics Engineering",
    school: "Universitas Teknologi",
    year: "2023 – 2027 (Expected)",
    grade: "GPA 3.85 / 4.00",
    desc: "Focused on Software Engineering and Artificial Intelligence. Active member of the Computer Science Student Association."
  },
  {
    id: 2,
    degree: "Full Stack Web Development Bootcamp",
    school: "NF Academy",
    year: "2024",
    grade: "Certified",
    desc: "Intensive 6-month bootcamp covering MERN Stack (MongoDB, Express, React, Node.js)."
  }
];

const Education = () => {
  return (
    <PageTransition>
      <div className="h-full overflow-y-auto bg-[#121212] pb-32 custom-scrollbar">

        {/* header */}
        <div className="px-4 sm:px-6 pt-16 sm:pt-20 md:pt-10 pb-6 bg-gradient-to-b from-[#8cb4e6] via-[#3b65bd] to-[#121212] transition-all">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">
            Education
          </h1>
          <p className="text-gray-300/90 text-sm sm:text-base">
            Academic background & certifications
          </p>
        </div>

        {/* content */}
        <div className="px-4 sm:px-6 grid grid-cols-1 gap-4">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.id}
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
                p-4 sm:p-6
                flex
                flex-col
                md:flex-row
                md:items-start
                gap-4
                group
              "
            >
              {/* left */}
              <div className="flex-1">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3">
                  <div className="
                    w-10 h-10 sm:w-12 sm:h-12
                    rounded-full
                    bg-[#2a2a2a]
                    flex items-center justify-center
                    group-hover:bg-blue-400/20
                    transition
                    shrink-0
                  ">
                    <GraduationCap size={20} className="text-blue-400" />
                  </div>

                  <div>
                    <h3 className="text-white text-base sm:text-lg font-bold leading-snug">
                      {edu.school}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed ml-0 sm:ml-14">
                  {edu.desc}
                </p>
              </div>

              {/* right */}
              <div className="
                flex
                flex-row
                md:flex-col
                justify-between
                md:items-end
                text-left
                md:text-right
                gap-2
                sm:gap-3
              ">
                <span className="text-white text-sm font-semibold">
                  {edu.year}
                </span>

                <span className="
                  inline-block
                  bg-[#2a2a2a]
                  text-gray-200
                  text-xs
                  px-3 py-1
                  rounded-full
                  font-medium
                  w-fit
                ">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};

export default Education;
