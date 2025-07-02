import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedTimeline() {
  const [lineHeight, setLineHeight] = useState(0);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);
  const [currentYear, setCurrentYear] = useState(0);

  const timeline = [
    {
      year: "2005",
      title: "Birth",
      details: "Born in Cairo, Egypt.",
    },
    {
      year: "2011 – 2017",
      title: "Primary School",
      details:
        "Studied academic basics (languages, math, science...) in Cairo.",
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
            <span className="font-extrabold">
              8th place in Cairo Governorate
            </span>{" "}
          </div>
          <div>
            Studies: Networks, Computer Maintenance, Programming Basics,
            Operating Systems.
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
            Started Harvard's CS50 Introduction to Computer Science, completed
            up to Week 5 (Data Structures: queues, stacks, linked lists, trees,
            hash tables, tries).
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
            Studies: Systems Analysis, Databases, Programming Principles,
            Project Management.
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
            Worked on: Admin dashboard, uploading lectures, organizing
            questions, route protection, authentication
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

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      let maxLine = Math.min(
        scrollY + viewportHeight / 2,
        docHeight - viewportHeight / 2
      );
      setLineHeight(maxLine);

      // تحديد المرحلة الحالية بناءً على الخط
      let current = 0;
      for (let i = 0; i < timeline.length; i++) {
        if (!itemRefs.current[i]) continue;
        const rect = itemRefs.current[i].getBoundingClientRect();
        const itemTop = rect.top + scrollY;
        if (maxLine >= itemTop - 60) {
          current = i;
        }
      }
      setCurrentYear(current);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function isItemVisible(idx) {
    if (!itemRefs.current[idx]) return false;
    const rect = itemRefs.current[idx].getBoundingClientRect();
    const scrollY = window.scrollY;
    const itemTop = rect.top + scrollY;
    return lineHeight >= itemTop - 60;
  }

  return (
    <div className="relative w-full min-h-[200vh] flex flex-col items-center mt-10">
      <div className="relative w-full max-w-5xl">
        {/* الخط الزمني */}
        <motion.div
          ref={lineRef}
          className="absolute left-1/2 top-0 w-1 bg-primary/70 rounded -translate-x-1/2 z-0"
          initial={{ height: 0 }}
          animate={{ height: lineHeight }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          style={{ height: lineHeight }}
        />
        {/* السنة الحالية على رأس الخط */}
        <motion.div
          className="absolute right-[50%] z-30"
          style={{ top: `${lineHeight - 32}px` }} // 32px = نصف ارتفاع البوكس تقريبا
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="px-4 py-1 absolute translate-y-[50%] -translate-x-[50%] bg-background border border-primary/30 rounded shadow text-gray-400 font-semibold text-sm whitespace-nowrap max-w-[220px] text-center overflow-hidden text-ellipsis">
            {timeline[currentYear]?.year}
          </div>
        </motion.div>
        <div className="flex flex-col gap-8 lg:gap-16">
          {timeline.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const show = isItemVisible(idx);
            return (
              <div
                key={idx}
                ref={(el) => (itemRefs.current[idx] = el)}
                className="relative w-full flex flex-col items-center min-h-[120px]"
              >
                {/* محتوى المرحلة */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={{
                    opacity: show ? 1 : 0,
                    x: show ? 0 : isLeft ? -40 : 40,
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`w-[95%] max-w-full lg:max-w-[45%] bg-background border border-primary/20 rounded-lg p-4 lg:p-6 shadow-md z-10 mt-8 ${
                    isLeft
                      ? "mx-auto lg:ml-8 lg:self-start"
                      : "mx-auto lg:mr-8 lg:self-end"
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
