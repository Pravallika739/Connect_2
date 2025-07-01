"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  BarChart,
  PieChart,
  LineChart,
  Bar,
  Pie,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"
import {
  AlertTriangle,
  TrendingDown,
  Users,
  DollarSign,
  Lightbulb,
  Briefcase,
  Target,
  CheckCircle,
  Code,
} from "lucide-react"

// Data for startup failure reasons chart
const failureReasonsData = [
  { name: "No Market Need", percentage: 42 },
  { name: "Ran Out of Cash", percentage: 29 },
  { name: "Wrong Team", percentage: 23 },
  { name: "Outcompeted", percentage: 19 },
  { name: "Pricing Issues", percentage: 18 },
  { name: "Poor Product", percentage: 17 },
  { name: "Business Model", percentage: 17 },
  { name: "Poor Marketing", percentage: 14 },
  { name: "Ignored Customers", percentage: 14 },
  { name: "Product Mistimed", percentage: 13 },
]

// Data for startup success rate over time
const successRateData = [
  { year: "Year 1", withConnect: 75, average: 25 },
  { year: "Year 2", withConnect: 62, average: 20 },
  { year: "Year 3", withConnect: 55, average: 15 },
  { year: "Year 4", withConnect: 48, average: 10 },
  { year: "Year 5", withConnect: 42, average: 8 },
]

// Data for funding success rate
const fundingSuccessData = [
  { name: "With Connect", value: 68 },
  { name: "Without Connect", value: 32 },
]

// Data for team formation success
const teamFormationData = [
  { name: "Traditional", value: 35 },
  { name: "With Connect", value: 65 },
]

export default function WhyConnectPage() {
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
                  Why <span className="animated-gradient-text">Connect</span> Makes the Difference
                </h1>
                <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                  Understanding why startups fail and how our platform helps entrepreneurs overcome these challenges
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="inline-block rounded-full bg-destructive/10 px-3 py-1 text-sm text-destructive">
                  The Challenge
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">Why Do 90% of Startups Fail?</h2>
                <p className="text-muted-foreground">
                  Despite the excitement and potential of new ventures, the harsh reality is that 9 out of 10 startups
                  will fail. Understanding the key reasons behind these failures is the first step to avoiding them.
                </p>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span>Most startups fail within the first 5 years</span>
                </div>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <TrendingDown className="h-5 w-5 text-destructive" />
                  <span>The failure rate increases with each passing year</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Top Reasons Startups Fail</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={failureReasonsData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 50]} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                    <Bar dataKey="percentage" fill="hsl(var(--destructive))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Source: CB Insights, Startup Failure Post-Mortems
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  The Solution
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">How Connect Addresses These Challenges</h2>
                <p className="max-w-[800px] mx-auto text-muted-foreground">
                  Our all-in-one platform is designed to tackle the most common startup failure points with integrated
                  tools and resources
                </p>
              </motion.div>
            </div>

            <Tabs defaultValue="market" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="market">Market Need</TabsTrigger>
                <TabsTrigger value="team">Team Building</TabsTrigger>
                <TabsTrigger value="funding">Funding</TabsTrigger>
                <TabsTrigger value="product">Product Development</TabsTrigger>
                <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
              </TabsList>

              <TabsContent value="market" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Market Validation
                      </CardTitle>
                      <CardDescription>42% of startups fail due to lack of market need</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>Connect helps you validate your idea before investing significant time and resources:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>AI-powered market analysis to identify potential demand</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Community feedback from potential users and industry experts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Competitor analysis and market gap identification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Structured frameworks for customer discovery interviews</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Success Rate Comparison</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={successRateData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis label={{ value: "Success Rate (%)", angle: -90, position: "insideLeft" }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="withConnect" stroke="hsl(var(--primary))" strokeWidth={2} />
                        <Line type="monotone" dataKey="average" stroke="hsl(var(--muted-foreground))" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                      Startups using Connect have a significantly higher success rate
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="team" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Team Formation
                      </CardTitle>
                      <CardDescription>23% of startups fail due to having the wrong team</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>Connect helps you build the right team with complementary skills:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>AI-powered co-founder and team member matching</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Skill gap analysis for your startup idea</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Personality and work style compatibility assessment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Equity and role planning tools for founding teams</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Team Formation Success Rate</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={teamFormationData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {teamFormationData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={index === 1 ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                            />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, "Success Rate"]} />
                      </PieChart>
                    </ResponsiveContainer>
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                      Teams formed through Connect have a 65% higher chance of staying together
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="funding" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        Funding Access
                      </CardTitle>
                      <CardDescription>29% of startups fail because they run out of cash</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>Connect helps you secure the funding you need to grow:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Direct connections to angel investors and VCs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Pitch deck review and optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Financial modeling and valuation tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Fundraising strategy and timeline planning</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Funding Success Rate</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={fundingSuccessData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {fundingSuccessData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={index === 0 ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                            />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, "Success Rate"]} />
                      </PieChart>
                    </ResponsiveContainer>
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                      Startups using Connect have a 68% higher chance of securing funding
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="product" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        Product Development
                      </CardTitle>
                      <CardDescription>17% of startups fail due to poor product-market fit</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>Connect helps you build the right product for your market:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Access to skilled freelancers for MVP development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Product roadmap and feature prioritization tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>User testing and feedback collection frameworks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Iterative development methodology guidance</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Product Development Timeline</h3>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary text-primary-foreground">
                            Traditional
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block">12+ months</span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-muted">
                        <div
                          style={{ width: "100%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-muted-foreground"
                        ></div>
                      </div>
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary text-primary-foreground">
                            With Connect
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block">4-6 months</span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-muted">
                        <div
                          style={{ width: "40%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                      Connect helps startups reduce time-to-market by up to 60%
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mentorship" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        Expert Mentorship
                      </CardTitle>
                      <CardDescription>Lack of guidance contributes to multiple failure points</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>Connect provides access to experienced mentors who've been there before:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Industry-specific mentor matching</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Regular 1-on-1 mentorship sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Group workshops and problem-solving sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Access to a network of successful founders</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Impact of Mentorship</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Survival Rate</span>
                          <span className="text-sm font-medium">+70%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Revenue Growth</span>
                          <span className="text-sm font-medium">+3.5x</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Funding Success</span>
                          <span className="text-sm font-medium">+65%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6 text-center">
                      Startups with mentors significantly outperform those without guidance
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter">The Connect Advantage</h2>
                <p className="max-w-[700px] text-muted-foreground">
                  Our all-in-one platform provides everything you need to take your startup from idea to success
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Idea Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Validate and refine your startup concept with AI tools and community feedback to ensure market
                      fit.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Team Formation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Find the perfect co-founders and team members with complementary skills and aligned vision.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Expert Mentorship</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Get guidance from experienced entrepreneurs who have successfully navigated the startup journey.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Funding Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Connect with investors looking for innovative startups and get help preparing your pitch.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="mt-16 text-center">
              <Button
                asChild
                size="lg"
                className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Link href="/signup">Start Your Startup Journey Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
