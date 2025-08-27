"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Gauge, Rocket, Search, Smartphone, Wrench, Code2, Sparkles } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const capabilities = [
  {
    icon: Code2,
    title: 'Modern Front‑End Engineering',
    text: 'Pixel‑perfect, accessible interfaces using React, Next.js, and TypeScript.',
    benefit: 'Faster delivery and fewer defects with typed components and reusable patterns.'
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    text: 'Core Web Vitals, image optimization, code‑splitting, and caching.',
    benefit: 'Improved SEO and conversion through faster load and interaction times.'
  },
  {
    icon: Search,
    title: 'SEO & Best Practices',
    text: 'Semantic markup, structured data, metadata, and clean internal linking.',
    benefit: 'Better rankings and discoverability for key pages and services.'
  },
  {
    icon: Smartphone,
    title: 'Responsive & Mobile‑First',
    text: 'Fluid layouts, touch targets, and device testing across breakpoints.',
    benefit: 'Consistent experience that increases engagement on every device.'
  },
]

const tooling = [
  { name: 'Next.js', level: 'Expert' },
  { name: 'React', level: 'Expert' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'TailwindCSS', level: 'Advanced' },
  { name: 'Framer Motion', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Git / GitHub', level: 'Advanced' },
  { name: 'SEO/Analytics', level: 'Advanced' },
  { name: 'WordPress', level: 'Advanced' },
  { name: 'Elementor', level: 'Advanced' },
]

const outcomes = [
  { icon: Rocket, title: 'Faster Launches', text: 'Lean, predictable delivery with a battle‑tested workflow.' },
  { icon: Sparkles, title: 'Polished UX', text: 'Micro‑interactions and clarity that build trust and delight.' },
  { icon: Wrench, title: 'Maintainable Code', text: 'Clean architecture and components that scale with your needs.' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-4">
            Capabilities & Expertise
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I help businesses ship fast, high‑quality web experiences that convert. Below is how I deliver measurable value.
          </motion.p>
        </motion.div>

        {/* Capability Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {capabilities.map((cap, idx) => (
            <motion.div key={cap.title} variants={fadeInUp} transition={{ delay: idx * 0.05 }}>
              <Card className="glass-effect card-hover h-full">
                <CardHeader className="flex flex-row items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-portfolio-light dark:bg-portfolio-dark flex items-center justify-center">
                    <cap.icon className="h-5 w-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{cap.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{cap.text}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-portfolio-accent" />
                    <span className="text-muted-foreground">{cap.benefit}</span>
                  </div>
                </CardContent>
              </Card>
                </motion.div>
              ))}
        </motion.div>

        {/* Outcomes / Value Props */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {outcomes.map((o, idx) => (
            <motion.div key={o.title} variants={fadeInUp} transition={{ delay: idx * 0.05 }}>
              <Card className="h-full">
                <CardContent className="p-5 flex items-start gap-3">
                  <o.icon className="h-5 w-5 text-portfolio-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">{o.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{o.text}</p>
                    </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tooling Matrix */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">Tooling & Technologies</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl">
              {tooling.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border p-3 flex items-center justify-between bg-background/60"
                >
                  <span className="text-sm font-medium">{t.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{t.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
