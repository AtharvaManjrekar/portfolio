import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institute: "K.J. Somaiya Institute of Technology",
      duration: "Expected 2027",
      result: "CGPI: 9.21 till third year",
    },
    {
      degree: "Diploma in Computer Engineering",
      institute: "Government Polytechnic Mumbai",
      duration: "2021 – 2024",
      result: "92.33%",
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
            Education
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Academic Background
          </h2>
        </motion.div>

        <div className="mt-16 space-y-5">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                <GraduationCap size={25} strokeWidth={1.8} />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.degree}
                </h3>

                <p className="mt-1 font-medium text-gray-700">
                  {item.institute}
                </p>

                <p className="mt-2 text-sm text-gray-500">{item.duration}</p>
              </div>

              <div className="sm:text-right">
                <p className="text-base font-semibold text-gray-900">
                  {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
