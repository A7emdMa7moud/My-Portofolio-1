"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import quotes from "../../../public/icons/quotes.svg";

export default function QuoteBoxSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, type: "spring" }}
      className="relative mt-28 lg:mt-0 border border-gray max-w-[90%] md:max-w-[60%] lg:max-w-[40%] p-6 md:p-8 mx-auto tracking-wider text-lg md:text-2xl text-center"
    >
      {/* نص الاقتباس مع حركة تذبذب */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
        className="text-center"
      >
        With great power comes great electricity bill
      </motion.p>

      {/* اقتباس علوي مع دوران تدريجي */} 
      <Image
        className="absolute top-0 bg-background -translate-y-1/2 left-4 md:left-6 px-1 md:px-2 bg-gray-900"
        src={quotes}
        alt="quotes"
        width={40}
        height={40}
      />

      {/* اقتباس سفلي مع دوران تدريجي */}
      <Image
        className="absolute bottom-0 bg-background translate-y-1/2 right-4 md:right-6 px-1 md:px-2 bg-gray-900"
        src={quotes}
        alt="quotes"
        width={40}
        height={40}
      />
    </motion.div>
  );
}
