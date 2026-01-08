"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code2, Rocket, Server, Terminal, FileText } from "lucide-react"
import { useState } from "react"
import { InterestDialog } from "@/components/interest-dialog"

export default function DocsPage() {
  const [showInterestDialog, setShowInterestDialog] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            Documentation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            Everything you need to get started with HeadscaleCloud. Guides, tutorials, and API references coming soon.
          </p>
        </div>
      </section>

      {/* Coming Soon Sections */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Rocket className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Quick start guide to set up your first HeadscaleCloud instance in under 5 minutes.
              </p>
              <div className="text-xs text-muted-foreground">Coming soon</div>
            </Card>

            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Terminal className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Client Setup</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Step-by-step guides for connecting Tailscale clients on macOS, Linux, Windows, iOS, and Android.
              </p>
              <div className="text-xs text-muted-foreground">Coming soon</div>
            </Card>

            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">API Reference</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Complete API documentation for automating your network management and integrations.
              </p>
              <div className="text-xs text-muted-foreground">Coming soon</div>
            </Card>

            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Server className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ACL Configuration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Learn how to define access control policies and secure your network with granular permissions.
              </p>
              <div className="text-xs text-muted-foreground">Coming soon</div>
            </Card>

            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Migration Guide</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Detailed guide for migrating from Tailscale or self-hosted Headscale to HeadscaleCloud.
              </p>
              <div className="text-xs text-muted-foreground">Coming soon</div>
            </Card>

            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tutorials</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Practical tutorials for common use cases like remote access, site-to-site networking, and more.
              </p>
              <div className="text-xs text-muted-foreground">Coming soon</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get notified when docs are ready</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the waitlist to be the first to know when we launch our comprehensive documentation.
            </p>
            <Button size="lg" onClick={() => setShowInterestDialog(true)}>
              Join Waitlist
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              Questions? Email us at{" "}
              <a href="mailto:support@headscalecloud.com" className="text-accent hover:underline">
                support@headscalecloud.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
      <InterestDialog open={showInterestDialog} onOpenChange={setShowInterestDialog} />
    </div>
  )
}
