"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Code2, 
  Server, 
  Database, 
  Wrench
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    gradient: "from-cyan-500/10 to-blue-500/10",
    borderHover: "hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    progressGradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "Framer Motion", level: 80 },
      { name: "GSAP", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    gradient: "from-emerald-500/10 to-green-500/10",
    borderHover: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    progressGradient: "from-emerald-500 to-green-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    gradient: "from-orange-500/10 to-amber-500/10",
    borderHover: "hover:border-orange-500/40",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    progressGradient: "from-orange-500 to-amber-500",
    skills: [
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    gradient: "from-pink-500/10 to-rose-500/10",
    borderHover: "hover:border-pink-500/40",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    progressGradient: "from-pink-500 to-rose-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "Firebase", level: 80 },
      { name: "Axios", level: 85 },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section-spacing bg-card/30" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Skills & Technologies
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  className="group"
                >
                  <div
                    className={`relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 ${category.borderHover} hover:shadow-lg hover:shadow-primary/5`}
                  >
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-3 rounded-xl ${category.iconBg} ${category.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-5">
                        {category.skills.map((skill, index) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-foreground/90">
                                {skill.name}
                              </span>
                              <span className="text-xs text-muted-foreground font-mono">
                                {skill.level}%
                              </span>
                            </div>
                            {/* Progress Bar */}
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{
                                  duration: 1,
                                  delay: 0.4 + catIndex * 0.1 + index * 0.1,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className={`h-full rounded-full bg-gradient-to-r ${category.progressGradient}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Skill Pills */}
                      <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border/50">
                        {category.skills.map((skill) => (
                          <motion.span
                            key={`pill-${skill.name}`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/80 text-foreground/80 border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300"
                          >
                            {skill.name}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground">
              Always exploring new technologies. Currently diving into{" "}
              <span className="text-primary font-medium">Next.js</span>,{" "}
              <span className="text-primary font-medium">TypeScript</span>, and{" "}
              <span className="text-primary font-medium">System Design</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
