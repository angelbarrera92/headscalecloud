"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { useState } from "react"
import { InterestDialog } from "@/components/interest-dialog"

export default function PricingPage() {
  const [showInterestDialog, setShowInterestDialog] = useState(false)
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [devices, setDevices] = useState("1-10")
  const [submitted, setSubmitted] = useState(false)

  const handleEarlyAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send to backend/API
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            Simple, predictable pricing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            No per-device fees. No surprise charges. Just unlimited managed mesh networking at a fair price.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Solo Plan */}
            <Card className="p-8 bg-card border-border/40 relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Solo</h3>
                <p className="text-sm text-muted-foreground">Perfect for individuals and small teams</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold">€5</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  or <span className="font-semibold text-foreground">€50/year</span> (2 months free)
                </div>
              </div>

              <Button className="w-full mb-8" size="lg" onClick={() => setShowInterestDialog(true)}>
                Join Waitlist
              </Button>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Unlimited devices</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Dedicated managed Headscale instance</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Headplane management UI</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Full API access</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">ACL policies</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Email support</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">99.9% uptime SLA</span>
                </div>
              </div>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 bg-card border-border/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                Custom
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-sm text-muted-foreground">For teams with high-scale requirements</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold">Custom</span>
                </div>
                <div className="text-sm text-muted-foreground">Tailored to your infrastructure needs</div>
              </div>

              <Button
                className="w-full mb-8 bg-transparent"
                size="lg"
                variant="outline"
                onClick={() => setShowInterestDialog(true)}
              >
                Contact Us
              </Button>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Everything in Solo, plus:</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Higher rate limits</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Dedicated infrastructure</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Priority support</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Custom SLA options</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">On-premise deployment options</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Dedicated account manager</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Early Adopter Banner */}
          <div className="mt-12">
            <Card className="p-8 bg-accent/10 border-accent/20">
              <div className="max-w-2xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <h3 className="text-xl font-bold">Early Adopter Discount</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  Be one of the <span className="font-bold text-foreground">first 5 customers</span> and get{" "}
                  <span className="font-bold text-foreground">25% off for 6 months</span>.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  That's just €3.75/month or €37.50/year for your first 6 months. Lock in this exclusive rate before
                  spots run out.
                </p>
                <Button size="lg" asChild onClick={() => setShowInterestDialog(true)}>
                  <a href="#early-access">Claim Your Discount</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">What counts as a device?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A device is any endpoint connected to your network - laptops, phones, servers, IoT devices, etc.
                  Unlike Tailscale, we don't have device limits on any plan.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I migrate from Tailscale?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes! Point your existing Tailscale clients to our control server and they'll work immediately.
                  Migration takes less than 5 minutes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What's included in the free trial?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full access to the Solo plan for 14 days. No credit card required. If you sign up as an early adopter,
                  you'll get the discount when you convert to paid.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. If you're not satisfied within the first 30 days, we'll refund you in full, no questions asked.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">When should I contact you for Enterprise?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you're hitting rate limits, need dedicated infrastructure, require on-premise deployment, or want a
                  custom SLA, reach out to us and we'll design a plan for your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Form */}
      <section id="early-access" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border/40">
            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-mono bg-accent/10 rounded-full border border-accent/20">
                    <Sparkles className="h-3 w-3 text-accent" />
                    <span className="text-accent">First 5 Customers • 25% Off for 6 Months</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Register Your Interest</h2>
                  <p className="text-muted-foreground">
                    Help us validate the demand. Be among the first to know when we launch and lock in your exclusive
                    discount.
                  </p>
                </div>

                <form onSubmit={handleEarlyAccessSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-background border border-border/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 bg-background border border-border/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="devices" className="block text-sm font-medium mb-2">
                      How many devices do you plan to connect?
                    </label>
                    <select
                      id="devices"
                      name="devices"
                      value={devices}
                      onChange={(e) => setDevices(e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-border/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <option value="1-10">1-10 devices</option>
                      <option value="11-50">11-50 devices</option>
                      <option value="51-100">51-100 devices</option>
                      <option value="100+">100+ devices</option>
                    </select>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Register Interest
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll email you when we launch. Your discount will be automatically applied.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-muted-foreground">
                  We've registered your interest. We'll notify you when we launch with your exclusive 25% discount.
                </p>
              </div>
            )}
          </Card>
        </div>
      </section>

      <SiteFooter />
      <InterestDialog open={showInterestDialog} onOpenChange={setShowInterestDialog} />
    </div>
  )
}
