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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='py-10 sm:py-10 '
        >
            <div className="container mx-auto">
                <div className="mx-auto w-full max-w-[1180px] ">
                <Tabs
                    defaultValue="experience"
                    className='grid gap-8 xl:grid-cols-[300px_1fr] xl:gap-12'
                >
                    <div className="rounded-3xl border border-white/10 p-4 backdrop-blur-xl">
                    <p className="mb-4 px-2 text-xs uppercase tracking-[0.22em] text-white/60">Resume toolkit</p>
                    <TabsList className='grid w-full grid-cols-2 gap-2 bg-transparent xl:grid-cols-1' >
                        <TabsTrigger className='cursor-pointer transition-colors hover:bg-white/10 hover:text-white' value='experience' >Experience</TabsTrigger>
                        <TabsTrigger className='cursor-pointer transition-colors hover:bg-white/10 hover:text-white' value='education' >Education</TabsTrigger>
                        <TabsTrigger className='cursor-pointer transition-colors hover:bg-white/10 hover:text-white' value='skills' >Skills</TabsTrigger>
                        <TabsTrigger className='cursor-pointer transition-colors hover:bg-white/10 hover:text-white' value='about' >About me</TabsTrigger>
                    </TabsList>
                    </div>

                    <div className='w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7 xl:p-8'>
                        <TabsContent value="experience" className='w-full' >
                            <div className='flex flex-col gap-5 text-center xl:text-left' >
                                <h3 className='text-3xl font-semibold sm:text-4xl'>{experience.title}</h3>
                                <p className='max-w-3xl text-sm text-white/65 leading-relaxed sm:text-base' >
                                    {experience.desc}
                                </p>
                                <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                                        {
                                            experience.items.map((item, i) => {
                                                return (
                                                    <li key={i} className='rounded-2xl border border-white/10 bg-primary/60 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50'>
                                                        <div className='mb-3 flex items-center justify-between gap-3'>
                                                            <div className='flex items-center gap-2'>
                                                                    <span className='h-2 w-2 rounded-full bg-accent'></span>
                                                                    <p className='text-sm text-white/70 sm:text-base'>
                                                                        {item.company}
                                                                    </p>
                                                            </div>
                                                            <span className='whitespace-nowrap text-sm text-accent sm:text-base'>{item.duration}</span>
                                                        </div>
                                                        <h3 className='text-lg font-medium sm:text-xl'>{item.position}</h3>
                                                        <p className='mt-2 text-xs text-white/60 sm:text-sm'>Delivered production-ready features, optimized performance, and cross-team collaboration.</p>
                                                    </li>
                                                )
                                            })
                                        }
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className='w-full' >
                            <div className='flex flex-col gap-6 text-center xl:text-left'>
                                <h3 className='text-3xl font-semibold sm:text-4xl'>{education.title}</h3>
                                <p className='max-w-3xl text-white/65 leading-relaxed' >
                                    {education.desc}
                                </p>
                                    <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                                        {
                                            education.items.map((item, i) => {
                                                return (
                                                    <li key={i} className='rounded-2xl border border-white/10 bg-primary/60 p-5 text-left'>
                                                        <span className='text-sm text-accent'>{item.duration}</span>
                                                        <h3 className='mt-2 text-xl font-medium sm:text-2xl'>{item.degree}</h3>
                                                        <div className='mt-3 flex items-center gap-2' >
                                                            <span className='h-2 w-2 rounded-full bg-accent'></span>
                                                            <p className='text-sm text-white/70 sm:text-base'>
                                                                {item.institution}
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className='w-full h-full' >
                            <div className='flex flex-col gap-6'>
                                <div className='text-center xl:text-left' >
                                    <h3 className='text-3xl font-semibold sm:text-4xl'>{skills.title}</h3>
                                    <p className='mt-3 max-w-3xl text-white/65 leading-relaxed'>{skills.desc}</p>
                                </div>
                                <ScrollArea className='h-[290px] pr-1'>
                                    <ul className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4' >
                                        {
                                            skills.skillList.map((item, i) => {
                                                return (
                                                    <li key={i}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className='group flex h-[92px] w-full items-center justify-center rounded-2xl border border-white/10 bg-primary/60 transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5'>
                                                                    <div className='text-4xl transition-all duration-300 group-hover:text-accent sm:text-5xl'>
                                                                        {item.icons}
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className='rounded bg-white px-2 py-1 capitalize text-primary'>{item.name}</p>
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
                            <div className='flex flex-col gap-5'>
                                <h3 className='text-3xl font-semibold sm:text-4xl'>{about.title}</h3>
                                <p className='max-w-3xl text-sm text-white/65 leading-relaxed sm:text-base'>{about.desc}</p>
                                <ul className='grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3'>
                                    {
                                        about.info.map((item, i) => {
                                            return (
                                                <li key={i}
                                                    className='rounded-2xl border border-white/10 bg-primary/55 p-3.5'
                                                >
                                                    <p className='text-xs text-white/55 sm:text-sm'>{item.fieldName}</p>
                                                    <p className='mt-1 text-sm font-medium text-white sm:text-base'>{item.fieldValue}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="rounded-2xl border border-accent/40 bg-accent/10 p-3.5 sm:p-4">
                                    <p className="text-xs text-white/85 sm:text-sm">
                                        <span className="font-semibold text-accent">Recruiter note:</span> I specialize in translating business goals into reliable, scalable, and visually polished web experiences with fast iteration speed.
                                    </p>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume
