import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BadgeCheck, ExternalLink, X, FileText } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// --- DATA DUMMY ---
const CERTIFICATES_DATA = [
  { 
    id: 1, 
    title: "Google UX Design Professional Certificate", 
    issuer: "Coursera", 
    date: "Mar 2024", 
    credentialId: "ID: 123456",
    verifyLink: "https://coursera.org",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000",
    description: "Completed a rigorous 7-course professional certificate. Gained expertise in the design process: empathizing with users, defining pain points, ideating solutions."
  },
  { 
    id: 2, 
    title: "React (Basic) Certificate", 
    issuer: "HackerRank", 
    date: "Jan 2024", 
    credentialId: "ID: ABC-DEF",
    verifyLink: "https://hackerrank.com",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000",
    description: "Validated fundamental knowledge of React including components, props, state management, and lifecycle methods through a timed assessment."
  },
  { 
    id: 3, 
    title: "AWS Cloud Practitioner Essentials", 
    issuer: "Amazon Web Services", 
    date: "Dec 2023", 
    credentialId: "ID: AWS-789",
    verifyLink: "https://aws.amazon.com",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    description: "Fundamental understanding of IT services and their uses in the AWS Cloud. Knowledge of cloud concepts, security, compliance, technology, and billing."
  },
  { 
    id: 4, 
    title: "JavaScript Algorithms and Data Structures", 
    issuer: "FreeCodeCamp", 
    date: "Nov 2023", 
    credentialId: "ID: FCC-JS",
    verifyLink: "https://freecodecamp.org",
    imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1000",
    description: "Mastered fundamental programming concepts in JavaScript. Completed complex algorithm challenges and built five certification projects."
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <PageTransition>
      <div className="h-full overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#1e1e1e] to-[#121212] pb-32">
         
         {/* header */}
         <div className="px-6 pt-20 md:pt-8 pb-6 bg-gradient-to-b from-[#eed17b] via-[#d7a332] to-[#121212]">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">Certificates</h1>
            <p className="text-gray-400">Professional credentials and awards.</p>
         </div>

         {/* grid certificates */}
         <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATES_DATA.map((cert, idx) => (
               <motion.div 
                 key={cert.id} 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: idx * 0.1 }}
                 whileHover={{ scale: 1.02 }}
                 onClick={() => setSelectedCert(cert)}
                 className="group bg-[#181818] hover:bg-[#282828] p-5 rounded-lg transition cursor-pointer relative overflow-hidden border border-transparent hover:border-[#333] flex flex-col h-full"
               >
                  <div className="flex items-start justify-between mb-4">
                     <div className="w-12 h-12 bg-yellow-900/30 rounded-lg flex items-center justify-center text-yellow-500 font-bold border border-yellow-700/50">
                        <Award size={24}/>
                     </div>
                     <ExternalLink size={18} className="text-gray-500 group-hover:text-white transition opacity-0 group-hover:opacity-100"/>
                  </div>
                  
                  <h3 className="font-bold text-white text-lg line-clamp-2 mb-1 group-hover:text-yellow-500 transition">{cert.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                     <BadgeCheck size={14} className="text-blue-400 shrink-0"/>
                     <p className="text-sm text-gray-300 font-medium truncate">{cert.issuer}</p>
                  </div>
                  
                  <div className="border-t border-[#333] pt-3 mt-auto">
                     <p className="text-xs text-gray-500 font-mono flex justify-between">
                         <span>{cert.date}</span>
                         <span>Valid</span>
                     </p>
                  </div>
               </motion.div>
            ))}
         </div>

         {/* popup modal */}
         <AnimatePresence>
            {selectedCert && (
               <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                  
                  {/* backdrop */}
                  <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     onClick={() => setSelectedCert(null)}
                     className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                  />

                  {/* modal container */}
                  <motion.div 
                     initial={{ scale: 0.95, opacity: 0, y: 20 }}
                     animate={{ scale: 1, opacity: 1, y: 0 }}
                     exit={{ scale: 0.95, opacity: 0, y: 20 }}
                     className="bg-[#181818] w-[90%] md:w-full max-w-4xl max-h-[85vh] md:max-h-[600px] rounded-xl border border-[#333] shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row"
                  >
                     {/* close button */}
                     <button 
                        onClick={() => setSelectedCert(null)}
                        className="absolute top-3 right-3 bg-black/60 hover:bg-black p-1.5 rounded-full text-white z-50 transition border border-white/10"
                     >
                        <X size={18} />
                     </button>

                     <div className="w-full md:w-[55%] bg-black flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-[#333] shrink-0 h-[180px] md:h-auto relative">
                        <img 
                           src={selectedCert.imageUrl} 
                           alt={selectedCert.title} 
                           className="w-full h-full object-contain rounded-md shadow-lg"
                        />
                     </div>

                     <div className="w-full md:w-[45%] flex flex-col h-full bg-[#181818] min-h-0">
                        
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6">
                           
                           {/* title & issuer */}
                           <div className="mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                 <span className="bg-yellow-900/30 text-yellow-500 text-[10px] font-bold px-2 py-0.5 rounded border border-yellow-700/50 uppercase">
                                    Cert
                                 </span>
                                 <span className="text-gray-500 text-xs font-mono">{selectedCert.date}</span>
                              </div>
                              {/* title in mobile */}
                              <h2 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2">{selectedCert.title}</h2>
                              <div className="flex items-center gap-2 text-blue-400">
                                 <BadgeCheck size={16} />
                                 <span className="text-sm font-semibold">{selectedCert.issuer}</span>
                              </div>
                           </div>

                           {/* deskripsi */}
                           <div className="bg-[#242424] p-3 rounded-lg mb-4 border border-[#2a2a2a]">
                              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                 {selectedCert.description}
                              </p>
                           </div>

                           {/* ID kredensial */}
                           <div className="flex items-center justify-between text-[10px] md:text-xs text-gray-500 font-mono bg-[#242424] p-2 rounded border border-[#2a2a2a]">
                              <span className="font-bold">ID:</span>
                              <span className="text-gray-300 select-all truncate ml-2">{selectedCert.credentialId}</span>
                           </div>
                        </div>

                        {/* footer */}
                        <div className="p-4 border-t border-[#2a2a2a] bg-[#181818] shrink-0">
                           <a 
                              href={selectedCert.verifyLink} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center justify-center gap-2 bg-[#1ed760] hover:bg-[#1db954] text-black font-bold py-2.5 rounded-full transition w-full text-sm hover:scale-[1.02] active:scale-[0.98]"
                           >
                              <ExternalLink size={16} /> Verify Credential
                           </a>
                        </div>
                     </div>

                  </motion.div>
               </div>
            )}
         </AnimatePresence>

      </div>
    </PageTransition>
  );
};

export default Certificates;