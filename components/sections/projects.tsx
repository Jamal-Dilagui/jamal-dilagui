"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'

import Img1 from '@/images/1.png'
import Img2 from '@/images/2.png'
import Img3 from '@/images/3.png'
import Img4 from '@/images/4.png'
import Img5 from '@/images/5.png'
import Img6 from '@/images/6.png'
import Img7 from '@/images/7.png'
import Img8 from '@/images/8.png'

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

const projects = [
  {
    title: "BCOM Digital",
    description: "Corporate website for BCOM Digital, featuring modern design and responsive layout. Built with HTML5, Sass, and modern web technologies.",
    image: Img1,
    alt: "BCOM Digital website screenshot",
    liveUrl: "https://bcomdigital.com",
    githubUrl: null,
    technologies: ["HTML5", "Sass", "JavaScript", "Bootstrap"],
    category: "Corporate"
  },
  {
    title: "BugBusters",
    description: "Professional website for BugBusters, showcasing their services with interactive elements and modern UI design.",
    image: Img2,
    alt: "BugBusters website screenshot",
    liveUrl: "https://www.bugbusters.fr",
    githubUrl: null,
    technologies: ["React.js", "Next.js", "TailwindCSS"],
    category: "Professional"
  },
  {
    title: "MAG Audit",
    description: "Audit company website with clean, professional design and comprehensive service presentation.",
    image: Img3,
    alt: "MAG Audit website screenshot",
    liveUrl: "https://www.mag-audit.fr",
    githubUrl: null,
    technologies: ["WordPress", "PHP", "CSS3"],
    category: "Professional"
  },
  {
    title: "LRC Europe",
    description: "European business website with multilingual support and modern e-commerce features.",
    image: Img4,
    alt: "LRC Europe website screenshot",
    liveUrl: "https://www.lrceurope.com",
    githubUrl: null,
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "E-commerce"
  },
  {
    title: "Gift Matcher",
    description: "Interactive gift recommendation application that helps users find perfect gifts based on preferences and occasions.",
    image: Img5,
    alt: "Gift Matcher app screenshot",
    liveUrl: "https://giftmatcher.vercel.app",
    githubUrl: "https://github.com/jamaldilagui/giftmatcher",
    technologies: ["Next.js", "React.js", "TailwindCSS", "Framer Motion"],
    category: "Web App"
  },
  {
    title: "MoodFlix",
    description: "Movie recommendation platform that suggests films based on user mood and preferences with beautiful UI.",
    image: Img6,
    alt: "MoodFlix app screenshot",
    liveUrl: "https://moodflix-dusky.vercel.app",
    githubUrl: "https://github.com/jamaldilagui/moodflix",
    technologies: ["Next.js", "TypeScript", "TMDB API", "TailwindCSS"],
    category: "Web App"
  },
  {
    title: "Quit Vaping",
    description: "Health-focused application designed to help users quit vaping with tracking tools and motivational features.",
    image: Img7,
    alt: "Quit Vaping app screenshot",
    liveUrl: "https://quit-vaping2.vercel.app",
    githubUrl: "https://github.com/jamaldilagui/quit-vaping",
    technologies: ["React.js", "Next.js", "LocalStorage", "CSS3"],
    category: "Health"
  },
  {
    title: "Deutsch Dialog",
    description: "AI-powered German learning app: practice through conversational chat with instant feedback, vocabulary and grammar guidance, and a clean, responsive interface.",
    image: Img8,
    alt: "Deutsch Dialog app screenshot",
    liveUrl: "https://deutch-dialog.vercel.app/",
    githubUrl: null,
    technologies: ["Next.js", "React", "TailwindCSS", "AI/LLM", "Chat UI"],
    category: "Web App"
  }
]

const categories = ["All", "Web App", "Corporate", "Professional", "E-commerce", "Health"]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent work, demonstrating my skills in modern web development and design.
          </motion.p>

          {/* Category Filter */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="card-hover group overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                  </div>
                  
                  {/* Overlay with Links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => window.open('mailto:info@jamaldilagui.com', '_blank')}
                        className="flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Work With Me
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open('mailto:info@jamaldilagui.com', '_blank')}
                      className="flex items-center gap-2 flex-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Hire Me
                    </Button>
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="flex items-center gap-2 flex-1"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and exciting projects. 
                Let's create something amazing together!
              </p>
              <Button
                size="lg"
                variant="gradient"
                onClick={() => window.open('mailto:info@jamaldilagui.com', '_blank')}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
