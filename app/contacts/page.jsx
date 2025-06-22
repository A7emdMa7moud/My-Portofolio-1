"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import ContactsForm from "../_components/ContactsForm";
import LandingPages from "../_components/LandingPages";
import Link from "next/link";

export default function Page() {
  const socialLinks = [
    { id: "whatsapp", icon: <FaWhatsapp />, url: "https://wa.me/201099802361" },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/a7mdma7moud",
    },
    {
      id: "github",
      icon: <FaGithub />,
      url: "https://github.com/A7emdMa7moud",
    },
    { id: "twitter", icon: <FaTwitter />, url: "https://twitter.com/" },
    {
      id: "email",
      icon: <FaEnvelope />,
      url: "mailto:a7mdma7moud.01@gmail.com",
    },
  ];

  return (
    <section>
      <LandingPages title="Contacts" desription="whit" />
      <div className="grid lg:grid-cols-2 gap-20 mb-10">
        <div className="flex justify-center items-center text-white text-lg">
          I’m interested in freelance opportunities. However, if you have other
          requests or questions, don’t hesitate to contact me.
        </div>
        <ContactsForm />
      </div>
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          className="mb-12"
        >
          <h3 className="text-4xl font-bold text-white tracking-wider">
            <span className="text-primary">#</span> Other
          </h3>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-gray-300 pt-2 text-lg"
          >
            Let's connect!
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.p
              key={link.id}
              className="text-white text-3xl hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              transition={{ delay: index, type: "spring", stiffness: 200 }}
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </Link>
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
