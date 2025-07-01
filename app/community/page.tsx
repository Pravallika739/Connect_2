"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, ThumbsUp, Users, Plus, Search } from "lucide-react"

type Post = {
  id: number
  author: {
    name: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  comments: number
  tags: string[]
}

type Community = {
  id: number
  name: string
  description: string
  members: number
  tags: string[]
  avatar: string
}

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const posts: Post[] = [
    {
      id: 1,
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "I'm working on a fintech startup that helps small businesses manage their cash flow. Looking for feedback on our MVP!",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      tags: ["Fintech", "MVP", "Feedback"],
    },
    {
      id: 2,
      author: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Just secured our first round of seed funding! Happy to share insights on our pitch deck and fundraising strategy.",
      timestamp: "5 hours ago",
      likes: 56,
      comments: 12,
      tags: ["Funding", "Pitch Deck", "Seed Round"],
    },
    {
      id: 3,
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Looking for a technical co-founder for my healthtech startup. We're building an AI-powered platform for personalized nutrition.",
      timestamp: "1 day ago",
      likes: 18,
      comments: 15,
      tags: ["Healthtech", "Co-founder", "AI"],
    },
  ]

  const communities: Community[] = [
    {
      id: 1,
      name: "Fintech Founders",
      description: "A community for founders building financial technology startups.",
      members: 1250,
      tags: ["Fintech", "Banking", "Payments"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "AI Innovators",
      description: "Discuss artificial intelligence applications and innovations.",
      members: 2340,
      tags: ["AI", "Machine Learning", "Data Science"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "SaaS Entrepreneurs",
      description: "For founders building software-as-a-service businesses.",
      members: 1870,
      tags: ["SaaS", "B2B", "Subscription"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "E-commerce Growth",
      description: "Strategies and tactics for growing e-commerce businesses.",
      members: 1560,
      tags: ["E-commerce", "DTC", "Retail"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const filteredPosts = posts.filter(
    (post) =>
      searchQuery === "" ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const filteredCommunities = communities.filter(
    (community) =>
      searchQuery === "" ||
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community</h1>
          <p className="text-muted-foreground">Connect with fellow entrepreneurs and share ideas.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Post
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search posts and communities"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="feed" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="communities">Communities</TabsTrigger>
          <TabsTrigger value="my-posts">My Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Create Post</CardTitle>
                  <CardDescription>Share your ideas or ask for feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea placeholder="What's on your mind?" className="min-h-[100px]" />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Add Tags</Button>
                  <Button>Post</Button>
                </CardFooter>
              </Card>

              {filteredPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{post.author.name}</CardTitle>
                        <CardDescription>{post.timestamp}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{post.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <ThumbsUp className="h-4 w-4" /> {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <MessageSquare className="h-4 w-4" /> {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm">
                      Share
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trending Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="cursor-pointer">
                      #Funding
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer">
                      #AI
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer">
                      #ProductMarketFit
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer">
                      #RemoteWork
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer">
                      #SaaS
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer">
                      #Fintech
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer">
                      #Pitch
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer">
                      #Growth
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Suggested Communities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {communities.slice(0, 3).map((community) => (
                    <div key={community.id} className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={community.avatar} alt={community.name} />
                        <AvatarFallback>{community.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{community.name}</div>
                        <div className="text-xs text-muted-foreground">{community.members} members</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Join
                      </Button>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    View All
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="communities" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommunities.map((community) => (
              <Card key={community.id}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={community.avatar} alt={community.name} />
                      <AvatarFallback>{community.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{community.name}</CardTitle>
                      <CardDescription>{community.members} members</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{community.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {community.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Users className="mr-2 h-4 w-4" /> Join Community
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-posts" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>My Posts</CardTitle>
              <CardDescription>Posts you've created</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <h3 className="text-lg font-medium mb-2">No Posts Yet</h3>
                <p className="text-muted-foreground mb-4">You haven't created any posts yet.</p>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Create Your First Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
