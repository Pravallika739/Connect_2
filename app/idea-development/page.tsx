"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Save, Share, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function IdeaDevelopmentPage() {
  const [idea, setIdea] = useState("")
  const [domain, setDomain] = useState<string | undefined>("")
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    return () => {
      // Cleanup logic for timeouts or other side effects
    }
  }, [])

  const handleGenerateAISuggestions = () => {
    setIsLoading(true)
    const timeout = setTimeout(() => {
      setAiSuggestions([
        "Consider focusing on a specific niche within your target market to establish a strong initial user base.",
        "You might want to explore partnerships with existing platforms to leverage their user base.",
        "Think about how you can incorporate a freemium model to attract users while monetizing premium features.",
        "Consider adding a feature that allows users to track their progress and milestones.",
      ])
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timeout) // Cleanup timeout
  }

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Idea Development</h1>
          <p className="text-muted-foreground">
            Refine your startup concept with AI assistance and community feedback.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="button-hover border-2">
            <Save className="mr-2 h-4 w-4" /> Save Draft
          </Button>
          <Button className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
            <Share className="mr-2 h-4 w-4" /> Share for Feedback
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="card-hover border-2 overflow-hidden">
            <CardHeader>
              <CardTitle>Develop Your Idea</CardTitle>
              <CardDescription>Describe your startup idea in detail</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Idea Title</Label>
                <Input
                  id="title"
                  placeholder="Give your idea a catchy title"
                  className="border-2 focus:border-primary/50 transition-colors"
                  aria-label="Idea Title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="domain">Domain</Label>
                <Select value={domain} onValueChange={(value: string | undefined) => setDomain(value)}>
                  <SelectTrigger className="border-2 focus:border-primary/50 transition-colors">
                    <SelectValue placeholder="Select a domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="health">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="ecommerce">E-Commerce</SelectItem>
                    <SelectItem value="food">Food & Beverage</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your startup idea in detail..."
                  className="min-h-[200px] border-2 focus:border-primary/50 transition-colors"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  aria-label="Description"
                />
              </div>
              <ul>
                {aiSuggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="button-hover border-2">
                Clear
              </Button>
              <Button
                onClick={handleGenerateAISuggestions}
                disabled={!idea || isLoading}
                className={`button-hover ${isLoading ? "bg-muted" : "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"}`}
              >
                {isLoading ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 animate-spin-slow" /> Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" /> Get AI Suggestions
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
