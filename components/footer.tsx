"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Satyam258", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/satyam-singh-a73349259/", icon: Linkedin },
  { name: "Email", href: "mailto:satyam@example.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="text-3xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-primary">S</span>
            <span className="text-foreground">S</span>
          </motion.a>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="relative p-3 rounded-xl text-muted-foreground hover:text-primary bg-secondary/50 hover:bg-secondary border border-transparent hover:border-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          {/* Credits */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-muted-foreground">
              Designed & Built by{" "}
              <span className="text-foreground font-medium">Satyam Singh</span>
            </p>
            <p className="text-xs text-muted-foreground/60">
              {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
