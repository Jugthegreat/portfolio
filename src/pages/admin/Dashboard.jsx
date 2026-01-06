import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { 
  FolderKanban, Briefcase, GraduationCap, Award, Layers, 
  ArrowRight, Activity, PlusCircle 
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    education: 0,
    certificates: 0,
    skills: 0
  });
  const [loading, setLoading] = useState(true);

  // fetch data counts from backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projRes, expRes, eduRes, certRes, skillRes] = await Promise.all([
          axios.get('https://portfolio-be-five-dun.vercel.app/api/projects'),
          axios.get('https://portfolio-be-five-dun.vercel.app/api/experience'),
          axios.get('https://portfolio-be-five-dun.vercel.app/api/education'),
          axios.get('https://portfolio-be-five-dun.vercel.app/api/certificates'),
          axios.get('https://portfolio-be-five-dun.vercel.app/api/skills')
        ]);

        setStats({
          projects: projRes.data.length,
          experience: expRes.data.length,
          education: eduRes.data.length,
          certificates: certRes.data.length,
          skills: skillRes.data.length
        });
      } catch (error) {
        console.error("error fetching dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleQuickAction = (path) => {
    // navigate to the crud page with a state trigger to open modal
    navigate(path, { state: { openCreate: true } });
  };

  const statCards = [
    { title: 'Projects', count: stats.projects, icon: <FolderKanban size={24}/>, color: 'text-purple-400', bg: 'bg-purple-500/10', link: '/admin/projects' },
    { title: 'Experience', count: stats.experience, icon: <Briefcase size={24}/>, color: 'text-green-400', bg: 'bg-green-500/10', link: '/admin/experience' },
    { title: 'Education', count: stats.education, icon: <GraduationCap size={24}/>, color: 'text-blue-400', bg: 'bg-blue-500/10', link: '/admin/education' },
    { title: 'Certificates', count: stats.certificates, icon: <Award size={24}/>, color: 'text-yellow-400', bg: 'bg-yellow-500/10', link: '/admin/certificates' },
    { title: 'Skills', count: stats.skills, icon: <Layers size={24}/>, color: 'text-pink-400', bg: 'bg-pink-500/10', link: '/admin/skills' },
  ];

  return (
    <div className="min-h-full text-white">
      
      {/* header section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Dashboard</h1>
        <p className="text-gray-400 text-sm md:text-base">Overview of your portfolio content and statistics.</p>
      </div>

      {/* stats grid - responsive (mobile: 2 cols, tablet: 3 cols, desktop: 5 cols) */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 mb-8">
        {statCards.map((item) => (
          <div 
            key={item.title}
            onClick={() => navigate(item.link)}
            className="bg-[#181818] p-4 md:p-5 rounded-lg border border-transparent hover:border-[#333] hover:bg-[#282828] transition cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-3 md:mb-4">
              <div className={`p-2 md:p-3 rounded-md ${item.bg} ${item.color}`}>
                {/* resize icon slightly for mobile */}
                {React.cloneElement(item.icon, { size: 20 })}
              </div>
              <ArrowRight size={16} className="text-gray-500 group-hover:text-white transition opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1" />
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-bold block mb-1">{loading ? '-' : item.count}</span>
              <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* content sections grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* quick actions */}
        <div className="bg-[#181818] p-6 rounded-xl border border-[#333]">
          <div className="flex items-center gap-3 mb-6">
            <PlusCircle className="text-spotify-green" size={24} />
            <h2 className="text-xl font-bold">Quick Actions</h2>
          </div>
          
          <div className="space-y-3">
            <button 
                onClick={() => handleQuickAction('/admin/projects')}
                className="w-full text-left p-4 bg-[#2a2a2a] hover:bg-[#333] rounded-lg transition flex justify-between items-center group"
            >
              <span className="font-medium text-sm">Add New Project</span>
              <PlusCircle size={18} className="text-gray-400 group-hover:text-white" />
            </button>
            
            <button 
                onClick={() => handleQuickAction('/admin/experience')}
                className="w-full text-left p-4 bg-[#2a2a2a] hover:bg-[#333] rounded-lg transition flex justify-between items-center group"
            >
              <span className="font-medium text-sm">Update Resume (Experience)</span>
              <PlusCircle size={18} className="text-gray-400 group-hover:text-white" />
            </button>
            
            <button 
                onClick={() => handleQuickAction('/admin/certificates')}
                className="w-full text-left p-4 bg-[#2a2a2a] hover:bg-[#333] rounded-lg transition flex justify-between items-center group"
            >
              <span className="font-medium text-sm">Add New Certificate</span>
              <PlusCircle size={18} className="text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* system status placeholder */}
        <div className="bg-gradient-to-br from-[#1e1e1e] to-[#121212] p-6 rounded-xl border border-[#333]">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-blue-400" size={24} />
            <h2 className="text-xl font-bold">System Status</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-[#333] pb-3">
              <span className="text-gray-400">Backend API</span>
              <span className="text-green-400 font-bold bg-green-900/30 px-2 py-1 rounded text-xs">ONLINE</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-[#333] pb-3">
              <span className="text-gray-400">Database (MongoDB)</span>
              <span className="text-green-400 font-bold bg-green-900/30 px-2 py-1 rounded text-xs">CONNECTED</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Last Sync</span>
              <span className="text-white font-mono text-xs">Just Now</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#333]">
             <p className="text-xs text-gray-500 leading-relaxed">
                Your portfolio is currently live and accessible. Manage your content carefully as changes reflect immediately.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;