"use client";
import React from "react";
import ButtonLink from "../ButtonLink";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* العنوان */}
      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white tracking-wider lg:line-title">
          <span className="text-primary">#</span> about me
        </h2>
      </div>

      {/* المحتوى */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* النصوص */}
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
          <ButtonLink title={"Read more"} primary={true} href="about" />
        </motion.div>

        {/* Embedded Resume PDF */}
        <div className="mt-12 w-full flex justify-center">
          <iframe
            src="https://drive.google.com/file/d/1L_ZMBRa1zd7tn70peFrRjIdtl8iB-EDf/preview"
            className="w-full lg:w-[850px] h-[50dvh]"
            allow="autoplay"
          ></iframe>
        </div>
        {/* الصورة والديكورات */}
      </div>
    </motion.div>
  );
}
