'use client'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetClose,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { Link as ScrollLink } from 'react-scroll'
import { usePathname, useRouter } from 'next/navigation'

const Links = [
    { name: "home", id: "home" },
    { name: "resume", id: "resume" },
    { name: "portfolio", id: "portfolio" },
    { name: "contact", id: "contact" },
]

const MobileNav = () => {
    const pathname = usePathname()
    const router = useRouter()

    const handleNavigateIfNeeded = (id) => () => {
        if (pathname !== "/") {
            router.push(`/?scrollTo=${id}`)
        }
    }

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>

                <div className='h-full flex flex-col items-center justify-center sm:gap-40 gap-20 '>
                    <div className="text-center text-2xl">
                        <SheetClose asChild>
                            <Link href="/">
                                <h1 className="text-4xl font-semibold">
                                    SJ <span className="text-accent">.</span>
                               </h1>
                            </Link>
                        </SheetClose>
                    </div>
                    <nav className="flex flex-col justify-center items-center gap-8">
                        {Links.map((link, i) => (
                            <SheetClose key={i} asChild>
                                <ScrollLink
                                    to={link.id}
                                    smooth
                                    duration={500}
                                    spy
                                    offset={-96}
                                    activeClass="text-accent border-b-2 border-accent"
                                    onClick={handleNavigateIfNeeded(link.id)}
                                    className="cursor-pointer text-xl capitalize hover:text-accent transition-all"
                                >
                                    {link.name}
                                </ScrollLink>
                            </SheetClose>
                        ))}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
