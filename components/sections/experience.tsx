"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

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

const experiences = [
  {
    company: "Creaclicks",
    position: "Web Developer",
    period: "2024 - 2025",
    location: "Remote",
    description: "Developing web solutions with focus on responsiveness and performance optimization. Working on multiple client projects using modern web technologies.",
    technologies: ["React.js", "Next.js", "TailwindCSS", "Node.js"],
    achievements: [
      "Optimized website performance by 40%",
      "Implemented responsive design for all projects",
      "Reduced loading times by 60%"
    ]
  },
  {
    company: "Freelance Web Developer",
    position: "Front-End Developer",
    period: "2022 - 2023",
    location: "Marrakech, Morocco",
    description: "Built custom responsive websites and web applications for various clients. Handled full project lifecycle from concept to deployment.",
    technologies: ["React.js", "Next.js", "WordPress", "SEO"],
    achievements: [
      "Completed 15+ client projects",
      "Achieved 100% client satisfaction rate",
      "Implemented SEO best practices"
    ]
  },
  {
    company: "BCOM DIGITAL",
    position: "Web Developer",
    period: "2021 - 2022",
    location: "Morocco",
    description: "Developed corporate website using HTML5, Sass, and modern web technologies. Collaborated with design team to implement pixel-perfect designs.",
    technologies: ["HTML5", "Sass", "JavaScript", "Bootstrap"],
    achievements: [
      "Built responsive corporate website",
      "Improved site performance by 35%",
      "Implemented modern design patterns"
    ]
  },
  {
    company: "Agence Onestcom",
    position: "Front-End Developer",
    period: "2020 - 2021",
    location: "Morocco",
    description: "Built WordPress themes and custom front-end frameworks. Worked on multiple projects simultaneously.",
    technologies: ["WordPress", "JavaScript", "Bootstrap", "PHP"],
    achievements: [
      "Developed 5+ WordPress themes",
      "Built custom web applications",
      "Improved development workflow"
    ]
  },
  {
    company: "Agence Devaro",
    position: "Front-End Developer",
    period: "Dec 2020",
    location: "Morocco",
    description: "Created interactive user interfaces using JavaScript, jQuery, and Bootstrap. Focused on user experience and modern design principles.",
    technologies: ["JavaScript", "jQuery", "Bootstrap", "HTML/CSS"],
    achievements: [
      "Built interactive UI components",
      "Implemented responsive design",
      "Enhanced user experience"
    ]
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-4">
            Professional Experience
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and companies, each contributing to my growth as a Front-End Developer.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-primary via-portfolio-secondary to-portfolio-accent" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-portfolio-primary rounded-full border-4 border-background shadow-lg z-10" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{experience.position}</CardTitle>
                          <h4 className="text-lg font-semibold text-portfolio-primary mb-1">
                            {experience.company}
                          </h4>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {experience.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>
                      
                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold mb-2">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="font-semibold mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Career Summary</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-portfolio-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-portfolio-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-portfolio-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Technologies Mastered</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
