import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-80px)] items-center px-6 md:py-20  sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Small intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-sm font-medium tracking-wide text-gray-500 sm:text-base"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Atharva Manjrekar
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-2xl font-semibold tracking-tight text-gray-600 sm:text-3xl md:text-4xl"
        >
          Frontend Developer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8"
        >
          I build responsive and interactive web experiences using
          <span className="font-medium text-gray-800"> React.js</span>,
          <span className="font-medium text-gray-800"> JavaScript</span> and
          <span className="font-medium text-gray-800"> Tailwind CSS</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          {/* GitHub */}
          <a
            href="https://github.com/AtharvaManjrekar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-800 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/atharva-manjrekar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-800 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50"
          >
            LinkedIn
          </a>

          {/* Resume */}
          <a
            href="/Atharva_Manjrekar_Portfolio_Resume.pdf"
            download="Atharva_Manjrekar_Portfolio_Resume.pdf"
            className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-gray-700"
          >
            Resume
          </a>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 border-t border-gray-100 pt-6"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
            Currently working with
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Tailwind CSS</span>
            <span>Shopify</span>
            <span>Liquid</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
