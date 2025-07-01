"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, ThumbsUp, MessageSquare, Users, Briefcase, DollarSign, Code } from "lucide-react"
import { motion } from "framer-motion"

// Sample data for startup ideas
const startupIdeas = [
  {
    id: 1,
    title: "EcoTrack: Sustainable Supply Chain Monitoring",
    description:
      "A platform that helps businesses track and improve the environmental impact of their supply chains using IoT sensors and blockchain verification.",
    domain: "Sustainability",
    stage: "Concept",
    likes: 128,
    comments: 32,
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Sustainability", "IoT", "Blockchain", "Supply Chain"],
  },
  {
    id: 2,
    title: "MindfulAI: Mental Health Companion",
    description:
      "An AI-powered mental health companion that provides personalized support, tracks mood patterns, and connects users with professional help when needed.",
    domain: "Healthcare",
    stage: "Prototype",
    likes: 245,
    comments: 56,
    author: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Healthcare", "AI", "Mental Health", "Wellness"],
  },
  {
    id: 3,
    title: "SkillSwap: Peer-to-Peer Learning Marketplace",
    description:
      "A platform where people can exchange skills and knowledge directly, creating a more accessible and democratic learning ecosystem.",
    domain: "Education",
    stage: "MVP",
    likes: 189,
    comments: 41,
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Education", "Marketplace", "Peer-to-Peer", "Skills"],
  },
  {
    id: 4,
    title: "LocalEats: Farm-to-Table Delivery Network",
    description:
      "Connecting local farmers directly with consumers and restaurants to create a more sustainable and efficient food distribution system.",
    domain: "Food",
    stage: "Early Revenue",
    likes: 312,
    comments: 78,
    author: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Food", "Logistics", "Sustainability", "Local Business"],
  },
  {
    id: 5,
    title: "CyberShield: Small Business Security Suite",
    description:
      "An affordable, all-in-one cybersecurity solution designed specifically for small businesses without dedicated IT departments.",
    domain: "Security",
    stage: "Prototype",
    likes: 176,
    comments: 39,
    author: {
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Security", "SaaS", "Small Business", "Cybersecurity"],
  },
  {
    id: 6,
    title: "RetireWise: Retirement Planning Simplified",
    description:
      "An AI-powered platform that makes retirement planning accessible and understandable for everyone, regardless of financial literacy.",
    domain: "FinTech",
    stage: "MVP",
    likes: 203,
    comments: 47,
    author: {
      name: "Lisa Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["FinTech", "Retirement", "AI", "Financial Planning"],
  },
]

// Sample data for trending domains
const trendingDomains = [
  { name: "AI & Machine Learning", count: 1243 },
  { name: "Sustainability", count: 876 },
  { name: "HealthTech", count: 754 },
  { name: "FinTech", count: 689 },
  { name: "EdTech", count: 542 },
  { name: "Remote Work", count: 498 },
]

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("trending")

  // Filter ideas based on search query
  const filteredIdeas = startupIdeas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-background/80 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Innovative <span className="animated-gradient-text">Startup Ideas</span>
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Discover trending startup concepts, connect with founders, and find inspiration for your next venture
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full max-w-2xl flex items-center space-x-2"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search ideas, domains, or tags..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="trending" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-between items-center mb-8">
                <TabsList>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                </TabsList>
                <Button variant="outline" className="hidden sm:flex">
                  <Users className="mr-2 h-4 w-4" />
                  Find Co-founders
                </Button>
              </div>

              <TabsContent value="trending" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-6">Trending Ideas</h2>
                    <div className="grid grid-cols-1 gap-6">
                      {filteredIdeas.map((idea, index) => (
                        <motion.div
                          key={idea.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Card>
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle>{idea.title}</CardTitle>
                                  <CardDescription className="mt-1">
                                    {idea.domain} • {idea.stage}
                                  </CardDescription>
                                </div>
                                <Avatar>
                                  <AvatarImage src={idea.author.avatar || "/placeholder.svg"} alt={idea.author.name} />
                                  <AvatarFallback>{idea.author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground">{idea.description}</p>
                              <div className="flex flex-wrap gap-2 mt-4">
                                {idea.tags.map((tag) => (
                                  <Badge key={tag} variant="outline">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                              <div className="flex space-x-4">
                                <Button variant="ghost" size="sm" className="text-muted-foreground">
                                  <ThumbsUp className="mr-1 h-4 w-4" />
                                  {idea.likes}
                                </Button>
                                <Button variant="ghost" size="sm" className="text-muted-foreground">
                                  <MessageSquare className="mr-1 h-4 w-4" />
                                  {idea.comments}
                                </Button>
                              </div>
                              <Button size="sm">View Details</Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6">Trending Domains</h2>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          {trendingDomains.map((domain, index) => (
                            <motion.div
                              key={domain.name}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="flex justify-between items-center"
                            >
                              <span>{domain.name}</span>
                              <Badge variant="secondary">{domain.count}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <div className="mt-8">
                      <h2 className="text-2xl font-bold mb-6">Get Started</h2>
                      <Card className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                        <CardContent className="pt-6">
                          <div className="text-center space-y-4">
                            <h3 className="text-xl font-semibold">Have an idea?</h3>
                            <p className="text-muted-foreground">
                              Share your startup concept and get feedback from our community
                            </p>
                            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                              Submit Your Idea
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recent">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Loading recent ideas...</p>
                </div>
              </TabsContent>

              <TabsContent value="featured">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Loading featured ideas...</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold">How Connect Helps You</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Take your startup idea from concept to reality with our comprehensive platform
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Idea Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Refine your concept with AI tools and community feedback</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Team Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Find co-founders and team members who share your vision</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Connect with investors looking for innovative startups</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Hire freelancers to build your MVP and launch your product</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
