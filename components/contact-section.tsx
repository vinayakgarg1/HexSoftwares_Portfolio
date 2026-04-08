"use client"

import { BentoCard } from "./bento-card"
import { Mail, Phone, ArrowUpRight, Download } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-12 pb-24">
      <div className="mb-8">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          Contact
        </h2>
        <p className="mt-2 text-2xl font-bold text-foreground">Get in touch</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* CTA Card */}
        <BentoCard className="md:col-span-2" delay={0}>
          <div className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                {"Let's"} work together
              </h3>
              <p className="mt-2 text-secondary-foreground">
                I am always open to discussing new projects, creative ideas, or opportunities to be
                part of your visions. Whether you have a question or just want to say hi, feel free
                to reach out.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="mailto:vngarg0127@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Send Email
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 font-medium text-secondary-foreground transition-all hover:border-primary/50 hover:text-foreground"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </BentoCard>

        {/* Contact Info */}
        <BentoCard delay={0.1}>
          <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Direct Contact
          </span>
          <div className="flex flex-col gap-4">
            <Link
              href="mailto:vngarg0127@gmail.com"
              className="group flex items-center gap-3 text-secondary-foreground transition-colors hover:text-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm">vngarg0127@gmail.com</p>
              </div>
            </Link>
            <Link
              href="tel:+917067053015"
              className="group flex items-center gap-3 text-secondary-foreground transition-colors hover:text-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm">+91 7067053015</p>
              </div>
            </Link>
          </div>
        </BentoCard>
      </div>
    </section>
  )
}
