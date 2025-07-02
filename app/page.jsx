"use client";
import { Suspense } from "react";
import AboutSection from "./_components/_sections/AboutSection";
import HeroSection from "./_components/_sections/HeroSection";
import ProjectsSection from "./_components/_sections/ProjectsSection";
import QuoteBoxSection from "./_components/_sections/QuoteBoxSection";
import SkillsSection from "./_components/_sections/SkillsSection";
import Script from "next/script";
import SkeletonLoader from "./_components/SkeletonLoader";

export default function page() {
  return (
    <>
      <Script id="jsonld-person" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ahmed Mahmoud",
            "alternateName": "أحمد محمود",
            "jobTitle": "MERN Stack Developer",
            "description": "Hi, I'm Ahmed Mahmoud, a MERN Stack developer based in Egypt. I build modern, high-performance web applications using React.js, Node.js, MongoDB, and Express.",
            "url": "https://ahmed-ma7moud.vercel.app",
            "image": "https://ahmed-ma7moud.vercel.app/photos/photoNoBg-1.png",
            "sameAs": [
              "https://github.com/A7emdMa7moud",
              "https://www.linkedin.com/in/a7mdma7moud"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "EG"
            }
          }
        `}
      </Script>
      <Suspense fallback={<SkeletonLoader />}>
        <section className="flex flex-col gap-20">
          <HeroSection />
          <QuoteBoxSection />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
        </section>
      </Suspense>
    </>
  );
}
