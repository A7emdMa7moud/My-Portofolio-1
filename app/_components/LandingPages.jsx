"use client";

import { motion } from "framer-motion";

export default function LandingPages({ title, desription }) {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className="flex justify-between items-center mb-16"
    >
      <div className="">
        <h3 className="text-4xl font-bold text-white tracking-wider">
          <span className="text-primary">/</span> {title}
        </h3>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray pt-2 text-lg"
        >
          {desription}
        </motion.p>
      </div>
    </motion.div>
  );
}
