import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Zap,
  Server,
  Code2,
  Globe,
  Lock,
  Users,
  Gauge,
  Network,
  FileCode,
  Activity,
  BarChart3,
  MapPin,
  LineChart,
} from "lucide-react"

export const metadata = {
  title: "Features - HeadscaleCloud",
  description: "Explore all features of HeadscaleCloud, the unlimited Tailscale alternative powered by Headscale.",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            Everything you need, nothing you don't
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            All the power of Tailscale without arbitrary limits. Managed control plane with enterprise-grade
            reliability—we handle the infrastructure.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Core Features</h2>
            <p className="text-lg text-muted-foreground">The foundation of your mesh network</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Tailscale Compatible</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Drop-in replacement. Use the same Tailscale clients on all platforms. No modifications needed.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Unlimited Devices</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect thousands of devices. No caps, no per-device pricing. Pay for what you use.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Server className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fully Managed Control Plane</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your dedicated Headscale instance, hosted and managed by us. Full control without operational
                overhead—we handle updates, backups, and monitoring.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Lock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Zero-Trust Security</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end encrypted mesh network. Your data never passes through our servers.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">API-First Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full REST API access. Automate everything with your existing tools and workflows.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Built-in Monitoring</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Grafana and Prometheus integration. Monitor your network health and performance out of the box.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Network Management</h2>
            <p className="text-lg text-muted-foreground">Powered by Headplane for intuitive control</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Modern Web Interface</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Beautiful Headplane UI for managing devices, users, and network policies. No terminal required.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">User Management</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Organize devices into users and teams. Grant access with fine-grained permissions.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <FileCode className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Access Control Lists</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Define granular ACL policies. Control who can access what with HuJSON configuration.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border/40">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <Activity className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Monitoring</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Monitor device status, connection health, and network activity in real-time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Technical Excellence</h2>
              <p className="text-lg text-muted-foreground">Built for infrastructure engineers</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border/40">
                <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                  <Network className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">WireGuard Protocol</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fast, modern cryptography. Peer-to-peer connections with automatic NAT traversal.
                </p>
              </Card>
              <Card className="p-6 bg-card border-border/40">
                <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                  <Gauge className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">High Performance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Direct device-to-device traffic. Control plane scales to thousands of nodes.
                </p>
              </Card>
              <Card className="p-6 bg-card border-border/40">
                <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Open Source, Zero Ops</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fully auditable open-source stack (Headscale + Headplane). We host everything—you get all the
                  transparency without the maintenance burden.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Coming Soon</h2>
            <p className="text-lg text-muted-foreground">Features we're working on for you</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">Global Exit Nodes</h3>
                <span className="text-xs font-mono px-2 py-1 bg-accent/10 text-accent rounded">Q2 2026</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Exit nodes across the globe for secure internet access. Route your traffic through our infrastructure in
                multiple regions worldwide.
              </p>
            </Card>
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                <LineChart className="h-6 w-6 text-accent" />
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">In-Depth Monitoring</h3>
                <span className="text-xs font-mono px-2 py-1 bg-accent/10 text-accent rounded">Q3 2026</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Direct access to logs and advanced metrics. Deep visibility into your network with custom dashboards and
                alerting for production workloads.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            See our pricing or start your free trial today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/pricing">View Pricing</a>
            </Button>
            <Button size="lg" variant="outline">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
