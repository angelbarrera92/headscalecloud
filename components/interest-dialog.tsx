"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface InterestDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function InterestDialog({ open, onOpenChange }: InterestDialogProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send to backend/API
    setSubmitted(true)
    setTimeout(() => {
      onOpenChange(false)
      setSubmitted(false)
      setEmail("")
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-xs font-mono bg-accent/10 rounded-full border border-accent/20 w-fit">
                <Sparkles className="h-3 w-3 text-accent" />
                <span className="text-accent">Early Access</span>
              </div>
              <DialogTitle className="text-2xl">Coming Soon</DialogTitle>
              <DialogDescription className="text-base leading-relaxed pt-2">
                We're validating interest before launch. Register now to get notified when we go live and receive{" "}
                <span className="font-semibold text-foreground">25% off for 6 months</span>.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div>
                <label htmlFor="interest-email" className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="interest-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-background border border-border/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Notify Me at Launch
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                No spam. Just one email when we launch with your discount code.
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <DialogTitle className="text-2xl mb-2">You're on the list!</DialogTitle>
            <DialogDescription className="text-base">
              We'll email you when we launch with your exclusive discount.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
