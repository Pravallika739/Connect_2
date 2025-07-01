"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react"

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSignup = () => {
    setIsLoading(true)
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-16rem)] py-12 relative">
      <div className="absolute top-20 -left-24 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="card-hover border-2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <div className="flex justify-center mb-2">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6 animate-pulse-slow" />
              </div>
            </div>
            <CardTitle className="text-center text-2xl">Create an Account</CardTitle>
            <CardDescription className="text-center">
              Join StartupLaunch to develop, collaborate, and fund your startup idea.
            </CardDescription>
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${step === 1 ? "bg-primary" : "bg-primary/30"} transition-colors duration-300`}
                ></div>
                <div
                  className={`w-3 h-3 rounded-full ${step === 2 ? "bg-primary" : "bg-primary/30"} transition-colors duration-300`}
                ></div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="border-2 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-2 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="border-2 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    className="border-2 focus:border-primary/50 transition-colors"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Select>
                    <SelectTrigger className="border-2 focus:border-primary/50 transition-colors">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="founder">Founder</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="marketer">Marketer</SelectItem>
                      <SelectItem value="product-manager">Product Manager</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="mentor">Mentor</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <Select>
                    <SelectTrigger className="border-2 focus:border-primary/50 transition-colors">
                      <SelectValue placeholder="Select your interests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="health">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="ecommerce">E-Commerce</SelectItem>
                      <SelectItem value="sustainability">Sustainability</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select>
                    <SelectTrigger className="border-2 focus:border-primary/50 transition-colors">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      privacy policy
                    </Link>
                  </label>
                </div>
              </motion.div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between relative">
            {step > 1 ? (
              <Button variant="outline" onClick={handlePrevStep} className="button-hover border-2">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            ) : (
              <Button variant="outline" asChild className="button-hover border-2">
                <Link href="/login">Log In Instead</Link>
              </Button>
            )}
            {step < 2 ? (
              <Button
                onClick={handleNextStep}
                className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSignup}
                disabled={isLoading}
                className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 animate-spin-slow" /> Creating...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
