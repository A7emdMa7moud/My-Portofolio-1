"use client";
import Link from "next/link";
import Image from "next/image";
import ButtonLink from "../_components/ButtonLink";
import eduSprinter from "../../public/photos/edu-sprinter.png";
import eduSprinterAdmin from "../../public/photos/edu-sprinter-admin.png";
import github from "../../public/icons/Github.svg";
import Projects from "../_components/Projects";

export default function page() {
  const frontendProjects = [
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
  ];
  const backendProjects = [
    {
      image: eduSprinter,
      title: "Edu-Sprinter",
      discription: "Educational website",
      skills: ["NodeJs", "ExpressJs", "MongoDB", "Next.js", "Tailwind"],
      href: "https://edu-sprinter.vercel.app",
      repo: "https://github.com/A7emdMa7moud/EDU-Sprinter",
    },
    {
      image: eduSprinter,
      title: "Edu-Sprinter-1",
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
  ];

  return (
    <section>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white tracking-wider">
            <span className="text-primary">#</span> Frontend
          </h2>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 *:border">
          <Projects key={"frontendProjects"} data={frontendProjects} />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white tracking-wider">
            <span className="text-primary">#</span> Backend
          </h2>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 *:border">
          <Projects key={"frontendProjects"} data={backendProjects} />
        </div>
      </div>
    </section>
  );
}
