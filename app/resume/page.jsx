'use client'

import { FaHtml5, FaCss3, FaJs, FaFigma, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, } from 'react-icons/si'

const about = {
    title: "About Me",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro amet eum, nisi sint tempora recusandae inventore et.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Sujith"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 6238 444 374"
        },
        {
            fieldName: "Experience",
            fieldValue: "2.5+"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Email",
            fieldValue: "sujithp2690@gmail.com"
        },

        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Malayalam"
        },
    ]
}
// Experience
const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro amet eum, nisi sint tempora recusandae inventore et.",
    items: [
        {
            company: "Ameya360",
            position: "Full Stack Developer",
            duration: "2023-2024"
        },
        {
            company: "Brototype",
            position: "Full Stack Developer",
            duration: "2022-2023"
        },
    ]

}
const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro amet eum, nisi sint tempora recusandae inventore et.",
    items: [
        {
            institution: "Brototype",
            degree: "Full Stack Developer",
            duration: "2022-2023"
        },
        {
            institution: "CUIET",
            degree: "EC Engineering",
            duration: "2014-2018"
        },
    ]

}

const skills = {
    title: 'My Skills',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro amet eum, nisi sint tempora recusandae inventore et.",
    skillList: [
        {
            icons: <FaHtml5 />,
            name: 'html 5',
        },
        {
            icons: <FaCss3 />,
            name: 'css 3',
        },
        {
            icons: <FaJs />,
            name: 'javaScript',
        },
        {
            icons: <FaReact />,
            name: 'react',
        },

        {
            icons: <SiNextdotjs />,
            name: 'next.js',
        },
        {
            icons: <SiTailwindcss />,
            name: 'tailwind.css',
        },
        {
            icons: <FaNodeJs />,
            name: 'node.js',
        },
        {
            icons: <FaFigma />,
            name: 'figma',
        },
    ]
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: 'easeIn'
                }
            }}
            className='flex items-center justify-center py-12 xl:py-0 '
        >
            <div className="container max-auto">
                <Tabs
                    defaultValue="experience"
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ' >
                        <TabsTrigger value='experience' >Experience</TabsTrigger>
                        <TabsTrigger value='education' >Education</TabsTrigger>
                        <TabsTrigger value='skills' >Skills</TabsTrigger>
                        <TabsTrigger value='about' >About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full  ' >
                        <TabsContent value="experience" className='w-full' >
                            <div className='flex flex-col gap-[30px] text-center xl:text-left' >
                                <h3 className='text-4xl font-bold' >{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:m-0  ' >
                                    {experience.desc}
                                </p>
                                <ScrollArea className='h-[400px] ' >
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] ' >
                                        {
                                            experience.items.map((item, i) => {
                                                return (
                                                    <li key={i} className='bg-[#232329] h-[184px] py-6 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1 ' >
                                                        <span className='text-accent'>{item.duration}</span>
                                                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ' >{item.position}</h3>
                                                        <div className='flex items-center gap-3' >
                                                            <span className='w-[6px] h-[6px] rounded-full bg-accent ' ></span>
                                                            <p className='text-white/60' >
                                                                {item.company}
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className='w-full' >
                            <div className='flex flex-col gap-[30px] text-center xl:text-left' >
                                <h3 className='text-4xl font-bold' >{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:m-0  ' >
                                    {education.desc}
                                </p>
                                <ScrollArea className='h-[400px] ' >
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] ' >
                                        {
                                            education.items.map((item, i) => {
                                                return (
                                                    <li key={i} className='bg-[#232329] h-[184px] py-6 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1 ' >
                                                        <span className='text-accent'>{item.duration}</span>
                                                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ' >{item.degree}</h3>
                                                        <div className='flex items-center gap-3' >
                                                            <span className='w-[6px] h-[6px] rounded-full bg-accent ' ></span>
                                                            <p className='text-white/60' >
                                                                {item.institution}
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className='w-full h-full' >
                            <div className='flex flex-col gap-[30px] '>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left' >
                                    <h3 className='text-4xl font-bold '>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 ' >{skills.desc}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4' >
                                    {
                                        skills.skillList.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className=' w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ' >
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                                                    {item.icons}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='bg-white text-primary px-2 py-1 rounded capitalize'>{item.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>
                        </TabsContent>
                        <TabsContent value="about" className='w-full text-center xl:text-left' >
                            <div className='flex flex-col gap-[30px]  '>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0' >{about.desc}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 '  >
                                    {
                                        about.info.map((item, i) => {
                                            return (
                                                <li key={i}
                                                    className='flex items-center flex-wrap justify-center xl:justify-start lg:gap-4 gap-2 '
                                                >
                                                    <span className='text-white/60'>{item.fieldName}</span>
                                                    <span className='text-xl '>{item.fieldValue}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>

                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume