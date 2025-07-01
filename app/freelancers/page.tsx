"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Code, Search, Filter, MessageSquare, Star, Briefcase } from "lucide-react"

type Freelancer = {
  id: number
  name: string
  role: string
  skills: string[]
  hourlyRate: string
  location: string
  bio: string
  avatar: string
  rating: number
}

export default function FreelancersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const freelancers: Freelancer[] = [
    {
      id: 1,
      name: "Daniel Lee",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      hourlyRate: "$65/hr",
      location: "Remote (GMT+8)",
      bio: "Full stack developer with 6 years of experience building scalable web applications.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Jessica Kim",
      role: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
      hourlyRate: "$55/hr",
      location: "Remote (GMT-5)",
      bio: "Designer specializing in creating intuitive and beautiful user interfaces.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Mobile Developer",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      hourlyRate: "$70/hr",
      location: "Remote (GMT-8)",
      bio: "Mobile developer with expertise in cross-platform and native app development.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Digital Marketer",
      skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
      hourlyRate: "$45/hr",
      location: "Remote (GMT+5:30)",
      bio: "Marketing specialist with a focus on growth strategies for startups.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.6,
    },
  ]

  const filteredFreelancers = freelancers.filter((freelancer) => {
    const matchesSearch =
      searchQuery === "" ||
      freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      selectedCategory === "" ||
      (selectedCategory === "Development" &&
        (freelancer.role.includes("Developer") ||
          freelancer.skills.some((s) => ["React", "Node.js", "MongoDB", "AWS"].includes(s)))) ||
      (selectedCategory === "Design" &&
        (freelancer.role.includes("Designer") ||
          freelancer.skills.some((s) => ["Figma", "Adobe XD", "Sketch"].includes(s)))) ||
      (selectedCategory === "Marketing" &&
        (freelancer.role.includes("Marketer") ||
          freelancer.skills.some((s) => ["SEO", "Content Marketing", "Social Media"].includes(s))))

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Freelancer Marketplace</h1>
          <p className="text-muted-foreground">Find skilled professionals to bring your startup to life.</p>
        </div>
        <Button>
          <Briefcase className="mr-2 h-4 w-4" /> Post a Project
        </Button>
      </div>

      <Tabs defaultValue="find" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="find">Find Freelancers</TabsTrigger>
          <TabsTrigger value="projects">My Projects</TabsTrigger>
          <TabsTrigger value="proposals">Project Proposals</TabsTrigger>
        </TabsList>

        <TabsContent value="find" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                  <CardDescription>Refine your search</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search freelancers"
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
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
                      <SelectTrigger>
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
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Filter className="mr-2 h-4 w-4" /> More Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold mb-4">Top Freelancers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFreelancers.map((freelancer) => (
                  <Card key={freelancer.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
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
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground mb-2">{freelancer.bio}</p>
                      <p className="text-xs text-muted-foreground mb-3">{freelancer.location}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {freelancer.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm font-medium">{freelancer.hourlyRate}</div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" /> Contact
                      </Button>
                      <Button size="sm">
                        <Briefcase className="mr-2 h-4 w-4" /> Hire
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>My Projects</CardTitle>
              <CardDescription>Track and manage your freelance projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Code className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <h3 className="text-lg font-medium mb-2">No Projects</h3>
                <p className="text-muted-foreground mb-4">You haven't created any projects yet.</p>
                <Button>
                  <Briefcase className="mr-2 h-4 w-4" /> Post Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="proposals" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Proposals</CardTitle>
              <CardDescription>Proposals from freelancers for your projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <h3 className="text-lg font-medium mb-2">No Proposals</h3>
                <p className="text-muted-foreground">You don't have any project proposals yet.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
