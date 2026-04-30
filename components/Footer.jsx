'use client'

import Social from "@/components/Social"
import { useRouter, usePathname } from "next/navigation"
import { scroller } from "react-scroll"

const quickLinks = [
  { name: "Home", id: "home" },
  { name: "Resume", id: "resume" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Contact", id: "contact" },
]

export const scrollToSection = (id, { behavior = "smooth" } = {}) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior, block: "start" })
}

const Footer = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleQuickLink = (id) => {
    const el = document.getElementById(id)
    if (el) {
      scrollToSection(id, { behavior: "smooth" })
      return
    }

    if (pathname !== "/") {
      router.push(`/?scrollTo=${id}`)
    }
  }

  return (
    <footer className="mt-10 border-t border-white/10 bg-primary/70">
      <div className="container mx-auto py-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wide text-white/90">Sujith Portfolio</p>
              <p className="mt-1 max-w-md text-sm text-white/60">
                Building thoughtful digital products that combine performance, usability, and clean engineering.
              </p>
            </div>
            <Social
              containerStyles="flex gap-3"
              iconStyles="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-primary"
            />
          </div>
          <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap gap-4">
              {quickLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleQuickLink(item.id)
                  }}
                  className="text-sm text-white/70 transition-colors hover:text-accent"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <p className="text-xs text-white/50">
            © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
