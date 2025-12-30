import { Server } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Server className="h-5 w-5 text-accent" />
            <span className="font-semibold">HeadscaleCloud</span>
          </Link>
          <div className="text-sm text-muted-foreground">© 2025 HeadscaleCloud. Built on open source.</div>
        </div>
      </div>
    </footer>
  )
}
