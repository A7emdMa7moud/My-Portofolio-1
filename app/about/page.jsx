"use client";

import Image from "next/image";
import LandingPages from "../_components/LandingPages";
import ButtonLink from "../_components/ButtonLink";
import aboutImage from "../../public/photos/about-image.png";
import dots from "../../public/photos/Dots.png";
import { motion } from "framer-motion";
export default function page() {
  return (
    <section>
      <LandingPages title={"About"} desription={"Who am i?"} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-lg">
              I'm a self-taught front-end developer based in Egypt. I specialize
              in building modern, responsive websites that deliver seamless user
              experiences.
            </p>
            <p className="text-lg">
              For the past few years, I've been passionate about turning ideas
              into interactive and visually appealing web applications. Always
              eager to learn, I stay up to date with the latest technologies and
              best practices in web development.
            </p>
          </motion.div>

          <motion.div
            className="flex relative justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              className="w-[max]"
              src={aboutImage}
              alt="about me"
              quality={100}
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                className="absolute top-14 left-[7%] lg:top-14 lg:left-[27%]"
                src={dots}
                alt="decorative dots"
                quality={100}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                className="absolute bottom-[20%] right-[0%] lg:bottom-[20%] lg:right-[20%]"
                src={dots}
                alt="decorative dots"
                quality={100}
              />
            </motion.div>

            <motion.span
              className="absolute w-[67%] lg:w-[35%] h-0.5 left-[20%] lg:left-[34.5%] bottom-0 bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
