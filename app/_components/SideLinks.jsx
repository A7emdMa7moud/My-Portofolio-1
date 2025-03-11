"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Importing framer motion
import github from "../../public/icons/Github.svg";
import dribble from "../../public/icons/Dribble.svg";
import figma from "../../public/icons/Figma.svg";
import Link from "next/link";

export default function SideLinks() {
  const links = [
    {
      label: "GitHub",
      icon: github,
      href: "https://github.com",
    },
    {
      label: "Dribble",
      icon: dribble,
      href: "https://dribble.com",
    },
    {
      label: "Figma",
      icon: figma,
      href: "https://figma.com",
    },
  ];

  return (
    <ul className="side-links hidden fixed xl:flex flex-col gap-4 top-[250px] left-5">
      {links.map(({ label, icon, href }, index) => (
        <motion.li
          key={href}
          initial={{ opacity: 0, y: 20 }} // Start hidden with y offset
          animate={{ opacity: 1, y: 0 }} // Fade in and move up to original position
          transition={{
            delay: index * 0.2, // Stagger the animations
            duration: 0.5, // Duration of the animation
            ease: "easeInOut", // Easing effect
          }}
        >
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Image
              src={icon}
              alt={label}
              loading="lazy"
              width={45}
              height={45}
            />
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
