'use client'

import HomeSection from "@/components/sections/Home"
import ResumeSection from "@/components/sections/Resume"
import WorkSection from "@/components/sections/Work"
import ContactSection from "@/components/sections/Contact"
import { useEffect, useMemo, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { scroller } from "react-scroll"

const allSections = [
  { id: "home", component: HomeSection },
  { id: "resume", component: ResumeSection },
  { id: "work", component: WorkSection },
  { id: "contact", component: ContactSection },
]

const PageContent = () => {
  const sectionIds = useMemo(() => allSections.map((s) => s.id), [])
  const searchParams = useSearchParams()
  const router = useRouter()

  // Scroll-spy: broadcast active section id
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const pickBest = (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
      return visible[0]?.target?.id || null
    }

    let lastActiveId = null
    const observer = new IntersectionObserver(
      (entries) => {
        const bestId = pickBest(entries)
        if (!bestId || bestId === lastActiveId) return
        lastActiveId = bestId

        window.dispatchEvent(new CustomEvent("active-section-change", { detail: bestId }))
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  // Handle cross-page routing scrolling
  useEffect(() => {
    const scrollToId = searchParams.get("scrollTo")
    if (!scrollToId) return

    const raf = window.requestAnimationFrame(() => {
      scroller.scrollTo(scrollToId, { smooth: true, duration: 500, offset: -96 })
      // Clear the query string
      router.replace("/", { scroll: false })
    })

    return () => window.cancelAnimationFrame(raf)
  }, [searchParams, router])

  return (
    <main className="w-full">
      {allSections.map(({ id, component: SectionComponent }) => (
        <section
          key={id}
          id={id}
          className="isolate min-h-dvh flex flex-col scroll-mt-24 xl:scroll-mt-28"
        >
          <SectionComponent />
        </section>
      ))}
    </main>
  )
}

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageContent />
        </Suspense>
    )
}

export default Page