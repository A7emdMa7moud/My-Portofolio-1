"use client";

import { Suspense } from "react";
import eduSprinter from "../../public/photos/edu-sprinter.png";
import eduSprinterAdmin from "../../public/photos/edu-sprinter-admin.png";
import sirb from "../../public/photos/sirb.png";
import Projects from "../_components/Projects";
import LandingPages from "../_components/LandingPages";
import { motion } from "framer-motion";
import ProjectsSkeleton from "../_components/ProjectsSkeleton";

export default function ProjectsContent() {
  const projects = [
    {
      image: eduSprinter,
      title: "Edu-Sprinter",
      discription: "Educational website",
      frontend: ["Next.js", "Tailwind"],
      backend: ["NodeJs", "ExpressJs", "MongoDB"],
      api: "No",
      href: "https://edu-sprinter.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter",
    },
    {
      image: eduSprinterAdmin,
      title: "Admin-Dashboard",
      discription: "Educational Dashboard",
      frontend: ["Next.js", "Tailwind"],
      backend: ["NodeJs", "ExpressJs", "MongoDB"],
      api: "No",
      href: "https://edu-sprinter-admin.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter-Admin",
    },
    {
      image: sirb,
      title: "Sirb Movies",
      discription: "Movies & TV Shows Platform",
      frontend: ["Next.js", "Tailwind"],
      backend: ["External data integration"],
      api: "TMDB API",
      href: "https://sirb-two.vercel.app",
      repo: "https://github.com/A7emdMa7moud/sirb",
    },
  ];

  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <section>
        <div className="flex flex-col gap-10">
          <LandingPages
            key={"projects"}
            title={"Projects"}
            desription={"List of my projects"}
          />
          <div className="">
            <motion.h4
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-4xl mb-10 text-white"
            >
              <span className="text-primary">#</span> complete-apps
            </motion.h4>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 *:border">
              <Projects key={"projects"} data={projects} />
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
