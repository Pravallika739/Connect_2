"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Users, MessageSquare, UserPlus, Star } from "lucide-react"

type UserProfile = {
  id: number
  name: string
  role: string
  skills: string[]
  location: string
  bio: string
  avatar: string
  match: number
}

export default function TeamBuildingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const userProfiles: UserProfile[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      location: "San Francisco, CA",
      bio: "Passionate developer with 5 years of experience building web applications.",
      avatar: "/placeholder.svg?height=40&width=40",
      match: 95,
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "UX/UI Designer",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      location: "New York, NY",
      bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
      avatar: "/placeholder.svg?height=40&width=40",
      match: 88,
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      skills: ["Product Strategy", "Agile", "Market Research", "Data Analysis"],
      location: "Austin, TX",
      bio: "Product manager with a background in tech and business development.",
      avatar: "/placeholder.svg?height=40&width=40",
      match: 82,
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Marketing Specialist",
      skills: ["Digital Marketing", "SEO", "Content Strategy", "Social Media"],
      location: "Chicago, IL",
      bio: "Marketing professional specializing in growth strategies for startups.",
      avatar: "/placeholder.svg?height=40&width=40",
      match: 79,
    },
  ]

  const filteredProfiles = userProfiles.filter((profile) => {
    const matchesSearch =
      searchQuery === "" ||
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesSkills = selectedSkills.length === 0 || selectedSkills.every((skill) => profile.skills.includes(skill))

    return matchesSearch && matchesSkills
  })

  const handleSkillClick = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    } else {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Building</h1>
          <p className="text-muted-foreground">Find the perfect team members for your startup.</p>
        </div>
        <Button>
          <Users className="mr-2 h-4 w-4" /> Create Team
        </Button>
      </div>

      <Tabs defaultValue="find" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="find">Find Team Members</TabsTrigger>
          <TabsTrigger value="teams">My Teams</TabsTrigger>
          <TabsTrigger value="invites">Invitations</TabsTrigger>
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
                        placeholder="Search by name, role, or skill"
                        className="pl-8"
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
                          variant={selectedSkills.includes(skill) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => handleSkillClick(skill)}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
              <h2 className="text-xl font-semibold mb-4">AI-Matched Team Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProfiles.map((profile) => (
                  <Card key={profile.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={profile.avatar} alt={profile.name} />
                            <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{profile.name}</CardTitle>
                            <CardDescription>{profile.role}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-primary text-primary" />
                          {profile.match}% Match
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground mb-2">{profile.bio}</p>
                      <p className="text-xs text-muted-foreground mb-3">{profile.location}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {profile.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" /> Message
                      </Button>
                      <Button size="sm">
                        <UserPlus className="mr-2 h-4 w-4" /> Invite
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="teams" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="col-span-full">
              <CardHeader>
                <CardTitle>My Teams</CardTitle>
                <CardDescription>Teams you've created or joined</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <h3 className="text-lg font-medium mb-2">No Teams Yet</h3>
                  <p className="text-muted-foreground mb-4">You haven't created or joined any teams yet.</p>
                  <Button>
                    <Users className="mr-2 h-4 w-4" /> Create Your First Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="invites" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Invitations</CardTitle>
              <CardDescription>Invitations to join teams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <h3 className="text-lg font-medium mb-2">No Invitations</h3>
                <p className="text-muted-foreground">You don't have any pending team invitations.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
