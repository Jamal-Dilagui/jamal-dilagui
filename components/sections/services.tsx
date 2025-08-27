"use client"

import { CheckCircle2, Code2, Gauge, Smartphone, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: <Code2 className="h-6 w-6 text-portfolio-primary" aria-hidden="true" />,
    title: 'Custom Website Design & Development',
    description:
      'Modern, responsive websites tailored to your brand, optimized for speed and SEO to convert more visitors into customers.',
  },
  {
    icon: <Gauge className="h-6 w-6 text-portfolio-primary" aria-hidden="true" />,
    title: 'Performance & SEO Optimization',
    description:
      'Core Web Vitals improvements, clean architecture, and on-page SEO best practices to drive rankings and revenue.',
  },
  {
    icon: <Smartphone className="h-6 w-6 text-portfolio-primary" aria-hidden="true" />,
    title: 'Responsive & Mobile-First Layouts',
    description:
      'Fluid, mobile-first experiences that look and perform great on every device and screen size.',
  },
  {
    icon: <Wrench className="h-6 w-6 text-portfolio-primary" aria-hidden="true" />,
    title: 'Ongoing Maintenance & Support',
    description:
      'Reliable updates, monitoring, and enhancements so your site stays fast, secure, and up-to-date.',
  },
]

const processSteps = [
  { step: '1', title: 'Discovery & Strategy', text: 'Understand goals, users, and KPIs to define a winning plan.' },
  { step: '2', title: 'Design & Development', text: 'Craft clean UI and robust code aligned with your brand.' },
  { step: '3', title: 'Feedback & Revisions', text: 'Iterate quickly based on your feedback to refine the solution.' },
  { step: '4', title: 'Launch & Support', text: 'Deploy, monitor, and support for long-term success.' },
]

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">How I Can Help Your Business Grow</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            I build high-converting websites that attract more customers and increase revenue.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((item) => (
            <Card key={item.title} className="glass-effect card-hover">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-portfolio-light dark:bg-portfolio-dark">
                  {item.icon}
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">My Process</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => (
              <div key={p.step} className="rounded-xl border p-4 glass-effect">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-portfolio-primary text-white text-sm font-semibold">
                    {p.step}
                  </span>
                  <span className="font-medium">{p.title}</span>
                </div>
                <p className="text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Button size="lg" className="bg-portfolio-primary hover:bg-portfolio-secondary" onClick={() => window.open('mailto:info@jamaldilagui.com', '_blank')}>
            Request a Free Consultation
          </Button>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-portfolio-accent" aria-hidden="true" />
            Fast response. No obligation.
          </p>
        </div>

        <div className="mt-10">
          <figure className="mx-auto max-w-3xl rounded-xl border p-4 glass-effect">
            <blockquote className="text-sm text-muted-foreground">
              “Jamal transformed our site into a fast, modern experience. We saw higher engagement and more qualified leads within weeks.”
            </blockquote>
            <figcaption className="mt-2 text-sm font-medium">
              — Happy Client, SMB Owner
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
