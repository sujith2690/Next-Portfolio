'use client'

import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Status from "@/components/Status"
import Typewriter from "@/components/Typewriter"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <>
      <section className="min-h-[calc(100dvh-72px)] xl:min-h-[calc(100dvh-96px)] overflow-hidden flex items-center justify-center">
        <div className="container mx-auto h-full flex flex-col justify-between gap-5">
          <div className="flex-1 min-h-0 flex flex-col xl:flex-row items-center justify-between xl:pt-6">
            {/* Text  */}
            <div suppressHydrationWarning data-aos="fade-right" data-aos-duration="1000" className="text-center xl:text-left order-2 xl:order-none flex flex-col gap-2">
              
              <h1 className="text-[30px] sm:text-[42px] xl:text-[60px] leading-[1.1] font-semibold">
                Hello I'm <br />
                <span className="text-accent">Sujith <span className="xl:text-[60px] md:text-[48px] text-[30px]">Poonthottathil</span></span>
              </h1>
              <Typewriter
                className="text-3xl"
                words={["Software Developer", "Frontend Developer", "Full-stack Developer"]}
              />
              <p className="max-w-[500px] mb-5 xl:mb-8 text-white/80">
                Excel at crafting elegant digital experience and proficient in various programming languages and technologies.
              </p>
              {/* Button for social */}
              <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6">
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2 cursor-pointer'
                  asChild
                >
                  <a href="/assets/Sujith Full Stack ( MERN ) Developer Resume.pdf" download>
                    <span>Download CV</span>
                    <FiDownload />
                  </a>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' />
                </div>
              </div>
            </div>
            {/* Photo */}
            <div suppressHydrationWarning data-aos="fade-left" data-aos-duration="1000" className="order-1 xl:order-none mb-4 xl:mb-0">
              <Photo />
            </div>
          </div>
          <div className="hidden md:block">
            <Status />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
