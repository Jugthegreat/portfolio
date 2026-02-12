import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  ArrowUpRight,
  MessageSquare,
  CheckCircle2,
  X,
  Loader 
} from "lucide-react";
import PageTransition from "../components/PageTransition";

// Import static data
import { PROFILE, SOCIAL_LINKS } from '../data/portfolioData';

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null);
  const form = useRef(); 
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [showPopup, setShowPopup] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill in all required fields!");
        return;
    }

    setIsSending(true);
    
    // Simple mailto fallback - opens email client
    const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoLink);
    
    setIsSending(false);
    setShowPopup(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setShowPopup(false), 5000);
  };

  const socialLinksWithIcons = SOCIAL_LINKS.map(social => ({
    ...social,
    icon: social.name === 'LinkedIn' ? <Linkedin size={20} /> : 
          social.name === 'GitHub' ? <Github size={20} /> : null
  }));

  return (
    <PageTransition>
      <div className="h-full overflow-y-auto custom-scrollbar bg-[#121212] pb-32">
        
        <AnimatePresence>
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0, y: -50, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: -50, x: "-50%" }}
                    className="fixed top-10 left-1/2 z-50 bg-[#1ed760] text-black px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 min-w-[300px]"
                >
                    <CheckCircle2 size={24} />
                    <div className="flex-1">
                        <h4 className="font-bold text-sm">Opening Email Client!</h4>
                        <p className="text-xs font-medium opacity-80">Send your message from there.</p>
                    </div>
                    <button onClick={() => setShowPopup(false)} className="hover:bg-black/10 p-1 rounded-full transition">
                        <X size={18} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>

        <div className="relative bg-gradient-to-b from-[#1a4a5e] via-[#0f2a33] to-[#121212] pt-24 pb-12 px-6 md:px-10 lg:px-14 flex flex-col md:flex-row items-end gap-6 md:gap-10 transition-colors duration-500">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 md:w-52 md:h-52 bg-gradient-to-br from-teal-500 to-cyan-600 shadow-[0_8px_40px_rgba(0,0,0,0.5)] rounded-full md:rounded-md flex items-center justify-center shrink-0 group hover:scale-105 transition-transform duration-500"
          >
            <MessageSquare className="text-white drop-shadow-md w-14 h-14 md:w-24 md:h-24 group-hover:rotate-12 transition-transform duration-500" />
          </motion.div>

          <div className="flex flex-col gap-2 w-full z-10 pb-1">
            <span className="text-xs font-bold tracking-widest uppercase text-white flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-teal-500 fill-white" /> Let's Connect
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl leading-tight">
              Get in Touch
            </h1>
            <p className="text-gray-300 font-medium text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
              Interested in discussing robotics, autonomous systems, or potential opportunities? 
              I'm always open to connecting with fellow engineers and researchers.
            </p>
          </div>
        </div>

        <div className="px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 pb-20">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div className="flex items-center justify-between border-b border-[#333] pb-2">
              <h3 className="text-xl font-bold text-white">Connect</h3>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Social Links</span>
            </div>

            <motion.a
              href={`mailto:${PROFILE.email}`}
              variants={itemVariants}
              className="bg-[#181818] hover:bg-[#282828] p-4 md:p-5 rounded-lg group transition duration-300 border border-transparent hover:border-[#333] cursor-pointer block"
            >
              <div className="flex items-center gap-3 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden min-w-0 flex-1">
                  <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-0.5 md:mb-1 group-hover:text-teal-400 transition">
                    Primary Email
                  </p>
                  <span className="text-white font-bold text-sm md:text-lg truncate block">
                    {PROFILE.email}
                  </span>
                </div>
              </div>
            </motion.a>

            <div className="flex flex-col">
              {socialLinksWithIcons.map((social, idx) => (
                <motion.a
                  variants={itemVariants}
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 -mx-3 rounded-md hover:bg-[#ffffff1a] group transition cursor-pointer"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="text-gray-500 font-mono text-sm w-5 text-center group-hover:text-white transition">{idx + 1}</span>
                    <div className="p-2 rounded bg-[#2a2a2a] group-hover:bg-[#333] text-gray-300 group-hover:text-white transition shrink-0">
                      {social.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className={`font-bold text-base ${social.color} group-hover:text-white transition truncate`}>{social.name}</span>
                      <span className="text-xs text-gray-400 group-hover:text-gray-300 transition truncate">{social.username}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                </motion.a>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 text-gray-400 text-sm mt-4 px-4 py-2 bg-[#181818] rounded-full border border-transparent hover:border-[#333] transition">
              <MapPin size={16} className="text-teal-500" />
              <span>Based in <b className="text-white">{PROFILE.location}</b></span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-[#121212]">
            <div className="flex items-center justify-between border-b border-[#333] pb-2 mb-8">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Contact</span>
            </div>

            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className={`text-[11px] font-bold tracking-widest transition-colors ${focusedField === "name" ? "text-teal-400" : "text-gray-400"}`}>NAME</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} className="w-full bg-[#2a2a2a] hover:bg-[#3E3E3E] focus:bg-[#333] text-white rounded-md p-3.5 outline-none border border-transparent focus:border-teal-500 transition-all font-medium placeholder-gray-500" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={`text-[11px] font-bold tracking-widest transition-colors ${focusedField === "email" ? "text-teal-400" : "text-gray-400"}`}>EMAIL</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} className="w-full bg-[#2a2a2a] hover:bg-[#3E3E3E] focus:bg-[#333] text-white rounded-md p-3.5 outline-none border border-transparent focus:border-teal-500 transition-all font-medium placeholder-gray-500" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className={`text-[11px] font-bold tracking-widest transition-colors ${focusedField === "subject" ? "text-teal-400" : "text-gray-400"}`}>SUBJECT</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Job Opportunity / Collaboration" onFocus={() => setFocusedField("subject")} onBlur={() => setFocusedField(null)} className="w-full bg-[#2a2a2a] hover:bg-[#3E3E3E] focus:bg-[#333] text-white rounded-md p-3.5 outline-none border border-transparent focus:border-teal-500 transition-all font-medium placeholder-gray-500" />
              </div>

              <div className="flex flex-col gap-2">
                <label className={`text-[11px] font-bold tracking-widest transition-colors ${focusedField === "message" ? "text-teal-400" : "text-gray-400"}`}>MESSAGE</label>
                <textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about the opportunity or project..." onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)} className="w-full bg-[#2a2a2a] hover:bg-[#3E3E3E] focus:bg-[#333] text-white rounded-md p-3.5 outline-none border border-transparent focus:border-teal-500 transition-all font-medium placeholder-gray-500 resize-none" required></textarea>
              </div>

              <div className="pt-2 flex justify-end">
                <button type="submit" disabled={isSending} className="w-full md:w-auto bg-teal-600 hover:bg-teal-500 text-white font-bold py-3.5 px-10 rounded-full transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-teal-900/20 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSending ? (<>Sending... <Loader className="animate-spin" size={18}/></>) : (<>Send Message <Send size={18} strokeWidth={2.5} /></>)}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;