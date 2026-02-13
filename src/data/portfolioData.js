// src/data/portfolioData.js
// All your portfolio data in one place - easy to update!

export const PROFILE = {
  name: "Jugal Upadhyay",
  title: "Robotics & Autonomy Engineer",
  tagline: "Building intelligent autonomous systems",
  description: " Robotics engineer with Master’s in Autonomy and Robotics from UIUC, specialized in autonomous vehicles, robotic manipulation, Controls, Computer Vision, Perception, deep learning, and tactile sensing. Proficient in C/C++, Python, PyTorch, ROS, and deploying neural networks to embedded systems.",
  email: "jugalbipinupadhyay@gmail.com", // UPDATE THIS
  location: "Champaign, Illinois, US",
  monthlyListeners: "10,000+",
  resumeLink: "RESUME.pdf" // Add your resume to public folder
};

export const SOCIAL_LINKS = [
  {
    id: 1,
    name: "LinkedIn",
    username: "jugalupadhyay2407",
    link: "https://www.linkedin.com/in/jugalupadhyay2407/", // UPDATE THIS
    color: "text-blue-400"
  },
  {
    id: 2,
    name: "GitHub",
    username: "jugthegreat",
    link: "https://github.com/jugthegreat",
    color: "text-white"
  }
];

export const PROJECTS = [
  {
    _id: "1",
    title: "BlueBoat Autonomous Docking System",
    category: "Robotics, Controls",
    techStack: ["ROS2", "Python", "MAVROS", "PID Control"],
    description: "Capstone project developing autonomous docking capabilities for marine vehicles using advanced trajectory tracking controllers. Implemented sensor fusion and path planning algorithms for precise docking maneuvers.",
    imageUrl: "./images/projects/blueboat.jpg",
    githubLink: "https://github.com/NextGen-Embodied-AI-Solutions-Lab/BlueboatProject.git",
    demoLink: "https://drive.google.com/file/d/1WmosU-8-qtgJhux9zgplU-LhhtNIlNtP/view",
    projectType: "Academic",      // Options: "Academic", "Personal", "Internship", "Hackathon", "Research"
    teamSize: 5,                  // Number of team members
    duration: "4 months", 
    year: "2025",
    views: "2,500"
  },
  {
    _id: "2",
    title: "VR Haptic Gloves with Tactile Feedback",
    category: "Robotics, Software, Embedded",
    techStack: ["Arduino", "ESP32", "C++", "Unity"],
    description: "Developed haptic feedback gloves achieving sub-50ms latency for immersive VR experiences. Integrated multiple actuators for realistic touch sensation and finger tracking.",
    imageUrl: "./images/projects/haptic-gloves.jpg",
    githubLink: "https://github.com/Jugthegreat/VR-GLOVES.git",
    demoLink: "https://www.linkedin.com/posts/jugalupadhyay2407_virtualreality-haptics-metaquest-activity-7317342804718850049-DCxF/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMlRP4Bs47KqDuFoZGVhouTpcWMTrco7Bc",
    projectType: "Academic",      // Options: "Academic", "Personal", "Internship", "Hackathon", "Research"
    teamSize: 1,                  // Number of team members
    duration: "3 months", 
    year: "2025",
    views: "1,800"
  },
  {
    _id: "3",
    title: "Autonomous Vehicle Control & Object Detection",
    category: "Robotics, Software",
    techStack: ["ROS", "Python", "YOLO"],
    description: "Implemented lane detection using edge detection, bird’s-eye view transformation, and computer vision",
    imageUrl: "./images/projects/lanedet.jpg",
    githubLink: "https://github.com/KenC1014/lane_follower.git",
    demoLink: "https://drive.google.com/file/d/1PAdvSqp5fA_Btss0TeJaVNCRS7hSPl0q/view",
    projectType: "Academic",      // Options: "Academic", "Personal", "Internship", "Hackathon", "Research"
    teamSize: 4,                  // Number of team members
    duration: "6 months", 
    year: "2024",
    views: "3,200"
  },
  {
    _id: "4",
    title: "Autonomous Humanoid Navigation",
    category: "Robotics, Controls",
    techStack: ["ROS", "Python", "YOLO", "SLAM"],
    description: "Implemented autonomous navigation for ROBOTIS MINI humanoid robot achieving 88% obstacle detection precision. Used deep learning for real-time object detection and SLAM for mapping.",
    imageUrl: "./images/projects/humanoid.jpg",
    githubLink: "https://github.com/aleksandr-kim/ECE598JK_Group02.git",
    demoLink: "https://github.com/Jugthegreat/MINI-DARPA-CHALLENGE/blob/main/Final_Report__MINI_DARPA_Challenge.pdf",
    projectType: "Academic",      // Options: "Academic", "Personal", "Internship", "Hackathon", "Research"
    teamSize: 3,                  // Number of team members
    duration: "5 months", 
    year: "2025",
    views: "3,200"
  },
  {
    _id: "5",
    title: "Advance Control System for Autonomous Vehicle",
    category: "Robotics, Controls, Software",
    techStack: ["ROS", "C++", "Python", "Pure Pursuit"],
    description: "Advanced control systems for autonomous electric vehicle achieving 40% lap time improvement. Implemented Pure Pursuit and Stanley controllers with optimized trajectory tracking.",
    imageUrl: "./images/projects/gem-vehicle.jpg",
    githubLink: "https://github.com/krishauser/GEMstack.git",
    demoLink: "https://docs.google.com/presentation/d/1IEW23HGfHUAo1lQDThwBT_NJMIN_G5Xtgkg1cLnuSgU/edit",
    projectType: "Academic",      // Options: "Academic", "Personal", "Internship", "Hackathon", "Research"
    teamSize: 5,                  // Number of team members
    duration: "5 months", 
    year: "2025",
    views: "2,100"
  },
  {
    _id: "6",
    title: "Canopy - NASA Space Apps Challenge",
    category: "AI",
    techStack: ["Python", "TensorFlow", "Satellite Imagery", "GIS"],
    description: "Judges' Choice Award winner at NASA Space Apps Challenge. Built environmental monitoring solution analyzing satellite imagery to track deforestation and vegetation health.",
    imageUrl: "./images/projects/canopy.jpg",
    githubLink: "https://github.com/rkat7/nasa-space-apps-cuberts.git",
    demoLink: "https://youtu.be/H2IhdUGf5BA?si=Imd0JT9zH5fGN4-u",
    projectType: "Hackathon",      // Options: "Academic", "Personal", "Internship", "Hackathon", "Research"
    teamSize: 5,                  // Number of team members
    duration: "2 days", 
    year: "2024",
    views: "4,500"
  },
  {
    _id: "7",
    title: "Robot Manipulation with Isaac Sim",
    category: "Robotics, Controls",
    techStack: ["Isaac Sim", "RoboSuite", "PyTorch", "RL"],
    description: "Training robotic arms for pick-and-place tasks using reinforcement learning in simulation environments. Implementing sim-to-real transfer techniques.",
    imageUrl: "./images/projects/manipulation.jpg",
    githubLink: "https://github.com/jugthegreat/robot-manipulation",
    demoLink: "",
    projectType: "Academic",      // Options: "Academic", "Personal", "Internship", "Hackathon", "Research"
    teamSize: 1,                  // Number of team members
    duration: "3 months", 
    year: "2025",
    views: "1,200"
  },
  {
    _id: "8",
    title: "AI Research Chatbot",
    category: "Software, AI",
    techStack: ["Versel", "TypeScript","Railway"],
    description: "Created an AI research chatbot with frontend deployed on vercel and backend deployed on railway. ",
    imageUrl: "./images/projects/chatbot.jpg",
    githubLink: "https://github.com/Jugthegreat/ai-research-agent.git",
    demoLink: "https://drive.google.com/file/d/1JV5Tt5z3ec3nmlucxTAld3ahRDoqDPEl/view",
    projectType: "Personal",      // Options: "Academic", "Personal", "Internship", "Hackathon", "Research"
    teamSize: 1,                  // Number of team members
    duration: "1 week", 
    year: "2026",
    views: "1,200"
  }
];

