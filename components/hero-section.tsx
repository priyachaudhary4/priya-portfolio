"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/animated-counter";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  Bot, 
  Code2, 
  Brain,
  ChevronDown,
  ArrowRight,
  Trophy,
  Award,
  Briefcase,
  Layers,
  Sparkles
} from "lucide-react";

const stats = [
  { label: "Projects", value: 15, suffix: "+", icon: Code2, color: "text-blue-400" },
  { label: "Hackathon Awards", value: 2, suffix: "+", icon: Trophy, color: "text-purple-400" },
  { label: "Certifications", value: 5, suffix: "+", icon: Award, color: "text-purple-400" },
  { label: "Internship", value: 1, suffix: "+", icon: Briefcase, color: "text-cyan-400" },
];

const PremiumBadge = ({ 
  icon: Icon, 
  label, 
  delay,
  type
}: { 
  icon: any, 
  label: string, 
  delay: number,
  type: 'ai' | 'agent' | 'fullstack'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colors = {
    ai: { border: "hover:border-blue-500/50", glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]", bg: "hover:bg-blue-500/10", text: "text-blue-400", dot: "bg-green-400", hex: "#3B82F6" },
    agent: { border: "hover:border-purple-500/50", glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]", bg: "hover:bg-purple-500/10", text: "text-purple-400", dot: "bg-purple-400", hex: "#A855F7" },
    fullstack: { border: "hover:border-cyan-500/50", glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]", bg: "hover:bg-cyan-500/10", text: "text-cyan-400", dot: "bg-blue-400", hex: "#06B6D4" }
  };
  const theme = colors[type];

  return (
    <motion.div
      animate={{ y: [-3, 3, -3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      className={`relative flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/5 bg-[#0f172a]/45 backdrop-blur-[16px] overflow-hidden cursor-default group transition-all duration-300 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)] ${theme.glow} ${theme.bg} ${theme.border}`}
    >
      {/* Holographic Sweep */}
      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[shine_8s_infinite] pointer-events-none group-hover:hidden" />
      
      {/* Energy Border */}
      <div className={`absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
           style={{ 
             background: `linear-gradient(90deg, transparent, ${theme.hex}40, transparent)`, 
             backgroundSize: "200% 100%",
             animation: isHovered ? "borderFlow 2s linear infinite" : "none" 
           }} 
      />

      {/* Particle Emission (Hover) */}
      <AnimatePresence>
        {isHovered && type === 'agent' && (
          <>
            <motion.div initial={{ opacity: 0, y: 0, x: 0 }} animate={{ opacity: [0, 1, 0], y: -15, x: -10 }} transition={{ duration: 1, repeat: Infinity }} className={`absolute left-4 top-1 w-1 h-1 rounded-full`} style={{ backgroundColor: theme.hex }} />
            <motion.div initial={{ opacity: 0, y: 0, x: 0 }} animate={{ opacity: [0, 1, 0], y: -10, x: 15 }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }} className={`absolute right-4 top-1 w-1 h-1 rounded-full`} style={{ backgroundColor: theme.hex }} />
          </>
        )}
      </AnimatePresence>

      {/* Active Dot */}
      <span className="relative flex h-1.5 w-1.5 z-10">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.dot}`}></span>
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${theme.dot}`}></span>
      </span>

      {/* Icon */}
      <div className="relative z-10">
        <Icon className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12 ${theme.text} ${
          isHovered && type === 'ai' ? 'animate-pulse' : ''
        }`} />
        {/* Full Stack Scanning Light */}
        {isHovered && type === 'fullstack' && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-50 animate-[scan_1.5s_linear_infinite]" />
        )}
      </div>

      {/* Label */}
      <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors z-10 relative">
        {label}
      </span>
    </motion.div>
  );
};

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const portraitX = useTransform(smoothX, [-500, 500], [-15, 15]);
  const portraitY = useTransform(smoothY, [-500, 500], [-15, 15]);

  const orbX = useTransform(smoothX, [-500, 500], [-40, 40]);
  const orbY = useTransform(smoothY, [-500, 500], [-40, 40]);

  const lightX = useTransform(smoothX, [-500, 500], [40, 60]);
  const lightY = useTransform(smoothY, [-500, 500], [40, 60]);
  
  const backgroundTemplate = useMotionTemplate`radial-gradient(circle at ${lightX}% ${lightY}%, rgba(139,92,246,0.15) 0%, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-8"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[150px]" />
        <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[150px]" />
      </div>

      {/* Cinematic Dynamic Light Source */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10 mix-blend-screen opacity-50"
        style={{ background: backgroundTemplate }}
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center">
        
        {/* Left Column (45%) */}
        <div className="w-full lg:w-[45%] flex flex-col items-start text-left z-20 mt-8 lg:mt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-transparent mb-5 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-[11px] font-bold text-cyan-400 tracking-widest uppercase">AI. INNOVATE. IMPACT.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 w-full"
          >
            <h1 className="text-foreground font-bold leading-[1.05] text-[50px] md:text-[65px] lg:text-[75px] tracking-tight">
              Priya Kumari
            </h1>
            <h1 className="font-bold leading-[1.05] text-[55px] md:text-[75px] lg:text-[85px] tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pb-1">
              Chaudhary
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-muted-foreground text-base lg:text-lg font-normal leading-snug">
              Third-Year B.Tech AI & Data Science Student<br />
              Sri Eshwar College of Engineering
            </p>
          </motion.div>

          {/* Horizontal Role Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            <PremiumBadge icon={Brain} label="AI/ML Engineer" type="ai" delay={0.3} />
            <PremiumBadge icon={Bot} label="Agentic AI Developer" type="agent" delay={0.4} />
            <PremiumBadge icon={Code2} label="Full-Stack Developer" type="fullstack" delay={0.5} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-[15px] lg:text-[16px] leading-relaxed max-w-[500px] mb-8"
          >
            Building intelligent solutions through Artificial Intelligence, Machine Learning, Agentic AI, Robotics, and Full-Stack Development to solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <Button
              asChild
              className="h-11 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-sm shadow-md shadow-blue-500/20 border-none transition-all"
            >
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 px-6 rounded-xl border-border bg-background hover:bg-muted text-foreground font-medium text-sm backdrop-blur-md transition-all"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-4 h-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/priyachaudhary4" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/priya-chaudhary-2500b9324/" },
              { icon: Code2, label: "LeetCode", href: "#" },
              { icon: Layers, label: "StackOverflow", href: "#" },
              { icon: Mail, label: "Email", href: "#" },
            ].map((social, idx) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-background/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-sm transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column (55%) */}
        <div className="w-full lg:w-[55%] relative flex flex-col justify-center items-center mt-12 lg:mt-0 lg:pl-10 h-auto z-10">
          
          <div className="relative w-full flex-1 flex items-center justify-center min-h-[350px] lg:min-h-[500px]">
            {/* Holographic glowing floor */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[200px] h-[30px] lg:w-[350px] lg:h-[40px] bg-cyan-500/30 rounded-[100%] blur-[20px] animate-holo-pulse z-0" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[120px] h-[15px] lg:w-[180px] lg:h-[20px] border border-cyan-400/50 rounded-[100%] z-0 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
            
            <div className="absolute w-[340px] h-[340px] lg:w-[500px] lg:h-[500px] rounded-full shadow-[0_0_100px_rgba(59,130,246,0.3)] pointer-events-none" />
            <div className="absolute w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] rounded-full shadow-[inset_0_0_80px_rgba(168,85,247,0.2)] pointer-events-none" />
            
            {/* Neon Ring - delayed activation */}
            <motion.svg 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
              className="absolute w-[340px] h-[340px] lg:w-[500px] lg:h-[500px] overflow-visible pointer-events-none"
              viewBox="0 0 500 500"
              fill="none"
            >
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
              <circle 
                cx="250" 
                cy="250" 
                r="248" 
                stroke="url(#neonGradient)" 
                strokeWidth="3"
                className="drop-shadow-none dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] opacity-60 dark:opacity-100 transition-opacity duration-500"
              />
            </motion.svg>

            {/* PKC Brand Floating Identity */}
            <motion.div
              style={{ x: portraitX, y: orbY }}
              className="absolute top-[15%] left-[5%] lg:-left-[10%] w-24 h-24 bg-background/30 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-float z-40 pointer-events-none hidden md:flex"
            >
              <img src="/pkc-logo.png" alt="PKC Brand" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </motion.div>

            {/* AI Companion Orb */}
            <motion.div
              style={{ x: orbX, y: orbY }}
              className="absolute top-[10%] right-[10%] w-6 h-6 rounded-full bg-cyan-300 blur-[3px] shadow-[0_0_30px_15px_rgba(6,182,212,0.6)] animate-float z-30 pointer-events-none"
            />

            {/* Portrait Image (Live Digital Avatar) */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: portraitX, y: portraitY }}
              className="relative flex justify-center items-center h-[280px] lg:h-[420px] z-20 pointer-events-none animate-breathe"
            >
              <div className="animate-micro-move h-full">
                <img 
                  src="/hero-portrait.png?v=6" 
                  alt="Priya Kumari Chaudhary"
                  className="h-full w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] dark:drop-shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="w-full lg:w-[95%] z-30 -mt-6 lg:-mt-12 relative"
          >
            <div className="premium-card rounded-2xl p-5 lg:p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3 divide-y md:divide-y-0 md:divide-x divide-border dark:divide-white/5">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="flex flex-col items-center justify-center pt-3 md:pt-0">
                    <stat.icon className={`w-6 h-6 mb-2 ${stat.color} dark:drop-shadow-[0_0_8px_currentColor]`} strokeWidth={1.5} />
                    <div className="flex items-baseline text-2xl font-bold text-foreground mb-0.5">
                      <AnimatedCounter end={stat.value} duration={2} />
                      <span className="text-xl">{stat.suffix}</span>
                    </div>
                    <div className="text-[11px] font-normal text-muted-foreground text-center capitalize tracking-wide mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
      >
        <div className="flex flex-col items-center justify-center absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400/80" />
          </motion.div>
        </div>

        <div className="w-full h-[120px] opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0wLDEyOEw0OCwxMjIuN0M5NiwxMTcsMTkyLDEwNiwyODgsMTE3LjNDMzg0LDEyOCw0ODAsMTYwLDU3NiwxNzAuN0M2NzIsMTgxLDc2OCwxNzEsODY0LDE0OS4zQzk2MCwxMjgsMTA1Niw5NiwxMTUyLDExNy4zQzEyNDgsMTM5LDEzNDQsMjEzLDEzOTIsMjUxLjNMMTQ0MCwyOTBMMTQ0MCwzMjBMMTM5MiwzMjBDMTM0NCwzMjAsMTI0OCwzMjAsMTE1MiwzMjBDMTA1NiwzMjAsOTYwLDMyMCw4NjQsMzIwQzc2OCwzMjAsNjcyLDMyMCw1NzYsMzIwQzQ4MCwzMjAsMzg0LDMyMCwyODgsMzIwQzE5MiwzMjAsOTYsMzIwLDQ4LDMyMEwwLDMyMFoiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNhODU1ZjciIHN0cm9rZS13aWR0aD0iMiIgZD0iTTAsMjU2TDQ4LDIyOS4zQzk2LDIwMywxOTIsMTQ5LDI4OCwxNTQuN0MzODQsMTYwLDQ4MCwyMjQsNTc2LDIzNC43QzY3MiwyNDUsNzY4LDIwMyw4NjQsMTk3LjNDOTYwLDE5MSwxMDU2LDIyNCwxMTUyLDIzNC43QzEyNDgsMjQ1LDEzNDQsMjM1LDEzOTIsMjI5LjNMMTQ0MCwyMjRMMTQ0MCwzMjBMMTM5MiwzMjBDMTM0NCwzMjAsMTI0OCwzMjAsMTE1MiwzMjBDMTA1NiwzMjAsOTYwLDMyMCw4NjQsMzIwQzc2OCwzMjAsNjcyLDMyMCw1NzYsMzIwQzQ4MCwzMjAsMzg0LDMyMCwyODgsMzIwQzE5MiwzMjAsOTYsMzIwLDQ4LDMyMEwwLDMyMFoiPjwvcGF0aD48L3N2Zz4=')] bg-cover bg-bottom animate-pulse" />
      </motion.div>
    </section>
  );
}
