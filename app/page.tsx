"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Users, Briefcase, DollarSign, Code, HelpCircle } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import { motion } from "framer-motion"
import AIChatbot from "@/components/ai-chatbot"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 z-0"></div>
        <div className="absolute inset-0 dot-pattern opacity-30 z-0"></div>
        <div className="absolute top-20 -left-24 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-10 -right-20 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Turn Your <span className="animated-gradient-text">Startup Idea</span> Into Reality
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Develop, collaborate, fund, and launch your startup with our all-in-one platform for entrepreneurs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Link href="/dashboard">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="button-hover border-2">
                <Link href="/explore">Explore Ideas</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="button-hover">
                <Link href="/why-connect">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Why Connect?
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-background relative">
        <div className="absolute inset-0 dot-pattern opacity-20 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                Our Platform
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our platform guides you through every step of the startup journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <FeatureCard
                icon={<Lightbulb />}
                title="Develop Your Idea"
                description="Use AI assistance to refine your startup concept or get feedback from our community."
                delay={0}
              />
              <FeatureCard
                icon={<Users />}
                title="Build Your Team"
                description="Connect with like-minded individuals and form your dream team with our AI matching."
                delay={1}
              />
              <FeatureCard
                icon={<Briefcase />}
                title="Get Mentorship"
                description="Hire experienced mentors who can provide real-time guidance for your startup."
                delay={2}
              />
              <FeatureCard
                icon={<DollarSign />}
                title="Secure Funding"
                description="Present your idea to potential investors in our funding zone."
                delay={3}
              />
              <FeatureCard
                icon={<Code />}
                title="Implement Your Vision"
                description="Connect with freelancers who can turn your prototype into a real product."
                delay={4}
              />
              <FeatureCard
                icon={<ArrowRight />}
                title="Launch Your Startup"
                description="Take your startup from concept to market with our comprehensive support."
                delay={5}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/20 z-0"></div>
        <div className="absolute top-20 -right-24 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-10 -left-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to <span className="animated-gradient-text">Launch Your Startup</span>?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of entrepreneurs who are bringing their ideas to life.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="mt-4 button-hover bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              <Link href="/signup">Start Your Journey Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  )
}
