import React, { useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom'; 
import { 
  BadgeCheck, Play, MoreHorizontal, 
  Github, Linkedin, Mail, ArrowDownCircle, Shuffle, FileText
} from "lucide-react";
import PageTransition from '../components/PageTransition';

// Import static data
import { PROJECTS, EDUCATION, PROFILE, SOCIAL_LINKS } from '../data/portfolioData';

const Home = () => {
  const { setSelectedProject, setShowRightSidebar } = useOutletContext();
  const navigate = useNavigate();
  const [hoverRow, setHoverRow] = useState(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  // Use static data - take first 5 projects as "popular"
  const popularProjects = PROJECTS.slice(0, 5);
  const educationData = EDUCATION;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMoreMenu && !event.target.closest('.dropdown-container')) {
        setShowMoreMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMoreMenu]);

  // Handle click to show player & sidebar
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowRightSidebar(true);
  };

  // Handle resume download
  const handleDownloadResume = () => {
    window.open(PROFILE.resumeLink, '_blank');
  };

  return (
    <PageTransition>
    <div className="h-full overflow-y-auto custom-scrollbar bg-[#121212] pb-32 md:pb-0">

      {/* Hero Section - Robotics themed gradient (dark blue/teal) */}
      <section className="relative pt-20 md:pt-24 pb-6 px-4 md:px-8 bg-gradient-to-b from-[#1a4a5e] via-[#0f2a33] to-[#121212] flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8 transition-all">
        
        {/* Profile Image */}
        <div className="shrink-0 shadow-[0_8px_40px_rgba(0,0,0,0.6)] md:shadow-2xl mx-auto md:mx-0">
          <img
            src="/portfolio/images/profile.jpg" 
            alt="Jugal Upadhyay"
            className="w-[200px] h-[200px] md:w-60 md:h-60 object-cover shadow-2xl rounded-md md:rounded-none"
          />
        </div>

        {/* Metadata */}
        <div className="flex flex-col gap-1 text-left w-full">
          <span className="uppercase text-[10px] md:text-xs font-bold tracking-widest text-white hidden md:block">
            Verified Engineer
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white drop-shadow-lg mb-1 md:mb-2">
            {PROFILE.name}
          </h1>

          <p className="text-gray-300/90 text-xs md:text-sm font-medium max-w-xl line-clamp-2 md:line-clamp-none">
            {PROFILE.title}. {PROFILE.description}
          </p>

          <div className="flex items-center gap-1 text-xs md:text-sm text-gray-300 mt-2 font-medium">
            <BadgeCheck size={16} className="text-[#3D91F4] fill-white" />
            <span>UIUC</span>
            <span className="mx-1">•</span>
            <span>{PROFILE.monthlyListeners} profile views</span>
          </div>

          {/* Mobile navigation labels */}
          <div className="md:hidden flex flex-wrap gap-2 mt-3">
            <button onClick={() => navigate('/experience')} className="px-3 py-1 rounded-full bg-[#2a2a2a] text-white text-xs font-bold hover:bg-[#3E3E3E] transition">
              Experience
            </button>
            <button onClick={() => navigate('/education')} className="px-3 py-1 rounded-full bg-[#2a2a2a] text-white text-xs font-bold hover:bg-[#3E3E3E] transition">
              Education
            </button>
            <button onClick={() => navigate('/certificates')} className="px-3 py-1 rounded-full bg-[#2a2a2a] text-white text-xs font-bold hover:bg-[#3E3E3E] transition">
              Certificates
            </button>
            <button onClick={() => navigate('/skills')} className="px-3 py-1 rounded-full bg-[#2a2a2a] text-white text-xs font-bold hover:bg-[#3E3E3E] transition">
              Skills
            </button>
          </div>
        </div>
      </section>

      {/* Action Bar */}
      <section className="px-4 md:px-8 py-4 flex items-center justify-between md:justify-start gap-6 bg-[#121212]">
        
        <div className="flex items-center gap-5 md:gap-4 text-gray-400">
            <div className="md:hidden flex flex-col">
                <span className="text-white font-bold text-sm">Featured Projects</span>
            </div>

            {/* Desktop only icons */}
            <button 
              onClick={handleDownloadResume}
              className="hidden md:block hover:text-white transition hover:scale-110" 
              title="Download Resume"
            >
                <ArrowDownCircle size={28} />
            </button>
            <div className="dropdown-container relative">
              <button 
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="hidden md:block hover:text-white transition hover:scale-110 p-2 rounded-full hover:bg-white/10" 
                title="More"
              >
                <MoreHorizontal size={32} />
              </button>
              
              {/* Dropdown menu */}
              {showMoreMenu && (
                <div 
                  className="absolute left-full top-0 ml-2 w-48 bg-[#282828] rounded-lg shadow-xl border border-[#3a3a3a] z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="py-2">
                    <button 
                      onClick={() => {
                        handleDownloadResume();
                        setShowMoreMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] flex items-center gap-3"
                    >
                      <FileText size={16} />
                      Download Resume
                    </button>
                    <button 
                      onClick={() => {
                        window.open(SOCIAL_LINKS.find(s => s.name === 'GitHub')?.link, '_blank');
                        setShowMoreMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] flex items-center gap-3"
                    >
                      <Github size={16} />
                      GitHub
                    </button>
                    <button 
                      onClick={() => {
                        window.open(SOCIAL_LINKS.find(s => s.name === 'LinkedIn')?.link, '_blank');
                        setShowMoreMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] flex items-center gap-3"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </button>
                  </div>
                </div>
              )}
            </div>
        </div>

        {/* Play button - navigates to projects */}
        <div className="flex items-center gap-4">
            <button className="md:hidden text-gray-400 hover:text-white">
                <Shuffle size={24} />
            </button>
            <button 
                onClick={() => navigate('/projects')}
                className="bg-spotify-green w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:scale-105 hover:brightness-110 transition shadow-lg shadow-black/40 group"
                title="View All Projects"
            >
              <Play size={24} fill="black" className="text-black ml-1 group-hover:scale-105 transition" />
            </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-4 md:px-8 pb-24">
        
        {/* Popular Projects */}
        <div className="mb-8 md:mb-12">
            <h2 className="hidden md:block text-lg md:text-2xl font-bold mb-4 text-white">Featured Projects</h2>
            
            <div className="flex flex-col">
                {popularProjects.map((item, index) => (
                    <div 
                        key={item._id}
                        onClick={() => handleProjectClick(item)} 
                        onMouseEnter={() => setHoverRow(item._id)}
                        onMouseLeave={() => setHoverRow(null)}
                        className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[16px_6fr_3fr_2fr_1fr] gap-3 md:gap-4 px-2 md:px-4 py-2 md:py-3 rounded-md hover:bg-[#ffffff1a] transition group items-center cursor-pointer"
                    >
                        {/* Desktop number */}
                        <div className="hidden md:flex text-gray-400 text-sm font-medium text-center w-4 justify-center items-center">
                            {hoverRow === item._id ? <Play size={14} fill="white" className="text-white"/> : index + 1}
                        </div>

                        {/* Image & Title */}
                        <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                            <img src={item.imageUrl} alt={item.title} className="w-12 h-12 md:w-10 md:h-10 rounded-[4px] object-cover shrink-0 bg-[#282828]" />
                            <div className="flex flex-col truncate">
                                <span className={`font-bold text-sm md:text-base truncate ${hoverRow === item._id ? 'text-spotify-green' : 'text-white'}`}>
                                    {item.title}
                                </span>
                                <span className="text-xs text-gray-400 md:hidden truncate">
                                    {Array.isArray(item.techStack) ? item.techStack.join(" • ") : item.tech} • {item.views} views
                                </span>
                            </div>
                        </div>

                        {/* Tech Stack (desktop) */}
                        <div className="hidden md:flex items-center text-gray-400 text-sm hover:text-white transition truncate">
                            {Array.isArray(item.techStack) ? item.techStack.join(" • ") : item.tech}
                        </div>

                        {/* Year (desktop) */}
                        <div className="hidden md:flex text-gray-400 text-sm text-right md:text-left items-center">
                            {item.year}
                        </div>

                        {/* Views */}
                        <div className="text-gray-400 text-sm text-center flex justify-end items-center">
                            <button className="md:hidden p-2">
                                <MoreHorizontal size={20} />
                            </button>
                            <span className="hidden md:block text-xs font-mono">{item.views}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <button onClick={() => navigate('/projects')} className="mt-4 px-2 md:px-4 text-xs font-bold text-gray-400 hover:text-white tracking-widest uppercase hover:underline">
                Show More
            </button>
        </div>

        {/* About & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            
            {/* About Block */}
            <section className="bg-[#181818] p-5 md:p-6 rounded-lg hover:bg-[#282828] transition group cursor-pointer">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">About</h2>
                <div className="relative h-40 md:h-48 mb-4 rounded overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80')] bg-cover bg-center group-hover:scale-105 transition duration-700 opacity-60"></div>
                      <div className="absolute bottom-3 left-4 font-bold text-2xl md:text-3xl text-white drop-shadow-md">
                        Building Autonomous Systems.
                      </div>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm line-clamp-3 md:line-clamp-none">
                    {PROFILE.description}
                </p>
            </section>

            {/* Education Block */}
            <section className="bg-[#181818] p-5 md:p-6 rounded-lg hover:bg-[#282828] transition">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Education</h2>
                <ul className="space-y-4">
                    {educationData.slice(0, 2).map((edu) => (
                        <li key={edu._id} className="flex items-center gap-4">
                            <div className="bg-[#333] p-3 rounded-full text-white shrink-0">
                                <BadgeCheck size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm md:text-base">{edu.degree}</h4>
                                <p className="text-xs text-gray-400">{edu.school} • {edu.year}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

        </div>

        {/* Socials */}
        <section className="mb-8">
             <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Connect</h2>
             <div className="flex flex-wrap gap-3 md:gap-4">
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#3E3E3E] px-4 py-3 rounded-full md:rounded-md text-white font-bold transition text-sm">
                    <Mail size={18} /> <span className="hidden md:inline">Email Me</span> <span className="md:hidden">Email</span>
                </a>
                {SOCIAL_LINKS.map(social => (
                  <a 
                    key={social.id}
                    href={social.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-600 hover:border-white px-4 py-3 rounded-full md:rounded-md text-white font-bold transition text-sm"
                  >
                    {social.name === 'LinkedIn' && <Linkedin size={18} />}
                    {social.name === 'GitHub' && <Github size={18} />}
                    {social.name}
                  </a>
                ))}
             </div>
        </section>
        
      </div>
    </div>
    </PageTransition>
  );
};

export default Home;
