"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, GraduationCap, Briefcase, Bot, Code } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

const achievements = [
  {
    title: "2nd Prize - TNWISE Hackathon",
    category: "Hackathon",
    description:
      "Secured second position in the prestigious Tamil Nadu Women in STEM and Entrepreneurship Hackathon for developing an innovative tech solution.",
    icon: Trophy,
    color: "from-yellow-400 to-amber-500",
    bgGlow: "bg-yellow-500/20",
    position: "2nd",
  },
  {
    title: "2nd Prize - Freshathon",
    category: "Hackathon",
    description:
      "Achieved second place in Freshathon, demonstrating problem-solving skills and technical innovation as a fresher.",
    icon: Medal,
    color: "from-orange-400 to-red-500",
    bgGlow: "bg-orange-500/20",
    position: "2nd",
  },
  {
    title: "3rd Position - SkillRack",
    category: "Competitive Coding",
    description:
      "Ranked 3rd in SkillRack coding platform through consistent problem-solving and algorithmic excellence.",
    icon: Code,
    color: "from-emerald-400 to-green-500",
    bgGlow: "bg-emerald-500/20",
    position: "3rd",
  },
  {
    title: "Oracle Java Foundations",
    category: "Certification",
    description:
      "Earned official Oracle certification validating core Java programming skills, OOP concepts, and software development fundamentals.",
    icon: GraduationCap,
    color: "from-blue-400 to-cyan-500",
    bgGlow: "bg-blue-500/20",
    position: null,
  },
  {
    title: "MERN Stack Internship",
    category: "Professional Training",
    description:
      "Successfully completed MERN Stack internship, gaining hands-on experience in MongoDB, Express.js, React, and Node.js development.",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    bgGlow: "bg-indigo-500/20",
    position: null,
  },
  {
    title: "Agentic AI Internship",
    category: "Current Role",
    description:
      "Ongoing internship at Aptitude Guru focusing on building autonomous AI agents, multi-agent systems, and intelligent automation solutions.",
    icon: Bot,
    color: "from-violet-400 to-purple-500",
    bgGlow: "bg-violet-500/20",
    position: null,
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden z-10">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 tracking-tight">
            Recognition & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A journey of continuous learning, competitive excellence, and professional growth
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 premium-card rounded-3xl p-8 relative overflow-hidden border border-border/50 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={2} duration={2} />
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Hackathon Wins</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={1} duration={1.5} />
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Certifications</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={2} duration={2} />
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Internships</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-2">
                Top <AnimatedCounter end={3} duration={1.5} />
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">SkillRack Rank</div>
            </div>
          </div>
        </motion.div>

        {/* Animated Timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20 hidden lg:block rounded-full" />

          <div className="space-y-12 lg:space-y-24">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${achievement.color} border-4 border-background hidden lg:flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full lg:w-[calc(50%-3rem)] premium-card rounded-3xl p-8 relative overflow-hidden group border border-border/50 hover:border-primary/50 transition-all duration-500 ${
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 ${achievement.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`} />
                  
                  {/* Position badge for awards */}
                  {achievement.position && (
                    <div className={`absolute top-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                      <span className="text-white font-bold text-lg">{achievement.position}</span>
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Icon and category */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <achievement.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${achievement.color} text-white shadow-sm uppercase tracking-wider`}>
                          {achievement.category}
                        </span>
                      </div>
                    </div>

                    {/* Title and description */}
                    <h3 className="text-2xl font-bold text-foreground mb-3 pr-16 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/70 dark:group-hover:from-white dark:group-hover:to-white/70 transition-all">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Decorative line */}
                    <div className={`mt-6 h-1 w-0 group-hover:w-full rounded-full bg-gradient-to-r ${achievement.color} transition-all duration-700 ease-out`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
