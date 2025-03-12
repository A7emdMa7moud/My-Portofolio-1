"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function ButtonLink({
  title,
  href = "#",
  hashHref = false,
  newTab = false,
  className = "",
  primary = false,
  icon,
}) {
  return (
    <>
      {newTab ? (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            target="_blank"
            href={href}
            rel={newTab ? "noopener noreferrer" : undefined}
            className={`border border-gray/50 flex items-center gap-2 w-max py-2 px-4 transition duration-200 ${
              primary
                ? "text-white border-primary hover:bg-primary/20"
                : "text-gray hover:bg-gray/20"
            } ${className}`}
          >
            {title}
            {icon && (
              <span>
                <Image src={icon} alt="href" width={25} height={25} />
              </span>
            )}
          </Link>
        </motion.div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95, rotate: -1 }}
        >
          <Link
            href={hashHref ? `#${href}` : `/${href}`}
            rel={newTab ? "noopener noreferrer" : undefined}
            className={`border  flex items-center gap-2 w-max py-2 px-4 transition duration-200 ${
              primary
                ? "text-white border-primary hover:bg-primary/20"
                : "text-gray hover:bg-gray/20"
            } ${className}`}
          >
            {title}
            {icon && (
              <span>
                <Image src={icon} alt="href" width={25} height={25} />
              </span>
            )}
          </Link>
        </motion.div>
      )}
    </>
  );
}
