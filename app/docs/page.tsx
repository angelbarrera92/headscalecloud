import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Construction } from "lucide-react"

export const metadata = {
  title: "Documentation - HeadscaleCloud",
  description: "Documentation and guides for HeadscaleCloud - coming soon.",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-12 md:p-20 bg-card border-border/40">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-xl">
                <Construction className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation Coming Soon</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're working hard on comprehensive guides, API references, and tutorials. Check back soon or sign up for
              early access to get notified when docs are ready.
            </p>
            <div className="text-sm text-muted-foreground">
              In the meantime, feel free to reach out with any questions at{" "}
              <a href="mailto:support@headscalecloud.com" className="text-accent hover:underline">
                support@headscalecloud.com
              </a>
            </div>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
