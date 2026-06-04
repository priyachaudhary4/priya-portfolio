"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  "INITIALIZING PORTFOLIO...",
  "CONNECTING AI MODULES...",
  "LOADING PROJECTS...",
  "PRIYA KUMARI CHAUDHARY ONLINE",
];

export function WelcomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (stepIndex === bootSequence.length - 1) return;
    
    // Fast boot sequence timing
    const timeout = setTimeout(() => {
      setStepIndex(stepIndex + 1);
    }, stepIndex === 0 ? 800 : stepIndex === 1 ? 600 : 700);

    return () => clearTimeout(timeout);
  }, [stepIndex]);

  useEffect(() => {
    // Total sequence duration ~3 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "brightness(2)", transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
        >
          {/* Cyberpunk Scanline Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10 opacity-40" />
          
          {/* Central glowing core */}
          <div className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse" />

          {/* Terminal Box */}
          <div className="relative z-20 flex flex-col items-start w-full max-w-2xl px-6 font-mono">
            {bootSequence.map((text, idx) => (
              <AnimatePresence key={idx}>
                {stepIndex >= idx && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <span className="text-cyan-500 text-sm md:text-base animate-pulse">
                      {">"}
                    </span>
                    <span 
                      className={`text-sm md:text-xl font-bold tracking-widest uppercase ${
                        idx === bootSequence.length - 1 
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                          : "text-gray-300"
                      }`}
                    >
                      {text}
                    </span>
                    {stepIndex === idx && idx !== bootSequence.length - 1 && (
                      <motion.span 
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                        className="w-2 h-5 bg-cyan-400 ml-1" 
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
