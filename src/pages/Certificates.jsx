import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Import static data
import { CERTIFICATES } from '../data/portfolioData';

const Certificates = () => {
  return (
    <PageTransition>
      <div className="h-full overflow-y-auto bg-[#121212] pb-32 md:pb-0 custom-scrollbar">

        {/* Header */}
        <div className="relative bg-gradient-to-b from-[#a87c32] via-[#5c4419] to-[#121212] pt-24 pb-12 px-6 md:px-10 lg:px-14 flex flex-col md:flex-row items-end gap-6 md:gap-10 transition-colors duration-500">
            
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 md:w-52 md:h-52 bg-[#2a2a2a] shadow-[0_8px_40px_rgba(0,0,0,0.5)] rounded-full md:rounded-md flex items-center justify-center shrink-0 group hover:scale-105 transition-transform duration-500"
            >
               <Award className="text-yellow-500 drop-shadow-md w-14 h-14 md:w-24 md:h-24 group-hover:rotate-12 transition-transform duration-500"/>
            </motion.div>

            {/* Title */}
            <div className="flex flex-col gap-2 w-full z-10 pb-1">
              <span className="text-xs font-bold tracking-widest uppercase text-white flex items-center gap-1.5">
                <Award size={16} className="text-yellow-500 fill-white" />{" "}
                Achievements
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl leading-tight">
                Certificates
              </h1>
              <p className="text-gray-300 font-medium text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
                Awards, certifications, and professional credentials.
              </p>
            </div>
         </div>

        {/* Content Grid */}
        <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 pb-24">
           {CERTIFICATES.map((cert, idx) => (
              <motion.div
                key={cert._id}
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
                  overflow-hidden
                  group
                  cursor-pointer
                "
                onClick={() => cert.credentialLink && window.open(cert.credentialLink, '_blank')}
              >
                {/* Certificate Image */}
                <div className="relative h-40 bg-[#2a2a2a] overflow-hidden">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-60"></div>
                  
                  {/* External link icon */}
                  {cert.credentialLink && (
                    <div className="absolute top-3 right-3 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center group-hover:bg-yellow-500/20 transition shrink-0">
                      <Award size={18} className="text-yellow-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-sm font-bold leading-snug group-hover:text-yellow-400 transition line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-gray-400 text-xs font-medium mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#2a2a2a]">
                    <span className="text-gray-500 text-xs">{cert.year}</span>
                    {cert.credentialLink && (
                      <span className="text-spotify-green text-xs font-medium">View Credential →</span>
                    )}
                  </div>
                </div>
              </motion.div>
           ))}
        </div>

      </div>
    </PageTransition>
  );
};

export default Certificates;