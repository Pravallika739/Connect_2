import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="font-bold text-xl flex items-center mb-4">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              <span className="animated-gradient-text">Connect</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The all-in-one platform for entrepreneurs to develop, collaborate, fund, and launch their startups.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/idea-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Idea Development
                </Link>
              </li>
              <li>
                <Link href="/team-building" className="text-muted-foreground hover:text-primary transition-colors">
                  Team Building
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-muted-foreground hover:text-primary transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="/funding" className="text-muted-foreground hover:text-primary transition-colors">
                  Funding
                </Link>
              </li>
              <li>
                <Link href="/freelancers" className="text-muted-foreground hover:text-primary transition-colors">
                  Freelancers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-connect" className="text-muted-foreground hover:text-primary transition-colors">
                  Why Connect
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Connect. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
