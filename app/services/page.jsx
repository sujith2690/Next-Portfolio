'use client'

import { BsArrowDownRight } from "react-icons/bs";
import Link from 'next/link'
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

const Services = () => {

    return (
        <section className=' flex flex-col justify-center py-12 xl:py-0 '>
            <div className="container mx-auto p-2">
                <motion.div initial={{ opacity: 0 }} animate={{
                    opacity: 1, transition: {
                        delay: 2.4, duration: 0, ease: 'easeIn'
                    }
                }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {
                        services.map((item, i) => {
                            return (
                                <div key={i} className="flex-1 flex flex-col justify-center gap-6 group" >
                                    {/* top */}
                                    <div className="w-full flex justify-between items-center group" >
                                        <div className="text-5xl font-extrabold text-outline  text-transparent group-hover:text-outline transition-all duration-500 ">{item.num}</div>
                                        <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white 
                                        group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 " >
                                            <BsArrowDownRight className="text-primary text-3xl" />
                                        </Link>
                                    </div>

                                    {/* title */}
                                    <h2 className="text-[42px] font-bold leading-none text-white
                                    group-hover:text-accent transition-all duration-500 " >
                                        {item.title}
                                    </h2>
                                    {/* Desc */}
                                    <p className="text-white/60">
                                        {item.description}
                                    </p>
                                    <div className="border-b border-white/20 w-full"></div>
                                </div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Services