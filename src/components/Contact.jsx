import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink , Code2, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Let's build something together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            I'm open to frontend development opportunities, internships and
            projects where I can contribute, learn and grow as a developer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          <a
            href="mailto:atharvamanjrekar2809@gmail.com"
            className="group flex items-center justify-between rounded-xl border border-gray-200 p-5 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-gray-600" />

              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  Email Me
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={17}
              className="text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="https://linkedin.com/in/atharva-manjrekar"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-gray-200 p-5 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <ExternalLink  size={20} className="text-gray-600" />

              <div>
                <p className="text-xs text-gray-500">LinkedIn</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  Connect
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={17}
              className="text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="https://github.com/AtharvaManjrekar"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-gray-200 p-5 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <Code2 size={20} className="text-gray-600" />

              <div>
                <p className="text-xs text-gray-500">Github</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  View Code
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={17}
              className="text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
