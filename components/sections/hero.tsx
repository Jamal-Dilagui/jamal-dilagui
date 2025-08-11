"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-primary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            variants={textVariants}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-3 sm:mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={textVariants}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="gradient-text">Jamal-Eddine Dilagui</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={textVariants}
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground mb-6 sm:mb-8"
          >
            Front-End Developer
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={textVariants}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Specializing in React.js, Next.js, and modern web technologies. 
            Creating premium, responsive web experiences that leave lasting impressions.
          </motion.p>

          {/* Location */}
          <motion.p
            variants={textVariants}
            className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12"
          >
            📍 Based in Marrakech, Morocco
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 sm:mb-20"
          >
            <Button
              size="lg"
              variant="gradient"
              className="group relative overflow-hidden w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-portfolio-secondary to-portfolio-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto"
              onClick={() => window.open('https://www.linkedin.com/in/jamal-eddine-dilagui', '_blank')}
            >
              <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={textVariants}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToAbout}
          className="group flex flex-col items-center p-2 sm:p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90 hover:border-border transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, y: 0 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors mb-1">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-16 sm:top-20 right-8 sm:right-20 w-3 h-3 sm:w-4 sm:h-4 bg-portfolio-primary/30 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-24 sm:bottom-32 left-8 sm:left-20 w-4 h-4 sm:w-6 sm:h-6 bg-portfolio-accent/30 rounded-full blur-sm"
      />
    </section>
  )
}
