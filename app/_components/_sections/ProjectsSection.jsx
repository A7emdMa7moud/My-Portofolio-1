"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ButtonLink from "../ButtonLink";
import eduSprinter from "../../../public/photos/edu-sprinter.png";
import eduSprinterAdmin from "../../../public/photos/edu-sprinter-admin.png";
import github from "../../../public/icons/Github.svg";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      image: eduSprinter,
      title: "Edu-Sprinter",
      discription: "Educational website",
      skills: ["NodeJs", "ExpressJs", "MongoDB", "Next.js", "Tailwind"],
      href: "https://edu-sprinter.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter",
    },
    {
      image: eduSprinterAdmin,
      title: "Admin-Dashboard",
      discription: "Educational Dashboard",
      skills: ["NodeJs", "ExpressJs", "MongoDB", "Next.js", "Tailwind"],
      href: "https://edu-sprinter-admin.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter-Admin",
    },
    {
      image: eduSprinter,
      title: "Edu-Sprinter-2",
      discription: "Educational website",
      skills: ["NodeJs", "ExpressJs", "MongoDB", "Next.js", "Tailwind"],
      href: "https://edu-sprinter.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter",
    },
    {
      image: eduSprinterAdmin,
      title: "Admin-Dashboard-2",
      discription: "Educational Dashboard",
      skills: ["NodeJs", "ExpressJs", "MongoDB", "Next.js", "Tailwind"],
      href: "https://edu-sprinter-admin.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter-Admin",
    },
    {
      image: eduSprinter,
      title: "Edu-Sprinter-3",
      discription: "Educational website",
      skills: ["NodeJs", "ExpressJs", "MongoDB", "Next.js", "Tailwind"],
      href: "https://edu-sprinter.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter",
    },
    {
      image: eduSprinterAdmin,
      title: "Admin-Dashboard-3",
      discription: "Educational Dashboard",
      skills: ["NodeJs", "ExpressJs", "MongoDB", "Next.js", "Tailwind"],
      href: "https://edu-sprinter-admin.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter-Admin",
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
      <motion.div
        className="mb-10 flex justify-between items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white tracking-wider lg:line-title">
          <span className="text-primary">#</span> projects
        </h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 2, type: "spring" }}
          className="bg-background"
          viewport={{ once: true }} // فقط مرة واحدة
        >
          <Link className="text-white" href={"/projects"}>
            View all ~~{">"}
          </Link>
        </motion.div>
      </motion.div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50, scale: 0.99 }}
            // animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 2.5,
              delay: index * 0.2,
              type: "spring",
              stiffness: 60, // التحكم في مرونة الحركة
            }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }} // الحركة عند ظهور الـ Card
            viewport={{ once: true }} // يظهر مرة واحدة فقط عند دخول الرؤية
            className="flex flex-col border overflow-hidden"
          >
            {/* صورة المشروع مع تأثير Hover */}
            <motion.div
              whileHover={{
                scale: 1.25, // تكبير العنصر
                rotate: 1.8,
                y: 20, // تدوير طفيف عند التمرير
                // boxShadow: "0 10px 30px rgba(0,0,0,0.2)", // تأثير الظل عند التمرير
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <Image
                className="w-full"
                src={project.image}
                alt={project.title}
                quality={100}
              />
            </motion.div>

            {/* قائمة المهارات */}
            <ul className="w-full border-b flex z-10 flex-wrap gap-4 p-2 px-4">
              {project.skills.map((skill) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    type: "spring",
                  }}
                  className="text-lg tracking-wider uppercase text-gray-400"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>

            {/* تفاصيل المشروع */}
            <div className="p-4 flex flex-col gap-4 h-full justify-end">
              <h3 className="text-2xl text-white font-semibold">
                {project.title}
              </h3>
              <p className="text-xl text-gray-300">{project.discription}</p>

              {/* أزرار المشروع */}
              <div className="flex items-center gap-2">
                <ButtonLink
                  title={"Live"}
                  // href={`projects/${String(project.title).toLowerCase()}`}
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
