"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef, useState } from "react"
import type { ElementType } from "react"
import { ExternalLink, Github, Check, Users, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface Project {
  id: string
  title: string
  tagline: string
  /** Hiring-focused outcome line */
  impact: string
  problem: string
  solution: string
  techStack: string[]
  features: { icon: ElementType; text: string }[]
  metrics?: string
  liveUrl: string
  githubUrl: string
  gradient: string
  accentColor: string
  /** Full Tailwind classes so purge/JIT includes hover styles */
  titleHoverClass: string
}

const projects: Project[] = [
  {
    id: "worknest-landing",
    title: "WorkNest Landing Page",
    tagline: "Marketing site for a SaaS-style product story.",
    impact: "Clearer positioning and stronger CTAs so visitors understand value fast.",
    problem: "Visitors bounce when the offer and next step aren’t obvious in the first moments.",
    solution: "Designed a fast, animated landing that leads with benefits and drives users toward signup or contact.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      { icon: TrendingUp, text: "Faster time-to-value in the hero and section flow" },
      { icon: Star, text: "Polished motion that supports the story without distracting" },
      { icon: Users, text: "Layout that holds up from mobile to desktop" },
    ],
    metrics: "Portfolio-ready SaaS UI",
    liveUrl: "https://work-nest-eta.vercel.app/",
    githubUrl: "https://github.com/Satyam258/WorkNest",
    gradient: "from-purple-500/20 via-indigo-500/20 to-blue-500/20",
    accentColor: "text-purple-400",
    titleHoverClass: "group-hover:text-purple-400",
  },
  {
    id: "worknest-dashboard",
    title: "WorkNest Dashboard",
    tagline: "One place for tasks, teams, and progress.",
    impact: "Less context switching—teams see status and next actions at a glance.",
    problem: "Work was split across tools, so nobody had a single view of priorities and progress.",
    solution: "Built a unified dashboard with boards, activity, and analytics so decisions happen in one surface.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "DND Kit"],
    features: [
      { icon: Users, text: "Single workspace for projects and ownership" },
      { icon: TrendingUp, text: "Visibility into workload through charts and feeds" },
      { icon: Check, text: "Kanban that matches how teams actually move work" },
    ],
    metrics: "Production-style dashboard UI",
    liveUrl: "https://work-nest-dashboard.vercel.app/",
    githubUrl: "https://github.com/Satyam258/WorkNest-Dashboard",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    accentColor: "text-cyan-400",
    titleHoverClass: "group-hover:text-cyan-400",
  },
  {
    id: "apple-clone",
    title: "Apple Website Clone",
    tagline: "High-end product storytelling on the web.",
    impact: "Demonstrates restraint, rhythm, and motion at a brand level.",
    problem: "Premium brands need spacing, typography, and motion to feel intentional—not generic.",
    solution: "Rebuilt Apple-style flows with GSAP and Framer Motion to match hierarchy, scroll behavior, and polish.",
    techStack: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
    features: [
      { icon: Star, text: "Visual hierarchy that matches reference quality" },
      { icon: TrendingUp, text: "Scroll and animation timing tuned for clarity" },
      { icon: Users, text: "Responsive breakpoints that preserve the experience" },
    ],
    metrics: "Advanced UI/UX replication project",
    liveUrl: "https://apple-website-4ghi.vercel.app/",
    githubUrl: "https://github.com/Satyam258/Apple_website",
    gradient: "from-gray-500/20 via-neutral-500/20 to-zinc-500/20",
    accentColor: "text-gray-300",
    titleHoverClass: "group-hover:text-gray-200",
  },
]

function ProjectCard({ project, onViewDetails }: { project: Project; onViewDetails: () => void }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%", amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative perspective-distant"
    >
      <div className={`absolute -inset-0.5 rounded-2xl bg-linear-to-r ${project.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-[0.65]`} />

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform group-hover:border-primary/45 group-hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.45),0_0_0_1px_oklch(0.78_0.14_195/0.12)]"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={
          reduce
            ? { scale: 1.02 }
            : {
                scale: 1.02,
                rotateX: -1.5,
                rotateY: 1.5,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              }
        }
      >
        {/* Project Preview */}
        <div className={`relative h-44 overflow-hidden bg-linear-to-br sm:h-48 ${project.gradient}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-foreground/10">{project.title.charAt(0)}</span>
          </div>
          {!reduce && (
            <>
              <motion.div
                className="absolute top-4 right-4 h-16 w-16 rounded-full bg-foreground/5 blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-8 left-8 h-8 w-8 rounded-full bg-foreground/5 blur-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="mb-3">
            <h3
              className={`mb-1 text-xl font-bold text-foreground transition-colors sm:text-2xl ${project.titleHoverClass}`}
            >
              {project.title}
            </h3>
            <p className={`text-sm font-medium ${project.accentColor}`}>{project.tagline}</p>
          </div>

          <p className="mb-4 border-l-2 border-primary/40 pl-3 text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Impact:</span> {project.impact}
          </p>

          <div className="mb-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">The challenge:</span> {project.problem}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-mono">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="secondary" className="text-xs font-mono">
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <ul className="space-y-2">
              {project.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Button
              size="sm"
              className="min-h-9 flex-1 transition-transform duration-200 hover:scale-[1.02] hover:shadow-md hover:shadow-primary/15"
              onClick={onViewDetails}
            >
              View Details
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="min-h-9 transition-transform duration-200 hover:scale-[1.02] hover:shadow-sm"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Demo
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="transition-transform duration-200 hover:scale-[1.05]"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectModal({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) {
  if (!project) return null

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-1 text-2xl font-bold sm:flex-row sm:items-baseline sm:gap-3">
            {project.title}
            <span className={`text-sm font-normal ${project.accentColor}`}>{project.tagline}</span>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Project details for {project.title}
          </DialogDescription>
        </DialogHeader>

        <p className="mt-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-foreground/90">
          <span className="font-semibold text-primary">Impact:</span> {project.impact}
        </p>

        <div className="mt-4 space-y-6">
          {/* Project Preview */}
          <div className={`relative h-48 bg-linear-to-br ${project.gradient} rounded-lg overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-bold text-foreground/10">{project.title.charAt(0)}</span>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/50 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                The Problem
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                The Solution
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
            <ul className="space-y-3">
              {project.features.map((feature, index) => {
                const FeatureIcon = feature.icon
                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-secondary ${project.accentColor}`}>
                      <FeatureIcon className="w-4 h-4" />
                    </div>
                    <span className="text-muted-foreground pt-1">{feature.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="bg-primary/10 rounded-lg p-4 text-center">
              <p className={`text-lg font-semibold ${project.accentColor}`}>
                {project.metrics}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button className="flex-1" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </a>
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:py-24 sm:px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-12 text-center sm:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-3 font-mono text-sm text-primary"
            >
              03. Featured Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-3xl font-bold text-foreground md:text-4xl"
            >
              Projects That Solve Real Problems
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl text-pretty text-muted-foreground"
            >
              Outcomes first: what changed for users and the business—then how it was built.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">Want to see more?</p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/satyamsingh" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
