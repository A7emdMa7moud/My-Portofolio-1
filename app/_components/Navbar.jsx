"use client";
import Image from "next/image";
import Logo from "../../public/icons/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaBars } from "react-icons/fa6";
import github from "../../public/icons/Github.svg";
import dribble from "../../public/icons/Dribble.svg";
import figma from "../../public/icons/Figma.svg";

export default function Navbar() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "work", href: "/work" },
    { label: "projects", href: "/projects" },
    { label: "contacts", href: "/contacts" },
  ];

  const linksHref = [
    { label: "GitHub", icon: github, href: "https://github.com/A7emdMa7moud" },
    { label: "Dribble", icon: dribble, href: "https://dribble.com" },
    { label: "Figma", icon: figma, href: "https://figma.com" },
  ];

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      // y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header
      className={`w-full p-6 lg:py-10 bg-background backdrop-blur-lg border-b border-gray/50 z-50 fixed top-0 left-0 transition-all duration-500 ${
        showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
      }`}
    >
      <div className="flex container mx-auto justify-between items-center">
        <div className="flex gap-2">
          <Image src={Logo} alt="Logo" width={20} height={20} loading="lazy" />
          <h3 className="text-xl font-bold tracking-wider">Ahmed Mahmoud</h3>
        </div>

        {/* Desktop Navigation */}
        <motion.ul
          className="hidden lg:flex gap-6"
          initial="hidden"
          animate="visible"
          variants={menuVariants}
        >
          {links.map(({ label, href }) => {
            const isActive = currentPath === href;
            return (
              <motion.li
                key={href}
                variants={linkVariants}
                className={`text-xl flex gap-1 ${
                  isActive ? "text-white font-bold" : "text-gray-500"
                }`}
              >
                <Link href={href}>
                  <span className="text-primary">#</span> {label}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="lg:hidden fixed top-[101%] left-0 w-full bg-background backdrop-blur-2xl border-b border-gray/50 flex flex-col justify-around gap-10 p-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.ul className="container flex flex-col gap-4">
              {links.map(({ label, href }) => {
                const isActive = currentPath === href;
                return (
                  <motion.li key={href} variants={linkVariants}>
                    <Link
                      className={`text-2xl flex gap-1 ${
                        isActive ? "text-white font-bold" : "text-gray-500"
                      }`}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-primary">#</span> {label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.ul className="container flex justify-end gap-4">
              {linksHref.map((e, i) => (
                <motion.li key={i} variants={linkVariants}>
                  <a
                    href={e.href}
                    target="_blank"
                    className="text-white flex gap-1 hover:text-primary"
                  >
                    <Image src={e.icon} width={40} height={40} alt={e.label} />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
