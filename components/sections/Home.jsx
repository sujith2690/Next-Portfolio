'use client'

import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Status from "@/components/Status"
import Typewriter from "@/components/Typewriter"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-72px)] items-center overflow-hidden py-2 xl:min-h-[calc(100dvh-96px)] xl:py-2  ">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,255,153,0.18),transparent_35%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.09),transparent_30%)]" />
      <div className="container relative mx-auto">
        <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid items-center gap-12 xl:grid-cols-[1.1fr_.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 text-center xl:order-1 xl:text-left"
          >
            <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-[0.2em] text-white/80 uppercase">
              Available for full-time and freelance
            </span>
            <h1 className="mt-4 text-3xl font-semibold leading-[1.12] sm:mt-5 sm:text-4xl lg:text-[2.8rem] xl:text-5xl">
              Engineering premium
              <span className="block text-accent">digital experiences</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 xl:mx-0 xl:text-lg">
              I’m Sujith Poonthottathil, a full-stack developer focused on high-performing web products with exceptional UI quality, clean architecture, and measurable business outcomes.
            </p>
            <div className="mt-4 text-xl font-medium text-white/90 sm:text-2xl">
              <Typewriter
                words={["Full-Stack Developer", "React / Next.js Specialist", "Product-Minded Engineer"]}
              />
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center xl:justify-start">
              <Button size='lg' className='flex items-center gap-2 uppercase tracking-[0.14em]' asChild>
                <a href="/assets/Sujith Full Stack ( MERN ) Developer Resume.pdf" download>
                  <span>Download CV</span>
                  <FiDownload />
                </a>
              </Button>
              <Social
                containerStyles='flex gap-3'
                iconStyles='flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-primary'
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="order-1 rounded-3xl p-6 backdrop-blur-xl xl:order-2"
          >
            <Photo />
          </motion.div>
        </div>
        <div className="mt-2 hidden md:block">
          <Status />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Home
