"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Tech Corp",
    title: "Senior Frontend Engineer",
    duration: "2023 — Present",
    description: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Evive, and Volkswagen.",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements.",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities.",
    ],
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    company: "StartupXYZ",
    title: "Full Stack Developer",
    duration: "2021 — 2023",
    description: [
      "Developed and maintained code for in-house and client websites primarily using React, TypeScript, and Node.js.",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.",
      "Interfaced with clients on a weekly basis, providing technological expertise.",
    ],
    skills: ["Node.js", "React", "MongoDB", "AWS"],
  },
  {
    company: "Digital Agency",
    title: "Web Developer",
    duration: "2019 — 2021",
    description: [
      "Collaborated with a small team of developers to build and maintain websites for a variety of clients.",
      "Engineered and improved major features of the customer-facing web app using ES6, React, and Redux.",
      "Proposed and implemented scalable solutions to issues identified with cloud services and applications.",
    ],
    skills: ["JavaScript", "React", "Redux", "SASS"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="text-primary font-mono text-lg md:text-xl mr-2">02.</span>
              Where I&apos;ve Worked
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "px-4 py-3 text-sm text-left whitespace-nowrap transition-all duration-200",
                    "hover:bg-secondary hover:text-primary",
                    "relative md:border-l-2 border-b-2 md:border-b-0 -ml-px md:ml-0 -mb-px md:mb-0",
                    activeTab === index
                      ? "text-primary border-primary bg-secondary/50"
                      : "text-muted-foreground border-transparent"
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-h-[300px]"
            >
              <h3 className="text-lg font-medium text-foreground mb-1">
                {experiences[activeTab].title}{" "}
                <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="text-sm font-mono text-muted-foreground mb-4">
                {experiences[activeTab].duration}
              </p>
              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {experiences[activeTab].skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
