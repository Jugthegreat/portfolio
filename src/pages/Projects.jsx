import React, { useEffect, useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";

const FILTERS = ["All", "Web Dev", "Mobile Dev", "UI/UX"];

const Projects = () => {
  const { setSelectedProject, setShowRightSidebar } = useOutletContext();
  const location = useLocation();

  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  const searchQuery =
    new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data));
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

  const featuredProjects = projects.slice(0, 6);

  return (
    <PageTransition>
      <div className="h-full overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#1e1e1e] to-[#121212] pb-32 md:pb-0">

        {/* header */}
        <div className="px-4 md:px-6 pt-20 md:pt-6 pb-4 bg-gradient-to-b from-[#a17ec1] via-[#61368a] to-[#121212] transition-all">
          <h1 className="text-3xl md:text-6xl font-black text-white drop-shadow-lg">
            Your Projects
          </h1>

          {searchQuery ? (
            <p className="text-gray-300/90 mt-2 text-sm">
              Search result for{" "}
              <span className="text-pink-400 font-semibold">
                "{searchQuery}"
              </span>
            </p>
          ) : (
            <p className="text-gray-400 mt-2 text-sm">
              A collection of applications and interfaces I have built
            </p>
          )}
        </div>

        {/* filter */}
        <div className="px-4 md:px-6 mt-4 flex gap-2 mb-6 overflow-x-auto no-scrollbar">
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

        {/* hero */}
        <section className="px-4 md:px-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {featuredProjects.map((item) => (
              <div
                key={item._id}
                onClick={() => handleProjectClick(item)}
                className="flex items-center gap-3 bg-[#2a2a2a]/90 hover:bg-[#3E3E3E] rounded pr-2 cursor-pointer h-14 md:h-16 transition"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full aspect-square object-cover"
                />
                <span className="font-bold text-xs md:text-sm text-white line-clamp-2">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* all projects */}
        <section className="px-4 md:px-6 pb-24">
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-white">
            All Projects
          </h2>

          {filteredProjects.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No projects found.
            </p>
          ) : (
            <div className="flex md:grid gap-4 overflow-x-auto md:overflow-visible no-scrollbar md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
              {filteredProjects.map((item) => (
                <div key={item._id} className="min-w-[150px] md:min-w-0">
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
