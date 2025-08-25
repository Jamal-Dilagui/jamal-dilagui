import { Suspense } from 'react'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </Suspense>
    </main>
  )
}
