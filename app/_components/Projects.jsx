"use client";
import Image from "next/image";
import React from "react";
import github from "../../public/icons/Github.svg";
import ButtonLink from "./ButtonLink";
import { motion } from "framer-motion";

export default function Projects({ data }) {
  return (
    <>
      {data.map((project, index) => (
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
            <h4 className="text-lg text-white font-semibold mt-2">Backend:</h4>
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
    </>
  );
}
