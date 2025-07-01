"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, Building, Search, Filter, MessageSquare, Star, Briefcase } from "lucide-react"

type Investor = {
  id: number
  name: string
  company: string
  domains: string[]
  investmentRange: string
  location: string
  bio: string
  avatar: string
  match: number
}

export default function FundingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDomain, setSelectedDomain] = useState("")

  const investors: Investor[] = [
    {
      id: 1,
      name: "Robert Chen",
      company: "Horizon Ventures",
      domains: ["Technology", "AI", "SaaS"],
      investmentRange: "$100K - $500K",
      location: "San Francisco, CA",
      bio: "Early-stage investor focused on innovative tech startups with global potential.",
      avatar: "/placeholder.svg?height=40&width=40",
      match: 94,
    },
    {
      id: 2,
      name: "Lisa Thompson",
      company: "Green Capital",
      domains: ["Sustainability", "CleanTech", "FoodTech"],
      investmentRange: "$250K - $1M",
      location: "Boston, MA",
      bio: "Impact investor supporting startups addressing environmental challenges.",
      avatar: "/placeholder.svg?height=40&width=40",
      match: 87,
    },
    {
      id: 3,
      name: "David Wilson",
      company: "Nexus Partners",
      domains: ["FinTech", "Blockchain", "InsurTech"],
      investmentRange: "$500K - $2M",
      location: "New York, NY",
      bio: "Experienced investor with a background in financial services and technology.",
      avatar: "/placeholder.svg?height=40&width=40",
      match: 82,
    },
    {
      id: 4,
      name: "Sophia Martinez",
      company: "Elevate Fund",
      domains: ["Healthcare", "BioTech", "MedTech"],
      investmentRange: "$1M - $5M",
      location: "Austin, TX",
      bio: "Healthcare-focused investor supporting innovative medical solutions.",
      avatar: "/placeholder.svg?height=40&width=40",
      match: 78,
    },
  ]

  const filteredInvestors = investors.filter((investor) => {
    const matchesSearch =
      searchQuery === "" ||
      investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.domains.some((domain) => domain.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesDomain = selectedDomain === "" || investor.domains.includes(selectedDomain)

    return matchesSearch && matchesDomain
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Funding Zone</h1>
          <p className="text-muted-foreground">Connect with investors and secure funding for your startup.</p>
        </div>
        <Button>
          <DollarSign className="mr-2 h-4 w-4" /> Create Funding Request
        </Button>
      </div>

      <Tabs defaultValue="investors" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="investors">Find Investors</TabsTrigger>
          <TabsTrigger value="requests">My Funding Requests</TabsTrigger>
          <TabsTrigger value="interests">Investor Interests</TabsTrigger>
        </TabsList>

        <TabsContent value="investors" className="mt-6">
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
                        placeholder="Search investors"
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Domain</label>
                    <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                      <SelectTrigger>
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
                      <SelectTrigger>
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
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Filter className="mr-2 h-4 w-4" /> More Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold mb-4">AI-Matched Investors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredInvestors.map((investor) => (
                  <Card key={investor.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={investor.avatar} alt={investor.name} />
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
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground mb-2">{investor.bio}</p>
                      <p className="text-xs text-muted-foreground mb-3">{investor.location}</p>
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
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" /> Message
                      </Button>
                      <Button size="sm">
                        <Briefcase className="mr-2 h-4 w-4" /> Pitch
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="requests" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>My Funding Requests</CardTitle>
              <CardDescription>Track and manage your funding requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <DollarSign className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <h3 className="text-lg font-medium mb-2">No Funding Requests</h3>
                <p className="text-muted-foreground mb-4">You haven't created any funding requests yet.</p>
                <Button>
                  <DollarSign className="mr-2 h-4 w-4" /> Create Your First Funding Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interests" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Investor Interests</CardTitle>
              <CardDescription>Investors interested in your startup</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Star className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <h3 className="text-lg font-medium mb-2">No Investor Interests</h3>
                <p className="text-muted-foreground">No investors have shown interest in your startup yet.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
