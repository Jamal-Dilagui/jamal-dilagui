"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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

const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React.js", level: 95, color: "from-blue-500 to-blue-600" },
      { name: "Next.js", level: 90, color: "from-black to-gray-800" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
      { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-500" },
      { name: "HTML5/CSS3", level: 90, color: "from-orange-500 to-red-500" },
    ]
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "TailwindCSS", level: 90, color: "from-cyan-400 to-cyan-500" },
      { name: "Sass/SCSS", level: 85, color: "from-pink-500 to-pink-600" },
      { name: "Bootstrap", level: 80, color: "from-purple-500 to-purple-600" },
      { name: "Framer Motion", level: 75, color: "from-purple-600 to-purple-700" },
    ]
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 80, color: "from-green-500 to-green-600" },
      { name: "Git", level: 85, color: "from-orange-600 to-orange-700" },
      { name: "WordPress", level: 80, color: "from-blue-400 to-blue-500" },
    ]
  },
  {
    title: "State Management & Libraries",
    skills: [
      { name: "Redux", level: 85, color: "from-purple-500 to-purple-600" },
      { name: "jQuery", level: 80, color: "from-blue-500 to-blue-600" },
      { name: "Elementor", level: 75, color: "from-orange-400 to-orange-500" },
    ]
  }
]

const techIcons = [
  { name: "React", icon: "⚛️", color: "hover:bg-blue-100 dark:hover:bg-blue-900/20" },
  { name: "Next.js", icon: "▲", color: "hover:bg-black dark:hover:bg-white" },
  { name: "TypeScript", icon: "📘", color: "hover:bg-blue-100 dark:hover:bg-blue-900/20" },
  { name: "TailwindCSS", icon: "🎨", color: "hover:bg-cyan-100 dark:hover:bg-cyan-900/20" },
  { name: "Node.js", icon: "🟢", color: "hover:bg-green-100 dark:hover:bg-green-900/20" },
  { name: "Git", icon: "📝", color: "hover:bg-orange-100 dark:hover:bg-orange-900/20" },
  { name: "WordPress", icon: "📝", color: "hover:bg-blue-100 dark:hover:bg-blue-900/20" },
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
            Skills & Technologies
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise spans across modern web technologies, from frontend frameworks to backend development tools.
          </motion.p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">Tech Stack</h3>
          <div className="flex justify-center px-4">
            <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 ${tech.color}`}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">{tech.icon}</div>
                  <span className="text-[10px] sm:text-xs font-medium text-center leading-tight max-w-full truncate">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={fadeInUp}>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Responsive Design", "SEO Optimization", "Performance Optimization", 
              "Cross-browser Compatibility", "RESTful APIs", "GraphQL", "Testing",
              "CI/CD", "Docker", "AWS", "Vercel", "Netlify", "Figma", "Adobe XD"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
