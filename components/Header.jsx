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
        <header className="sticky top-0 z-50 p-2 text-white bg-primary/90 backdrop-blur-md ">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/" onClick={() => scrollToSection("home", { behavior: "smooth" })}>
                    <h1 className="text-4xl font-semibold">
                        SJ <span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* { Desktop Nav and hire me button } */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Button onClick={() => scrollToSection("contact", { behavior: "smooth" })}>
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