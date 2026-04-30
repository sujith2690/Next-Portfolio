'use client'
import Link from "next/link"
import { Button } from "./ui/button"

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

export const scrollToSection = (id, { behavior = "smooth" } = {}) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior, block: "start" })
}

const Header = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/70 px-2 py-3 text-white backdrop-blur-2xl">
            <div className="container mx-auto flex items-center justify-between">
                {/* logo */}
                <Link href="/" onClick={() => scrollToSection("home", { behavior: "smooth" })}>
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        SJ <span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* { Desktop Nav and hire me button } */}
                <div className="hidden items-center gap-6 xl:flex">
                    <Nav />
                    <Button className="shadow-lg shadow-accent/15" onClick={() => scrollToSection("contact", { behavior: "smooth" })}>
                        Hire Me
                    </Button>
                </div>
                {/* { Mobile nav} */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header