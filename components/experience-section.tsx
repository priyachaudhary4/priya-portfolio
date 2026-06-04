"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, ExternalLink, Cpu, HeartPulse, Users, Construction, ShoppingCart, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Agentic AI Intern",
    company: "Aptitude Guru",
    location: "Remote",
    period: "May 2025 – June 2025",
    current: true,
    description: [
      "Developing autonomous AI agents using LLM frameworks and prompt engineering techniques",
      "Building multi-agent systems capable of complex reasoning and task execution",
      "Implementing RAG (Retrieval Augmented Generation) pipelines for knowledge-enhanced AI applications",
      "Collaborating with the team to design scalable AI architectures for production deployment",
    ],
    technologies: ["LangChain", "OpenAI", "Python", "Vector DBs", "RAG", "Prompt Engineering"],
    ongoingProjects: [
      {
        name: "AI Medical Assistant for Hospitals and Insurance Claims",
        description: "Developing AI-powered solutions for healthcare assistance and insurance workflow automation.",
        icon: HeartPulse,
        status: "In Development",
        color: "from-rose-500 to-pink-500",
      },
      {
        name: "Crowdsourced Civic Issue Reporting System",
        description: "Developing intelligent AI-powered civic issue reporting and complaint management solutions.",
        icon: Users,
        status: "In Development",
        color: "from-blue-500 to-cyan-500",
      },
    ],
  },
  {
    title: "MERN Stack Development Intern",
    company: "AlgoTutor",
    location: "Remote",
    period: "Dec 1, 2025 – Dec 19, 2025",
    current: false,
    description: [
      "Developed a full-stack E-commerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Implemented RESTful APIs for product management, user authentication, and order processing",
      "Integrated secure payment gateways and managed state using modern React tools",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "Tailwind CSS"],
    completedProjects: [
      {
        name: "Full-Stack E-Commerce Platform",
        description: "Built a complete e-commerce solution with product management, shopping cart, and secure checkout.",
        icon: ShoppingCart,
        status: "Completed",
        color: "from-emerald-500 to-teal-500",
      },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-20 md:pl-32 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-12 top-10 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
              </div>

              <div className="glass rounded-2xl p-6 md:p-8 relative group border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.2)]">
                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      {exp.title}
                      {exp.current && (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          Current
                        </Badge>
                      )}
                    </h3>
                    <div className="flex items-center gap-2 text-primary mt-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 text-muted-foreground hover:bg-secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Ongoing Projects Section */}
                {exp.ongoingProjects && exp.ongoingProjects.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <Cpu className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Ongoing Projects</h4>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs">
                        <Construction className="w-3 h-3 mr-1" />
                        Work in Progress
                      </Badge>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      {exp.ongoingProjects.map((project, pIndex) => {
                        const IconComponent = project.icon;
                        return (
                          <motion.div
                            key={project.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: pIndex * 0.1 }}
                            className="relative group"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10" 
                                 style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                            <div className="bg-background/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                              <div className="flex items-start gap-3">
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}>
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h5 className="font-medium text-foreground text-sm leading-tight">
                                      {project.name}
                                    </h5>
                                  </div>
                                  <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                                    {project.description}
                                  </p>
                                  <Badge 
                                    variant="outline" 
                                    className="text-xs bg-amber-500/10 text-amber-400 border-amber-500/30"
                                  >
                                    {project.status}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Completed Projects Section */}
                {exp.completedProjects && exp.completedProjects.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <ShoppingCart className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Key Projects</h4>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Completed
                      </Badge>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      {exp.completedProjects.map((project, pIndex) => {
                        const IconComponent = project.icon;
                        return (
                          <motion.div
                            key={project.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: pIndex * 0.1 }}
                            className="relative group"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10" 
                                 style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                            <div className="bg-background/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                              <div className="flex items-start gap-3">
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}>
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h5 className="font-medium text-foreground text-sm leading-tight">
                                      {project.name}
                                    </h5>
                                  </div>
                                  <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                                    {project.description}
                                  </p>
                                  <Badge 
                                    variant="outline" 
                                    className="text-xs bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                  >
                                    {project.status}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
