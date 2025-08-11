"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Calendar, Award } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })



  const highlights = [
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Building modern web applications with cutting-edge technologies"
    },
    {
      icon: MapPin,
      title: "Marrakech Based",
      description: "Working with clients worldwide while based in Morocco"
    },
    {
      icon: Calendar,
      title: "Freelance & Agency",
      description: "Experience in both freelance and corporate environments"
    }
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-4">
            About Me
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate Front-End Developer with expertise in modern web technologies and a keen eye for creating exceptional user experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated Front-End Developer based in Marrakech, Morocco, with over 5 years of experience 
                crafting digital experiences that combine functionality with aesthetic appeal.
              </p>
              <p>
                My expertise spans across React.js, Next.js, and modern web technologies, allowing me to build 
                scalable, performant applications that deliver exceptional user experiences.
              </p>
              <p>
                I've worked with diverse clients and agencies, from startups to established corporations, 
                helping them bring their digital visions to life through clean, maintainable code and 
                intuitive user interfaces.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Highlights */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-6">Key Highlights</h3>
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex-shrink-0">
                        <highlight.icon className="h-8 w-8 text-portfolio-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
