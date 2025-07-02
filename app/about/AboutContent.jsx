"use client";

import { Suspense } from "react";
import Image from "next/image";
import LandingPages from "../_components/LandingPages";
import aboutImage from "../../public/photos/photoNoBg-1.png";
import dots from "../../public/photos/Dots.png";
import { motion } from "framer-motion";
import AboutSkeleton from "../_components/AboutSkeleton";
import AnimatedTimeline from "../_components/_sections/AnimatedTimeline";

const timeline = [
  {
    year: "2005",
    title: "Birth",
    details: "Born in Cairo, Egypt.",
  },
  {
    year: "2011 – 2017",
    title: "Primary School",
    details: "Studied academic basics (languages, math, science...) in Cairo.",
  },
  {
    year: "2017 – 2020",
    title: "Preparatory School",
    details: "Started showing interest in technology and computers.",
  },
  {
    year: "2020 – 2023",
    title: "Technical Secondary School",
    details: (
      <>
        <div>
          School: Zahraa Helwan Training Center – Computer Networks Department
        </div>
        <div>
          Degree: Technical Diploma with{" "}
          <span className="font-extrabold">95%</span>{" "}
        </div>
        <div>
          Achievement:{" "}
          <span className="font-extrabold">8th place in Cairo Governorate</span>{" "}
        </div>
        <div>
          Studies: Networks, Computer Maintenance, Programming Basics, Operating
          Systems.
        </div>
      </>
    ),
  },
  {
    year: "2022 – Present",
    title: "Start of Programming Journey",
    details: (
      <>
        <div>Self-taught web development from scratch</div>
        <div>HTML, CSS, JavaScript</div>
        <div>React.js, Node.js</div>
        <div>Git, GitHub, MongoDB</div>
      </>
    ),
  },
  {
    year: "2022",
    title: "CS50 & C# Beginnings",
    details: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Started Harvard's CS50 Introduction to Computer Science, completed up
          to Week 5 (Data Structures: queues, stacks, linked lists, trees, hash
          tables, tries).
        </li>
        <li>
          Explored C# basics through online tutorials, up to Week 5 covering
          classes, OOP principles, and console application development.
        </li>
      </ul>
    ),
  },
  {
    year: "Oct 2023 – Present",
    title: "Higher Institute for Computers & Information Systems",
    details: (
      <>
        <div>Department: Management Information Systems (MIS)</div>
        <div>Year: Currently a first-year student</div>
        <div>
          Studies: Systems Analysis, Databases, Programming Principles, Project
          Management.
        </div>
      </>
    ),
  },
  {
    year: "2023 – 2024",
    title: "Practical Experience – Real Projects",
    details: (
      <>
        <div className="font-semibold">EDU Sprinter</div>
        <div>
          Educational platform for content management between students and
          professors
        </div>
        <div>Used: React, Redux, Node.js, MongoDB, JWT</div>
        <div>
          Worked on: Admin dashboard, uploading lectures, organizing questions,
          route protection, authentication
        </div>
        <div className="font-semibold mt-2">Sirb – Movie Explorer</div>
        <div>Movie & TV show discovery project using TMDB API</div>
        <div>
          Next.js + Tailwind, filtering, search, categories, details view
        </div>
        <div>
          Learned: API integration, performance optimization, data handling
        </div>
      </>
    ),
  },
  {
    year: "2024 – Ongoing",
    title: "Continuous Development",
    details: (
      <>
        <div>TypeScript</div>
        <div>Next.js (App Router, Metadata, SEO)</div>
        <div>API security (Helmet, CORS, validation)</div>
        <div>Advanced MongoDB database design</div>
        <div>Building a full-featured MERN Stack Portfolio</div>
      </>
    ),
  },
];

function TimelineSection() {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="relative w-full max-w-6xl">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-primary/40 rounded -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-16">
          {timeline.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative w-full flex flex-col items-center min-h-[120px]"
              >
                {/* Year above content */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-7 z-20">
                  <div className="px-4 py-1 bg-background border border-primary/30 rounded shadow text-gray-400 font-semibold text-sm whitespace-nowrap max-w-[220px] text-center overflow-hidden text-ellipsis">
                    {step.year}
                  </div>
                </div>
                {/* Content under year */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full max-w-[45%] bg-background border border-primary/20 rounded-lg p-6 shadow-md z-10 mt-8 ${
                    isLeft ? "text-left ml-0 self-start" : "mr-0 self-end"
                  }`}
                  style={{ minHeight: "90px" }}
                >
                  <div className="font-bold text-primary text-lg mb-1">
                    {step.title}
                  </div>
                  <div className="text-gray-300 text-base mb-2">
                    {step.details}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function AboutContent() {
  return (
    <Suspense fallback={<AboutSkeleton />}>
      <section>
        <LandingPages title={"About"} desription={"Who am i?"} />
        {/* <TimelineSection /> */}
        <AnimatedTimeline />
        {/* Embedded Resume PDF */}
        {/* <div className="mt-12 w-full flex justify-center">
          <iframe
            src="https://drive.google.com/file/d/1L_ZMBRa1zd7tn70peFrRjIdtl8iB-EDf/preview"
            className="w-full lg:w-[850px] h-[50dvh]"
            allow="autoplay"
          ></iframe>
        </div> */}
      </section>
    </Suspense>
  );
}
