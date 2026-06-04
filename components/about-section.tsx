"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  Briefcase, 
  Target,
  Rocket,
  Code2,
  Brain
} from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI/ML Focus",
    description: "Deep expertise in machine learning, neural networks, and intelligent systems",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Agentic AI",
    description: "Building autonomous agents that reason, plan, and execute complex tasks",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Full-Stack",
    description: "End-to-end development with modern frameworks and technologies",
    color: "from-cyan-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "1049 programs solved on Skillrack and 450+ on LeetCode",
    color: "from-orange-500 to-red-500",
  },
];

const stats = [
  { label: "CGPA", value: 8.25, suffix: "", icon: Award, decimals: 2 },
  { label: "Year", value: 2, suffix: "nd", icon: GraduationCap, decimals: 0 },
  { label: "Projects", value: 10, suffix: "+", icon: Briefcase, decimals: 0 },
  { label: "Location", value: "India", icon: MapPin, isText: true },
];

export function AboutSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full premium-card text-primary text-sm font-medium tracking-wider uppercase mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Passionate About{" "}
            <span className="gradient-text">Building the Future</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming ideas into intelligent solutions through AI, ML, and modern software engineering
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="premium-card rounded-3xl p-8 md:p-10 relative overflow-hidden h-full card-hover">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </span>
                  Who I Am
                </h3>
                
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    I am a dedicated <span className="text-foreground font-semibold">second-year B.Tech student</span> specializing 
                    in Artificial Intelligence and Data Science at Sri Eshwar College of Engineering, Coimbatore. 
                    My passion lies in developing intelligent systems that bridge the gap between 
                    cutting-edge AI research and practical applications.
                  </p>
                  <p>
                    Currently working as an <span className="text-foreground font-semibold">Agentic AI Intern at Aptitude Guru</span>, 
                    I am gaining hands-on experience in building autonomous AI agents that can 
                    reason, plan, and execute complex tasks. This role has deepened my understanding 
                    of large language models, prompt engineering, and agent architectures.
                  </p>
                  <p>
                    Beyond AI/ML, I have a strong foundation in <span className="text-foreground font-semibold">full-stack development</span> 
                    using the MERN stack, enabling me to create end-to-end solutions. I believe in the power of technology 
                    to transform lives and am committed to building products that make a real-world difference.
                  </p>
                </div>

                {/* Quick highlights */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Python", "TensorFlow", "LangChain", "React", "Node.js", "MongoDB"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm font-medium text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats and Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="premium-card rounded-2xl p-5 text-center card-hover"
                >
                  <stat.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent mb-1">
                    {stat.isText ? (
                      stat.value
                    ) : (
                      <AnimatedCounter 
                        end={stat.value as number} 
                        suffix={stat.suffix || ""} 
                        decimals={stat.decimals || 0}
                      />
                    )}
                  </div>
                  <div className="text-xs text-[#64748B] dark:text-gray-400 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="premium-card rounded-2xl p-6 card-hover"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </span>
                Education
              </h3>
              <div className="space-y-1">
                <p className="text-foreground font-semibold text-lg">
                  B.Tech in AI & Data Science
                </p>
                <p className="text-muted-foreground">
                  Sri Eshwar College of Engineering
                </p>
                <p className="text-sm text-muted-foreground/80">
                  Coimbatore, Tamil Nadu
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">2024 - 2028</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 text-xs font-medium">
                    Expected
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="premium-card rounded-2xl p-6 card-hover group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
