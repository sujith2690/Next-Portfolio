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
    <footer className="border-t border-white/10 bg-primary/80 backdrop-blur-md mt-10">
      <div className="container mx-auto py-6 flex flex-col gap-4 md:gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white/80 text-sm">Sujith Portfolio</p>
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4">
          {quickLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                handleQuickLink(item.id)
              }}
              className="text-sm text-white/75 hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <Social
          containerStyles="flex gap-3"
          iconStyles="w-9 h-9 border border-accent/60 rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
        />
      </div>
    </footer>
  )
}

export default Footer
