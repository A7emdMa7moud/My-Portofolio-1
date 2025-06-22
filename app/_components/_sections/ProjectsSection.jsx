"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ButtonLink from "../ButtonLink";
import eduSprinter from "../../../public/photos/edu-sprinter.png";
import eduSprinterAdmin from "../../../public/photos/edu-sprinter-admin.png";
import sirb from "../../../public/photos/sirb-disktop-1.png";
import github from "../../../public/icons/Github.svg";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      image: eduSprinter,
      title: "Edu-Sprinter",
      discription: "Educational website",
      frontend: ["Next.js", "Tailwind"],
      backend: ["NodeJs", "ExpressJs", "MongoDB"],
      href: "https://edu-sprinter.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter",
    },
    {
      image: eduSprinterAdmin,
      title: "Admin-Dashboard",
      discription: "Educational Dashboard",
      frontend: ["Next.js", "Tailwind"],
      backend: ["NodeJs", "ExpressJs", "MongoDB"],
      href: "https://edu-sprinter-admin.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter-Admin",
    },
    {
      image: sirb,
      title: "Sirb Movies",
      discription: "Movies & TV Shows Platform",
      frontend: ["Next.js", "Tailwind"],
      backend: ["External data integration"],
      api: "TMDB API", // هنا وضحت أنك استخدمت API
      href: "https://sirb-two.vercel.app",
      repo: "https://github.com/A7emdMa7moud/sirb",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", delay: 0.5, duration: 2 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white tracking-wider">
          <span className="text-primary">#</span> projects
        </h2>
        <Link className="text-white" href={"/projects"}>
          View all ~~{">"}
        </Link>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 2.5,
              delay: index * 0.2,
              type: "spring",
              stiffness: 60,
            }}
            viewport={{ once: true }}
            className="flex flex-col border border-gray/50"
          >
            <motion.div whileHover={{ scale: 1.5, rotate: 1.5, y: 10 }}>
              <Image
                className="w-full"
                src={project.image}
                alt={project.title}
                quality={100}
              />
            </motion.div>

            <div className="w-full border-b border-gray/50 flex flex-col gap-0 p-2 px-4">
              <h4 className="text-lg text-white font-semibold">Frontend:</h4>
              <ul className="flex flex-wrap gap-4">
                {project.frontend.map((skill) => (
                  <li key={skill} className="text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
              <h4 className="text-lg text-white font-semibold mt-2">
                Backend:
              </h4>
              <ul className="flex flex-wrap gap-4">
                {project.backend.map((skill) => (
                  <li key={skill} className="text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 flex flex-col gap-4 h-full justify-end">
              <h3 className="text-2xl text-white font-semibold">
                {project.title}
              </h3>
              <p className="text-xl text-gray-300">{project.discription}</p>
              <div className="flex items-center gap-2">
                <ButtonLink
                  title={"Live"}
                  href={project.href}
                  newTab={true}
                  primary={true}
                />
                <ButtonLink
                  title={"Repo"}
                  href={project.repo}
                  icon={github}
                  newTab={true}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
