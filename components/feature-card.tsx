"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-2 hover:border-primary/20 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="pb-2 relative">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {icon}
            </div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
