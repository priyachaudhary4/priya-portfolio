"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Code2, Database } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Artificial Intelligence", level: 95 },
      { name: "Machine Learning", level: 90 },
      { name: "Agentic AI", level: 85 },
      { name: "Data Science", level: 90 },
      { name: "Pandas", level: 95 },
      { name: "Scikit-Learn", level: 85 },
    ],
  },
  {
    title: "Full-Stack Development",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Flask", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Hardware & Tools",
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "ESP32", level: 85 },
      { name: "Arduino", level: 80 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
    ],
  },
];

const floatingTools = [
  "Python", "Machine Learning", "Artificial Intelligence", "Agentic AI", 
  "Data Science", "Pandas", "Scikit-Learn", "React", "Node.js", 
  "MongoDB", "Flask", "ESP32", "Arduino", "Git", "GitHub"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-secondary/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 tracking-tight">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-strong rounded-3xl p-8 hover-glow border border-border/50 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/90 font-medium">{skill.name}</span>
                      <span className="text-muted-foreground font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-black/40 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} relative overflow-hidden`}
                      >
                        {/* Shimmer effect inside progress bar */}
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-3xl p-8 md:p-12 border border-border/50 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Technologies & Frameworks
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit enabling me to build intelligent, scalable, and robust applications.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {floatingTools.map((tool, index) => {
              // Create unique random float animation for each badge
              const floatDuration = 4 + Math.random() * 3;
              const yOffset = 10 + Math.random() * 10;
              
              return (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ y: [0, -yOffset, 0] }}
                    transition={{ 
                      duration: floatDuration, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: Math.random() * 2 // Random start delay
                    }}
                    className="px-6 py-3 bg-secondary/80 backdrop-blur-sm border border-white/10 rounded-xl text-sm font-semibold text-foreground/90 hover:text-white hover:border-primary/50 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-colors cursor-default"
                  >
                    {tool}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
