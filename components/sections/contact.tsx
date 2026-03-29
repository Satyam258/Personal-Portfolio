"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Linkedin, Github, Send, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const LINKEDIN_URL = "https://www.linkedin.com/in/satyam-singh-a73349259/"

const secondaryLinks = [
  {
    name: "Email",
    value: "satyamsinghksh@gmail.com",
    href: "mailto:satyamsinghksh@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "Satyam258",
    href: "https://github.com/Satyam258",
    icon: Github,
  },
] as const

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus("loading")
    setSubmitError(null)

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setSubmitError("Contact form is not configured (missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY).")
      setSubmitStatus("error")
      return
    }

    try {
      // Web3Forms free tier: submit from the browser only (server-side needs paid + IP allowlist).
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio: message from ${formState.name}`,
          from_name: formState.name,
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      })

      const raw = await res.text()
      let data: { success?: boolean; message?: string } = {}
      try {
        data = raw ? (JSON.parse(raw) as typeof data) : {}
      } catch {
        setSubmitError("Could not read the email service response. Try again later.")
        setSubmitStatus("error")
        return
      }

      if (!data.success) {
        setSubmitError(data.message || "Could not send your message. Try again later.")
        setSubmitStatus("error")
        return
      }

      setSubmitStatus("success")
      setFormState({ name: "", email: "", message: "" })
    } catch {
      setSubmitError("Network error. Check your connection and try again.")
      setSubmitStatus("error")
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-4 font-mono text-sm text-primary">Get In Touch</p>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Let&apos;s build something <span className="text-primary">great</span> together
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Have a project in mind? I&apos;m available for freelance work and always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8 lg:col-span-2"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Connect with me</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Prefer quick chat?{" "}
                <span className="font-medium text-foreground">Connect on LinkedIn</span>
                — fastest way to discuss roles, projects, or collaborations.
              </p>
            </div>

            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-xl border-2 border-primary/60 bg-primary/10 p-5 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_12px_40px_-8px_oklch(0.78_0.14_195/0.2)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Primary</p>
                  <p className="text-base font-semibold text-foreground">Message on LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Satyam Singh · usually replies within a day</p>
                </div>
                <MessageCircle className="h-5 w-5 shrink-0 text-primary opacity-80 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Open LinkedIn profile
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>

            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Other channels</p>

            <div className="flex flex-col gap-3">
              {secondaryLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card/50 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{link.name}</p>
                    <p className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                      {link.value}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 mt-4"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground">
                Available for freelance projects
              </span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 lg:pl-2"
          >
            <div className="mb-6 lg:hidden">
              <p className="text-sm font-medium text-foreground">Send a message</p>
              <p className="text-xs text-muted-foreground">I&apos;ll reply within 24–48 hours.</p>
            </div>
            <div className="mb-6 hidden lg:block">
              <p className="text-sm font-medium text-foreground">Or send a detailed message</p>
              <p className="text-xs text-muted-foreground">Briefs, timelines, and links welcome.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name Field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={cn(
                      "absolute left-3 transition-all duration-200 pointer-events-none",
                      focusedField === "name" || formState.name
                        ? "-top-2.5 text-xs bg-background px-1 text-primary"
                        : "top-3 text-sm text-muted-foreground"
                    )}
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="h-12 bg-card/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={cn(
                      "absolute left-3 transition-all duration-200 pointer-events-none",
                      focusedField === "email" || formState.email
                        ? "-top-2.5 text-xs bg-background px-1 text-primary"
                        : "top-3 text-sm text-muted-foreground"
                    )}
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="h-12 bg-card/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={cn(
                    "absolute left-3 transition-all duration-200 pointer-events-none",
                    focusedField === "message" || formState.message
                      ? "-top-2.5 text-xs bg-background px-1 text-primary"
                      : "top-3 text-sm text-muted-foreground"
                  )}
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="min-h-[140px] bg-card/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none pt-4"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitStatus === "loading"}
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium group disabled:opacity-60"
                >
                  <span>{submitStatus === "loading" ? "Sending…" : "Send Message"}</span>
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </motion.div>

              <div className="space-y-2" aria-live="polite">
                {submitStatus === "success" && (
                  <p className="text-sm text-center text-green-500 font-medium">
                    Message sent. You’ll hear back soon.
                  </p>
                )}
                {submitStatus === "error" && submitError && (
                  <p className="text-sm text-center text-destructive">{submitError}</p>
                )}
              </div>

              <p className="text-xs text-center text-muted-foreground">
                I typically respond within 24-48 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
