"use client";
import React from "react";
import ButtonLink from "./ButtonLink";
import { motion } from "framer-motion";

export default function ContactsForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted! ✅");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl text-center text-white font-extrabold tracking-wider">
        With Email
      </h3>

      {/* Email & Name Inputs */}
      <div className="grid lg:grid-cols-2 gap-4">
        <input
          className="w-full px-3 py-2 bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="w-full px-3 py-2 bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
      </div>

      {/* Message Input */}
      <textarea
        className="w-full px-3 py-2 bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Message"
        name="message"
        rows="4"
        required
      ></textarea>

      {/* Submit Button */}
      <div className="flex justify-center">
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-2 border border-primary text-white font-semibold tracking-wider bg-background hover:bg-primary/20"
        >
          Send
        </motion.button>
      </div>
    </form>
  );
}
