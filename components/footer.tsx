"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 relative border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Branding Section */}
        <div className="flex flex-col items-center justify-center mb-10 gap-4">
          <motion.img 
            src="/pkc-logo.png" 
            alt="PKC Logo" 
            className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 20px rgba(168,85,247,0.6))" }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-foreground font-semibold text-lg mb-2">Designed & Developed by Priya Kumari Chaudhary</p>
            <p className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide">
              <span className="text-blue-400">AI/ML Engineer</span> | <span className="text-purple-400">Agentic AI Developer</span> | <span className="text-cyan-400">Full-Stack Developer</span>
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="icon"
              variant="outline"
              className="border-border hover:bg-secondary hover:border-primary rounded-full w-10 h-10 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
