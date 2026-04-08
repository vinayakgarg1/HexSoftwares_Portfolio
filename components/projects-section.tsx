"use client"

import { BentoCard } from "./bento-card"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A responsive web application built with HTML, CSS, and JavaScript to help users log and analyze their daily expenses with interactive charts and data persistence.",
    image: "/images/expense_demo.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Real-Time ASL Tracker",
    description:
      "A Python-based machine learning application that detects and translates American Sign Language alphabets in real-time using computer vision and deep learning.",
    image: "/images/asl_demo.png",
    tags: ["Python", "Machine Learning", "OpenCV"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          Projects
        </h2>
        <p className="mt-2 text-2xl font-bold text-foreground">Selected work</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <BentoCard key={project.title} className="p-0 overflow-hidden" delay={index * 0.15}>
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}
