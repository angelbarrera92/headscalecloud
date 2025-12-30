"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Code2, Server, Shield, Zap, GitBranch, Globe } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useState } from "react"
import { InterestDialog } from "@/components/interest-dialog"

export default function LandingPage() {
  const [showInterestDialog, setShowInterestDialog] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono bg-secondary/50 rounded-full border border-border/40">
            <Code2 className="h-3 w-3 text-accent" />
            <span className="text-muted-foreground">Powered by Headscale + Headplane</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            Tailscale without the limits
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            100% compatible mesh VPN network. We host the control plane for you—unlimited devices, zero maintenance.
            Built for engineers who want freedom, not infrastructure chores.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Button size="lg" className="gap-2" onClick={() => setShowInterestDialog(true)}>
              Join Waitlist
              <span className="text-xs opacity-75">• First 5 get 25% off</span>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/pricing">View Pricing</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>5 min setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>Drop-in replacement</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>No device limits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Protocol compatible</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Unlimited devices</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{"<"}5min</div>
                <div className="text-sm text-muted-foreground">Migration time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Why HeadscaleCloud?</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              The same Tailscale experience you love, without artificial restrictions. We host and manage Headscale so
              you don't have to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border/40">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">1:1 Tailscale Compatibility</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Same protocol, same clients, same experience. Point your Tailscale client to our control plane and
                    it just works. No code changes, no client modifications.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/40">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">No Device Limits</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hit Tailscale's 100 device limit? We don't have one. Connect your entire infrastructure without
                    worrying about arbitrary caps or per-device pricing.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/40">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Server className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">We Host It For You</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your dedicated Headscale control plane, fully managed by us. All the benefits of self-hosting
                    without the operational burden. We handle updates, backups, and monitoring.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/40">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GitBranch className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Open Source, Managed</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built on open-source Headscale and Headplane—fully auditable. We run everything for you, but you
                    maintain full control and ownership of your network.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Drop-in replacement</h2>
              <p className="text-lg text-muted-foreground">Migrate from Tailscale in minutes, not days</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-mono text-sm font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Sign up and get your control server URL</h3>
                  <p className="text-muted-foreground">We provision your dedicated Headscale instance in seconds.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-mono text-sm font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Point your Tailscale client to our server</h3>
                  <p className="text-muted-foreground mb-3">One command to switch control planes:</p>
                  <div className="bg-background border border-border/40 rounded-lg p-4 font-mono text-sm">
                    <code className="text-accent">
                      tailscale up --login-server=https://your-instance.headscale.cloud
                    </code>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-mono text-sm font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Manage with Headplane UI</h3>
                  <p className="text-muted-foreground">
                    Beautiful web interface for device management, ACLs, and monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border/40">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Open Source Stack</h3>
                <p className="text-muted-foreground">
                  We don't reinvent the wheel. Built on proven open-source technology.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-semibold text-sm">Headscale</div>
                  <div className="text-xs text-muted-foreground">Open-source Tailscale control server</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-semibold text-sm">Headplane</div>
                  <div className="text-xs text-muted-foreground">Modern management interface</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to remove the limits?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Join our waitlist and be one of the first 5 customers to get 25% off for 6 months.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" onClick={() => setShowInterestDialog(true)}>
                Join Waitlist
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <InterestDialog open={showInterestDialog} onOpenChange={setShowInterestDialog} />
    </div>
  )
}
