'use client'

import { BsArrowDownRight } from "react-icons/bs";
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { motion } from 'framer-motion'

const services = [
    {
        num: '01',
        title: 'Full Stack Web Development',
        description: 'build end-to-end web applications using the MERN stack and Next.js, delivering scalable, secure, and high-performance solutions.',
        href: '/contact'
    },
    {
        num: '02',
        title: 'Frontend Development',
        description: 'fast, responsive, and modern UIs using React and Tailwind CSS, focusing on great UX and cross-device compatibility.',
        href: '/contact'
    },
    {
        num: '03',
        title: 'AI Feature Integration',
        description: 'Integrate AI tools like OpenAI and Google APIs to add smart features such as chatbots, reminders, and content generation.',
        href: '/contact'
    },
    {
        num: '04',
        title: 'Real-time Features & Notifications',
        description: 'Development of real-time functionalities like live chat, instant alerts, and dynamic updates using WebSockets and Socket.IO for enhanced user interaction.',
        href: '/contact'
    },
]

const ROUTE_TRANSITION_DELAY = 2.2

const containerVariants = {
    hidden: { opacity: 0, y: 26 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            // Ensure this starts only after <StairTransition /> finishes.
            delay: ROUTE_TRANSITION_DELAY,
            duration: 0.55,
            ease: "easeOut",
            when: "beforeChildren",
            delayChildren: 0.2,
            staggerChildren: 0.18,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 70, scale: 0.92, filter: "blur(10px)" },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 95,
            damping: 14,
            mass: 0.9,
        },
    },
}

const Services = () => {
    const pathname = usePathname()

    return (
        <section className='flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto p-2">
                <motion.div
                    key={pathname}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="mx-auto grid w-full max-w-[1180px] grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center"
                >
                    {
                        services.map((item, i) => {
                            return (
                                <motion.div
                                    key={i}
                                    variants={cardVariants}
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    className="group w-full max-w-[540px] h-full flex flex-col justify-between gap-4 p-5 rounded-2xl border border-white/15 bg-white/5 transition-all duration-300 hover:border-accent/70"
                                >
                                    {/* top */}
                                    <div className="w-full flex justify-between items-center group" >
                                        <div className="text-3xl md:text-4xl font-extrabold text-outline text-transparent group-hover:text-outline transition-all duration-500">{item.num}</div>
                                        <Link href={item.href} className="w-[44px] h-[44px] rounded-full bg-white 
                                        group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 " >
                                            <BsArrowDownRight className="text-primary text-2xl" />
                                        </Link>
                                    </div>

                                    {/* title */}
                                    <h2 className="text-[24px] md:text-[28px] font-bold leading-tight text-white
                                    group-hover:text-accent transition-all duration-500 " >
                                        {item.title}
                                    </h2>
                                    {/* Desc */}
                                    <p className="text-white/60 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="border-b border-white/20 w-full"></div>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Services