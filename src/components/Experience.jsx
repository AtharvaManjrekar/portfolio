import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

function Experience() {
  const experiences = [
    {
      company: "Axentra OS",
      role: "Frontend and Shopify Developer Intern",
      location: "Matunga, Mumbai",
      duration: "Jun 2026 – Sep 2026",
      points: [
        "Built and customized responsive user interfaces using React.js and Tailwind CSS for client-facing web projects.",
        "Worked with frontend components and API integration to support dynamic web experiences.",
        "Collaborated with the team on debugging and cross-device performance optimization.",
        "Gained additional hands-on experience with Shopify customization and related frontend workflows.",
      ],
    },
    {
      company: "Creative Mantra",
      role: "Frontend Developer Intern",
      location: "Malad, Mumbai",
      duration: "Jul 2023 – Jan 2024",
      points: [
        "Worked on the frontend of Manuscript.ai using HTML, CSS and JavaScript.",
        "Contributed to page structure and styling under the guidance of senior developers.",
        "Completed a 6-month on-site internship and gained hands-on exposure to a professional web development workflow.",
      ],
    },
  ];

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="mt-16 space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                    <BriefcaseBusiness size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {experience.role}
                    </h3>

                    <p className="mt-1 font-medium text-gray-700">
                      {experience.company}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {experience.location}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-medium text-gray-500 sm:text-right">
                  {experience.duration}
                </p>
              </div>

              <ul className="mt-7 space-y-3 border-t border-gray-100 pt-6">
                {experience.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-7 text-gray-600 sm:text-base"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