export const EXPERIENCE = [
  {
    _id: "1",
    role: "Project Engineer Intern",
    company: "Environomics",
    period: "July 2023 - Jul 2024",
    type: "Internship",
    location: "In Person",
    description: " Engineered a dual-axis solar tracker system, optimizing solar panel alignment with the sun to maximize energy capture and efficiency by 35% and designed an interactive website",
    skills: ["ROS", "Python", "C++", "Sensor Integration", "Hardware"]
  },
  {
    _id: "2",
    role: "ML/CV Engineering Intern",
    company: "VBC Hydraulics",
    period: "May 2022 - Jul 2022",
    type: "Internship",
    location: "On-site",
    description: " Developed and deployed a prototype automated text extraction system for aluminum pump surfaces using computer vision and OCR, reducing manual inspection time by 60%",
    skills: ["Embedded C", "STM32","Computer Vision" ,"ML"]
  }
];

export const EDUCATION = [
  {
    _id: "1",
    school: "University of Illinois Urbana-Champaign",
    degree: "Master of Engineering in Autonomy & Robotics",
    year: "Aug 2024 - Dec 2025",
    desc: " Robotics engineer with Master’s in Autonomy and Robotics from UIUC, specialized in autonomous vehicles, robotic manipulation, Controls, Computer Vision, Perception, deep learning, and tactile sensing. Proficient in C/C++, Python, PyTorch, ROS, and deploying neural networks to embedded systems."
  },
  {
    _id: "2",
    school: "Nirma University", // UPDATE THIS
    degree: "Bachelor of Technology in Electronics and Communication",
    year: "2020 - 2024",
    desc: "Foundation in electronics and communication with minors in computer engineering."
  }
];

