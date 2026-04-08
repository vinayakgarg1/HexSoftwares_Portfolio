"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollBackground } from "@/components/scroll-background"

export default function Home() {
  return (
    <ScrollBackground>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </ScrollBackground>
  )
}
