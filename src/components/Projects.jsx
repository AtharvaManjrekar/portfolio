import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Studio27",
      type: "Salon Booking System",
      description:
        "A responsive salon appointment booking and service management platform with frontend interfaces for service selection, appointment scheduling and booking confirmation flows.",
      technologies: ["React.js", "Tailwind CSS"],
      image: "/studio27.jpeg",
      live: "https://studio27-eta.vercel.app/",
      github: "https://github.com/AtharvaManjrekar/Studio27",
    },
    {
      title: "Shion House",
      type: "Responsive E-commerce Frontend",
      description:
        "A responsive e-commerce frontend built with HTML, CSS and JavaScript, featuring interactive components, modern layouts and cross-device compatibility.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/shionhouse.jpeg",
      live: "https://shionhouse.netlify.app/",
      github: "https://github.com/AtharvaManjrekar/ShionHouse",
    },
    {
      title: "Bhandarwadayachi Mauli",
      type: "50th Anniversary Navratri Utsav Website",
      description:
        "An interactive community event website built with React.js, HTML, CSS and JavaScript for presenting event information and providing easy navigation.",
      technologies: ["React.js", "HTML", "CSS", "JavaScript"],
      image: "/bhandarwadayachimauli.jpeg",
      live: "https://bhandarwadayachimauli.netlify.app/",
      github: "https://github.com/AtharvaManjrekar/BhandarwadayachiMauli",
    },
    {
      title: "CropCast",
      type: "Crop Recommendation Tool",
      description:
        "A crop recommendation platform that analyzes soil and temperature inputs and provides suitable crop suggestions. Contributed to the frontend.",
      technologies: ["Frontend Development"],
      image: "/cropcast.jpeg",
      live: "https://cropcast.vercel.app/",
      github: "https://github.com/AtharvaManjrekar/CropCast",
    },
    // {
    //   title: "Carbon Tracker",
    //   type: "Carbon Emission Calculator",
    //   description:
    //     "A web tool that calculates estimated carbon emissions from user inputs and provides personalized suggestions for reducing emissions. Contributed to the frontend.",
    //   technologies: ["Frontend Development"],
    //   image: "/projects/carbon-tracker.png",
    //   live: "#",
    //   github: "#",
    // },
    // {
    //   title: "KJSIT Lost & Found Portal",
    //   type: "Campus Lost & Found Platform",
    //   description:
    //     "A centralized platform for students to report lost and found items and help connect finders with the owners of those items.",
    //   technologies: ["Frontend Development"],
    //   image: "/projects/lost-and-found.png",
    //   live: "#",
    //   github: "#",
    // },
  ];

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Projects
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Selected Work
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
            A collection of web projects where I've worked on responsive
            interfaces, interactive components and user-focused experiences.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-sm font-medium text-gray-500">
                  {project.type}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                  >
                    Live Demo
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <Code2 size={15} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
