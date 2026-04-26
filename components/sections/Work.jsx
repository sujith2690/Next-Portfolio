'use client'

import React, { useMemo, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { PROJECTS } from "@/data/projects"

const Work = ({ filterCategory }) => {
    const projects = useMemo(() => {
        if (!filterCategory) return PROJECTS
        return PROJECTS.filter((p) => p.category === String(filterCategory).toLowerCase())
    }, [filterCategory])
    const [open, setOpen] = useState(false)
    const [activeProject, setActiveProject] = useState(projects[0] ?? null)

    const openProject = (p) => {
        setActiveProject(p)
        setOpen(true)
    }

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-3">
            <div className="container mx-auto">
                <div suppressHydrationWarning data-aos="fade-down" data-aos-duration="1000" className="mx-auto w-full max-w-[1180px] mb-5 sm:mb-7">
                    <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold">Portfolio</h2>
                    <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-[68ch]">
                        A curated selection of projects showcasing my work across full-stack development, UI/UX, and real-world integrations. Click any project to view details.
                    </p>
                </div>
                {projects.length === 0 ? (
                    <div className="mx-auto max-w-[1180px] rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 text-center">
                        <p className="text-white/80 text-sm sm:text-base font-semibold">No projects found</p>
                        <p className="text-white/60 text-xs sm:text-sm mt-1">
                            There are no projects in this category yet.
                        </p>
                    </div>
                ) : (
                    <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                        {projects.map((p, i) => (
                            <button
                                suppressHydrationWarning
                                key={`${p.title}-${i}`}
                                type="button"
                                onClick={() => openProject(p)}
                                data-aos="zoom-in-up"
                                data-aos-duration="600"
                                data-aos-delay={i * 90}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition-all duration-300 hover:border-accent/60 hover:scale-[1.015] hover:shadow-xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                            >
                                <div className="relative aspect-[16/10] w-full">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    {/* category badge */}
                                    <div className="absolute right-3 top-3 z-10">
                                        <span className="inline-flex items-center rounded-full bg-primary/70 backdrop-blur px-2.5 py-1 text-xs font-semibold capitalize text-white border border-white/15">
                                            {p.category}
                                        </span>
                                    </div>
                                    {/* hover content */}
                                    <div
                                        className="absolute inset-0 transition-opacity duration-300
                                        opacity-100
                                        md:opacity-0 md:group-hover:opacity-100"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                                        <div
                                            className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transition-all duration-300
                                            translate-y-0 opacity-100
                                            md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                                        >
                                            <h3 className="text-sm sm:text-base font-semibold leading-snug text-white line-clamp-2">
                                                {p.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
                        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-24px)] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-primary p-4 sm:p-6 shadow-2xl shadow-black/40 focus:outline-none">
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <Dialog.Title className="text-sm sm:text-lg font-semibold text-white leading-snug">
                                        {activeProject?.title}
                                    </Dialog.Title>
                                    <Dialog.Description className="text-white/60 text-[11px] sm:text-sm mt-1 capitalize">
                                        {activeProject?.category}
                                    </Dialog.Description>
                                </div>
                                <Dialog.Close asChild>
                                    <button
                                        type="button"
                                        className="shrink-0 rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        aria-label="Close"
                                    >
                                        <IoMdClose className="text-xl sm:text-2xl" />
                                    </button>
                                </Dialog.Close>
                            </div>

                            {activeProject ? (
                                <div className="mt-4 grid gap-4 sm:gap-5">
                                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 max-h-[200px] sm:max-h-[320px]">
                                        <img
                                            src={activeProject.image}
                                            alt={activeProject.title}
                                            className="w-full h-full object-contain"
                                            loading="eager"
                                            decoding="async"
                                        />
                                    </div>

                                    <p className="text-white/70 text-xs sm:text-base leading-relaxed">
                                        {activeProject.description}
                                    </p>

                                    <div>
                                        <p className="text-white/80 text-xs sm:text-sm font-semibold mb-2">Tech stack</p>
                                        <ul className="flex flex-wrap gap-2">
                                            {activeProject.stack?.map((s, idx) => (
                                                <li
                                                    key={`${s.name}-${idx}`}
                                                    className="text-[11px] sm:text-sm text-accent border border-accent/30 bg-accent/10 rounded-full px-2 py-1"
                                                >
                                                    {s.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-3 pt-1">
                                        {activeProject.live ? (
                                            <a
                                                href={activeProject.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs sm:px-4 sm:text-sm text-white hover:border-accent/60 hover:bg-white/10 transition-colors"
                                            >
                                                <BsArrowUpRight className="text-base sm:text-lg" />
                                                Live
                                            </a>
                                        ) : null}
                                        {activeProject.github ? (
                                            <a
                                                href={activeProject.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs sm:px-4 sm:text-sm text-white hover:border-accent/60 hover:bg-white/10 transition-colors"
                                            >
                                                <BsGithub className="text-base sm:text-lg" />
                                                GitHub
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            ) : null}
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </section>
    )
}

export default Work
