"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"
import { PageTransition } from "@/components/page-transition"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <div className="relative min-h-screen bg-background">
        <div className="bg-noise-overlay pointer-events-none fixed inset-0 z-0" aria-hidden />
        <div className="relative z-10">
        <Navbar />
        <PageTransition>
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </PageTransition>
        <Footer />
        </div>
      </div>
      <BackToTop />
    </>
  )
}
