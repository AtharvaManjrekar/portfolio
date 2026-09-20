import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, BriefcaseBusiness, Rocket } from "lucide-react";

function About() {
  const [showMore, setShowMore] = useState(false);
  const stats = [
    {
      icon: GraduationCap,
      value: "9.21",
      label: "CGPI",
      description: "Academic Performance",
    },
    {
      icon: Code2,
      value: "React.js",
      label: "Frontend",
      description: "Primary Focus",
    },
    {
      icon: BriefcaseBusiness,
      value: "2",
      label: "Internships",
      description: "Industry Experience",
    },
    {
      icon: Rocket,
      value: "6",
      label: "Projects",
      description: "Built & Contributed",
    },
  ];

  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Building Digital Experiences
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* About Text */}
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Always visible */}
            <p className="text-lg leading-8 text-gray-600">
              I'm a 4th-year Computer Engineering student at{" "}
              <span className="font-semibold text-gray-900">
                K.J. Somaiya Institute of Technology
              </span>{" "}
              and a frontend developer focused on building responsive,
              interactive and user-friendly web experiences.
            </p>

            {/* Read More */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-5 inline-flex items-center  gap-1 text-base font-medium  text-gray-900 transition-colors hover:text-gray-500"
            >
              {showMore ? "Read Less" : "Read More"}

              <motion.span
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                ↓
              </motion.span>
            </button>

            {/* Hidden Content */}
            <motion.div
              initial={false}
              animate={{
                height: showMore ? "auto" : 0,
                opacity: showMore ? 1 : 0,
              }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="pt-5">
                <p className="text-sm leading-8 text-gray-600">
                  My primary focus is{" "}
                  <span className="font-semibold text-gray-900">
                    frontend development
                  </span>
                  , where I work with{" "}
                  <span className="font-semibold text-gray-900">
                    React.js, JavaScript, HTML, CSS and Tailwind CSS
                  </span>{" "}
                  to turn ideas and designs into functional interfaces.
                </p>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  Through internships and personal projects, I've gained
                  hands-on experience building real-world web applications while
                  continuously improving my development and problem-solving
                  skills.
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Value */}
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-gray-900">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="mt-1 text-base font-semibold text-gray-800">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="mt-1 text-sm text-gray-500">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
