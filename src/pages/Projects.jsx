import React, { useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react"; 
import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";

// Import static data
import { PROJECTS, PROJECT_FILTERS, PROFILE } from '../data/portfolioData';

const Projects = () => {
  const { setSelectedProject, setShowRightSidebar } = useOutletContext();
  const location = useLocation();

  const [filter, setFilter] = useState("All");

  const searchQuery = new URLSearchParams(location.search).get("q") || "";

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowRightSidebar(true);
  };

  // Filter projects based on category and search
  const filteredProjects = PROJECTS.filter((p) => {
    const matchCategory = filter === "All" || p.category?.includes(filter);
    const matchSearch =
      p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Get first 6 projects for hero section
  const featuredProjects = PROJECTS.slice(0, 8);

  return (
    <PageTransition>
      <div className="h-full overflow-y-auto custom-scrollbar bg-[#121212] pb-32 md:pb-0">

        {/* Header */}
        <div className="relative bg-gradient-to-b from-[#1a4a5e] via-[#0f2a33] to-[#121212] pt-24 pb-12 px-6 md:px-10 lg:px-14 flex flex-col md:flex-row items-end gap-6 md:gap-10 transition-colors duration-500">
          
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 md:w-52 md:h-52 bg-[#2a2a2a] shadow-[0_8px_40px_rgba(0,0,0,0.5)] rounded-full md:rounded-md flex items-center justify-center shrink-0 group hover:scale-105 transition-transform duration-500"
          >
            <FolderKanban className="text-teal-400 drop-shadow-md w-14 h-14 md:w-24 md:h-24 group-hover:rotate-6 transition-transform duration-500" />
          </motion.div>

          {/* Metadata */}
          <div className="flex flex-col gap-1 text-left w-full">
            <span className="uppercase text-[10px] md:text-xs font-bold tracking-widest text-white hidden md:block">
              Project Portfolio
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white drop-shadow-lg mb-1 md:mb-2">
              Things I've Built
            </h1>

            <p className="text-gray-300/90 text-xs md:text-sm font-medium max-w-xl line-clamp-2 md:line-clamp-none">
               {searchQuery ? `Search result for "${searchQuery}"` : "A collection of robotics, AI, and autonomous systems projects."}
            </p>

            <div className="flex items-center gap-1 text-xs md:text-sm text-gray-300 mt-2 font-medium">
              <span className="font-bold text-white">{PROFILE.name}</span>
              <span className="mx-1">•</span>
              <span>{PROJECTS.length} projects</span>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="px-4 md:px-8 mt-6 flex gap-2 mb-6 overflow-x-auto no-scrollbar">
          {PROJECT_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-3 py-1.5 md:px-4 md:py-1.5 
                rounded-full 
                text-xs md:text-sm 
                font-bold transition border border-transparent whitespace-nowrap
                ${
                  filter === cat
                    ? "bg-white text-black"
                    : "bg-[#2a2a2a] text-white hover:bg-[#3E3E3E]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Hero Grid */}
        {featuredProjects.length > 0 && (
          <section className="px-4 md:px-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {featuredProjects.map((item) => (
                <div
                  key={item._id}
                  onClick={() => handleProjectClick(item)}
                  className="flex items-center gap-3 bg-[#2a2a2a]/90 hover:bg-[#3E3E3E] rounded pr-2 cursor-pointer h-14 md:h-16 transition overflow-hidden"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full aspect-square object-cover bg-[#383838]"
                  />
                  <span className="font-bold text-xs md:text-sm text-white line-clamp-2 pr-2">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Projects */}
        <section className="px-4 md:px-8 pb-24">
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-white">
            All Projects
          </h2>

          {filteredProjects.length === 0 ? (
             <div className="text-gray-500 text-sm mt-10">
                No projects found.
             </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-5">
              {filteredProjects.map((item) => (
                <div key={item._id} className="w-full md:w-[200px] shrink-0">
                  <ProjectCard
                    project={item}
                    onClick={handleProjectClick}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
};

export default Projects;