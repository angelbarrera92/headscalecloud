"use client"

import { Button } from "@/components/ui/button"
import { Server } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { InterestDialog } from "./interest-dialog"

export function SiteHeader() {
  const [showInterestDialog, setShowInterestDialog] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="border-b border-border/40">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Server className="h-6 w-6 text-accent" />
            <span className="text-xl font-semibold">HeadscaleCloud</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/features"
              className={`text-sm transition-colors ${
                pathname === "/features" ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`text-sm transition-colors ${
                pathname === "/pricing" ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className={`text-sm transition-colors ${
                pathname === "/docs" ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Docs
            </Link>
            <Button variant="outline" size="sm" onClick={() => setShowInterestDialog(true)}>
              Sign In
            </Button>
            <Button size="sm" onClick={() => setShowInterestDialog(true)}>
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      <InterestDialog open={showInterestDialog} onOpenChange={setShowInterestDialog} />
    </>
  )
}
