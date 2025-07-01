"use client"

import React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        scrolled ? "bg-background/95 shadow-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl flex items-center">
            <span className="animated-gradient-text">Connect</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 hover:text-primary transition-colors">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                          href="/idea-development"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-primary-foreground">
                            AI-Powered Idea Development
                          </div>
                          <p className="text-sm leading-tight text-primary-foreground/90">
                            Refine your startup concept with our advanced AI tools
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/team-building" title="Team Building">
                      Connect with like-minded individuals
                    </ListItem>
                    <ListItem href="/mentorship" title="Mentorship">
                      Get guidance from industry experts
                    </ListItem>
                    <ListItem href="/funding" title="Funding">
                      Present your ideas to potential investors
                    </ListItem>
                    <ListItem href="/freelancers" title="Freelancers">
                      Hire skilled professionals to build your product
                    </ListItem>
                    <ListItem href="/why-connect" title="Why Connect">
                      Learn why startups succeed with our platform
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/explore" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-primary/10 hover:text-primary transition-colors",
                    )}
                  >
                    Explore
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-primary/10 hover:text-primary transition-colors",
                    )}
                  >
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="outline" asChild className="button-hover border-2">
              <Link href="/login">Log In</Link>
            </Button>
            <Button
              asChild
              className="button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-all duration-300 hover:bg-primary/10 hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t"
        >
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/freelancers"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Freelancers
            </Link>
            <Link
              href="/why-connect"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Connect
            </Link>
            <Link
              href="/explore"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/idea-development"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Idea Development
            </Link>
            <Link
              href="/team-building"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team Building
            </Link>
            <Link
              href="/mentorship"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mentorship
            </Link>
            <Link
              href="/funding"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Funding
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" asChild className="w-full button-hover border-2">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button
                asChild
                className="w-full button-hover bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
