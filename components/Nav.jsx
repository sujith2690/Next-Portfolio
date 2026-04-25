'use client'
import { Link as ScrollLink } from "react-scroll"
import { usePathname, useRouter } from "next/navigation"

const Links = [
    { name: "home", id: "home" },
    { name: "resume", id: "resume" },
    { name: "work", id: "work" },
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
        <nav className="flex gap-8 items-center">
            {
                Links.map((link, i) => (
                    <ScrollLink
                        key={i}
                        to={link.id}
                        smooth
                        duration={500}
                        spy
                        offset={-96}
                        activeClass="text-accent border-b-2 border-accent"
                        onClick={handleNavigateIfNeeded(link.id)}
                        className="cursor-pointer capitalize font-medium hover:text-accent transition-all"
                    >
                        {link.name}
                    </ScrollLink>
                ))
            }
        </nav>
    )
}

export default Nav