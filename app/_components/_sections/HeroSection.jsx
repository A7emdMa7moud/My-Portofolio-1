"use client";
import { motion } from "framer-motion";
import React from "react";
import ButtonLink from "../ButtonLink";
// import landingImage from "../../../public/photos/landing-image.png";
import landingImage from "../../../public/photos/photoNoBg-1.png";
import landingBackLogog from "../../../public/photos/Logo-2.png";
import dots from "../../../public/photos/Dots.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegShareFromSquare } from "react-icons/fa6";

export default function HeroSection() {
  // أنيميشن النصوص
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 2, type: "spring", delay },
    }),
  };

  // أنيميشن العنوان
  const textLandingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 }, // كل حرف يظهر بعد اللي قبله
    },
  };

  const letterLandingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // أنيميشن الصور
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 2, type: "spring" }}
      animate={{ opacity: 1, y: 0 }}
      className="h-[70dvh] grid grid-cols-1 lg:grid-cols-2 gap-4 *:h-full *:w-full"
    >
      <div className="flex justify-center flex-col">
        <h1 className="sr-only">
          Hi, I'm Ahmed Mahmoud – MERN Stack Developer
        </h1>
        <motion.div
          className="text-[32px] pt-6 lg:pt-0 font-semibold tracking-wider"
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            variants={textVariants}
            custom={0.2}
            className="text-4xl overflow-hidden text-white cursor-pointer flex items-center gap-3"
            whileHover={{ color: "#FFD700" }} // تأثير hover
          >
            Ahmed Mahmoud
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Ahmed Mahmoud | MERN Stack Developer",
                    text: "Check out Ahmed Mahmoud's portfolio - MERN Stack Developer from Egypt",
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="text-2xl text-primary hover:text-white transition-colors duration-200"
              title="Share Portfolio"
            >
              <FaRegShareFromSquare />
            </motion.button>
          </motion.h3>

          <motion.p
            variants={textVariants}
            custom={0.5}
            className="text-primary"
          >
            Expert
          </motion.p>

          <motion.p variants={textVariants} custom={1}>
            Web Developer
          </motion.p>

          <motion.p variants={textVariants} custom={1.5} className="">
            with{" "}
            <span className="w-max text-background bg-primary px-2">
              MERN Stack
            </span>
          </motion.p>
        </motion.div>

        {/* ------------------------- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textLandingVariants}
          className="text-base lg:text-lg mt-4"
        >
          {"I specialize in building dynamic, responsive websites that seamlessly blend cutting-edge technologies with creative design."
            .split("")
            .map((char, index) => (
              <motion.span key={index} variants={letterLandingVariants}>
                {char}
              </motion.span>
            ))}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textLandingVariants}
          className="hidden lg:block mt-4 text-md text-gray-500"
        >
          {"From stunning UI/UX to robust backend architecture, I deliver tailored web solutions that elevate your business. Ready to take your online presence to the next level?"
            .split("")
            .map((char, index) => (
              <motion.span key={index} variants={letterLandingVariants}>
                {char}
              </motion.span>
            ))}
        </motion.div>

        <div className="flex gap-4 mt-8">
          <motion.div whileHover={{ scale: 1.1 }}>
            <ButtonLink title={"Contact me!!"} primary={true} href="contacts" />
          </motion.div>
          {/* Download Resume Button */}

          <motion.div whileHover={{ scale: 1.1 }}>
            <ButtonLink
              title={"My Resume"}
              primary={true}
              href="https://drive.google.com/file/d/1L_ZMBRa1zd7tn70peFrRjIdtl8iB-EDf/view?usp=sharing"
              newTab
            />
          </motion.div>
        </div>
      </div>
      {/* ---------------------------- */}
      {/* قسم الصور */}
      <div className="relative flex justify-center items-end">
        <motion.div
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            className="w-[80%] pl-20"
            src={landingImage}
            alt="Ahmed Mahmoud professional portfolio hero image"
            quality={100}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-[10%] right-[8%]"
        >
          <Image
            src={dots}
            alt="Decorative dots for Ahmed Mahmoud portfolio"
            width={100}
            quality={100}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute -z-10 top-[20%] w-[50%] lg:w-[100%] lg:top-[43%] left-[15%] lg:left-[15%]"
        >
          <Image
            className="w-20 lg:w-32"
            src={landingBackLogog}
            alt="Ahmed Mahmoud portfolio background logo"
            quality={100}
          />
        </motion.div>

        {/* نص الحالة */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-[100%] tracking-wider flex items-center gap-4 left-[50$] translate-y-[100%] p-2 lg:p-4 border w-full lg:w-[80%]"
        >
          <motion.p
            className="w-6 h-6 bg-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          Currently working on{" "}
          <motion.p
            className="text-white font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Portfolio
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
