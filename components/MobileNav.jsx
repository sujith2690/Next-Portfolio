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
import { NAV_LINKS } from './Nav'

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
            <SheetTrigger className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-2.5 backdrop-blur-xl transition hover:bg-white/10">
                <CiMenuFries className="text-[28px] text-accent" />
            </SheetTrigger>

            <SheetContent className="flex flex-col border-l-white/10 bg-primary/95 backdrop-blur-2xl">
                <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>

                <div className='flex h-full flex-col items-center justify-center gap-16'>
                    <div className="text-center text-2xl">
                        <SheetClose asChild>
                            <Link href="/">
                                <h1 className="text-4xl font-semibold tracking-tight">
                                    SJ <span className="text-accent">.</span>
                               </h1>
                            </Link>
                        </SheetClose>
                    </div>
                    <nav className="flex w-full max-w-xs flex-col items-center gap-3">
                        {NAV_LINKS.map((link, i) => (
                            <SheetClose key={i} asChild>
                                <ScrollLink
                                    to={link.id}
                                    smooth
                                    duration={500}
                                    spy
                                    offset={-96}
                                    activeClass="!bg-accent !text-primary"
                                    onClick={handleNavigateIfNeeded(link.id)}
                                    className="w-full cursor-pointer rounded-full border border-white/10 px-5 py-3 text-center text-lg capitalize text-white/85 transition-all hover:border-accent/60 hover:bg-white/10"
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
