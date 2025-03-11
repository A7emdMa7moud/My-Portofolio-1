"use client";

import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="mt-24 mb-8 px-6 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        {/* القسم الأول: الشعار والمعلومات */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <motion.div
            className="flex items-center gap-4 justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src={logo}
              alt="Ahmed Mahmoud"
              width={40}
              height={40}
              quality={100}
            />
            <h3 className="text-xl font-semibold">
              Ahmed Mahmoud<span className="text-primary">.DEV</span>
            </h3>
          </motion.div>
          <p className="text-sm mt-2 text-gray-300">
            Frontend && Backend ==={" "}
            <span className="text-white font-medium">MERN Stack</span>
          </p>
        </motion.div>

        {/* القسم الثاني: الروابط */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-right"
        >
          <h4 className="text-white text-2xl font-semibold mb-2">Media</h4>
          <div className="flex gap-6 justify-center md:justify-end">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link
                href="https://www.facebook.com/A7mdMa7mwd"
                target="_blank"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Facebook
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link
                href="https://www.linkedin.com/in/ahmed-mahmoud-377b00349"
                target="_blank"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                LinkedIn
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
