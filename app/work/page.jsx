'use client'

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const Projects = [
    {
        num: "01",
        category: "fullstack",
        title: "project 1",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem aperiam explicabo voluptates sapiente",
        stack: [
            { name: "React" }, { name: "Css 3" }, { name: "JavaScript" }
        ],
        image: '/assets/work/SocialME.png',
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem aperiam explicabo voluptates sapiente",
        stack: [
            { name: "handlebars" }, { name: "Css 3" }, { name: "Node.js" }
        ],
        image: '/assets/work/Amaze.png',
        live: "",
        github: ""
    },
    {
        num: "03",
        category: "fullstack",
        title: "project 3",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem aperiam explicabo voluptates sapiente",
        stack: [
            { name: "React" }, { name: "Tailwind.css" }, { name: "JavaScript" }
        ],
        image: '/assets/work/browsBooks.png',
        live: "",
        github: ""
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
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 "
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]" >
                    <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none ">
                        <div className="flex flex-col gap-[30px] " >
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize " >{project.category} project</h2>
                            <p className="text-white/60 " >{project.description}</p>
                            <ul className="flex gap-4 flex-wrap  " >
                                {
                                    project.stack.map((item, i) => {
                                        return (
                                            <li key={i} className="text-xl text-accent">
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
                            <div className="flex gap-4" >
                                {/* live project button */}
                                <Link href={project.live} >
                                    <TooltipProvider delayDuration={100} >
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group' >
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className='bg-white text-primary px-2 py-1 rounded capitalize'>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github */}
                                <Link href={project.github} >
                                    <TooltipProvider delayDuration={100} >
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group' >
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className='bg-white text-primary px-2 py-1 rounded capitalize'>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>


                        </div>
                    </div>
                    <div className="w-full xl:w-[50%] ">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12 "
                            onSlideChange={handleSlideChange}
                        >
                            {
                                Projects.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i} className="w-full" >
                                            <div className="h-[460px] relative group flex justify-center items-center bg-transparent " >
                                                {/* overlay */}
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10">

                                                </div>
                                                {/* image */}
                                                <div className="w-full h-full" >
                                                    <Image src={item.image} fill className="object-contain" alt="" />
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                    )
                                })
                            }
                            {/* slider button */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                                btnStyles="bg-accent hover:bg-[#00b168] text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work