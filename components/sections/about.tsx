"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Layers, Server } from "lucide-react"

const highlights = [
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimized code, lazy loading, and efficient rendering for lightning-fast experiences.",
  },
  {
    icon: Layers,
    title: "Clean UI Design",
    description: "Pixel-perfect interfaces with intuitive navigation and modern aesthetics.",
  },
  {
    icon: Server,
    title: "Scalable Systems",
    description: "Backend architecture built to handle growth with maintainable code.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-spacing" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              About Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                I&apos;m a{" "}
                <span className="text-foreground font-medium">MERN stack developer</span>{" "}
                focused on building production-ready web applications with{" "}
                <span className="text-foreground font-medium">clean UI</span> and{" "}
                <span className="text-foreground font-medium">scalable backend systems</span>.
              </motion.p>

              {/* Highlight Cards */}
              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group relative flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="relative">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 relative"
            >
              <div className="relative aspect-square max-w-sm mx-auto">
                {/* Decorative frame */}
                <div className="absolute inset-4 rounded-2xl border-2 border-primary/20 translate-x-4 translate-y-4" />
                
                {/* Main container */}
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-card to-card border border-border overflow-hidden">
                  {/* Grid pattern */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                  
                  {/* Content placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-8xl font-bold text-primary/20">SS</span>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-6 right-6 w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-primary/60"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
