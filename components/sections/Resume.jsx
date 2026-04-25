'use client'

import { FaHtml5, FaCss3, FaJs, FaFigma, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, } from 'react-icons/si'

const about = {
    title: "About Me",
    desc: "I’m a self-taught Full Stack Developer passionate about building modern web applications that are fast, responsive, and user-focused. With hands-on experience across real-world projects, I thrive on turning ideas into impactful digital experiences using tools like React, Node.js, and Next.js."
    , info: [
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
            fieldValue: "sujithworks369@gmail.com"
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
    desc: "A journey shaped by hands-on experience in dynamic tech environments. From building scalable full stack applications at Ameya360 to honing advanced development skills at Brototype, each role has contributed to my growth as a versatile and efficient developer.",
    items: [
        {
            company: "Ameya360",
            position: "Full Stack Developer",
            duration: "2023-2024"
        },
        {
            company: "Brototype",
            position: "Full Stack Developer",
            duration: "2024-2025"
        },
        {
            company: "Datazymes.AI",
            position: "Full Stack Developer",
            duration: "2025-2026"
        },
    ]

}
const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    desc: "My educational foundation is rooted in practical, project-based learning. The immersive full stack training at Brototype equipped me with real-world development skills, while my earlier academic exposure laid the groundwork for my analytical and problem-solving abilities."
    , items: [
        {
            institution: "Brototype",
            degree: "Full Stack Developer",
            duration: "2024-2025"
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
    desc: "A solid mix of front-end and back-end technologies fuels my development workflow. From crafting responsive UIs with HTML, CSS, React, and Tailwind to building scalable applications using Node.js and Next.js, I bring both design sensitivity and technical depth to every project."
    , skillList: [
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
        {
            icons: <img src="/assets/googleAntigravity.png" alt="Google Antigravity" className='w-14 h-14 object-contain' />,
            name: 'google antigravity',
        },
        {
            icons: <img src="https://static.cdnlogo.com/logos/c/23/cursor.svg" alt="Cursor AI Agent" className='w-14 h-14 object-contain' />,
            name: 'cursor ai agent',
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
            className='flex items-center justify-center py-8 sm:py-10 xl:py-0 '
        >
            <div suppressHydrationWarning data-aos="fade-up" data-aos-duration="1000" className="container max-auto px-10 sm:px-20">
                <Tabs
                    defaultValue="experience"
                    className='flex flex-col xl:flex-row gap-8 sm:gap-10 xl:gap-[60px]'
                >
                    <TabsList className='grid grid-cols-2 w-full max-w-none mx-auto gap-2.5 sm:gap-4 xl:max-w-[380px] xl:mx-0 xl:flex xl:flex-col' >
                        <TabsTrigger value='experience' >Experience</TabsTrigger>
                        <TabsTrigger value='education' >Education</TabsTrigger>
                        <TabsTrigger value='skills' >Skills</TabsTrigger>
                        <TabsTrigger value='about' >About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full  ' >
                        <TabsContent value="experience" className='w-full' >
                            <div className='flex flex-col gap-4 sm:gap-6 text-center xl:text-left' >
                                <h3 className='text-2xl sm:text-3xl xl:text-4xl font-bold' >{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:m-0 text-sm sm:text-base xl:text-lg leading-relaxed ' >
                                    {experience.desc}
                                </p>
                                <div>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 ' >
                                        {
                                            experience.items.map((item, i) => {
                                                return (
                                                    <li key={i} className='bg-[#232329] min-h-[150px] sm:h-[184px] py-4 sm:py-6 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1.5 ' >
                                                        <div className='w-full flex items-start justify-between gap-3 sm:gap-4 px-3 sm:px-5'>
                                                            <div className='flex flex-col items-center lg:items-start gap-1.5'>
                                                                <div className='flex items-center gap-2 sm:gap-3' >
                                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent ' ></span>
                                                                    <p className='text-white/60 text-sm sm:text-base xl:text-lg' >
                                                                        {item.company}
                                                                    </p>
                                                                </div>
                                                                <h3 className='text-[15px] sm:text-lg lg:text-xl xl:text-2xl max-w-[260px] min-h-[44px] sm:min-h-[60px] text-center lg:text-left leading-snug ' >{item.position}</h3>
                                                            </div>
                                                            <span className='text-accent text-sm sm:text-base xl:text-lg whitespace-nowrap'>{item.duration}</span>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className='w-full' >
                            <div className='flex flex-col gap-4 sm:gap-6 text-center xl:text-left' >
                                <h3 className='text-2xl sm:text-3xl xl:text-4xl font-bold' >{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:m-0 text-sm sm:text-base xl:text-lg leading-relaxed ' >
                                    {education.desc}
                                </p>
                                <div>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 ' >
                                        {
                                            education.items.map((item, i) => {
                                                return (
                                                    <li key={i} className='bg-[#232329] min-h-[150px] sm:h-[184px] py-4 sm:py-6 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1.5 ' >
                                                        <span className='text-accent text-sm sm:text-base xl:text-lg'>{item.duration}</span>
                                                        <h3 className='text-[15px] sm:text-lg lg:text-xl xl:text-2xl max-w-[260px] min-h-[44px] sm:min-h-[60px] text-center lg:text-left leading-snug ' >{item.degree}</h3>
                                                        <div className='flex items-center gap-2 sm:gap-3' >
                                                            <span className='w-[6px] h-[6px] rounded-full bg-accent ' ></span>
                                                            <p className='text-white/60 text-sm sm:text-base xl:text-lg' >
                                                                {item.institution}
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className='w-full h-full' >
                            <div className='flex flex-col gap-4 sm:gap-6 '>
                                <div className='flex flex-col gap-3 sm:gap-6 text-center xl:text-left' >
                                    <h3 className='text-2xl sm:text-3xl xl:text-4xl font-bold '>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base xl:text-lg leading-relaxed' >{skills.desc}</p>
                                </div>
                                <ScrollArea className='h-[240px] sm:h-[280px] pr-2'>
                                    <ul className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-2.5 sm:gap-4' >
                                        {
                                            skills.skillList.map((item, i) => {
                                                return (
                                                    <li key={i}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className=' w-full h-[76px] sm:h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group ' >
                                                                    <div className='text-3xl sm:text-6xl group-hover:text-accent transition-all duration-300'>
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
                                </ScrollArea>

                            </div>
                        </TabsContent>
                        <TabsContent value="about" className='w-full text-center xl:text-left' >
                            <div className='flex flex-col gap-4 sm:gap-6  '>
                                <h3 className='text-2xl sm:text-3xl xl:text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base xl:text-lg leading-relaxed' >{about.desc}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 '  >
                                    {
                                        about.info.map((item, i) => {
                                            return (
                                                <li key={i}
                                                    className='flex items-center flex-wrap justify-center xl:justify-start lg:gap-4 gap-2 '
                                                >
                                                    <span className='text-white/60 text-sm sm:text-base xl:text-lg'>{item.fieldName}</span>
                                                    <span className='text-[15px] sm:text-lg lg:text-xl xl:text-2xl'>{item.fieldValue}</span>
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