export const CERTIFICATES = [
  {
    _id: "1",
    title: "NASA Space Apps Challenge - Judges' Choice Award",
    issuer: "NASA",
    year: "2023",
    imageUrl: "/images/certs/nasa-award.jpg",
    credentialLink: ""
  },
  {
    _id: "2",
    title: "ROS for Beginners",
    issuer: "The Construct",
    year: "2024",
    imageUrl: "/images/certs/ros-cert.jpg",
    credentialLink: ""
  },
  {
    _id: "3",
    title: "Deep Learning Specialization",
    issuer: "Coursera - DeepLearning.AI",
    year: "2023",
    imageUrl: "/images/certs/deep-learning.jpg",
    credentialLink: ""
  }
];

export const SKILLS = [
  {
    _id: "1",
    category: "Programming Languages",
    iconName: "Code",
    bg: "bg-blue-500/20",
    color: "text-blue-400",
    items: [
      { name: "Python", iconKey: "SiPython", color: "#3776AB" },
      { name: "C++", iconKey: "SiCplusplus", color: "#00599C" },
      { name: "C", iconKey: "SiC", color: "#A8B9CC" },
      { name: "MATLAB", iconKey: "SiMathworks", color: "#0076A8" }
    ]
  },
  {
    _id: "2",
    category: "Robotics & ML Frameworks",
    iconName: "Server",
    bg: "bg-green-500/20",
    color: "text-green-400",
    items: [
      { name: "ROS/ROS2", iconKey: "SiRos", color: "#22314E" },
      { name: "PyTorch", iconKey: "SiPytorch", color: "#EE4C2C" },
      { name: "TensorFlow", iconKey: "SiTensorflow", color: "#FF6F00" },
      { name: "OpenCV", iconKey: "SiOpencv", color: "#5C3EE8" }
    ]
  },
  {
    _id: "3",
    category: "Hardware & Embedded",
    iconName: "Wrench",
    bg: "bg-orange-500/20",
    color: "text-orange-400",
    items: [
      { name: "Arduino", iconKey: "SiArduino", color: "#00979D" },
      { name: "Raspberry Pi", iconKey: "SiRaspberrypi", color: "#A22846" },
      { name: "ESP32", iconKey: "SiEspressif", color: "#E7352C" },
      { name: "STM32", iconKey: "SiStmicroelectronics", color: "#03234B" }
    ]
  },
  {
    _id: "4",
    category: "Tools & Platforms",
    iconName: "Wrench",
    bg: "bg-purple-500/20",
    color: "text-purple-400",
    items: [
      { name: "Git", iconKey: "SiGit", color: "#F05032" },
      { name: "Docker", iconKey: "SiDocker", color: "#2496ED" },
      { name: "Linux", iconKey: "SiLinux", color: "#FCC624" },
      { name: "VS Code", iconKey: "SiVisualstudiocode", color: "#007ACC" }
    ]
  }
];

// Filter categories for Projects page
export const PROJECT_FILTERS = ["All", "Robotics", "AI", "Embedded", "Software"];

// ============================================
// BEYOND THE CODE - Personal Interests
// ============================================

export const PASSIONS = [
  {
    _id: "1",
    title: "Skating",
    icon: "Sparkles",
    description: "Cruising through the streets and learning new tricks. There's something freeing about the flow of skating.",
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400"
  },
  {
    _id: "2",
    title: "Photography",
    icon: "Camera",
    description: "Capturing moments and telling stories through the lens. From street photography to landscapes.",
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400"
  },
  {
    _id: "3",
    title: "Cinematography",
    icon: "Video",
    description: "Creating visual narratives through video. Vlogs, short films, and cinematic travel content.",
    bgColor: "bg-pink-500/20",
    iconColor: "text-pink-400"
  },
  {
    _id: "4",
    title: "Traveling",
    icon: "Plane",
    description: "Exploring new cultures, meeting people, and collecting experiences from around the world.",
    bgColor: "bg-orange-500/20",
    iconColor: "text-orange-400"
  }
];

export const PASSION_GALLERY = [
  // Add your images here - place actual images in public/images/gallery/
  {
    url: "./images/gallery/im2.jpg",
    caption: "Skating",
    location: "Champaign, IL"
  },
  {
    url: "./images/gallery/im3.jpg",
    caption: "Street Photography",
    location: "Chicago, IL"
  },
  {
    url: "./images/gallery/im4.jpg",
    caption: "DJ Set at Rave",
    location: "Chicago, IL"
  },
  {
    url: "./images/gallery/im5.jpg",
    caption: "UIUC Campus",
    location: "UIUC, IL"
  },
  {
    url: "./images/gallery/im6.jpg",
    caption: "Nature",
    location: "IL"
  },
  // Add more images as needed!
];
