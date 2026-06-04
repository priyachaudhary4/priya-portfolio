"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; // Progress finishes in 1.2s

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);

    // Fade out exactly at 1.5s
    const exitTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(exitTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="premium-loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816] overflow-hidden"
        >
          {/* Neural Network Ambient Background */}
          <div className="absolute inset-0 z-0">
            {/* Glowing Orbs */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"
            />
            
            {/* Minimalist SVG Network Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <motion.line 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                x1="20%" y1="30%" x2="80%" y2="70%" stroke="#06B6D4" strokeWidth="1" 
              />
              <motion.line 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                x1="80%" y1="30%" x2="20%" y2="70%" stroke="#A855F7" strokeWidth="1" 
              />
              <motion.circle cx="20%" cy="30%" r="3" fill="#06B6D4" />
              <motion.circle cx="80%" cy="70%" r="3" fill="#06B6D4" />
              <motion.circle cx="80%" cy="30%" r="3" fill="#A855F7" />
              <motion.circle cx="20%" cy="70%" r="3" fill="#A855F7" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* PK Logo with Animated Glowing Ring */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Outer Ring */}
              <motion.svg
                className="absolute w-32 h-32 -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="url(#loading-gradient)"
                  strokeWidth="2"
                  strokeDasharray="300"
                  initial={{ strokeDashoffset: 300 }}
                  animate={{ strokeDashoffset: 300 - (progress / 100) * 300 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="loading-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </motion.svg>
              
              {/* Inner Logo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]"
              >
                <img src="/pkc-logo.png" alt="PKC Logo" className="w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
              </motion.div>
            </div>

            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
            >
              Priya Kumari Chaudhary
            </motion.h1>

            {/* Roles */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10"
            >
              <span className="text-blue-400">AI/ML Engineer</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-purple-400">Agentic AI Developer</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-cyan-400">Full-Stack Developer</span>
            </motion.div>

            {/* Dynamic Status Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                  Building Intelligent Solutions for the Future
                </span>
              </div>
              
              <div className="text-3xl font-light text-white font-mono mt-1 w-20 text-center">
                {progress}%
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
