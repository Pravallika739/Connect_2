"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, X, Minimize2, Maximize2, Lightbulb, Users, TrendingUp, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Types for messages and users
type MessageType = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  options?: string[]
}

type UserMatch = {
  id: string
  name: string
  role: string
  skills: string[]
  match: number
  avatar?: string
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "welcome",
      content: "👋 Hi there! I'm your AI startup assistant. How can I help you today?",
      sender: "bot" as "bot",
      timestamp: new Date(),
      options: ["Analyze my startup idea", "Find team members", "Get market insights", "Identify target customers"],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [matchedUsers, setMatchedUsers] = useState<UserMatch[]>([])
  const [showMatches, setShowMatches] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Auto-open the chatbot after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Handle sending a message
  const handleSendMessage = (content: string = inputValue) => {
    if (!content.trim()) return

    // Add user message
    const newUserMessage: MessageType = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newUserMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI processing
    setTimeout(() => {
      generateAIResponse(content)
      setIsTyping(false)
    }, 1500)
  }

  // Generate AI response based on user input
  const generateAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase()
    let response: MessageType

    // Check for different types of queries
    if (
      input.includes("idea") ||
      input.includes("startup") ||
      input.includes("business") ||
      input.includes("analyze")
    ) {
      response = generateIdeaAnalysis(userInput)

      // Clear any previous matches
      setMatchedUsers([])
      setShowMatches(false)
    } else if (
      input.includes("team") ||
      input.includes("member") ||
      input.includes("partner") ||
      input.includes("find")
    ) {
      response = { ...generateTeamSuggestion(), sender: "bot" as "bot" }

      // Generate matched users
      const users = generateMatchedUsers(userInput)
      setMatchedUsers(users)
      setShowMatches(true)
    } else if (input.includes("market") || input.includes("industry") || input.includes("trend")) {
      response = {
        id: Date.now().toString(),
        content:
          "Based on current market trends, I recommend focusing on sustainability and AI integration. The market for eco-friendly solutions is growing at 14% annually, while AI-enhanced products are seeing a 22% growth rate.",
        sender: "bot",
        timestamp: new Date(),
        options: ["Tell me more about sustainability trends", "How can I integrate AI?", "Who are the market leaders?"],
      }
    } else {
      response = {
        id: Date.now().toString(),
        content:
          "I'd be happy to help with your startup journey! Would you like me to analyze your idea, find potential team members, or provide market insights?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Analyze my startup idea", "Find team members", "Get market insights"],
      }
    }

    setMessages((prev) => [...prev, response])
  }

  // Generate idea analysis response
  const generateIdeaAnalysis = (idea: string) => {
    // Extract potential domain from the idea
    const domains = [
      { name: "technology", keywords: ["tech", "software", "app", "platform", "digital", "online"] },
      { name: "healthcare", keywords: ["health", "medical", "wellness", "fitness", "care"] },
      { name: "finance", keywords: ["finance", "fintech", "banking", "payment", "money", "invest"] },
      { name: "education", keywords: ["education", "learning", "teach", "student", "school", "course"] },
      { name: "sustainability", keywords: ["sustainable", "green", "eco", "environment", "renewable"] },
    ]

    let detectedDomain = "general"
    for (const domain of domains) {
      if (domain.keywords.some((keyword) => idea.toLowerCase().includes(keyword))) {
        detectedDomain = domain.name
        break
      }
    }

    // Generate domain-specific analysis
    let analysis = ""
    let options: string[] = []

    switch (detectedDomain) {
      case "technology":
        analysis =
          "Your tech startup idea has potential! Consider these points:\n\n" +
          "• Market Validation: Focus on solving a specific pain point rather than building a feature.\n" +
          "• Differentiation: Identify your unique value proposition compared to existing solutions.\n" +
          "• Business Model: Consider subscription-based or freemium models for recurring revenue.\n" +
          "• MVP Approach: Start with core functionality that delivers immediate value."
        options = ["How do I validate my tech idea?", "Find technical co-founders", "Tech startup funding options"]
        break
      case "healthcare":
        analysis =
          "Your healthcare startup idea is promising! Consider these points:\n\n" +
          "• Regulatory Landscape: Research healthcare regulations and compliance requirements.\n" +
          "• User Privacy: Ensure strong data protection measures for sensitive health information.\n" +
          "• Distribution Channels: Explore partnerships with existing healthcare providers.\n" +
          "• Evidence-Based Approach: Collect data to demonstrate efficacy and outcomes."
        options = ["Healthcare regulatory considerations", "Find medical experts", "Healthcare funding options"]
        break
      case "finance":
        analysis =
          "Your fintech startup idea has potential! Consider these points:\n\n" +
          "• Regulatory Compliance: Research financial regulations in your target markets.\n" +
          "• Security Measures: Prioritize robust security to build user trust.\n" +
          "• Market Entry: Consider partnering with established financial institutions.\n" +
          "• User Experience: Focus on simplifying complex financial processes."
        options = ["Fintech regulatory considerations", "Find finance experts", "Fintech funding landscape"]
        break
      default:
        analysis =
          "Your startup idea has potential! Here are some general considerations:\n\n" +
          "• Problem-Solution Fit: Ensure your solution addresses a real and significant problem.\n" +
          "• Target Market: Define your ideal customer and estimate market size.\n" +
          "• Revenue Model: Clarify how your business will generate income.\n" +
          "• Competitive Landscape: Identify direct and indirect competitors."
        options = ["How do I validate my idea?", "Find potential co-founders", "Startup funding options"]
    }

    return {
      id: Date.now().toString(),
      content: analysis,
      sender: "bot" as "bot",
      timestamp: new Date(),
      options,
    }
  }

  // Generate team suggestion response
  const generateTeamSuggestion = () => {
    return {
      id: Date.now().toString(),
      content:
        "Based on your startup idea, I've identified potential team members with complementary skills. Here are some matches that could help bring your vision to life:",
      sender: "bot",
      timestamp: new Date(),
      options: ["Show me technical co-founders", "Show me business experts", "Show me designers"],
    }
  }

  // Generate matched users based on idea
  const generateMatchedUsers = (idea: string): UserMatch[] => {
    // This would ideally come from a database or API
    // For now, we'll generate some sample matches
    return [
      {
        id: "user1",
        name: "Alex Johnson",
        role: "Full Stack Developer",
        skills: ["React", "Node.js", "TypeScript", "MongoDB"],
        match: 95,
      },
      {
        id: "user2",
        name: "Sarah Williams",
        role: "UX/UI Designer",
        skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
        match: 88,
      },
      {
        id: "user3",
        name: "Michael Chen",
        role: "Product Manager",
        skills: ["Product Strategy", "Agile", "Market Research", "Data Analysis"],
        match: 82,
      },
      {
        id: "user4",
        name: "Priya Sharma",
        role: "Marketing Specialist",
        skills: ["Growth Marketing", "SEO", "Content Strategy", "Social Media"],
        match: 79,
      },
    ]
  }

  // Handle option click
  const handleOptionClick = (option: string) => {
    handleSendMessage(option)
  }

  return (
    <>
      {/* Chatbot toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="rounded-full w-16 h-16 shadow-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <MessageSquare className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              height: isMinimized ? "auto" : "600px",
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed ${isMinimized ? "bottom-6 right-6 w-auto" : "bottom-6 right-6 w-[380px] md:w-[450px]"} z-50`}
          >
            <Card className="border-2 shadow-xl overflow-hidden">
              {/* Chatbot header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-white">
                  <Zap className="h-5 w-5" />
                  <h3 className="font-semibold">AI Startup Assistant</h3>
                </div>
                <div className="flex items-center gap-1">
                  {!isMinimized ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMinimized(true)}
                      className="h-8 w-8 text-white hover:bg-white/20"
                    >
                      <Minimize2 className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMinimized(false)}
                      className="h-8 w-8 text-white hover:bg-white/20"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 text-white hover:bg-white/20"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Messages container */}
                  <div className="p-4 h-[400px] overflow-y-auto bg-muted/30">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-4 ${message.sender === "user" ? "flex justify-end" : "flex justify-start"}`}
                      >
                        {message.sender === "bot" && (
                          <Avatar className="h-8 w-8 mr-2 bg-primary">
                            <div className="text-xs font-bold">AI</div>
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <div className="whitespace-pre-line text-sm">{message.content}</div>

                          {/* Option buttons */}
                          {message.options && message.options.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {message.options.map((option, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleOptionClick(option)}
                                  className="text-xs bg-background hover:bg-primary/10"
                                >
                                  {option}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Typing indicator */}
                    {isTyping && (
                      <div className="flex justify-start mb-4">
                        <Avatar className="h-8 w-8 mr-2 bg-primary">
                          <div className="text-xs font-bold">AI</div>
                        </Avatar>
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div
                              className="h-2 w-2 rounded-full bg-primary/60 animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="h-2 w-2 rounded-full bg-primary/60 animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="h-2 w-2 rounded-full bg-primary/60 animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Matched users */}
                    {showMatches && matchedUsers.length > 0 && (
                      <div className="mb-4">
                        <div className="text-sm font-medium mb-2">Matched Team Members:</div>
                        <div className="space-y-2">
                          {matchedUsers.map((user) => (
                            <div key={user.id} className="bg-background rounded-lg p-3 border flex items-start gap-3">
                              <Avatar className="h-10 w-10 bg-primary/20">
                                <div className="text-xs font-bold">{user.name.charAt(0)}</div>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <div className="font-medium text-sm">{user.name}</div>
                                  <Badge variant="secondary" className="ml-2">
                                    {user.match}% Match
                                  </Badge>
                                </div>
                                <div className="text-xs text-muted-foreground">{user.role}</div>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {user.skills.map((skill, i) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input area */}
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        className="min-h-[40px] resize-none"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                      />
                      <Button
                        onClick={() => handleSendMessage()}
                        size="icon"
                        className="h-10 w-10 rounded-full bg-primary"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Lightbulb className="h-4 w-4 mr-1" />
                          <span className="text-xs">Ideas</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="text-xs">Team</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span className="text-xs">Market</span>
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">AI-powered</div>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
