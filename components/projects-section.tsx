"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Dna, Droplets, Bot, Plane, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InteractiveCard } from "@/components/interactive-card";

const categories = ["All", "AI/ML", "Data Science", "Full Stack", "Robotics"];

const projects = [
  {
    title: "BioScope",
    subtitle: "AI-Based eDNA Biodiversity Monitoring System",
    description:
      "Uses environmental DNA and AI-based analysis to identify species, monitor biodiversity, and support ecosystem conservation. The system leverages machine learning models to analyze eDNA samples and provide real-time biodiversity assessments.",
    longDescription:
      "BioScope is a state-of-the-art AI application that revolutionizes biodiversity monitoring. By processing eDNA (environmental DNA) sequences through advanced Machine Learning models, BioScope can identify hundreds of species in a single water or soil sample with >95% accuracy. The project includes a full pipeline from data preprocessing using Pandas and NumPy to classification using Scikit-Learn. The backend is powered by a scalable Flask REST API.",
    icon: Dna,
    category: "AI/ML",
    technologies: ["Python", "Flask", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn"],
    features: [
      "eDNA Sample Analysis",
      "Species Identification",
      "Biodiversity Monitoring",
      "Ecosystem Conservation Support",
      "AI-Powered Predictions"
    ],
    github: "https://github.com/priyachaudhary4",
    demo: null,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Flight Fare Prediction System",
    subtitle: "Machine Learning Price Predictor",
    description:
      "An intelligent machine learning application that predicts airline ticket prices using historical flight data and advanced feature engineering. Helps users find the best time to book flights.",
    longDescription:
      "This predictive model analyzes thousands of historical flight records to forecast future prices. It employs extensive feature engineering, handling categorical data, datetime features, and outlier detection. The core model is a highly tuned Random Forest Regressor. The interactive dashboard allows users to input travel details and instantly receive a price estimate along with trend visualizations to determine the optimal booking window.",
    icon: Plane,
    category: "Data Science",
    technologies: ["Python", "Flask", "Machine Learning", "Pandas", "Scikit-Learn", "NumPy", "Matplotlib"],
    features: [
      "Price Prediction",
      "Historical Data Analysis",
      "Feature Engineering",
      "Interactive Dashboard",
      "Trend Visualization"
    ],
    github: "https://github.com/priyachaudhary4",
    demo: null,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Blood Donation Management System",
    subtitle: "Full-Stack MERN Application",
    description:
      "A comprehensive platform connecting blood donors, hospitals, and emergency blood requests. Features secure authentication, real-time tracking, and automated emergency alerts for critical situations.",
    longDescription:
      "Built with the MERN stack (MongoDB, Express, React, Node.js), this platform solves the critical delay in finding blood donors during emergencies. It features a robust role-based access control system with JWT authentication for Hospitals, Donors, and Admins. Key functionalities include geo-location-based donor matching, automated SMS/Email alerts for urgent requirements, and generation of PDF certificates for donors.",
    icon: Droplets,
    category: "Full Stack",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "JWT"],
    features: [
      "JWT Authentication",
      "GPS Tracking",
      "Role-Based Access Control",
      "Emergency Alerts",
      "PDF Certificates"
    ],
    github: "https://github.com/priyachaudhary4",
    demo: null,
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-500/10 to-rose-500/10",
  },
  {
    title: "Autonomous Robot System",
    subtitle: "Multi-Mode Navigation Robot",
    description:
      "A sophisticated multi-mode autonomous robot featuring obstacle avoidance, autonomous navigation, and Bluetooth control. Built with embedded systems for real-time decision making and sensor fusion.",
    longDescription:
      "This robotics project integrates hardware and software to create a highly responsive autonomous vehicle. Powered by an ESP32 microcontroller, it utilizes sensor fusion from Ultrasonic and IR sensors to map its immediate environment and avoid obstacles in real-time. It features multiple operational modes, including a fully autonomous roaming mode and a manual override mode controlled via a custom Bluetooth mobile application. The control logic is written in optimized C++ for minimal latency.",
    icon: Bot,
    category: "Robotics",
    technologies: ["ESP32", "Arduino", "C++", "Ultrasonic Sensors", "IR Sensors", "Bluetooth"],
    features: [
      "Obstacle Avoidance",
      "Autonomous Navigation",
      "Bluetooth Control",
      "Sensor Fusion",
      "Real-time Processing"
    ],
    github: "https://github.com/priyachaudhary4",
    demo: null,
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10",
  },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my technical projects spanning AI/ML, Data Science, Full-Stack Development, and Robotics
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-105"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <InteractiveCard className="h-full">
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="glass-card rounded-3xl overflow-hidden h-full border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover cursor-pointer group flex flex-col"
                  >
                    {/* Project Header with Gradient */}
                    <div className={`relative h-56 bg-gradient-to-br ${project.bgGradient} p-8 flex flex-col justify-between overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-4 right-4 w-40 h-40 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-3xl transition-transform duration-700 group-hover:scale-150" />
                        <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
                      </div>
                      
                      {/* Icon and Category Badge */}
                      <div className="relative flex items-start justify-between z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <project.icon className="w-8 h-8 text-white" />
                        </div>
                        <Badge className="bg-background/50 backdrop-blur-md text-foreground border-border/50">
                          {project.category}
                        </Badge>
                      </div>
                      
                      {/* Title */}
                      <div className="relative z-10 mt-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8 space-y-6 flex-grow flex flex-col justify-between bg-card/40">
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-secondary/50 text-muted-foreground text-xs font-medium border-none"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="secondary" className="bg-secondary/50 text-muted-foreground text-xs font-medium border-none">
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between border-t border-border/50">
                        <span className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}>
                          View Details
                          <ArrowRight className="w-4 h-4 text-blue-400" />
                        </span>
                        
                        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                          <Button size="icon" variant="ghost" className="w-9 h-9 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                          {project.demo && (
                            <Button size="icon" variant="ghost" className="w-9 h-9 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View demo">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-primary/30 hover:bg-primary/10 glass hover-glow h-14 px-8 text-base font-semibold rounded-full"
            asChild
          >
            <a href="https://github.com/priyachaudhary4" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              Explore All Repositories
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto z-[101] p-4 sm:p-0"
            >
              <div className="glass-strong rounded-3xl border border-border/50 overflow-hidden shadow-2xl relative">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white z-20 backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className={`relative h-48 sm:h-64 bg-gradient-to-br ${selectedProject.bgGradient} p-8 flex items-end`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 flex items-center gap-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center shadow-xl`}>
                      <selectedProject.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-background/80 backdrop-blur-md border-none">{selectedProject.category}</Badge>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">{selectedProject.title}</h2>
                      <p className="text-white/80 font-medium">{selectedProject.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 space-y-8 bg-card/90">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">About the Project</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map(feature => (
                          <li key={feature} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-r ${selectedProject.gradient}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <Badge key={tech} variant="secondary" className="bg-secondary text-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t border-border/50">
                    <Button className={`bg-gradient-to-r ${selectedProject.gradient} text-white hover:opacity-90 gap-2 h-12 px-6`} asChild>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                        Source Code
                      </a>
                    </Button>
                    {selectedProject.demo && (
                      <Button variant="outline" className="gap-2 h-12 px-6 glass hover-glow border-none" asChild>
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
