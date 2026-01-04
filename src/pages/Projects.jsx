import React, { useEffect, useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import axios from "axios";
import { LayoutGrid, Loader } from "lucide-react"; 
import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";

const FILTERS = ["All", "Web Dev", "Mobile Dev", "UI/UX"];

const Projects = () => {
  const { setSelectedProject, setShowRightSidebar } = useOutletContext();
  const location = useLocation();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  const searchQuery =
    new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    // fetch data from backend api
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowRightSidebar(true);
  };

  /* filtered projects */
  const filteredProjects = projects.filter((p) => {
    const matchCategory =
      filter === "All" || p.category?.includes(filter);

    const matchSearch =
      p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  // get first 6 projects for hero section
  const featuredProjects = projects.slice(0, 6);

  return (
    <PageTransition>
      <div className="h-full overflow-y-auto custom-scrollbar bg-[#121212] pb-32 md:pb-0">

        {/* header */}
        <section className="relative pt-20 md:pt-24 pb-6 px-4 md:px-8 bg-gradient-to-b from-[#61368a] via-[#3f205e] to-[#121212] flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8 transition-all">
          
          {/* cover image */}
          <div className="shrink-0 shadow-[0_8px_40px_rgba(0,0,0,0.6)] md:shadow-2xl mx-auto md:mx-0">
            <div className="w-[200px] h-[200px] md:w-60 md:h-60 bg-[#2a2a2a] flex items-center justify-center shadow-2xl rounded-md md:rounded-none">
               <LayoutGrid size={80} className="text-purple-400" />
            </div>
          </div>

          {/* metadata text */}
          <div className="flex flex-col gap-1 text-left w-full">
            <span className="uppercase text-[10px] md:text-xs font-bold tracking-widest text-white hidden md:block">
              Public Playlist
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white drop-shadow-lg mb-1 md:mb-2">
              Your Projects
            </h1>

            <p className="text-gray-300/90 text-xs md:text-sm font-medium max-w-xl line-clamp-2 md:line-clamp-none">
               {searchQuery ? `Search result for "${searchQuery}"` : "A collection of applications and interfaces I have built."}
            </p>

            <div className="flex items-center gap-1 text-xs md:text-sm text-gray-300 mt-2 font-medium">
              <span className="font-bold text-white">Fatiya Labibah</span>
              <span className="mx-1">•</span>
              <span>{projects.length} songs (projects)</span>
            </div>
          </div>
        </section>

        {/* filter */}
        <div className="px-4 md:px-8 mt-6 flex gap-2 mb-6 overflow-x-auto no-scrollbar">
          {FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition
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

        {loading ? (
           <div className="flex justify-center py-20">
              <Loader className="animate-spin text-white" size={32} />
           </div>
        ) : (
          <>
            {/* hero */}
            {featuredProjects.length > 0 && (
              <section className="px-4 md:px-8 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {featuredProjects.map((item) => (
                    <div
                      key={item._id || item.id}
                      onClick={() => handleProjectClick(item)}
                      className="flex items-center gap-3 bg-[#2a2a2a]/90 hover:bg-[#3E3E3E] rounded pr-2 cursor-pointer h-14 md:h-16 transition overflow-hidden"
                    >
                      <img
                        src={item.imageUrl || "https://via.placeholder.com/150"}
                        alt={item.title}
                        className="h-full aspect-square object-cover"
                      />
                      <span className="font-bold text-xs md:text-sm text-white line-clamp-2 pr-2">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* all projects */}
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
                    <div key={item._id || item.id} className="w-full md:w-[200px] shrink-0">
                      <ProjectCard
                        project={item}
                        onClick={handleProjectClick}
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </PageTransition>
  );
};

export default Projects;