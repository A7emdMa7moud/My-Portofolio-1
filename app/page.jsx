"use client";
import AboutSection from "./_components/_sections/AboutSection";
import HeroSection from "./_components/_sections/HeroSection";
import ProjectsSection from "./_components/_sections/ProjectsSection";
import QuoteBoxSection from "./_components/_sections/QuoteBoxSection";
import SkillsSection from "./_components/_sections/SkillsSection";

export default function page() {
  return (
    <section className="flex flex-col gap-20">
      <HeroSection />
      <QuoteBoxSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </section>
  );
}
