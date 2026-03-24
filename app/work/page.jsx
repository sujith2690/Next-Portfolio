'use client'

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const Projects = [
    {
        num: "01",
        category: "fullstack",
        title: "SocialMe – Full Stack Social Media App",
        description: "SocialMe is a personal project showcasing full-stack development, where users can post updates, comment, like, and manage their own profile and preferences. Real-time functionalities like live chat, instant alerts, and dynamic updates using WebSockets and Socket.IO for enhanced user interaction.",
        stack: [
            { name: "React" }, { name: "Css 3" },
            { name: "Node.js" },
            { name: "JavaScript" },
            { name: "MongoDB" },
            { name: "Socket.IO" },
            { name: "Google Authentication" },
        ],
        image: '/assets/work/SocialME.png',
        live: "https://socialmeconnects.netlify.app/login",
        github: "https://github.com/sujith2690/SocialMedia-SocialME"
    },
    {
        num: "02",
        category: "fullstack",
        title: "AmazeMen – Men’s Grooming E-commerce Platform",
        description: "AmazeMen is a full-stack e-commerce web application designed for modern men's grooming products. It offers both a polished user shopping experience and a robust admin dashboard for managing products, orders, and users. Built to reflect real-world D2C brand functionality, it demonstrates strong full-stack and UI/UX skills.",
        stack: [
            { name: "handlebars" }, { name: "Css 3" }, { name: "Node.js" },{ name: "Twilio" },
        ],
        image: '/assets/work/Amaze.png',
        live: "https://amazemen.onrender.com/",
        github: "https://github.com/sujith2690/AMAZE"
    },
    {
        num: "03",
        category: "fullstack",
        title: "Destiny – Smart Travel Booking Platform",
        description: "Destiny is a full-stack travel booking application where users can search, explore, and book travel experiences. It includes a streamlined user interface and efficient backend for booking management.",
        stack: [
            { name: "React" }, { name: "Tailwind.css" }, 
            { name: "Node.js" },
            { name: "MySql" },
            { name: "JavaScript" },
        ],
        image: '/assets/work/destinyHome.png',
        live: "https://destinytravels.netlify.app/",
        github: "https://github.com/sujith2690/Destiny-Client"
    },
    {
        num: "04",
        category: "fullstack",
        title: "BrowseBooks – Online Book Discovery & Reading Platform",
        description: "BrowseBooks is a modern web application designed to help users discover, explore, and keep track of their favorite books. It mimics the experience of a digital library and reading platform, making it ideal for book lovers, students, or casual readers. Users can browse by category, read summaries, save favorites, and manage their own reading lists.",
        stack: [
            { name: "React" }, { name: "Tailwind.css" }, 
            { name: "Node.js" },
            { name: "MongoDB" },
            { name: "JavaScript" },
        ],
        image: '/assets/work/browsBooks.png',
        live: "https://browsbooks.netlify.app/",
        github: "https://github.com/sujith2690/Browse-books-Client"
    },
]



const Work = () => {
    const [project, setProject] = useState(Projects[0])

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex
        setProject(Projects[currentIndex])
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"
                }
            }}
            className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-3"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-7 xl:gap-8 items-stretch" >
                    <div className="w-full xl:w-[48%] flex flex-col xl:justify-between order-2 xl:order-0">
                        <div className="flex flex-col gap-4 md:gap-5 rounded-2xl border border-white/15 bg-white/5 p-4 md:p-5 h-full" >
                            {/* outline num */}
                            <div className="text-6xl md:text-7xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[26px] md:text-[32px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <p className="text-white/85 text-sm md:text-base font-medium">{project.title}</p>
                            <p className="text-white/60 text-sm md:text-[15px] leading-relaxed max-w-[62ch]">{project.description}</p>
                            <ul className="flex gap-2 md:gap-3 flex-wrap" >
                                {
                                    project.stack.map((item, i) => {
                                        return (
                                            <li key={i} className="text-sm md:text-base text-accent">
                                                {item.name}
                                                {/* { remove the last comma } */}
                                                {i !== project.stack.length - 1 && ","}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            {/* border */}
                            <div className="border border-white/20" >  </div>
                            {/* button */}
                            <div className="flex gap-3" >
                                {/* live project button */}
                                <a target={'_blank'} rel="noreferrer" href={project.live} >
                                    {/* <Link href={project.live} > */}
                                    <TooltipProvider delayDuration={100} >
                                        <Tooltip>
                                            <TooltipTrigger className='w-[54px] h-[54px] rounded-full bg-white/5 flex justify-center items-center group' >
                                                <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className='bg-white text-primary px-2 py-1 rounded capitalize'>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    {/* </Link> */}
                                </a>
                                {/* github */}
                                <a target={'_blank'} rel="noreferrer" href={project.github} >
                                    {/* <Link href={project.github} > */}
                                    <TooltipProvider delayDuration={100} >
                                        <Tooltip>
                                            <TooltipTrigger className='w-[54px] h-[54px] rounded-full bg-white/5 flex justify-center items-center group' >
                                                <BsGithub className="text-white text-2xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className='bg-white text-primary px-2 py-1 rounded capitalize'>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    {/* </Link> */}
                                </a>
                            </div>


                        </div>
                    </div>
                    <div className="w-full xl:w-[52%]">
                        <Swiper
                            spaceBetween={18}
                            slidesPerView={1}
                            className="xl:h-[470px] mb-6"
                            onSlideChange={handleSlideChange}
                        >
                            {
                                Projects.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i} className="w-full" >
                                            <div className="h-[330px] md:h-[390px] xl:h-[430px] relative group flex justify-center items-center bg-white/5 rounded-2xl border border-white/10 p-3 md:p-4" >
                                                {/* overlay */}
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/15 z-10 rounded-2xl">

                                                </div>
                                                {/* image */}
                                                <div className="w-full h-full relative z-20" >
                                                    <Image src={item.image} fill className="object-contain" alt="" />
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                    )
                                })
                            }
                            {/* slider button */}
                            <WorkSliderBtns
                                containerStyles="absolute inset-x-3 top-1/2 -translate-y-1/2 xl:inset-x-auto xl:top-auto xl:translate-y-0 xl:right-4 xl:bottom-4 z-30 flex items-center justify-between xl:justify-end gap-2"
                                btnStyles="group h-11 w-11 md:h-12 md:w-12 rounded-xl border border-white/20 bg-primary/65 backdrop-blur-sm text-white shadow-lg shadow-black/30 hover:border-accent hover:bg-accent hover:text-primary active:scale-95 transition-all duration-300 flex items-center justify-center"
                                iconsStyles="text-[20px] md:text-[22px] transition-transform duration-300 group-hover:scale-110"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work