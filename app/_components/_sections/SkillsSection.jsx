"use client";
import React from "react";
import { motion } from "framer-motion";
import logo from "../../../public/photos/Logo-2.png";
import rectangle from "../../../public/photos/Rectangle.png";
import dots from "../../../public/photos/Dots.png";
import Link from "next/link";
import Image from "next/image";

export default function SkillsSection() {
  const icons = [dots, dots, rectangle, rectangle, dots, dots];
  const categories = [
    {
      title: "Tools",
      skills: [
        "VSCode",
        "Postman",
        "MongoDB Atlas",
        "Git",
        "GitHub",
        "Vercel",
        "Chat AI",
        "Figma",
      ],
    },
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript (ES7+)", "TypeScript"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MongoDB Atlas"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Bootstrap",
        "DaisyUI",
      ],
    },
    {
      title: "State Management",
      skills: ["Redux", "Recoil"],
    },
    {
      title: "Other Technologies",
      skills: ["JWT", "REST APIs", "GraphQL (Basic)"],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // تظهر فقط عند الدخول لأول مرة
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white tracking-wider lg:line-title">
          <span className="text-primary">#</span> skills
        </h2>
        <Link className="text-white" href={"/projects"}>
          View all ~~{">"}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 *:min-h-[50dvh]">
        {/* الأيقونات الخلفية */}
        <div className="relative w-full flex justify-center items-center">
          {/* العنصر المركزي */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute"
          >
            <Image src={logo} alt="Ahmed Mahmoud skills section logo" width={120} height={120} />
          </motion.div>

          {/* الأيقونات المتحركة */}
          {icons.map((icon, index) => {
            const baseAngle = (index / icons.length) * 360;
            const randomOffset = Math.random() * 30 - 15; // زاوية عشوائية ±15 درجة
            const angle = baseAngle + randomOffset;
            const radius = 120 + Math.random() * 80; // نصف القطر بين 120 و 200

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: [0, 15, -15, 0],
                  x: [0, radius * Math.cos((angle * Math.PI) / 180)],
                  y: [0, radius * Math.sin((angle * Math.PI) / 180)],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: Math.random() * 2, // تأخير عشوائي للحركة
                }}
                className="absolute"
              >
                <Image
                  src={icon}
                  alt="Decorative icon for skills section in Ahmed Mahmoud portfolio"
                  width={90}
                  height={90}
                />
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-0 lg:p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="border border-gray *:border-gray *:*:border-gray"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              {/* العنوان */}
              <motion.h4
                className="border-b border-gray-500 p-2 text-white text-xl font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {category.title}
              </motion.h4>

              {/* المهارات */}
              <div className="p-2 flex gap-3 flex-wrap">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.4, delay: i * 0.1 },
                      },
                    }}
                    whileHover={{
                      background: "#282C33",
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
