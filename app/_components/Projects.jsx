"use client";
import Image from "next/image";
import React from "react";
import github from "../../public/icons/Github.svg";
import ButtonLink from "./ButtonLink";

export default function Projects({ data }) {
  return (
    <>
      {data.map((project) => (
        <div key={project.title} className="flex flex-col">
          <Image
            className="w-full"
            src={project.image}
            alt={project.title}
            quality={100}
          />
          <ul className="w-full border-b flex flex-wrap gap-4 p-2 px-4">
            {project.skills.map((skill) => (
              <li
                key={skill}
                className="text-lg tracking-wider uppercase text-gray-500"
              >
                {skill}
              </li>
            ))}
          </ul>
          <div className="p-4 flex flex-col gap-4 h-full justify-end">
            <h3 className="text-2xl text-white font-semibold">
              {project.title}
            </h3>
            <p className="text-xl">{project.discription}</p>
            <div className="flex items-center gap-2">
              <ButtonLink
                title={"Live"}
                href={project.href}
                primary={true}
                newTab={true}
              />
              <ButtonLink
                title={"Repo"}
                href={project.repo}
                icon={github}
                newTab={true}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
