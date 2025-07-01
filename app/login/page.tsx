"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
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
            <CardTitle className="text-center text-2xl">Log In</CardTitle>
            <CardDescription className="text-center">
              Log in to your StartupLaunch account to continue your startup journey.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4 relative">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-2 focus:border-primary/50 transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="border-2 focus:border-primary/50 transition-colors"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 relative">
              <Button
                type="submit"
                className="w-full button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 animate-spin-slow" /> Logging in...
                  </>
                ) : (
                  "Log In"
                )}
              </Button>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}
