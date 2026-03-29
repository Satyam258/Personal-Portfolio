"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, ChevronDown, Check } from "lucide-react"

const floatingElements = [
  { size: 4, top: "15%", left: "10%", delay: 0, duration: 4 },
  { size: 3, top: "25%", right: "15%", delay: 1, duration: 5 },
  { size: 5, top: "60%", left: "8%", delay: 0.5, duration: 4.5 },
  { size: 3, top: "70%", right: "12%", delay: 1.5, duration: 3.5 },
  { size: 2, top: "40%", right: "25%", delay: 2, duration: 4 },
]

const trustPoints = [
  "Built 3 production-level projects",
  "Specialized in SaaS dashboards & UI",
  "Available for freelance & internships",
]

const trustLine = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.06,
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.05)_0%,transparent_50%)]" />

        <motion.div
          className="absolute top-1/4 -left-48 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={
            reduce
              ? undefined
              : {
                  x: [0, 60, 0],
                  y: [0, 40, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-48 bottom-1/4 h-[400px] w-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={
            reduce
              ? undefined
              : {
                  x: [0, -50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.15, 1],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {!reduce &&
        floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: el.size,
              height: el.size,
              top: el.top,
              left: el.left,
              right: el.right,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: el.delay,
            }}
          />
        ))}

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-sm font-medium tracking-wide text-primary">Available for work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Frontend-focused MERN Developer crafting premium SaaS interfaces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mb-10 text-lg font-medium text-muted-foreground md:text-xl"
        >
          Satyam Singh · Full Stack MERN Developer
        </motion.p>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.22 } },
          }}
          className="mx-auto mb-12 flex max-w-xl flex-col gap-3 text-left sm:mx-auto sm:max-w-none sm:items-center"
        >
          {trustPoints.map((line, i) => (
            <motion.li
              key={line}
              variants={trustLine}
              custom={i}
              className="flex items-start gap-3 text-sm text-foreground/90 sm:items-center sm:text-base"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary sm:mt-0" aria-hidden />
              <span>{line}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div whileHover={reduce ? undefined : { scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="group relative h-12 overflow-hidden px-8 text-base font-medium shadow-md shadow-primary/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <a href="#projects">
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={reduce ? undefined : { scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-12 border-border bg-transparent px-8 text-base font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/10"
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4 transition-colors group-hover:text-primary" />
                <span className="transition-colors group-hover:text-primary">Hire Me</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
