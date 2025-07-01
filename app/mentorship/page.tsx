"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Search, Filter, MessageSquare, Star, Calendar } from "lucide-react"

type Mentor = {
  id: number
  name: string
  role: string
  company: string
  expertise: string[]
  hourlyRate: string
  location: string
  bio: string
  avatar: string
  rating: number
}

export default function MentorshipPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState("")

  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Dr. James Wilson",
      role: "CTO",
      company: "TechInnovate",
      expertise: ["Software Architecture", "AI/ML", "Tech Leadership"],
      hourlyRate: "$150/hr",
      location: "San Francisco, CA",
      bio: "Former Google engineer with 15+ years of experience building scalable systems.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Amanda Chen",
      role: "Founder & CEO",
      company: "GrowthLabs",
      expertise: ["Startup Strategy", "Fundraising", "Product-Market Fit"],
      hourlyRate: "$200/hr",
      location: "New York, NY",
      bio: "Serial entrepreneur who has raised over $50M in venture funding across 3 startups.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "VP of Marketing",
      company: "ScaleUp",
      expertise: ["Growth Marketing", "Brand Strategy", "Go-to-Market"],
      hourlyRate: "$125/hr",
      location: "Austin, TX",
      bio: "Marketing executive who has helped 20+ startups scale from zero to millions in revenue.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Product Director",
      company: "ProductLabs",
      expertise: ["Product Strategy", "UX Design", "Agile Methodology"],
      hourlyRate: "$175/hr",
      location: "Seattle, WA",
      bio: "Product leader with experience at Amazon and Microsoft, specializing in consumer products.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
    },
  ]

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      searchQuery === "" ||
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((exp) => exp.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesExpertise = selectedExpertise === "" || mentor.expertise.includes(selectedExpertise)

    return matchesSearch && matchesExpertise
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mentorship</h1>
          <p className="text-muted-foreground">Get guidance from experienced industry experts.</p>
        </div>
        <Button>
          <Calendar className="mr-2 h-4 w-4" /> Schedule Session
        </Button>
      </div>

      <Tabs defaultValue="find" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="find">Find Mentors</TabsTrigger>
          <TabsTrigger value="my-mentors">My Mentors</TabsTrigger>
          <TabsTrigger value="sessions">Upcoming Sessions</TabsTrigger>
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
                        placeholder="Search mentors"
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Expertise</label>
                    <Select value={selectedExpertise} onValueChange={setSelectedExpertise}>
                      <SelectTrigger>
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
                      <SelectTrigger>
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
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Filter className="mr-2 h-4 w-4" /> More Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold mb-4">Top Mentors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredMentors.map((mentor) => (
                  <Card key={mentor.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={mentor.avatar} alt={mentor.name} />
                            <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{mentor.name}</CardTitle>
                            <CardDescription>
                              {mentor.role} at {mentor.company}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-primary text-primary" />
                          {mentor.rating}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground mb-2">{mentor.bio}</p>
                      <p className="text-xs text-muted-foreground mb-3">{mentor.location}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {mentor.expertise.map((exp) => (
                          <Badge key={exp} variant="outline" className="text-xs">
                            {exp}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm font-medium">{mentor.hourlyRate}</div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" /> Message
                      </Button>
                      <Button size="sm">
                        <Calendar className="mr-2 h-4 w-4" /> Book Session
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="my-mentors" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>My Mentors</CardTitle>
              <CardDescription>Mentors you've hired</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <h3 className="text-lg font-medium mb-2">No Mentors Yet</h3>
                <p className="text-muted-foreground mb-4">You haven't hired any mentors yet.</p>
                <Button>
                  <Briefcase className="mr-2 h-4 w-4" /> Find Your First Mentor
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <h3 className="text-lg font-medium mb-2">No Upcoming Sessions</h3>
                <p className="text-muted-foreground">You don't have any scheduled mentorship sessions.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
