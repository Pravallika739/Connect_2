"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for early-stage entrepreneurs testing their ideas",
    features: [
      "AI-powered idea validation",
      "Basic community feedback",
      "Limited team matching",
      "Access to resource library",
      "1 active project",
    ],
    cta: "Get Started",
    href: "/signup",
    popular: false,
    delay: 0,
  },
  {
    name: "Growth",
    price: "$29",
    period: "/month",
    description: "For startups ready to build their team and develop their product",
    features: [
      "Everything in Starter",
      "Advanced AI development tools",
      "Unlimited community feedback",
      "Priority team matching",
      "Basic mentor connections",
      "3 active projects",
    ],
    cta: "Start 14-day Trial",
    href: "/signup?plan=growth",
    popular: true,
    delay: 0.1,
  },
  {
    name: "Scale",
    price: "$99",
    period: "/month",
    description: "For startups seeking funding and ready to scale",
    features: [
      "Everything in Growth",
      "Premium mentor network access",
      "Investor matching & introductions",
      "Dedicated startup advisor",
      "Freelancer hiring assistance",
      "Unlimited active projects",
    ],
    cta: "Start 14-day Trial",
    href: "/signup?plan=scale",
    popular: false,
    delay: 0.2,
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Choose the Perfect Plan for Your <span className="animated-gradient-text">Startup Journey</span>
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible plans designed to grow with your startup at every stage
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: plan.delay }}
                  className={`flex flex-col p-6 bg-card shadow-lg rounded-lg border-2 ${
                    plan.popular ? "border-primary" : "border-border"
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="ml-1 text-muted-foreground">{plan.period}</span>}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      asChild
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link href={plan.href}>{plan.cta}</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Need a custom plan for your enterprise?</h3>
              <Button asChild variant="outline" className="button-hover border-2">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Money-back Guarantee</h3>
                <p className="text-muted-foreground">30-day money-back guarantee if you're not satisfied</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Dedicated Support</h3>
                <p className="text-muted-foreground">Get help when you need it from our startup experts</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Secure Platform</h3>
                <p className="text-muted-foreground">Your data and intellectual property are always protected</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M5 22h14" />
                    <path d="M5 2h14" />
                    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Flexible Upgrades</h3>
                <p className="text-muted-foreground">Easily upgrade or downgrade as your startup evolves</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about our pricing and plans
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:gap-10 mt-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Can I change plans later?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of
                  your next billing cycle.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers for annual plans.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Is there a contract or commitment?</h3>
                <p className="text-muted-foreground">
                  No long-term contracts. All plans are month-to-month, though we offer discounts for annual billing.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">What happens when my trial ends?</h3>
                <p className="text-muted-foreground">
                  We'll send you a reminder before your trial ends. You can then choose to subscribe or downgrade to our
                  free plan.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Do you offer discounts for startups?</h3>
                <p className="text-muted-foreground">
                  Yes! We offer special pricing for early-stage startups, incubators, and educational institutions.
                  Contact us for details.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">How secure is my startup data?</h3>
                <p className="text-muted-foreground">
                  We use industry-standard encryption and security practices to protect your data. Your intellectual
                  property remains 100% yours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
