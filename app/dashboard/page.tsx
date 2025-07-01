"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  Lightbulb,
  Users,
  Briefcase,
  DollarSign,
  Plus,
  ArrowRight,
  UserPlus,
  Calendar,
  MessageSquare,
  Star,
  Building,
  Search,
  Filter,
  Code,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("ideas")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("")
  const router = useRouter()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  // Sample data for team members
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      avatar: "/placeholder.svg?height=40&width=40",
      match: 95,
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "UX/UI Designer",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      avatar: "/placeholder.svg?height=40&width=40",
      match: 88,
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      skills: ["Product Strategy", "Agile", "Market Research", "Data Analysis"],
      avatar: "/placeholder.svg?height=40&width=40",
      match: 82,
    },
  ]

  // Sample data for mentors
  const mentors = [
    {
      id: 1,
      name: "Dr. James Wilson",
      role: "CTO",
      company: "TechInnovate",
      expertise: ["Software Architecture", "AI/ML", "Tech Leadership"],
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Amanda Chen",
      role: "Founder & CEO",
      company: "GrowthLabs",
      expertise: ["Startup Strategy", "Fundraising", "Product-Market Fit"],
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
    },
  ]

  // Sample data for investors
  const investors = [
    {
      id: 1,
      name: "Robert Chen",
      company: "Horizon Ventures",
      domains: ["Technology", "AI", "SaaS"],
      investmentRange: "$100K - $500K",
      avatar: "/placeholder.svg?height=40&width=40",
      match: 94,
    },
    {
      id: 2,
      name: "Lisa Thompson",
      company: "Green Capital",
      domains: ["Sustainability", "CleanTech", "FoodTech"],
      investmentRange: "$250K - $1M",
      avatar: "/placeholder.svg?height=40&width=40",
      match: 87,
    },
  ]

  // Sample data for freelancers
  const freelancers = [
    {
      id: 1,
      name: "Daniel Lee",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      hourlyRate: "$65/hr",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Jessica Kim",
      role: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
      hourlyRate: "$55/hr",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
    },
  ]

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage your startup journey from idea to launch.</p>
        </div>
        <Button className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
          <Plus className="mr-2 h-4 w-4" /> New Idea
        </Button>
      </motion.div>

      {/* Main Navigation Tabs - Enhanced with more prominent styling */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <Button
          variant={activeTab === "ideas" ? "default" : "outline"}
          className={`h-20 flex flex-col items-center justify-center gap-2 ${activeTab === "ideas" ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" : "hover:border-primary/50 border-2"}`}
          onClick={() => setActiveTab("ideas")}
        >
          <Lightbulb className="h-6 w-6" />
          <span className="font-medium">Ideas</span>
        </Button>

        <Button
          variant={activeTab === "teams" ? "default" : "outline"}
          className={`h-20 flex flex-col items-center justify-center gap-2 ${activeTab === "teams" ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" : "hover:border-primary/50 border-2"}`}
          onClick={() => setActiveTab("teams")}
          asChild
        >
          <Link href="/team-building">
            <Users className="h-6 w-6" />
            <span className="font-medium">Teams</span>
          </Link>
        </Button>

        <Button
          variant={activeTab === "mentors" ? "default" : "outline"}
          className={`h-20 flex flex-col items-center justify-center gap-2 ${activeTab === "mentors" ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" : "hover:border-primary/50 border-2"}`}
          onClick={() => setActiveTab("mentors")}
          asChild
        >
          <Link href="/mentorship">
            <Briefcase className="h-6 w-6" />
            <span className="font-medium">Mentors</span>
          </Link>
        </Button>

        <Button
          variant={activeTab === "funding" ? "default" : "outline"}
          className={`h-20 flex flex-col items-center justify-center gap-2 ${activeTab === "funding" ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" : "hover:border-primary/50 border-2"}`}
          onClick={() => setActiveTab("funding")}
          asChild
        >
          <Link href="/funding">
            <DollarSign className="h-6 w-6" />
            <span className="font-medium">Funding</span>
          </Link>
        </Button>

        <Button
          variant={activeTab === "freelancers" ? "default" : "outline"}
          className={`h-20 flex flex-col items-center justify-center gap-2 ${activeTab === "freelancers" ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" : "hover:border-primary/50 border-2"}`}
          onClick={() => setActiveTab("freelancers")}
          asChild
        >
          <Link href="/freelancers">
            <Code className="h-6 w-6" />
            <span className="font-medium">Freelancers</span>
          </Link>
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* IDEAS TAB */}
        <TabsContent value="ideas" className="mt-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate={activeTab === "ideas" ? "show" : "hidden"}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={item}>
              <Card className="card-hover border-2 h-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="pb-3 relative">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                    Featured
                  </div>
                  <CardTitle>AI-Powered Idea Development</CardTitle>
                  <CardDescription>Refine your startup concept with our AI tools</CardDescription>
                </CardHeader>
                <CardContent className="text-sm relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <span>Get AI suggestions to improve your idea</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Get feedback from the community</span>
                  </div>
                </CardContent>
                <CardFooter className="relative">
                  <Button
                    asChild
                    className="w-full button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    <Link href="/idea-development">
                      Develop Your Idea <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="card-hover border-2 h-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="pb-3 relative">
                  <CardTitle>My Ideas</CardTitle>
                  <CardDescription>View and manage your startup ideas</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground">You haven't created any ideas yet.</p>
                </CardContent>
                <CardFooter className="relative">
                  <Button
                    variant="outline"
                    className="w-full button-hover border-2 group-hover:border-primary/50 transition-colors duration-300"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Create New Idea
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="card-hover border-2 h-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="pb-3 relative">
                  <CardTitle>Community Ideas</CardTitle>
                  <CardDescription>Explore ideas from the community</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground">Discover trending ideas and provide feedback.</p>
                </CardContent>
                <CardFooter className="relative">
                  <Button
                    variant="outline"
                    className="w-full button-hover border-2 group-hover:border-primary/50 transition-colors duration-300"
                    asChild
                  >
                    <Link href="/explore">Explore Ideas</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* TEAMS TAB */}
        <TabsContent value="teams" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={activeTab === "teams" ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-hover border-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative">
                    <CardTitle>Find Team Members</CardTitle>
                    <CardDescription>Search for potential team members</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="space-y-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search by name, role, or skill"
                          className="pl-8 border-2 focus:border-primary/50 transition-colors"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Popular Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "TypeScript", "Product Strategy", "UX/UI", "Marketing"].map((skill) => (
                          <Badge
                            key={skill}
                            variant={selectedFilter === skill ? "default" : "outline"}
                            className="cursor-pointer hover:bg-primary/20 transition-colors"
                            onClick={() => setSelectedFilter(selectedFilter === skill ? "" : skill)}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="w-full button-hover border-2">
                        <Filter className="mr-2 h-4 w-4" /> More Filters
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="relative">
                    <Button
                      className="w-full button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                      asChild
                    >
                      <Link href="/team-building">
                        Advanced Search <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={activeTab === "teams" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">AI-Matched Team Members</h2>
                  <Button variant="outline" className="button-hover border-2">
                    <UserPlus className="mr-2 h-4 w-4" /> Create Team
                  </Button>
                </div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={activeTab === "teams" ? "show" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {teamMembers.map((member, index) => (
                    <motion.div key={member.id} variants={item}>
                      <Card className="card-hover border-2 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardHeader className="pb-2 relative">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{member.name}</CardTitle>
                                <CardDescription>{member.role}</CardDescription>
                              </div>
                            </div>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-primary text-primary" />
                              {member.match}% Match
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2 relative">
                          <div className="flex flex-wrap gap-1 mb-2">
                            {member.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between relative">
                          <Button variant="outline" size="sm" className="button-hover border-2">
                            <MessageSquare className="mr-2 h-4 w-4" /> Message
                          </Button>
                          <Button
                            size="sm"
                            className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                          >
                            <UserPlus className="mr-2 h-4 w-4" /> Invite
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-6 text-center">
                  <Button variant="outline" className="button-hover border-2" asChild>
                    <Link href="/team-building">
                      View All Team Members <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </TabsContent>

        {/* MENTORS TAB */}
        <TabsContent value="mentors" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={activeTab === "mentors" ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-hover border-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative">
                    <CardTitle>Find Mentors</CardTitle>
                    <CardDescription>Search for industry experts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="space-y-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search mentors"
                          className="pl-8 border-2 focus:border-primary/50 transition-colors"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Expertise</label>
                      <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                        <SelectTrigger className="border-2 focus:border-primary/50 transition-colors">
                          <SelectValue placeholder="All Areas" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Areas</SelectItem>
                          <SelectItem value="Startup Strategy">Startup Strategy</SelectItem>
                          <SelectItem value="Fundraising">Fundraising</SelectItem>
                          <SelectItem value="Product Strategy">Product Strategy</SelectItem>
                          <SelectItem value="Tech Leadership">Tech Leadership</SelectItem>
                          <SelectItem value="Growth Marketing">Growth Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Budget</label>
                      <Select>
                        <SelectTrigger className="border-2 focus:border-primary/50 transition-colors">
                          <SelectValue placeholder="Any Budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Budget</SelectItem>
                          <SelectItem value="low">Under $100/hr</SelectItem>
                          <SelectItem value="mid">$100-$150/hr</SelectItem>
                          <SelectItem value="high">$150-$200/hr</SelectItem>
                          <SelectItem value="premium">$200+/hr</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter className="relative">
                    <Button className="w-full button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      <Link href="/mentorship">
                        View All Mentors <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={activeTab === "mentors" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Top Mentors</h2>
                  <Button variant="outline" className="button-hover border-2">
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Session
                  </Button>
                </div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={activeTab === "mentors" ? "show" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {mentors.map((mentor, index) => (
                    <motion.div key={mentor.id} variants={item}>
                      <Card className="card-hover border-2 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardHeader className="pb-2 relative">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                                <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{mentor.name}</CardTitle>
                                <CardDescription className="flex items-center">
                                  <Building className="h-3 w-3 mr-1" /> {mentor.role} at {mentor.company}
                                </CardDescription>
                              </div>
                            </div>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-primary text-primary" />
                              {mentor.rating}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2 relative">
                          <div className="flex flex-wrap gap-1 mb-2">
                            {mentor.expertise.map((exp) => (
                              <Badge key={exp} variant="outline" className="text-xs">
                                {exp}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between relative">
                          <Button variant="outline" size="sm" className="button-hover border-2">
                            <MessageSquare className="mr-2 h-4 w-4" /> Message
                          </Button>
                          <Button
                            size="sm"
                            className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                          >
                            <Calendar className="mr-2 h-4 w-4" /> Book Session
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-6 text-center">
                  <Button variant="outline" className="button-hover border-2" asChild>
                    <Link href="/mentorship">
                      View All Mentors <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </TabsContent>

        {/* FUNDING TAB */}
        <TabsContent value="funding" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={activeTab === "funding" ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-hover border-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative">
                    <CardTitle>Find Investors</CardTitle>
                    <CardDescription>Connect with potential investors</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="space-y-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search investors"
                          className="pl-8 border-2 focus:border-primary/50 transition-colors"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Domain</label>
                      <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                        <SelectTrigger className="border-2 focus:border-primary/50 transition-colors">
                          <SelectValue placeholder="All Domains" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Domains</SelectItem>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="AI">AI</SelectItem>
                          <SelectItem value="SaaS">SaaS</SelectItem>
                          <SelectItem value="FinTech">FinTech</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="FoodTech">FoodTech</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Investment Range</label>
                      <Select>
                        <SelectTrigger className="border-2 focus:border-primary/50 transition-colors">
                          <SelectValue placeholder="Any Amount" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Amount</SelectItem>
                          <SelectItem value="seed">Under $100K</SelectItem>
                          <SelectItem value="early">$100K - $500K</SelectItem>
                          <SelectItem value="mid">$500K - $2M</SelectItem>
                          <SelectItem value="growth">$2M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter className="relative">
                    <Button className="w-full button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      <Link href="/funding">
                        View All Investors <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={activeTab === "funding" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">AI-Matched Investors</h2>
                  <Button variant="outline" className="button-hover border-2">
                    <DollarSign className="mr-2 h-4 w-4" /> Create Funding Request
                  </Button>
                </div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={activeTab === "funding" ? "show" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {investors.map((investor, index) => (
                    <motion.div key={investor.id} variants={item}>
                      <Card className="card-hover border-2 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardHeader className="pb-2 relative">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={investor.avatar || "/placeholder.svg"} alt={investor.name} />
                                <AvatarFallback>{investor.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{investor.name}</CardTitle>
                                <CardDescription className="flex items-center">
                                  <Building className="h-3 w-3 mr-1" /> {investor.company}
                                </CardDescription>
                              </div>
                            </div>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-primary text-primary" />
                              {investor.match}% Match
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2 relative">
                          <div className="flex flex-wrap gap-1 mb-2">
                            {investor.domains.map((domain) => (
                              <Badge key={domain} variant="outline" className="text-xs">
                                {domain}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm font-medium">
                            <DollarSign className="inline h-3 w-3 mr-1" /> {investor.investmentRange}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between relative">
                          <Button variant="outline" size="sm" className="button-hover border-2">
                            <MessageSquare className="mr-2 h-4 w-4" /> Message
                          </Button>
                          <Button
                            size="sm"
                            className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                          >
                            <Briefcase className="mr-2 h-4 w-4" /> Pitch
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-6 text-center">
                  <Button variant="outline" className="button-hover border-2" asChild>
                    <Link href="/funding">
                      View All Investors <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </TabsContent>

        {/* FREELANCERS TAB */}
        <TabsContent value="freelancers" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={activeTab === "freelancers" ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-hover border-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative">
                    <CardTitle>Find Freelancers</CardTitle>
                    <CardDescription>Hire skilled professionals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="space-y-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search freelancers"
                          className="pl-8 border-2 focus:border-primary/50 transition-colors"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                        <SelectTrigger className="border-2 focus:border-primary/50 transition-colors">
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="Development">Development</SelectItem>
                          <SelectItem value="Design">Design</SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                          <SelectItem value="Content">Content Creation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Budget</label>
                      <Select>
                        <SelectTrigger className="border-2 focus:border-primary/50 transition-colors">
                          <SelectValue placeholder="Any Budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Budget</SelectItem>
                          <SelectItem value="low">Under $30/hr</SelectItem>
                          <SelectItem value="mid">$30-$60/hr</SelectItem>
                          <SelectItem value="high">$60-$100/hr</SelectItem>
                          <SelectItem value="premium">$100+/hr</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter className="relative">
                    <Button className="w-full button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      <Link href="/freelancers">
                        View All Freelancers <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={activeTab === "freelancers" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Top Freelancers</h2>
                  <Button variant="outline" className="button-hover border-2">
                    <Briefcase className="mr-2 h-4 w-4" /> Post a Project
                  </Button>
                </div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={activeTab === "freelancers" ? "show" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {freelancers.map((freelancer, index) => (
                    <motion.div key={freelancer.id} variants={item}>
                      <Card className="card-hover border-2 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardHeader className="pb-2 relative">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={freelancer.avatar || "/placeholder.svg"} alt={freelancer.name} />
                                <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{freelancer.name}</CardTitle>
                                <CardDescription>{freelancer.role}</CardDescription>
                              </div>
                            </div>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-primary text-primary" />
                              {freelancer.rating}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2 relative">
                          <div className="flex flex-wrap gap-1 mb-2">
                            {freelancer.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm font-medium">{freelancer.hourlyRate}</div>
                        </CardContent>
                        <CardFooter className="flex justify-between relative">
                          <Button variant="outline" size="sm" className="button-hover border-2">
                            <MessageSquare className="mr-2 h-4 w-4" /> Contact
                          </Button>
                          <Button
                            size="sm"
                            className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                          >
                            <Briefcase className="mr-2 h-4 w-4" /> Hire
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-6 text-center">
                  <Button variant="outline" className="button-hover border-2" asChild>
                    <Link href="/freelancers">
                      View All Freelancers <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
