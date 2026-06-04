"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy, Target, TrendingUp, Code2, GitBranch, Users, Star, BookOpen, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "priyaa19913",
    tagline: "Algorithmic Problem Solving",
    stats: [
      { label: "Problems Solved", value: "169", icon: Target },
      { label: "Max Streak", value: "50 Days", icon: TrendingUp },
      { label: "Badges", value: "1", icon: Trophy },
    ],
    description: "Actively practicing Data Structures & Algorithms with consistent daily problem-solving. Focus on dynamic programming, graphs, and system design.",
    url: "https://leetcode.com/u/priyaa19913/",
    gradient: "from-[#FFA116] to-[#FFB84D]",
    bgGlow: "bg-[#FFA116]/20",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    platform: "SkillRack",
    username: "priya_chaudhary",
    tagline: "Consistent Code Practice",
    stats: [
      { label: "Programs", value: "1049", icon: Code2 },
      { label: "Bronze Medals", value: "302", icon: Star },
      { label: "Global Rank", value: "21.8k", icon: Trophy },
    ],
    description: "Regular coding practice and assessment platform. Solved 1000+ problems across multiple languages including C (644), Python3 (172), and Java (109).",
    url: "https://skillrack.com/faces/ui/profile.xhtml",
    gradient: "from-[#00C853] to-[#69F0AE]",
    bgGlow: "bg-[#00C853]/20",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    platform: "GitHub",
    username: "priyachaudhary4",
    tagline: "Open Source & Projects",
    stats: [
      { label: "Repositories", value: "20+", icon: GitBranch },
      { label: "Contributions", value: "500+", icon: Zap },
      { label: "Projects", value: "Active", icon: BookOpen },
    ],
    description: "Active contributor with repositories spanning AI/ML projects, full-stack applications, and automation tools. Maintaining clean, documented code.",
    url: "https://github.com/priyachaudhary4",
    gradient: "from-[#6e5494] to-[#9B7DFF]",
    bgGlow: "bg-[#6e5494]/20",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    platform: "LinkedIn",
    username: "priya-chaudhary-2500b9324",
    tagline: "Professional Network",
    stats: [
      { label: "Connections", value: "104+", icon: Users },
      { label: "Posts", value: "Active", icon: BookOpen },
      { label: "Network", value: "Growing", icon: TrendingUp },
    ],
    description: "Building professional connections in AI/ML, Data Science, and Software Engineering. Sharing insights on technology trends and career growth.",
    url: "https://www.linkedin.com/in/priya-chaudhary-2500b9324/",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    bgGlow: "bg-[#0A66C2]/20",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export function CodingProfilesSection() {
  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Coding Profiles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">
            Competitive <span className="gradient-text">Programming</span> & Profiles
          </h2>
          <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            Track my coding journey across multiple platforms. Consistently improving problem-solving skills and building a strong foundation in algorithms and data structures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-6 group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              {/* Gradient glow effect */}
              <div
                className={`absolute -top-20 -right-20 w-60 h-60 ${profile.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${profile.gradient} p-[2px] shadow-lg`}
                    >
                      <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center text-foreground">
                        {profile.platformIcon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {profile.platform}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        @{profile.username}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-2 hover:bg-secondary text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <a href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${profile.platform} profile`}>
                      <span className="hidden sm:inline text-xs">Visit</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                {/* Tagline */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${profile.gradient} bg-opacity-10 mb-4`}>
                  <span className={`text-xs font-medium bg-gradient-to-r ${profile.gradient} bg-clip-text text-transparent`}>
                    {profile.tagline}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {profile.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {profile.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-secondary/50 hover:bg-secondary/80 rounded-xl p-3 text-center transition-colors group/stat"
                    >
                      <stat.icon className="w-4 h-4 mx-auto mb-1.5 text-muted-foreground group-hover/stat:text-primary transition-colors" />
                      <div className="text-lg font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Want to connect or collaborate on coding challenges?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              className="gap-2 border-border hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://leetcode.com/u/priyaa19913/" target="_blank" rel="noopener noreferrer">
                <Target className="w-4 h-4" />
                Challenge on LeetCode
              </a>
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-border hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/priyachaudhary4" target="_blank" rel="noopener noreferrer">
                <GitBranch className="w-4 h-4" />
                Collaborate on GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
