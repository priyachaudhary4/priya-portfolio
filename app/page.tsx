import { Navigation } from "@/components/navigation";
import { ParticleBackground } from "@/components/particle-background";
import { WelcomeScreen } from "@/components/welcome-screen";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { AchievementsSection } from "@/components/achievements-section";
import { CodingProfilesSection } from "@/components/coding-profiles-section";
import { SocialLinksSection } from "@/components/social-links-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <WelcomeScreen />
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <CodingProfilesSection />
      <SocialLinksSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
