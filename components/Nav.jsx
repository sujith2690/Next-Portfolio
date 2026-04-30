'use client'
import { Link as ScrollLink } from "react-scroll"
import { usePathname, useRouter } from "next/navigation"

export const NAV_LINKS = [
    { name: "home", id: "home" },
    { name: "resume", id: "resume" },
    { name: "portfolio", id: "portfolio" },
    { name: "contact", id: "contact" },
]
const Nav = () => {
    const pathname = usePathname()
    const router = useRouter()

    const handleNavigateIfNeeded = (id) => () => {
        if (pathname !== "/") {
            router.push(`/?scrollTo=${id}`)
        }
    }

    return (
        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
            {
                NAV_LINKS.map((link, i) => (
                    <ScrollLink
                        key={i}
                        to={link.id}
                        smooth
                        duration={500}
                        spy
                        offset={-96}
                        activeClass="!bg-accent !text-primary"
                        onClick={handleNavigateIfNeeded(link.id)}
                        className="cursor-pointer rounded-full px-4 py-2 text-sm capitalize text-white/85 transition-all duration-300 hover:bg-white/10 hover:text-white"
                    >
                        {link.name}
                    </ScrollLink>
                ))
            }
        </nav>
    )
}

export default Nav