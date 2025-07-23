'use client'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle, // ✅ Import this
} from '@/components/ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'

const Links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
]

const MobileNav = () => {
    const pathName = usePathname()

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                {/* ✅ Required for accessibility */}
                <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>

                <div className='h-full flex flex-col items-center justify-center sm:gap-40 gap-20 '>
                    <div className="text-center text-2xl">
                        <Link href={'/'}>
                            <h1 className="text-4xl font-semibold">
                                SJ <span className="text-accent">.</span>
                            </h1>
                        </Link>
                    </div>
                    <nav className="flex flex-col justify-center items-center gap-8">
                        {Links.map((link, i) => (
                            <Link
                                href={link.path}
                                key={i}
                                className={`${link.path === pathName && 'text-accent border-b-2 border-accent'
                                    } text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
